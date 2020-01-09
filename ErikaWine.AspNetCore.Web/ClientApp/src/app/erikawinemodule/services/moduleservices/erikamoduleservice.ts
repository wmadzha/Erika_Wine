import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
@Injectable()
export class ErikaModuleService{
    constructor(private http: HttpClient,)
    {

    }
    GetEndpointAddress()
    {
        return 'https://localhost:44374';
    }
    GetHttpOptions()
    {
        return {headers: new HttpHeaders({'Content-Type':  'application/json'})};
    }

    public Post(url:string,dto:any)
    {
        return this.http.post<any>(this.GetEndpointAddress() + url, JSON.stringify(dto), this.GetHttpOptions()).pipe(
            map(this.extractData));
    }
    public Get(urlwithparameter:string)
    {
        return this.http.get(this.GetEndpointAddress() + urlwithparameter ).pipe(
            map(this.extractData));
    }

    public handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
    public extractData(res: Response) {
        let body = res;
        return body || {};
    }
}
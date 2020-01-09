import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { ErikaModuleService } from '../moduleservices/erikamoduleservice';
@Injectable()
export class ProjectHttpService{
    constructor(    private http: HttpClient,
        private svc: ErikaModuleService)
        {

        }
        AddAddress:string = "";
        UpdateAddress:string = "";
        DeleteAddress:string = "";
        GetAddress:string= "";
        Add(dto:any): Observable<any>{
            return this.svc.Post(this.AddAddress,dto);
        } 
        Update(dto:any): Observable<any>{
            return this.svc.Post(this.UpdateAddress,dto);
        } 
        Delete(dto:any): Observable<any>{
            return this.svc.Post(this.DeleteAddress,dto);
        } 
        Get(parameterwithstring:string): Observable<any>{
            return this.svc.Get(parameterwithstring);
        } 
}
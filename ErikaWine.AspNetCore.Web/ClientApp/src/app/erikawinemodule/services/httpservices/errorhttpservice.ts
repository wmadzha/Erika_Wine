import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { ErikaModuleService } from '../moduleservices/erikamoduleservice';
@Injectable()
export class ErrorHttpService{
    constructor(    private http: HttpClient,
        private svc: ErikaModuleService)
        {
        }
        AddAddress:string = "/api/error/2a9o9UDT0Lt834Lw1j2HzxYPqmEgEkbcScGRqGnyAPzM";
        UpdateAddress:string = "/api/error/XWowjRH0EK58BuyIz1LNvttToIjRv7lPfaCHdS";
        DeleteAddress:string = "/api/error/34Lw1j2HzxYPqmEgEkXWowjRH0EK58BuyIz1";
        GetAddress:string= "/api/error/klg4kK8O2JfyXLWDlcEpC9UtqJjq87naHEWXKxtR6gOd9";
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
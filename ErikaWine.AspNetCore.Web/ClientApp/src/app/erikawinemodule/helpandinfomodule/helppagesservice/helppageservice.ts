import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HelpPages } from '../dto/helpandinfodto';
@Injectable()
export class HelpPageService{
        Get(helperPageDetails:number){
            return HelpPages.find(x=>x.HelpPagesId === helperPageDetails);
        } 
}
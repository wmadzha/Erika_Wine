import { Component, OnInit ,Input , ViewChild , ElementRef } from '@angular/core';

import { NbDialogRef } from '@nebular/theme';
import {GetErrorHttpDTOWithSelect} from '../../dto/erikawineerrordto';
import {GetModuleHttpDTO}from '../../dto/erikawinemodulesdto';
import {GetProjectHttpDTO} from '../../dto/erikawineprojectdto';
@Component({
  selector: 'seesharp-result',
  templateUrl: './seesharpresult.html',
})
export class SeeSharpResultComponent implements OnInit {
    @Input() GetErrorHttpDTOWithSelect:GetErrorHttpDTOWithSelect[]=[];
    @Input() GetProjectHttpDTO:GetProjectHttpDTO;
    @Input() GetModuleHttpDTO:GetModuleHttpDTO;
    ConcreteClass:string = "";
    ListClasses:string = "";
    RequiredUsings:string = "";
    constructor(
    private _elementRef : ElementRef,
      protected ref: NbDialogRef<SeeSharpResultComponent>,
      )
    {
    }
    ngOnInit(){
     this.GenerateSeeSharp();
     this.GenerateList();
     this.GenerateUsings();
     
    }
    cancel() {
      this.ref.close();
    } 
   
    GenerateUsings()
    {
        this.RequiredUsings = `
        using System;
        using System.Collections.Generic;
        `
    }
    GenerateSeeSharp()
    {
        var className = `
        public class SystemError
        {
            public Guid ErrorId { get; set; }
            public string ErrorCode { get; set; }
            public string ErroMessage { get; set; }
            public string ErrorDescription { get; set; }
            public string ErrorModulePrefix { get; set; }
        }
        `
       this.ConcreteClass = className;
    }
    GenerateList()
    {
        var ListDef:string = `
        public static class SystemErrors
        {
            public static readonly IList<SystemError> SystemErrorLists = new List<SystemError>()
            {`;
        this.GetErrorHttpDTOWithSelect.forEach(element => {
            if(element.selected === true)
            {
                console.log('Hit')
                ListDef = ListDef +
        `
                new SystemError()
                {
                    ErrorId = new Guid("`+element.errorId+`"),
                    ErrorCode = "`+element.errorCode+`",
                    ErroMessage = "`+element.erroMessage+`",
                    ErrorDescription = "`+element.errorDescription+`",
                    ErrorModulePrefix = "`+ this.GetModuleHttpDTO.moduleErrorPrefix+`",    
                }, `;
            }
        });
        ListDef = ListDef +`
            };
        }
        `;
        this.ListClasses = ListDef;
    }

    copyConcrete()
    {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = this.ConcreteClass;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox); 
    }

    CopyLists()
    {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = this.ListClasses;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox); 
    }
    CopyUsings()
    {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = this.RequiredUsings;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox); 
    }
}




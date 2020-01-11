import { Component, OnInit ,Input , ViewChild , ElementRef } from '@angular/core';

import { NbDialogRef } from '@nebular/theme';
import {GetErrorHttpDTOWithSelect} from '../../dto/erikawineerrordto';
import {GetModuleHttpDTO}from '../../dto/erikawinemodulesdto';
import {GetProjectHttpDTO} from '../../dto/erikawineprojectdto';
@Component({
  selector: 'typescript-result',
  templateUrl: './typescriptresult.html',
})
export class TypeScriptResultComponent implements OnInit {
    @Input() GetErrorHttpDTOWithSelect:GetErrorHttpDTOWithSelect[]=[];
    @Input() GetProjectHttpDTO:GetProjectHttpDTO;
    @Input() GetModuleHttpDTO:GetModuleHttpDTO;
    ConcreteClass:string = "";
    ListClasses:string = "";
    constructor(
    private _elementRef : ElementRef,
      protected ref: NbDialogRef<TypeScriptResultComponent>,
      )
    {
    }
    ngOnInit(){
     this.GenerateTypeScript();
     this.GenerateList();
     
    }
    cancel() {
      this.ref.close();
    } 
   
  
    GenerateTypeScript()
    {
        var className = `
        export class systemError { 
            public errorId : string ; 
            public errorCode : string ;
            public erroMessage : string ;
            public errorDescription : string ;
            public errorModulePrefix : string ;
        }
        `
       this.ConcreteClass = className;
    }
    GenerateList()
    {
        var ListDef:string = `
        export systemErrorList : systemError [] = [`;
        this.GetErrorHttpDTOWithSelect.forEach(element => {
            if(element.selected === true)
            {
                console.log('Hit')
                ListDef = ListDef +
        `
            {
                errorId : '`+element.errorId+`',
                errorCode : '`+element.errorCode+`',
                erroMessage : '`+element.erroMessage+`',
                errorDescription : '`+element.errorDescription+`',
                errorModulePrefix : '`+ this.GetModuleHttpDTO.moduleErrorPrefix+`',     
            }, `;
            }
        });
        ListDef = ListDef +`
        ]
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
}




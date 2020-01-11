import { Component, OnInit ,Input } from '@angular/core';
import {ErrorHttpService} from '../../services/httpservices/errorhttpservice';
import { NbDialogService , NbDialogRef } from '@nebular/theme';
import {GetErrorHttpDTO, GetErrorHttpDTOWithSelect} from '../../dto/erikawineerrordto';
import {GetModuleHttpDTO}from '../../dto/erikawinemodulesdto';
import {GetProjectHttpDTO} from '../../dto/erikawineprojectdto';
import {TypeScriptResultComponent} from '../typescriptresult/typescriptresult';
import {SeeSharpResultComponent} from '../seesharpresult/seesharpresult';
@Component({
  selector: 'error-class-generator',
  templateUrl: './errorclassgenerator.html',
})
export class ErrorClassGenerator implements OnInit {
    @Input() GetProjectHttpDTO:GetProjectHttpDTO;
    @Input() GetModuleHttpDTO:GetModuleHttpDTO;
   @Input()  GetErrorHttpDTO:GetErrorHttpDTO[]=[];
   GetErrorHttpDTOWithSelect:GetErrorHttpDTOWithSelect[]=[];
    constructor(
      private svc:ErrorHttpService,
      private NbDialogService:NbDialogService,
      protected ref: NbDialogRef<ErrorClassGenerator>,
      )
    {
    }
    ngOnInit(){
      this.Get();
     
    }
    cancel() {
      this.ref.close();
    } 
   
    Get()
    {
        this.GetErrorHttpDTO.forEach(element => {
            this.GetErrorHttpDTOWithSelect.push(new GetErrorHttpDTOWithSelect(element))
        });
    }
    SelectAll()
    {
        this.GetErrorHttpDTOWithSelect.forEach(element => {
            element.selected = true;
        });
    }
    RemoveAll()
    {
        this.GetErrorHttpDTOWithSelect.forEach(element => {
            element.selected = false;
        });
    }
    TypeScript()
    {
        console.log(this.GetErrorHttpDTOWithSelect);
        this.NbDialogService.open(TypeScriptResultComponent, {
            context: {
                GetErrorHttpDTOWithSelect:this.GetErrorHttpDTOWithSelect,
                GetProjectHttpDTO:this.GetProjectHttpDTO,
                GetModuleHttpDTO:this.GetModuleHttpDTO,
            },
            closeOnBackdropClick: false,
          }).onClose.subscribe(action => {
            if (action === "Refresh") {
              this.Get();
            }
          });
    }
    SeeSharp()
    {
        this.NbDialogService.open(SeeSharpResultComponent, {
            context: {
                GetErrorHttpDTOWithSelect:this.GetErrorHttpDTOWithSelect,
                GetProjectHttpDTO:this.GetProjectHttpDTO,
                GetModuleHttpDTO:this.GetModuleHttpDTO,
            },
            closeOnBackdropClick: false,
          }).onClose.subscribe(action => {
            if (action === "Refresh") {
              this.Get();
            }
          });
    }



    





}

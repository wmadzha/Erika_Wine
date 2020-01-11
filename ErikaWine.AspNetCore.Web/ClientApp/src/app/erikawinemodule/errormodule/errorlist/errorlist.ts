import { Component, OnInit ,Input } from '@angular/core';
import {ErrorHttpService} from '../../services/httpservices/errorhttpservice';
import { NbDialogService , NbDialogRef } from '@nebular/theme';
import {GetModuleHttpDTO}from '../../dto/erikawinemodulesdto';
import {GetErrorHttpDTO, DeleteErrorHttpDTO} from '../../dto/erikawineerrordto';
import {GetProjectHttpDTO} from '../../dto/erikawineprojectdto';
import { AddErrorComponent }from '../adderror/adderror';
import {EditErrorComponent} from '../editerror/editerror';
import {ErrorClassGenerator} from '../errorclassgenerator/errorclassgenerator';
@Component({
  selector: 'error-list',
  templateUrl: './errorlist.html',
})
export class ErrorListComponent implements OnInit {
    @Input() GetProjectHttpDTO:GetProjectHttpDTO;
    @Input() GetModuleHttpDTO:GetModuleHttpDTO;
    DeleteErrorHttpDTO:DeleteErrorHttpDTO;
    constructor(
      private svc:ErrorHttpService,
      private NbDialogService:NbDialogService,
      protected ref: NbDialogRef<AddErrorComponent>,
      )
    {
    }
    ngOnInit(){
      this.Get();
     
    }
    cancel() {
      this.ref.close();
    } 
    GetErrorHttpDTO:GetErrorHttpDTO[]=[];
    Get()
    {
      this.svc.Get('/api/error/klg4kK8O2JfyXLWDlcEpC9UtqJjq87naHEWXKxtR6gOd9?moduleid='+this.GetModuleHttpDTO.modulesId).subscribe(data=>{
        this.GetErrorHttpDTO = data;
      })
    }
    Add()
    {
      this.NbDialogService.open(AddErrorComponent, {
        context: {
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
    Details(dto:GetErrorHttpDTO)
    {
    //   this.NbDialogService.open(ProjectDetailsComponent, {
    //     context: {
    //       GetProjectHttpDTO:dto,
    //     },
    //     closeOnBackdropClick: false,
    //   }).onClose.subscribe(action => {
    //     if (action === "Refresh") {
    //       this.Get();
    //     }
    //   });
      
    }
    Edit(dto:GetErrorHttpDTO)
    {
      this.NbDialogService.open(EditErrorComponent, {
        context: {
          GetProjectHttpDTO:this.GetProjectHttpDTO,
          GetModuleHttpDTO:this.GetModuleHttpDTO,
          GetErrorHttpDTO:dto
        },
        closeOnBackdropClick: false,
      }).onClose.subscribe(action => {
        if (action === "Refresh") {
          this.Get();
        }
      });
    }
    Delete(dto:GetErrorHttpDTO)
    {
       this.DeleteErrorHttpDTO = new DeleteErrorHttpDTO(dto.errorId);
       this.svc.Delete(this.DeleteErrorHttpDTO).subscribe(
         data=>{
          this.Get();
         }
       )
    }

    Generate()
    {
      this.NbDialogService.open(ErrorClassGenerator, {
        context: {
          GetProjectHttpDTO:this.GetProjectHttpDTO,
          GetModuleHttpDTO:this.GetModuleHttpDTO,
          GetErrorHttpDTO:this.GetErrorHttpDTO,
        },
        closeOnBackdropClick: false,
      }).onClose.subscribe(action => {
        if (action === "Refresh") {
          this.Get();
        }
      });
    }
}

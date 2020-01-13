import { Component, OnInit } from '@angular/core';
import {ProjectHttpService} from '../../services/httpservices/projectshttpservice';
import {GetProjectHttpDTO,DeleteProjectHttpDTO} from '../../dto/erikawineprojectdto';
import { NbDialogService } from '@nebular/theme';
import { AddProjectComponent } from '../add/addprojectcomponent';
import { EditProjectComponent} from '../edit/editprojectcomponent';
import {ProjectDetailsComponent} from '../details/projectdetailscomponent';
import {HelpDisplayComponnt} from '../../helpandinfomodule/helpdisplaycomponent/helpcomponent';
@Component({
  selector: 'project-list',
  templateUrl: './projectlistcomponent.html',
})
export class ProjectListComponent implements OnInit {
  DeleteProjectHttpDTO:DeleteProjectHttpDTO;
    constructor(
      private projecthttpservice:ProjectHttpService,
      private NbDialogService:NbDialogService,
      )
    {
    }
    ngOnInit(){
      this.Get();
    }
    GetProjectHttpDTO:GetProjectHttpDTO[]=[];
    Get()
    {
      this.projecthttpservice.Get("").subscribe(data=>{
        this.GetProjectHttpDTO = data;
      })
    }
    Add()
    {
      this.NbDialogService.open(AddProjectComponent, {
        context: {
        },
        closeOnBackdropClick: false,
      }).onClose.subscribe(action => {
        if (action === "Refresh") {
          this.Get();
        }
      });
    }
    Details(dto:GetProjectHttpDTO)
    {
      this.NbDialogService.open(ProjectDetailsComponent, {
        context: {
          GetProjectHttpDTO:dto,
        },
        closeOnBackdropClick: false,
      }).onClose.subscribe(action => {
        if (action === "Refresh") {
          this.Get();
        }
      });
      
    }
    Edit(dto:GetProjectHttpDTO)
    {
      this.NbDialogService.open(EditProjectComponent, {
        context: {
          GetProjectHttpDTO:dto
        },
        closeOnBackdropClick: false,
      }).onClose.subscribe(action => {
        if (action === "Refresh") {
          this.Get();
        }
      });
    }
    Delete(dto:GetProjectHttpDTO)
    {
      this.DeleteProjectHttpDTO = new DeleteProjectHttpDTO(dto.projectId);
          this.projecthttpservice.Delete(this.DeleteProjectHttpDTO).subscribe(
            data=>{
              this.Get();
            }
          );
    }
    OpenHelp(helpersid:number)
    {
      this.NbDialogService.open(HelpDisplayComponnt, {
        context: {
          HelpDetails:helpersid
        },
        closeOnBackdropClick: false,
      }).onClose.subscribe(action => {
        if (action === "Refresh") {
          this.Get();
        }
      });
    }
    



}

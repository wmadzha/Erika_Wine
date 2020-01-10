import { Component, OnInit } from '@angular/core';
import {ProjectHttpService} from '../../services/httpservices/projectshttpservice';
import {GetProjectHttpDTO} from '../../dto/erikawineprojectdto';
import { NbDialogService } from '@nebular/theme';
import { AddProjectComponent } from '../add/addprojectcomponent';
import { EditProjectComponent} from '../edit/editprojectcomponent';
import {ProjectDetailsComponent} from '../details/projectdetailscomponent';
@Component({
  selector: 'project-list',
  templateUrl: './projectlistcomponent.html',
})
export class ProjectListComponent implements OnInit {
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
    Delete()
    {

    }
}

import { Component, OnInit } from '@angular/core';
import {ProjectHttpService} from '../../services/httpservices/projectshttpservice';
import {GetProjectHttpDTO} from '../../dto/erikawineprojectdto';
@Component({
  selector: 'project-list',
  templateUrl: './projectlistcomponent.html',
})
export class ProjectListComponent implements OnInit {
    constructor(private projecthttpservice:ProjectHttpService)
    {

    }
    ngOnInit(){
      this.SetupProjectList();
    }
    GetProjectHttpDTO:GetProjectHttpDTO[]=[];
    SetupProjectList()
    {
      this.projecthttpservice.Get("").subscribe(data=>{
        this.GetProjectHttpDTO = data;
      })
    }
}

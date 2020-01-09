import { Component, Input  } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import {AddProjectHttpDTO} from '../../dto/erikawineprojectdto';
import {ProjectHttpService} from '../../services/httpservices/projectshttpservice';
@Component({
   selector: 'details-project',
    templateUrl: './projectdetailscomponent.html',
    styles: [`
      nb-card {
        transform: translate3d(0, 0, 0);
      }
    `],
  })
  export class ProjectDetailsComponent  {
    public AddProjectHttpDTO:AddProjectHttpDTO;
    constructor(
        protected ref: NbDialogRef<ProjectDetailsComponent>,
        private svc:ProjectHttpService,
    )
    {     
     this.AddProjectHttpDTO = new AddProjectHttpDTO();
    }  
    cancel() {
      this.ref.close();
    } 
    submit(name) {
      this.ref.close(name);
    }
    Loader:boolean = false;
    Add()
    {
      this.Loader = true;
      this.svc.Add(this.AddProjectHttpDTO).subscribe(data=>{
        this.Loader = false;
        this.submit('Refresh');
      })  
    }
}


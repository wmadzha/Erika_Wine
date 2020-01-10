import { Component, Input  } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import {ProjectHttpService} from '../../services/httpservices/projectshttpservice';
import {GetProjectHttpDTO} from '../../dto/erikawineprojectdto';
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
    @Input() GetProjectHttpDTO:GetProjectHttpDTO;
    constructor(
        protected ref: NbDialogRef<ProjectDetailsComponent>,
        private svc:ProjectHttpService,
    )
    {     
    }  
    cancel() {
      this.ref.close();
    } 
    submit(name) {
      this.ref.close(name);
    }
    Loader:boolean = false;
}


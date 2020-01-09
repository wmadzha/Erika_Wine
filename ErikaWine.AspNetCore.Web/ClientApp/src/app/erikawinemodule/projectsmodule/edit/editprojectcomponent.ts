import { Component, Input, OnInit  } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import {GetProjectHttpDTO,UpdateProjectHttpDTO} from '../../dto/erikawineprojectdto';
import {ProjectHttpService} from '../../services/httpservices/projectshttpservice';
@Component({
   selector: 'edit-project',
    templateUrl: './editprojectcomponent.html',
    styles: [`
      nb-card {
        transform: translate3d(0, 0, 0);
      }
    `],
  })
  export class EditProjectComponent implements OnInit {

    @Input() GetProjectHttpDTO:GetProjectHttpDTO = null;
    public UpdateProjectHttpDTO:UpdateProjectHttpDTO = null;
    constructor(
        protected ref: NbDialogRef<EditProjectComponent>,
        private svc:ProjectHttpService,
    )
    {     
    }  
    ngOnInit()
    {
        this.UpdateProjectHttpDTO = new UpdateProjectHttpDTO(this.GetProjectHttpDTO);

    }
    cancel() {
      this.ref.close();
    } 
    submit(name) {
      this.ref.close(name);
    }
    Loader:boolean = false;
    Edit()
    {
      this.Loader = true;
      this.svc.Update(this.UpdateProjectHttpDTO).subscribe(data=>{
        this.Loader = false;
        this.submit('Refresh');
      })  
    }
}


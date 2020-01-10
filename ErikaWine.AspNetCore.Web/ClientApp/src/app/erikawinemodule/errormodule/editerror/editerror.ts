import { Component, Input ,OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { GetModuleHttpDTO} from '../../dto/erikawinemodulesdto';
import { GetProjectHttpDTO } from '../../dto/erikawineprojectdto';
import { ErrorHttpService } from '../../services/httpservices/errorhttpservice';
import { UpdateErrorHttpDTO ,GetErrorHttpDTO } from '../../dto/erikawineerrordto';
@Component({
   selector: 'edit-error',
    templateUrl: './editerror.html',
    styles: [`
      nb-card {
        transform: translate3d(0, 0, 0);
      }
    `],
  })
  export class EditErrorComponent  implements OnInit  {
    @Input() GetProjectHttpDTO:GetProjectHttpDTO;
    @Input() GetModuleHttpDTO:GetModuleHttpDTO;
    @Input() GetErrorHttpDTO:GetErrorHttpDTO;
    public UpdateErrorHttpDTO:UpdateErrorHttpDTO;
    constructor(
        protected ref: NbDialogRef<EditErrorComponent>,
        private svc:ErrorHttpService,
    )
    {     
    } 
    ngOnInit()
    {
      this.UpdateErrorHttpDTO = new UpdateErrorHttpDTO(this.GetErrorHttpDTO);
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
      this.svc.Update(this.UpdateErrorHttpDTO).subscribe(data=>{
        this.Loader = false;
        this.submit('Refresh');
      })  
    }
}


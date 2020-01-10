import { Component, Input ,OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { UpdateModuleHttpDTO ,GetModuleHttpDTO} from '../../dto/erikawinemodulesdto';
import { GetProjectHttpDTO } from '../../dto/erikawineprojectdto';
import { ModuleHttpService } from '../../services/httpservices/modulehttpservice';
@Component({
   selector: 'edit-module',
    templateUrl: './editmodule.html',
    styles: [`
      nb-card {
        transform: translate3d(0, 0, 0);
      }
    `],
  })
  export class EditModuleComponent  implements OnInit  {
    @Input() GetProjectHttpDTO:GetProjectHttpDTO;
    @Input() GetModuleHttpDTO:GetModuleHttpDTO;
    public UpdateModuleHttpDTO:UpdateModuleHttpDTO;
    constructor(
        protected ref: NbDialogRef<EditModuleComponent>,
        private svc:ModuleHttpService,
    )
    {     
    
    } 
    ngOnInit()
    {
      this.UpdateModuleHttpDTO = new UpdateModuleHttpDTO(this.GetModuleHttpDTO);
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
      this.svc.Update(this.UpdateModuleHttpDTO).subscribe(data=>{
        this.Loader = false;
        this.submit('Refresh');
      })  
    }
}


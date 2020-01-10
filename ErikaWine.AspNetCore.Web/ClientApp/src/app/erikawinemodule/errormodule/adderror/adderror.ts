import { Component, Input ,OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { AddErrorHttpDTO } from '../../dto/erikawineerrordto';
import { GetProjectHttpDTO } from '../../dto/erikawineprojectdto';
import {GetModuleHttpDTO} from '../../dto/erikawinemodulesdto';
import { ErrorHttpService } from '../../services/httpservices/errorhttpservice';
@Component({
   selector: 'add-error',
    templateUrl: './adderror.html',
    styles: [`
      nb-card {
        transform: translate3d(0, 0, 0);
      }
    `],
  })
  export class AddErrorComponent  implements OnInit  {
    @Input() GetProjectHttpDTO:GetProjectHttpDTO;
    @Input() GetModuleHttpDTO:GetModuleHttpDTO;
    public AddErrorHttpDTO:AddErrorHttpDTO;
    constructor(
        protected ref: NbDialogRef<AddErrorComponent>,
        private svc:ErrorHttpService,
    )
    {     
    } 
    ngOnInit()
    {
      this.AddErrorHttpDTO = new AddErrorHttpDTO(this.GetModuleHttpDTO.modulesId);
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
      this.svc.Add(this.AddErrorHttpDTO).subscribe(data=>{
        this.Loader = false;
        this.submit('Refresh');
      })  
    }
}


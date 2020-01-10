import { Component, Input ,OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { AddModuleHttpDTO } from '../../dto/erikawinemodulesdto';
import { GetProjectHttpDTO } from '../../dto/erikawineprojectdto';
import { ModuleHttpService } from '../../services/httpservices/modulehttpservice';
@Component({
   selector: 'add-module',
    templateUrl: './addmodule.html',
    styles: [`
      nb-card {
        transform: translate3d(0, 0, 0);
      }
    `],
  })
  export class AddModuleComponent  implements OnInit  {
    @Input() GetProjectHttpDTO:GetProjectHttpDTO;
    public AddModuleHttpDTO:AddModuleHttpDTO;
    constructor(
        protected ref: NbDialogRef<AddModuleComponent>,
        private svc:ModuleHttpService,
    )
    {     
    
    } 
    ngOnInit()
    {
      this.AddModuleHttpDTO = new AddModuleHttpDTO(this.GetProjectHttpDTO.projectId);
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
      this.svc.Add(this.AddModuleHttpDTO).subscribe(data=>{
        this.Loader = false;
        this.submit('Refresh');
      })  
    }
}


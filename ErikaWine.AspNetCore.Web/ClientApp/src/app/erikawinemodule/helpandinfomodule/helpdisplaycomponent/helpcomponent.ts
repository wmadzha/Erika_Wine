import { Component, Input ,OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { PagesHelpDTO } from '../dto/helpandinfodto';
import {HelpPageService } from '../helppagesservice/helppageservice';
@Component({
   selector: 'help-component',
    templateUrl: './helpcomponent.html',
    styles: [`
      nb-card {
        transform: translate3d(0, 0, 0);
      }
    `],
  })
  export class HelpDisplayComponnt  implements OnInit  {
    @Input() HelpDetails:number;
    public PagesHelpDTO:PagesHelpDTO;
    constructor(
        protected ref: NbDialogRef<HelpDisplayComponnt>,
        private svc:HelpPageService,
    )
    {     
    
    } 
    ngOnInit()
    {
      this.PagesHelpDTO = this.svc.Get(this.HelpDetails);
    } 
    cancel() {
      this.ref.close();
    } 
    submit(name) {
      this.ref.close(name);
    }
    Loader:boolean = false;
   
}


import { Component, Input ,OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { OkConfirmModalData } from '../confirmmodals/data/okconfirmmodaldata';
@Component({
   selector: 'ok-confirm',
    templateUrl: './confirmmodals.html',
    styles: [`
      nb-card {
        transform: translate3d(0, 0, 0);
      }
    `],
  })
  export class ConfirmModalsComponent  implements OnInit  {
    @Input() OkConfirmModalData:OkConfirmModalData;
    constructor(
        protected ref: NbDialogRef<ConfirmModalsComponent>,
    )
    {     
    
    } 
    ngOnInit()
    {
    
    } 
    cancel() {
      this.ref.close('cancel');
    } 
    submit() {
      this.ref.close('confirm');
    }
    Loader:boolean = false;
   
}


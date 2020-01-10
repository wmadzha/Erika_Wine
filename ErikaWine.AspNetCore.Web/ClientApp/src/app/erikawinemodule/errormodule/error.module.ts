import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';

import {EditErrorComponent} from '../errormodule/editerror/editerror';
import {AddErrorComponent} from '../errormodule/adderror/adderror';
import {ErikaWineUIModules} from '../shareduimodules/erikawinesharedmodules';
@NgModule({
  imports: [
    ThemeModule,
    NbMenuModule,
    ...ErikaWineUIModules,
  ],
  declarations: [
    EditErrorComponent,
    AddErrorComponent,
  ],
  entryComponents:[
    EditErrorComponent,
    AddErrorComponent,
  ]
})
export class ErrorModule {
}

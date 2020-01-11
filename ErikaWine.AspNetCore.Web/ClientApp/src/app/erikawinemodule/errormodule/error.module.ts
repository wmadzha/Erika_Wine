import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';

import {EditErrorComponent} from '../errormodule/editerror/editerror';
import {AddErrorComponent} from '../errormodule/adderror/adderror';
import {ErikaWineUIModules} from '../shareduimodules/erikawinesharedmodules';
import {ErrorClassGenerator} from '../errormodule/errorclassgenerator/errorclassgenerator';
import {TypeScriptResultComponent} from '../errormodule/typescriptresult/typescriptresult';
import {SeeSharpResultComponent} from '../errormodule/seesharpresult/seesharpresult';
@NgModule({
  imports: [
    ThemeModule,
    NbMenuModule,
    ...ErikaWineUIModules,
  ],
  declarations: [
    EditErrorComponent,
    AddErrorComponent,
    ErrorClassGenerator,
    TypeScriptResultComponent,
    SeeSharpResultComponent,
  ],
  entryComponents:[
    EditErrorComponent,
    AddErrorComponent,
    ErrorClassGenerator,
    TypeScriptResultComponent,
    SeeSharpResultComponent,
  ]
})
export class ErrorModule {
}

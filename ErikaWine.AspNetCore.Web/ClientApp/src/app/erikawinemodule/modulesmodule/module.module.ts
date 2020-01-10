import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { AddModuleComponent } from '../modulesmodule/addmodule/addmodule';
import {EditModuleComponent} from '../modulesmodule/editmodule/editmodule';
import {ErrorListComponent} from '../errormodule/errorlist/errorlist';
import {ErikaWineUIModules} from '../shareduimodules/erikawinesharedmodules';
@NgModule({
  imports: [
    ThemeModule,
    NbMenuModule,
    ErikaWineUIModules,
  ],
  declarations: [
    EditModuleComponent,
    AddModuleComponent,
    ErrorListComponent,
  ],
  entryComponents:[
    EditModuleComponent,
    AddModuleComponent,
    ErrorListComponent,
  ]
})
export class ModulesModule {
}

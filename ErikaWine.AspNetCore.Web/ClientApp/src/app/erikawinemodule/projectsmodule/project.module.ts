import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
// Nebular Modules Here 
import {ErikaWineUIModules} from '../shareduimodules/erikawinesharedmodules';
import {ProjectListComponent} from './projectlist/projectlistcomponent';
@NgModule({
  imports: [
    ...ErikaWineUIModules,
    ThemeModule,
    NbMenuModule,

  ],
  declarations: [
    ProjectListComponent,
  ],
})
export class ProjectModule {
}

import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
// Nebular Modules Here 
import {ErikaWineUIModules} from '../shareduimodules/erikawinesharedmodules';
import {ProjectListComponent} from './projectlist/projectlistcomponent';
import {AddProjectComponent} from './add/addprojectcomponent';
import {EditProjectComponent} from './edit/editprojectcomponent';
@NgModule({
  imports: [
    ...ErikaWineUIModules,
    ThemeModule,
    NbMenuModule,
  ],
  declarations: [
    ProjectListComponent,
    AddProjectComponent,
    EditProjectComponent,
  ],
  entryComponents:[
    ProjectListComponent,
    AddProjectComponent,
    EditProjectComponent,
  ]
})
export class ProjectModule {
}

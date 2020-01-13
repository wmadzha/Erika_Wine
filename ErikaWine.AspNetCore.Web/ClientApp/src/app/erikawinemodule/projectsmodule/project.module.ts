import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
// Nebular Modules Here 
import {ErikaWineUIModules} from '../shareduimodules/erikawinesharedmodules';
import {ProjectListComponent} from './projectlist/projectlistcomponent';
import {AddProjectComponent} from './add/addprojectcomponent';
import {EditProjectComponent} from './edit/editprojectcomponent';
import {ProjectDetailsComponent} from './details/projectdetailscomponent';
import {ModuleListComponent} from '../modulesmodule/moduleslist/modulelist';
import {HelpDisplayComponnt} from '../helpandinfomodule/helpdisplaycomponent/helpcomponent';
import {HelpPageService} from '../helpandinfomodule/helppagesservice/helppageservice';
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
    ProjectDetailsComponent,
    ModuleListComponent,
    HelpDisplayComponnt,
  ],
  entryComponents:[
    ProjectListComponent,
    AddProjectComponent,
    EditProjectComponent,
    ProjectDetailsComponent,
    ModuleListComponent,
    HelpDisplayComponnt,
  ],
  providers:[
    HelpPageService,
  ]
})
export class ProjectModule {
}

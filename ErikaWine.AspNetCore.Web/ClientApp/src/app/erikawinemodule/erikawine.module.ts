import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';

// Region Erika's Modules
import { ErikaWineRouting } from '../erikawinemodule/erikawine.routing';
import { ProjectModule } from './projectsmodule/project.module';
import { ModulesModule } from './modulesmodule/module.module';
import { ErrorModule } from './errormodule/error.module';

// Region Erika's Component
import { ErikaWineComponent} from './erikawine.component';

// Region Services

import {ErikaModuleService} from './services/moduleservices/erikamoduleservice';
import {ErrorHttpService} from './services/httpservices/errorhttpservice';
import {ModuleHttpService} from './services/httpservices/modulehttpservice';
import {ProjectHttpService} from './services/httpservices/projectshttpservice';
@NgModule({
  imports: [
    ErikaWineRouting,
    ThemeModule,
    NbMenuModule,
    ProjectModule,
    ModulesModule,
    ErrorModule,

  ],
  declarations: [
    ErikaWineComponent,
  ],
  providers:[
    ErikaModuleService,
    ErrorHttpService,
    ModuleHttpService,
    ProjectHttpService,
  ]
})
export class ErikaWineModule {
}

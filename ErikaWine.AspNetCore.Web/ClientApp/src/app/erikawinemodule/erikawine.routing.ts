import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ErikaWineComponent } from './erikawine.component';
import { ProjectListComponent } from './projectsmodule/projectlist/projectlistcomponent';

const routes: Routes = [{
  path: '',
  component: ErikaWineComponent,
  children: [
    {
      path: 'projects',
      component: ProjectListComponent,
    },
    {
      path: '',
      redirectTo: 'projects',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErikaWineRouting {
}

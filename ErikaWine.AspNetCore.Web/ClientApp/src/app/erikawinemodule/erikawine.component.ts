import { Component } from '@angular/core';
import { ErikaWineModuleMenu } from './erikawine.menu';

@Component({
  selector: 'erika-winepages',
  styleUrls: ['erikawine.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class ErikaWineComponent {

  menu = ErikaWineModuleMenu;
}

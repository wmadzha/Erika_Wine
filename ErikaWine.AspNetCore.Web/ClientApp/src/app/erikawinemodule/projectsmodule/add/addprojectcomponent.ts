import { Component  } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import {AddShopRoleDefinitionDTO} from '../../dto/shopmanagerdto';
import {ShopHttpService} from '../../../httpservices/shopservices/shophttpservice';
@Component({
   selector: 'add-shop-staff-role-definition',
    templateUrl: './addshopstaffroledefinition.html',
    styles: [`
      nb-card {
        transform: translate3d(0, 0, 0);
      }
    `],
  })
  export class AddShopStaffRoleDefinitionComponent  {
    constructor(
        protected ref: NbDialogRef<AddShopStaffRoleDefinitionComponent>,
        private ShopHttpService:ShopHttpService,
    )
    {     
     this.AddShopRoleDefinitionDTO = new AddShopRoleDefinitionDTO();
    }
    AddShopRoleDefinitionDTO:AddShopRoleDefinitionDTO;
    cancel() {
      this.ref.close();
    }
  
    submit(name) {
      this.ref.close(name);
    }
    AddShotStaffRoleDefinitionLoading:boolean = false;
    AddNewShopStaffRoleDefinition()
    {
      this.AddShotStaffRoleDefinitionLoading = true;
      this.ShopHttpService.AddShopStaffRoleDefinition(this.AddShopRoleDefinitionDTO).subscribe(data=>{
        this.AddShotStaffRoleDefinitionLoading = false;
        this.submit('Refresh');
      })
     
    }
}


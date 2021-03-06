import { Component, OnInit, Input } from '@angular/core';
import { ModuleHttpService } from '../../services/httpservices/modulehttpservice';
import { NbDialogService } from '@nebular/theme';
import { GetModuleHttpDTO, DeleteModuleHttpDTO } from '../../dto/erikawinemodulesdto';
import { GetProjectHttpDTO } from '../../dto/erikawineprojectdto';
import { AddModuleComponent } from '../addmodule/addmodule';
import { EditModuleComponent } from '../editmodule/editmodule';
import { ErrorListComponent } from '../../errormodule/errorlist/errorlist';
import { ConfirmModalsComponent } from '../../shareduimodules/confirmmodals/confirmmodals';
import { OkConfirmModalData } from '../../shareduimodules/confirmmodals/data/okconfirmmodaldata';
@Component({
  selector: 'module-list',
  templateUrl: './modulelist.html',
})
export class ModuleListComponent implements OnInit {
  @Input() GetProjectHttpDTO: GetProjectHttpDTO;
  DeleteModuleHttpDTO: DeleteModuleHttpDTO;
  OkConfirmModalData: OkConfirmModalData;
  constructor(
    private ModuleHttpService: ModuleHttpService,
    private NbDialogService: NbDialogService,
  ) {
  }
  ngOnInit() {
    this.Get();

  }
  GetModuleHttpDTO: GetModuleHttpDTO[] = [];
  Get() {
    this.ModuleHttpService.Get('/api/module/klg4kK8O2JfyXLWDlcEpC9UtqJjq87naHEWXKxtR6gOd9?projectid=' + this.GetProjectHttpDTO.projectId).subscribe(data => {
      this.GetModuleHttpDTO = data;
    })
  }
  Add() {
    this.NbDialogService.open(AddModuleComponent, {
      context: {
        GetProjectHttpDTO: this.GetProjectHttpDTO
      },
      closeOnBackdropClick: false,
    }).onClose.subscribe(action => {
      if (action === "Refresh") {
        this.Get();
      }
    });
  }
  Details(dto: GetModuleHttpDTO) {
    this.NbDialogService.open(ErrorListComponent, {
      context: {
        GetModuleHttpDTO: dto,
        GetProjectHttpDTO: this.GetProjectHttpDTO,
      },
      closeOnBackdropClick: false,
    }).onClose.subscribe(action => {
      if (action === "Refresh") {
        this.Get();
      }
    });
  }
  Edit(dto: GetModuleHttpDTO) {
    this.NbDialogService.open(EditModuleComponent, {
      context: {
        GetProjectHttpDTO: this.GetProjectHttpDTO,
        GetModuleHttpDTO: dto,
      },
      closeOnBackdropClick: false,
    }).onClose.subscribe(action => {
      if (action === "Refresh") {
        this.Get();
      }
    });
  }
  Delete(dto: GetModuleHttpDTO) {
    this.OkConfirmModalData = new OkConfirmModalData();
    this.OkConfirmModalData.Message = "Are you sure you want to delete " + dto.moduleName;
    this.OkConfirmModalData.Title = "Delete Module : " + dto.moduleName;
    this.NbDialogService.open(ConfirmModalsComponent, {
      context: {
        OkConfirmModalData: this.OkConfirmModalData
      },
      closeOnBackdropClick: false,
    }).onClose.subscribe(action => {
      if (action === "confirm") {
        this.DeleteModuleHttpDTO = new DeleteModuleHttpDTO(dto.modulesId);
        this.ModuleHttpService.Delete(this.DeleteModuleHttpDTO).subscribe(
          data => {
            this.Get();
          }
        )
      }
      if (action === "cancel") {
      }
    });
  }
}

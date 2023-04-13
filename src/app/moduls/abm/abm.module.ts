import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbmRoutingModule } from './abm-routing.module';
import { AbmComponent } from './abm.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { AddEditUserComponent } from './components/add-edit-user/add-edit-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { NavbarAbmComponent } from './components/navbar-abm/navbar-abm.component';


@NgModule({
  declarations: [
    AbmComponent,
    AddEditUserComponent,
    ListUserComponent,
    NavbarAbmComponent
  ],
  imports: [
    CommonModule,
    AbmRoutingModule, 
    MaterialModule
  ],
  exports:[
    AbmComponent,
    AbmRoutingModule, 
    
  ]
})
export class AbmModule { }

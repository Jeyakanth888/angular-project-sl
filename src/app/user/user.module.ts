import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { PopupModule } from '@progress/kendo-angular-popup';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { GridModule } from '@progress/kendo-angular-grid';
import { UserComponent } from './components/user/user.component';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LabelModule } from '@progress/kendo-angular-label';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    data: { title: 'Users' }
  },

];

@NgModule({
  declarations: [UsersComponent, UserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InputsModule,
    PopupModule,
    LayoutModule,
    GridModule,
    DialogModule,
    FormsModule,
    LabelModule,
    ReactiveFormsModule,
    DropDownsModule
  ],
  exports: [RouterModule]
})
export class UserModule { }

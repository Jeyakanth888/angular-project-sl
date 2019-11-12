import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttachmentsComponent } from './components/attachments/attachments.component';
import { RouterModule } from '@angular/router';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { PopupModule } from '@progress/kendo-angular-popup';
import { MenuModule } from '@progress/kendo-angular-menu';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { GridModule } from '@progress/kendo-angular-grid';
import { UploadModule } from '@progress/kendo-angular-upload';

@NgModule({
  declarations: [AttachmentsComponent],
  imports: [
    CommonModule,
    RouterModule,
    ButtonsModule,
    DateInputsModule,
    DropDownsModule,
    InputsModule,
    PopupModule,
    MenuModule,
    LayoutModule,
    GridModule,
    UploadModule
  ],
  exports: [
    AttachmentsComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }

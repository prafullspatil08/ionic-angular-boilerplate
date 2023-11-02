import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from './button/button.component';


@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule.forChild({}),
  ],
  exports: [
    TranslateModule,
    IonicModule,
    ButtonComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule.forChild({}),
  ],
  exports: [
    TranslateModule,
    IonicModule
  ]
})
export class SharedModule { }

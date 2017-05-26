import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VibrationPage } from './vibration';

@NgModule({
  declarations: [
    VibrationPage,
  ],
  imports: [
    IonicPageModule.forChild(VibrationPage),
  ],
  exports: [
    VibrationPage
  ]
})
export class VibrationPageModule {}

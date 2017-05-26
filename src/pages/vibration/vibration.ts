import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Vibration } from '@ionic-native/vibration';

@IonicPage()
@Component({
  selector: 'page-vibration',
  templateUrl: 'vibration.html',
})
export class VibrationPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private vibration: Vibration) {
  }

  startVibrate() {
    this.vibration.vibrate([1000, 500, 1000]);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VibrationPage');
  }

}

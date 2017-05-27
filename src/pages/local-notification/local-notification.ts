import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { LocalNotifications } from '@ionic-native/local-notifications';


@IonicPage()
@Component({
  selector: 'page-local-notification',
  templateUrl: 'local-notification.html',
})
export class LocalNotificationPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private notify: LocalNotifications) {
  }

  startLocalNotification() {
    this.notify.schedule({
      text: 'Hello, World',
      at: new Date(new Date().getTime() + 3000)
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalNotificationPage');
  }

}

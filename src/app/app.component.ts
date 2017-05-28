import { LocalNotificationPage } from './../pages/local-notification/local-notification';
import { BarcodeScannerPage } from './../pages/barcode-scanner/barcode-scanner';
import { VibrationPage } from './../pages/vibration/vibration';
// import { StorageDataServiceProvider } from './../providers/storage-data-service/storage-data-service';
import { TodoPage } from './../pages/todo/todo';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BaseDataService } from "../interfaces/IDataService";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;
  unDoneTasks: any[] = [];

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private events: Events,
    private dataService: BaseDataService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Todo', component: TodoPage },
      { title: 'Vibration', component: VibrationPage },
      { title: 'BarcodeScanner', component: BarcodeScannerPage },
      { title: 'LocaNotifications', component: LocalNotificationPage }
    ];

    this.dataService.getTodo().subscribe((data: any[]) => {
      if (data) {
        this.unDoneTasks = data.filter((x) => {
          return !x.done;
        });
      }
    });

    this.events.subscribe('todo:onChange', (data: any[]) => {
      this.unDoneTasks = data.filter((x) => {
        return !x.done;
      });
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

import { Vibration } from '@ionic-native/vibration';
import { VibrationPage } from './../pages/vibration/vibration';
import { TodoPage } from './../pages/todo/todo';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { HttpModule } from "@angular/http";
import { IonicStorageModule } from '@ionic/storage';
import { StorageDataServiceProvider } from '../providers/storage-data-service/storage-data-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TodoPage,
    VibrationPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot({
      name: 'todoStorage',
      driverOrder: ['localstorage', 'sqlite']
    }),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TodoPage,
    VibrationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Vibration,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataServiceProvider,
    StorageDataServiceProvider
  ]
})
export class AppModule { }

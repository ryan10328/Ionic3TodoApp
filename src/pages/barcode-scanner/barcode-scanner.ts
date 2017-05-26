import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-barcode-scanner',
  templateUrl: 'barcode-scanner.html',
})
export class BarcodeScannerPage {
  barcodeInfo: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private scanner: BarcodeScanner) {
  }

  startScan() {
    this.scanner.scan().then((data) => {
      this.barcodeInfo = data;
    }, (error) => {
      console.log(error);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodeScannerPage');
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InspectionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-inspection',
  templateUrl: 'inspection.html',
})
export class InspectionPage {
  public index: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.index = navParams.get("index");
    console.log(this.index);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InspectionPage');
  }

}

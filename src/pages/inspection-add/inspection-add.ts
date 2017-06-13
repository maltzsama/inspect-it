import { InspectionModel } from './../../models/inspection';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InspectionAddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-inspection-add',
  templateUrl: 'inspection-add.html',
})
export class InspectionAddPage {
  public inspectionList: Array<InspectionModel>;
  public inspectionItem: InspectionModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.inspectionList = JSON.parse(localStorage.getItem("inspection"));
    if(!this.inspectionList) {
      this.inspectionList = [];
    }
    this.inspectionItem = new InspectionModel;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InspectionAddPage');
  }

  save(){
    if (this.inspectionItem.description){
      this.inspectionList.push(this.inspectionItem);
      localStorage.setItem("inspection", JSON.stringify(this.inspectionList));
      this.navCtrl.pop();
    }
  }

}

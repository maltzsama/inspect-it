import { AboutPage } from './../about/about';
import { Component, ViewChild } from '@angular/core';
import {List, IonicPage,  NavController,  NavParams} from 'ionic-angular';

/**
 * Generated class for the CompanyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-company',
  templateUrl: 'company.html',
})
export class CompanyPage {
  public companyList: Array<string>;
  @ViewChild(List) list: List;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidEnter(){
     this.companyList = ["a", "b", "c"]; //JSON.parse(localStorage.getItem("companies"));
     if(!this.companyList) {
            this.companyList = [];
        }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyPage');
  }

  edit(index: number){
    this.companyList.splice(index, 1);
    localStorage.setItem("company", JSON.stringify(this.companyList));
  }

  add(){
    this.navCtrl.push(AboutPage);
  }
}

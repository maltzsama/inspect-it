import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompanyModel } from './../../models/company'
/**
 * Generated class for the CompanyAddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-company-add',
  templateUrl: 'company-add.html',
})
export class CompanyAddPage {
  public companyList: Array<CompanyModel>;
  public companyItem: CompanyModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.companyList = JSON.parse(localStorage.getItem("company"));
        if(!this.companyList) {
            this.companyList = [];
        }
        this.companyItem = new CompanyModel;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyAddPage');
  }

  save(){
    if(this.companyItem.name != "" || this.companyItem.cnpj != "" || this.companyItem.phone != "") {
      this.companyList.push(this.companyItem);
      localStorage.setItem("company", JSON.stringify(this.companyList));
      this.navCtrl.pop();
    }
  }

}

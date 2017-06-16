import { Component } from '@angular/core';
import { AlertController, App, LoadingController, IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginForm: any;
  public backgroundImage = "assets/img/background/Bg.png";
  

  constructor(public menu: MenuController, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public app: App) {
    //this.menu.enable(false);    
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login() {
    let loading = this.loadingCtrl.create({
      duration: 500
    });
    this.navCtrl.pop();

    /*loading.onDidDismiss(() => {
      let alert = this.alertCtrl.create({
        title: 'Usuário ou Senha incorreta!',
        subTitle: 'Verifique seu usuário ou senhas',
        buttons: ['Ok']
      });
      alert.present();
    }); */

    loading.present();

  }

  goToSignup() {
    // this.navCtrl.push(SignupPage);
  }

  goToResetPassword() {
    // this.navCtrl.push(ResetPasswordPage);
  }

}

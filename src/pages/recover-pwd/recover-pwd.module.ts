import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecoverPwdPage } from './recover-pwd';

@NgModule({
  declarations: [
    RecoverPwdPage,
  ],
  imports: [
    IonicPageModule.forChild(RecoverPwdPage),
  ],
  exports: [
    RecoverPwdPage
  ]
})
export class RecoverPwdPageModule {}

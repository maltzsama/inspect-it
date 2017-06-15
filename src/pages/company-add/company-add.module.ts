import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyAddPage } from './company-add';
import { AppMaskerModule } from 'brmasker-ionic';

@NgModule({
  declarations: [
    CompanyAddPage,
  ],
  imports: [
    IonicPageModule.forChild(CompanyAddPage),
    AppMaskerModule
  ],
  exports: [
    CompanyAddPage
  ]
})
export class CompanyAddPageModule {}

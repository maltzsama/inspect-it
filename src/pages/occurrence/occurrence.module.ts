import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OccurrencePage } from './occurrence';

@NgModule({
  declarations: [
    OccurrencePage,
  ],
  imports: [
    IonicPageModule.forChild(OccurrencePage),
  ],
  exports: [
    OccurrencePage
  ]
})
export class OccurrencePageModule {}

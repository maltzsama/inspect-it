import { AppMaskerModule } from 'brmasker-ionic';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { CompanyPage } from '../pages/company/company';
import { CompanyAddPage } from '../pages/company-add/company-add';
import { InspectionPage } from './../pages/inspection/inspection';
import { InspectionAddPage } from "./../pages/inspection-add/inspection-add";
<<<<<<< HEAD
import { LoginPage } from './../pages/login/login';
=======
import { OccurrencePage } from './../pages/occurrence/occurrence';
import { OccurrenceAddPage } from './../pages/occurrence-add/occurrence-add';

>>>>>>> 6f57cf0689f4c61da84bbf3a475a17e116a309c0

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    CompanyPage,
    CompanyAddPage,
    InspectionPage,
    InspectionAddPage,
<<<<<<< HEAD
    LoginPage
=======
    OccurrencePage,
    OccurrenceAddPage
>>>>>>> 6f57cf0689f4c61da84bbf3a475a17e116a309c0
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AppMaskerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    CompanyPage,
    CompanyAddPage,
    InspectionPage,
    InspectionAddPage,
<<<<<<< HEAD
    LoginPage
=======
    OccurrencePage,
    OccurrenceAddPage
>>>>>>> 6f57cf0689f4c61da84bbf3a475a17e116a309c0
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

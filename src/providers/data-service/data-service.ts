import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataServiceProvider {
  public database: SQLiteObject;

  companyTable:string=`CREATE TABLE "Company" (
	                          id	INTEGER PRIMARY KEY AUTOINCREMENT,
	                          name	TEXT NOT NULL,
	                          cnpj	TEXT NOT NULL UNIQUE,
	                          phone	TEXT NOT NULL,
	                          email	TEXT,
	                          contact	TEXT NOT NULL,
	                          endereço	TEXT NOT NULL,
	                          created_at	NUMERIC NOT NULL,
	                          updated_at	NUMERIC NOT NULL
                          );`;
  
  constructor(public sqlite :SQLite) {
    console.log('Hello DataServiceProvider Provider');
     this.sqlite.create({name: "data.db", location: "default"}).then((db : SQLiteObject) => {
       this.database = db;
      }, (error) => {
        console.log("ERROR: ", error);
      }); 
  }

}

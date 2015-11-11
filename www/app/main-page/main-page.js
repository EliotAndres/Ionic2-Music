import {Page, NavController} from 'ionic/ionic';
import {bootstrap, Component} from "angular2/angular2";
import {SearchBar} from "../search-bar/search-bar";

@Page({
  templateUrl: 'app/main-page/main-page.html',
  directives: [SearchBar]
})
export class MainPage {
  constructor(nav: NavController) {
    this.nav = nav;
  }
  
  addId(event) { 
       console.log('tt', event.value);
   }

}

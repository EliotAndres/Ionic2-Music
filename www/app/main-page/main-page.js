import {Page, NavController} from 'ionic/ionic';
import {bootstrap, Component, View, NgIf, NgFor, NgStyle} from "angular2/angular2";
import {SearchBar} from "../search-bar/search-bar";
import {Http} from 'angular2/http';

@Page({
  templateUrl: 'app/main-page/main-page.html',
  directives: [SearchBar, NgStyle]
})
export class MainPage {
  tracks;
  constructor(nav: NavController, public http: Http) {
    this.nav = nav;
  }

  addId(track) {
       console.log('tt', track.id);
       var url = 'http://localhost:3000/api/soundcloud?trackIds=' + track.id ;
         this.http.get(url)
 	      .map(res => res.json())
 	      .subscribe(
 	        data => this.tracks = data,
 	        err => console.log('Error', err),
 	        () => console.log('Authentication Complete')
 	      );

   }

}

import {Page, NavController} from 'ionic/ionic';
import {bootstrap, Component, View, NgIf, NgFor, NgStyle} from "angular2/angular2";
import {SearchBar} from "../search-bar/search-bar";
import {Http} from 'angular2/http';
import {MusicPlayerService} from '../service/music-player';


@Page({
  templateUrl: 'app/main-page/main-page.html',
  directives: [SearchBar, NgStyle]
})
export class MainPage {
  tracks;
  constructor(nav: NavController, public http: Http, public musicPlayerService: MusicPlayerService) {
    this.nav = nav;

  }

  addId(track) {
       var url = 'http://192.168.0.6:3000/api/soundcloud?trackIds=' + track.id ;
         this.http.get(url)
 	      .map(res => res.json())
 	      .subscribe(
 	        data => this.tracks = data,
 	        err => console.log('Error', err),
 	        () => console.log('Authentication Complete')
 	      );
   }
   
   playTrack(track) {
	   this.musicPlayerService.playTrack(track);
   }

}

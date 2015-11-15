import {Page, NavController} from 'ionic/ionic';
import {bootstrap, Component, View, NgStyle, CORE_DIRECTIVES} from "angular2/angular2";
import {SearchBar} from "../search-bar/search-bar";
import {Http} from 'angular2/http';
import {MusicPlayerService} from '../service/music-player';
import {PlayPauseButton, NextButton} from '../directive/control-buttons';
import {SeekBar, SeekBarStatus} from '../directive/seek-bar';


@Page({
  templateUrl: 'app/main-page/main-page.html',
  directives: [SearchBar, NgStyle, PlayPauseButton, NextButton, SeekBar, SeekBarStatus]
})

export class MainPage {
  tracks;
  currentTrack = {user:{}};
  loading:boolean = false;
  
  constructor(nav: NavController, public http: Http, public musicPlayerService: MusicPlayerService) {
    this.nav = nav;
  }

  useTrack(event) {
    console.log('test', event.track);
    this.currentTrack = event.track;
    this.loading = true;
    var url = 'http://api.ndres.me:3000/api/soundcloud?trackIds=' + event.track.id ;
    this.musicPlayerService.clearPlaylist();
    this.http.get(url)
      .map(res => res.json())
      .subscribe(
        data => this.addTracksToPlaylist(data),
        err => console.log('Error', err),
        () => this.loading = false
      );
  }
   
  addTracksToPlaylist(data){
    this.tracks = data;
    for (var i = 0; i < data.length; i ++) {
      this.musicPlayerService.addToPlaylist(data[i]);
    } 
  }
  
  playTrack(track) {
   this.musicPlayerService.playTrack(track);
  }
   
  getCurrentTrack() {
    if (typeof this.musicPlayerService.getCurrentTrack() === 'undefined') return {user:{}};  
    else return this.musicPlayerService.getCurrentTrack();
  }

}

import {App, IonicApp, IonicPlatform} from 'ionic/ionic';
import {Injectable, bind} from 'angular2/angular2';
import {Http} from 'angular2/http';

@Injectable()
export class MusicPlayerService {
	constructor(app: IonicApp, http: Http) {
		this.app = app;
		this.http = http;
	}

	init(clientId){
		//set up soundcloud 
		SC.initialize({
      client_id: clientId
	  });
	  this.initSoundManager();
	 
	}
	
  playTrack(track) {
    console.log(track);
     soundManager.createSound({
            id: track.id, // optional: provide your own unique id
            url: 'http://api.soundcloud.com/tracks/'+ track.id + '/stream?client_id=f615a58a237bb0435f9c7de57070cdf4'
          });
          
        soundManager.play(track.id);
  }
  
  initSoundManager(){
    soundManager.setup({
            preferFlash: false, // prefer 100% HTML5 mode, where both supported
            debugMode: false, // enable debugging output ($log.debug() with HTML fallback)
            useHTML5Audio: true,
            onready: function() {
              //$log.debug('sound manager ready!');
            },
            ontimeout: function() {
              alert('SM2 failed to start. Flash missing, blocked or security error?');
              alert('The status is ' + status.success + ', the error type is ' + status.error.type);
            },
            defaultOptions: {
              // set global default volume for all sound objects
              autoLoad: false, // enable automatic loading (otherwise .load() will call with .play())
              autoPlay: false, // enable playing of file ASAP (much faster if "stream" is true)
              from: null, // position to start playback within a sound (msec), see demo
              loops: 1, // number of times to play the sound. Related: looping (API demo)
              multiShot: false, // let sounds "restart" or "chorus" when played multiple times..
              multiShotEvents: false, // allow events (onfinish()) to fire for each shot, if supported.
              onid3: null, // callback function for "ID3 data is added/available"
              onload: null, // callback function for "load finished"
              onstop: null, // callback for "user stop"
              onfailure: 'nextTrack', // callback function for when playing fails
              onpause: null, // callback for "pause"
              onplay: null, // callback for "play" start
              onresume: null, // callback for "resume" (pause toggle)
              position: null, // offset (milliseconds) to seek to within downloaded sound.
              pan: 0, // "pan" settings, left-to-right, -100 to 100
              stream: true, // allows playing before entire file has loaded (recommended)
              to: null, // position to end playback within a sound (msec), see demo
              type: 'audio/mp3', // MIME-like hint for canPlay() tests, eg. 'audio/mp3'
              usePolicyFile: false, // enable crossdomain.xml request for remote domains (for ID3/waveform access)
              volume: 90, // self-explanatory. 0-100, the latter being the max.
              whileloading: function() {
              },
              whileplaying: function() {
             
              },
              onfinish: function() {
                
              }
            }
          })
  }

}
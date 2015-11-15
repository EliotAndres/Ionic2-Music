import {MusicPlayerService} from '../service/music-player';
import {Directive, View, HostListener, HostBinding} from 'angular2/angular2';

@Directive({
  selector: '[play-pause-button]',
  hostListeners: {
    "click": "onClick()"
  }
})

export class PlayPauseButton {
  
 constructor(public musicPlayerService: MusicPlayerService) {}
  
  @HostListener('click')
  onClick() {
    this.musicPlayerService.togglePlay();
  }
  
  @HostBinding("class.play") get playing { return !this.musicPlayerService.getPlayingStatus(); }

  @HostBinding("class.pause")  get notPlaying { return this.musicPlayerService.getPlayingStatus(); }

}


@Directive({
  selector: '[next-button]',
  hostListeners: {
    "click": "onClick()"
  }
})

export class NextButton {
  
 constructor(public musicPlayerService: MusicPlayerService) {}
  
  @HostListener('click')
  onClick() {
    this.musicPlayerService.nextTrack();
  }
}

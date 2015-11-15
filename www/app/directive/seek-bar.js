import {MusicPlayerService} from '../service/music-player';
import {Directive, View, HostListener, HostBinding} from 'angular2/angular2';

@Directive({
  selector: '[seek-bar]',
  hostListeners: {
    "click": "onClick()"
  }
})

export class SeekBar {
  
 constructor(public musicPlayerService: MusicPlayerService) {}
  
  @HostListener('click', ['$event'])
  onClick(event) {
    
    if (typeof this.musicPlayerService.getCurrentTrack() === 'undefined') return;  

    this.musicPlayerService.setCurrentPosition(0);
    
    var sound = soundManager.getSoundById(this.musicPlayerService.getCurrentTrack().id);
        duration = sound.durationEstimate,
        offsetX = event.offsetX,
        width = event.target.clientWidth,
        newPosition = (offsetX / width) * duration    
        
    this.musicPlayerService.setCurrentPosition(newPosition);
  
    sound.setPosition(newPosition);
    
  }
  
}

@Directive({
  selector: '[seek-bar-status]',
})

export class SeekBarStatus {
  
  constructor(public musicPlayerService: MusicPlayerService) {}
  
  @HostBinding("style.width") get playing { return this.musicPlayerService.getCurrentPosition() + "%"; }

}

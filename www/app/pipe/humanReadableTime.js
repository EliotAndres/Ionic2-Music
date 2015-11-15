import {Pipe} from 'angular2/angular2';

@Pipe({
  name: 'human-readable-time'
})
class HumanReadableTime {
  transform(input, args) { 
    var min = (input / 1000 / 60) << 0,
    sec = Math.round((input / 1000) % 60);

    return this.pad(min) + ':' + pad(sec);

  }
  
  function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
  }

}
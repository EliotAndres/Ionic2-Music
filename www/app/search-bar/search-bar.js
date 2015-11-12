import {Component, FORM_DIRECTIVES, EventEmitter, NgIf, NgFor} from "angular2/angular2";
import {Http} from 'angular2/http';

@Component({
    selector: 'search-bar',
    templateUrl: 'app/search-bar/search-bar.html',
    directives:[FORM_DIRECTIVES, NgIf, NgFor],
    events: ['change'],

})
export class SearchBar{
	searchModel;
	items;
	constructor(public http: Http) {
    	this.change = new EventEmitter();
  	}

  	logError(err) {
	    console.error('There was an error: ', err);
  	}

    addTrack(id){
      this.items = null;
	    console.log('query', this.searchModel);
      this.change.next({id:id});
    }

    searchTracks(){
	    var url = 'http://api.soundcloud.com/tracks?q=' + this.searchModel + '&client_id=f615a58a237bb0435f9c7de57070cdf4&format=json&_status_code_map[302]=200';
        this.http.get(url)
	      .map(res => res.json())
	      .subscribe(
	        data => this.items = data,
	        err => this.logError(err),
	        () => console.log('Authentication Complete')
	      );

    }
}

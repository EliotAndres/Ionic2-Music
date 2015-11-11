import {Component, FORM_DIRECTIVES, EventEmitter} from "angular2/angular2";

@Component({
    selector: 'search-bar',
    templateUrl: 'app/search-bar/search-bar.html',
    directives:[FORM_DIRECTIVES],
    events: ['change'],
    
})
export class SearchBar{
	searchModel;
	
	constructor() { 
    	this.change = new EventEmitter();
  	}
  	
    onSubmit($event){
	    console.log('query', this.searchModel);
        this.change.next({value:this.searchModel});
    }
}
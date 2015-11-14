import {App, IonicApp, Platform} from 'ionic/ionic';

import {MainPage} from './main-page/main-page';
import {AboutPage} from './about/about';
import {MusicPlayerService} from './service/music-player';
import {bootstrap, Component} from "angular2/angular2";

@App({
  templateUrl: 'app/app.html',
  providers: [MusicPlayerService]
})

class MyApp {
  constructor(app: IonicApp, platform: Platform, public musicPlayerService: MusicPlayerService) {

    // set up our app
    this.app = app;
    this.platform = platform;
    this.initializeApp();
    
    this.musicPlayerService.init('f615a58a237bb0435f9c7de57070cdf4');
    
    // set our app's pages
    this.pages = [
      { title: 'Venn Music', component: MainPage },
      { title: 'About', component: AboutPage }
    ];

    // make HelloIonicPage the root (or first) page
    this.rootPage = MainPage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Platform ready');
      
      if (typeof StatusBar !== 'undefined') {
        StatusBar.styleDefault();
      }
      
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.app.getComponent('menu').close();
    // navigate to the new page if it is not the current page
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
  
}



window.addEventListener('native.keyboardshow', keyboardShowHandler);
window.addEventListener('native.keyboardhide', keyboardHideHandler);

function keyboardShowHandler(e){
    document.body.classList.add('keyboard-open');
}

function keyboardHideHandler(e){
   document.body.classList.remove('keyboard-open');

}



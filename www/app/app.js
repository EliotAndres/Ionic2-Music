import {App, IonicApp, Platform} from 'ionic/ionic';

import {MainPage} from './main-page/main-page';
import {AboutPage} from './about/about';
import {bootstrap, Component} from "angular2/angular2";

@App({
  templateUrl: 'app/app.html'
})

class MyApp {
  constructor(app: IonicApp, platform: Platform) {

    // set up our app
    this.app = app;
    this.platform = platform;
    this.initializeApp();

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


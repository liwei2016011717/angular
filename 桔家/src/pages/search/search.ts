import { Component } from '@angular/core';
import { App,NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  constructor(public app:App,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  go(){
      this.app.getRootNavs()[0].setRoot(AboutPage);
  }
}

import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { ShezhiPage } from '../shezhi/shezhi';

/**
 * Generated class for the BPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-b',
  templateUrl: 'b.html',
})
export class BPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  // isClick(e){
  //   e.style.background="yellow";
  // }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad BPage');
  // }
  go(){
    this.navCtrl.push(ShezhiPage);
  }

}

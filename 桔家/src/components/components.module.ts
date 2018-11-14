import { NgModule } from '@angular/core';
import { AComponent } from './a/a';
import{BrowserModule}from'@angular/platform-browser';
import {IonicModule} from 'ionic-angular';
import { JiajuComponent } from './jiaju/jiaju';
@NgModule({
    declarations: [AComponent,
    JiajuComponent,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(ComponentsModule)   
    ],
	exports: [AComponent,
    JiajuComponent,
    ]
})
export class ComponentsModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';//输入框等使用ngBind需要
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';
import {HeroService} from "../datas/hero.service";

import { HeroComponent } from './hero/hero.component';
import { AppComponent } from './app/app.component';
import { HeroDetailComponent } from './heroDetail/heroDetail.component';
import {DashBoardComponent} from "./dash-board/dash-board.component"
import {AppRoutingModule} from "./app.routing";
import {HeroSearchComponent} from './hero-search/hero-search.component';
import {Ng2SuiModule} from "../../components/Ng2Sui.module";

@NgModule({
    imports: [ 
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        Ng2SuiModule
        ],
    declarations: [ 
        AppComponent,
        HeroDetailComponent,
        HeroComponent,
        DashBoardComponent,
        HeroSearchComponent
        ],
    providers: [ HeroService ],
    bootstrap: [ AppComponent ]
})

export class NgSemanticModule { }


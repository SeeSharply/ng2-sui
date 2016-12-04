import {RouterModule,Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import { HeroComponent } from './hero/hero.component';
import { AppComponent } from './app/app.component';
import { HeroDetailComponent } from './heroDetail/heroDetail.component';
import {DashBoardComponent} from "./dash-board/dash-board.component"

const routes:Routes=[
{ path: 'heroes',component: HeroComponent},
{ path: 'dashboard',component: DashBoardComponent},
{ path: 'detail/:id',component: HeroDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
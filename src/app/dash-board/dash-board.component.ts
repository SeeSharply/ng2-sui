import { Component, OnInit } from '@angular/core';
import { Hero } from '../../datas/hero';
import { HeroService } from '../../datas/hero.service';
import {Router} from "@angular/router"


@Component({
    selector: 'my-dashboard',
    templateUrl: 'dash-board.component.html'
})
export class DashBoardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService,private router:Router) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
  
  gotoDetail(id:number): void {
    this.router.navigate(['/detail', id]);
  }
}

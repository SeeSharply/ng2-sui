import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import {Hero} from '../../datas/Hero';
import { HeroService } from '../../datas/hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl:"./heroDetail.Component.html"
})
export class HeroDetailComponent implements OnInit{
   @Input() hero:Hero;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.heroService.getHero(+params['id']))
    .subscribe(hero => this.hero = hero);
}
goBack(): void {
  this.location.back();
}

   
}

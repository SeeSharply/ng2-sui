import { Component,OnInit} from '@angular/core';
import { Hero } from '../../datas/Hero';
import { HeroService } from '../../datas/hero.service';
import { Router }   from '@angular/router';



@Component({
  selector: 'my-heroes',
  templateUrl: 'hero.component.html'
})
export class HeroComponent implements OnInit{
  Title:string="super hero edits";
  heroes: Hero[] = [];
  selectedHero:Hero;
  constructor(private heroService:HeroService,
  private router:Router
  ){}

  ngOnInit(): void {
    this.heroService.getHeroes()
    .then(heros=>this.heroes = heros);
  }
  onSelect(hero:Hero):void
  {
    this.selectedHero=hero;
    console.log(hero.name);
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

 }


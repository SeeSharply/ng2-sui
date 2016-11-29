import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Hero,HEROES }           from '../../datas/Hero';
@Injectable()
export class HeroSearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<Hero[]> {
      let heroArr=[];
      for(var hero of HEROES)
      {
          if(hero.name.indexOf(term)!=-1)
          {
              heroArr.push(hero);
          }
      }
      let a=Observable.of(heroArr);
      console.log(a);
      return a;
      /*
    return this.http
               .get(`app/heroes/?name=${term}`)
               .map((r: Response) => r.json().data as Hero[]);*/
  }
}

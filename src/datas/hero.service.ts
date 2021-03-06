import { Injectable } from '@angular/core';
import {HEROES,Hero} from './Hero';
import {Headers,Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
private heroesUrl="http://localhost:62304/api/hero/get";
private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

constructor(private http:Http){}
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
        /*
        return this.http.get(this.heroesUrl)
                   .toPromise()
                   .then(response => response.json() as Hero[])
                   .catch(this.handleError);
                   */
  }
    getHero(id:number):Promise<Hero>
    {           
         return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
    }
}
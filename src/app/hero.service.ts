import { Injectable } from '@angular/core';
import { Hero } from './hero';
//import { HEROES } from  './mock-heroes';
import { deprecate } from "util";
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';
  private headers = new Headers({'Content-Type':'application/json'});

  constructor(private http: Http) {}

  //@deprecate
  //getHeroesOld(): Promise<Hero[]> {
  //  return Promise.resolve(HEROES);
  //}

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url,JSON.stringify(hero),{headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id  == id));
  }

  private handleError(error: any): Promise<any>{
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}

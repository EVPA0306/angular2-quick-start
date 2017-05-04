import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from  './mock-heroes';
import {deprecate} from "util";
import {Http} from "@angular/http";

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';

  constructor(private http: Http) {}

  @deprecate
  getHeroesOld(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl).toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.hadleError);
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

  private handleError(error: any): {}
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs';

import { Hero } from '../heroes/hero';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class HeroService {

  private domain = 'http://localhost:3005/api/heroes'
  constructor(
    private messageService: MessageService,
    private http : HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = this.http.get<Hero[]>(this.domain + '');
    this.messageService.add('HeroService: fetched heroes');
    console.log(heroes)
    return heroes;
  }

  // getHero(id: number): Observable<Hero> {
  //   // For now, assume that a hero with the specified `id` always exists.
  //   // Error handling will be added in the next step of the tutorial.
  //   const hero = this.http.get(this.domain + '').find(h => h.id === id)!;
  //   this.messageService.add(`HeroService: fetched hero id=${id}`);
  //   return (hero);
  // }
}

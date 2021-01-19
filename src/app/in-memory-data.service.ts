import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Thato Seeletso Mmusi' },
      { id: 12, name: 'Tebogo Maswabi' },
      { id: 13, name: 'Batamunde Malebogo' },
      { id: 14, name: 'Keorapetswe Te' },
      { id: 15, name: 'Gobotswang' },
      { id: 16, name: 'Tableman Tebo' },
      { id: 17, name: 'Catero Inn' },
      { id: 18, name: 'Lambi Ser' },
      { id: 19, name: 'Reacha Le' },
      { id: 20, name: 'Odirile' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}

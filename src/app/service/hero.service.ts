import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroList: Hero[] = [
    {
      id: 1,
      name: 'SpiderMan',
      superPower: 'Wall climbing',
      address: 'New York'
    },
    {
      id: 2,
      name: 'DeadPool',
      superPower: 'Accelerated healing factor',
      address: 'New York'
    },
    {
      id: 3,
      name: 'Tony Stark',
      superPower: 'Genius-Level Intellect',
      address: 'Malibu'
    },
    {
      id: 4,
      name: 'HULK',
      superPower: 'Unlimited Strength',
      address: 'California'
    },
    {
      id: 5,
      name: 'Gábor',
      superPower: 'Programming in Angular',
      address: 'Budapest'
    },
  ]

  constructor() { }

  getAll(): Hero[] {
    return this.heroList;
  };
}

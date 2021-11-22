import { Injectable, Type } from '@angular/core';
import { Subject } from 'rxjs';

import { Loan } from './loan';

const HEROES = [
  new Loan('Windstorm', 'Weather mastery', 'Windstorm', 'Weather mastery'),
  new Loan(
    'Dr Nice',
    'Killing them with kindness',
    'Dr Nice',
    'Killing them with kindness'
  ),
  new Loan(
    'Magneta',
    'Manipulates metallic objects',
    'Magneta',
    'Manipulates metallic objects'
  ),
];

@Injectable()
export class LoanService {
  private heroes: Loan[] = HEROES;

  public $visible = new Subject<Loan>();

  constructor() {
    //this.getAll(Loan);
  }

  getHeroes() {
    return this.heroes;
  }

  getAll(type: Type<any>): PromiseLike<any[]> {
    if (type === Loan) {
      // TODO: get from the database
      return Promise.resolve<Loan[]>(HEROES);
    }
    const err = new Error('Cannot get object of this type');

    throw err;
  }
}

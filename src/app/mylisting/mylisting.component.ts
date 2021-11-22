import { Component, OnInit } from '@angular/core';
import { Loan } from './../loan';
import { LoanService } from './../loan-service.service';

@Component({
  selector: 'app-mylisting',
  templateUrl: './mylisting.component.html',
  styleUrls: ['./mylisting.component.css'],
})
export class MylistingComponent implements OnInit {
  heroes: Loan[] = [];
  selectedHero: Loan | undefined;
  loanList: Loan[];

  constructor(private service: LoanService) {}

  ngOnInit() {
    this.heroes = this.service.getHeroes();
    this.loanList = [
      {
        id: 3,
        name: 'Description 1',
        title: 'Item 1',
        description: 'Description 1',
      },
      {
        id: 4,
        name: 'Description 222',
        title: 'Item 2',
        description: 'Description 2.',
      },
      {
        id: 5,
        name: 'Description 13232',
        title: 'Item 3',
        description: '',
      },
    ];
  }

  selectHero(hero: Loan) {
    this.selectedHero = hero;
  }

  mytoggle() {
    this.service.$visible.next(this.selectedHero);
    console.log('something...');
  }
}

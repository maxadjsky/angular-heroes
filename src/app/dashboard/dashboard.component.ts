import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [HeroService]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroSerice: HeroService) {
  }

  ngOnInit() {
    this.heroSerice.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
  }

}

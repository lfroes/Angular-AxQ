import { Component } from '@angular/core';
import { HeroComponent } from '../shared/components/hero/hero.component';
import { UsersListComponent } from '../shared/components/users-list/users-list.component';

@Component({
  selector: 'app-home-page',
  imports: [HeroComponent, UsersListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}

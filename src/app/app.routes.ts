import { Routes } from '@angular/router';
import { ImgPageComponent } from './core/components/img-page/img-page.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
  {
    path: 'img',
    component: ImgPageComponent,
  },
  {
    path: '',
    component: HomePageComponent,
  },
];

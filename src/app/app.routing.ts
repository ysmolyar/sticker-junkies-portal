import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';

const appRoutes: Routes = [
  { path: '',                 component: HomePageComponent },
  { path: 'home',                 component: HomePageComponent, },
  { path: '**',               component: HomePageComponent }
];

export const routing = RouterModule.forRoot(appRoutes);

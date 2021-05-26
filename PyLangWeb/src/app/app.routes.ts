import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: AppComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
    { path: '', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

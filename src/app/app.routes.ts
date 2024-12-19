import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { StatesComponent } from './pages/states/states/states.component';
import { ContactComponent } from './pages/contact/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'states', component: StatesComponent
    },
    {
        path: 'contact', component: ContactComponent
    },
    {
        path: '**', component: NotFoundComponent
    },

];

import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { InsertComponent } from './components/insert/insert.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
    {path:'home', component: MainComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path:'insert', component: InsertComponent},
    {path:'details:id', component: DetailsComponent},
   
];

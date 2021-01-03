import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './countries/country/country.component';
import { Country } from './countries/model/country.model';

const routes: Routes = [
  {path: 'countries', component: CountriesComponent},
  {path: 'countries/:name', component: CountryComponent},
  {path: '', redirectTo: 'countries', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

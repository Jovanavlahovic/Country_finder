import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from '../model/country.model';

const baseUrl = 'https://restcountries.eu/rest/v2';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<Country[]>{
    return this.http.get(baseUrl).pipe(map((response: any) => response as Array<Country>));
  }

  getCountriesByRegion(region: string): Observable<Country[]>{
    return this.http.get(`${baseUrl}/region/${region}`).pipe(map((response: any) => response as Array<Country>));
  }

  getCountriesByName(name: string): Observable<Country[]>{
    return this.http.get(`${baseUrl}/name/${name}`).pipe(map((response: any) => response as Array<Country>));
  }
}

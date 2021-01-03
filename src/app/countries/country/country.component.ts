import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Country } from '../model/country.model';
import { GetDataService } from '../service/get-data.service';
import { isoCountries } from '../model/listOfCountries';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
  countryName: string;
  country: Country;
  currencies: string;
  languages: string;

  constructor(
    private route: ActivatedRoute,
    private _location: Location,
    private service: GetDataService
  ) {}

  ngOnInit(): void {
    this.countryName = this.route.snapshot.params['name'].toLowerCase();
    this.getCountryDetails();
  }

  getCountryDetails(): void {
    this.service.getCountry(this.countryName).subscribe((response) => {
      this.country = response;
    });
  }

  goBack(): void {
    this._location.back();
  }

  convertCountryCode(code) {
    for(let i = 0; i < isoCountries.length; i++){
      let element = isoCountries[i];
      if (element.alpha3 == code.toLowerCase()) {
        return element.name;
      }
    }
  };
}

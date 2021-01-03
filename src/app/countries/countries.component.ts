import { Component, OnInit } from '@angular/core';
import { Country } from './model/country.model';
import { GetDataService } from './service/get-data.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  countries: Country[];
  countryName: string;
  region: string;

  constructor(private service: GetDataService) {
    this.region = '';
  }

  ngOnInit(): void {
    this.getAllCountries();
  }

  getAllCountries(): void {
    this.service.getAllCountries().subscribe((response) => {
      this.countries = response;
    });
  }

  getCountriesByRegion() {
    if (this.region == '') {
      this.getAllCountries();
    } else {
      this.service.getCountriesByRegion(this.region).subscribe((response) => {
        this.countries = response;
      });
    }
  }

  getCountriesByName(){
    if(this.countryName == ''){
      this.getAllCountries();
    } else{
      this.service.getCountriesByName(this.countryName).subscribe((response) => {
        this.countries = response;
      });
    }
    
  }
}

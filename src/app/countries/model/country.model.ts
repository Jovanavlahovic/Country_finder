export class Country {
  name: string;
  population: number;
  region: string;
  capital: string;
  nativeName: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: [];
  languages: [];
  borders: [];
  flag: string;

  constructor(obj?: any){
        this.name = obj && obj.name || '';
        this.population = obj && obj.population || null;
        this.region = obj && obj.region || '';
        this.capital = obj && obj.capital || '';
        this.nativeName = obj && obj.nativeName || '';
        this.subregion = obj && obj.subregion || '';
        this.topLevelDomain = obj && obj.topLevelDomain || [];
        this.currencies = obj && obj.currencies || [];
        this.languages = obj && obj.languages || [];
        this.borders = obj && obj.borders || [];
        this.flag = obj && obj.flag || '';
  }
}
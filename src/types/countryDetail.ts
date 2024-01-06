export default interface Detail {
  flag: string;
  name: string
  nativeName: string;
  population: string;
  region: string;
  subregion: string;
  capital: string;
  // topleveldomain: string[];
  currencies: [{name: string}];
  languages:  [{name: string}];
  // border: [];
}

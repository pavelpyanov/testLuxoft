import LoadStatus from "../../loadStatus";

export interface IStarwarsPerson {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: [];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface IStarwarsResponse {
  count: number;
  next: string;
  previous: null | number;
  results: IStarwarsPerson[];
}

export interface IStarWarsStore {
  starwarsResponse: IStarwarsResponse;
  loadStatus: keyof typeof LoadStatus;
  error: string;
}

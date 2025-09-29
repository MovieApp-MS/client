import { Rating } from './rating.tntity';

export interface Movie {
  id: string;
  title: string;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  poster: string;
  ratings: Rating[];
  boxOffice: string;
  user: string;
  fav: boolean;
}

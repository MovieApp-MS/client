import { Movie } from "src/app/pages/search/domain/movie.entity";

export interface MovieStates {
  movies: Movie[];
  isLoading: boolean;
  movie?: Movie | null;
  favorites: Movie[];
}

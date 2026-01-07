import { createAction, props } from "@ngrx/store";
import { Movie } from "src/app/pages/search/domain/movie.entity";

// Search bye title
export const getMovieList = createAction(
  "[Movie List] Search movies",
  props<{ title: string }>(),
);

// Load movies to the list
export const getMovie = createAction(
  "[Movie List] Movie loaded",
  props<{ id: string }>(),
);

// Load movies to the list
export const loadedMovieSuccess = createAction(
  "[Movie List] Movie loaded Success",
  props<{ movie: Movie }>(),
);

// Load movies to the list
export const loadedMoviesSuccess = createAction(
  "[Movie List] Movies loaded",
  props<{ movies: Movie[] }>(),
);

export const getFavorites = createAction(
  "[Movie List] Get Favorites Movies",
  props<{ userId: string }>(),
);

export const loadedFavoritesSuccess = createAction(
  "[Movie List] Favorites Movies Loaded",
  props<{ favorites: Movie[] }>(),
);

export const setMovieFav = createAction(
  "[Movie List] Addding Movie as Favourite",
  props<{ id: string }>(),
);

export const setMovieFavSuccess = createAction(
  "[Movie List] Movie added as favourite",
);

export const unsetMovieFav = createAction(
  "[Movie List] Deleting Movie as Favourite",
  props<{ id: string }>(),
);

export const unsetMovieFavSuccess = createAction(
  "[Movie List] Movie deleted as favourite",
);

export const errorMessage = createAction(
  "[Movie List] Error during the requests",
  props<{ err: string }>(),
);

export const snackBarMessage = createAction("[Movie List] SnackBar Message");

import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/core/store/app.states";

export const movieSelector = (state: AppState) => state.movie;

export const movieList = createSelector(movieSelector, (state) => state.movies);

export const movieLoading = createSelector(
  movieSelector,
  (state) => state.isLoading,
);

export const getMovieSelector = createSelector(
  movieSelector,
  (state) => state.movie
);

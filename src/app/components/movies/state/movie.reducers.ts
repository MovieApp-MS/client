import { createReducer, on } from "@ngrx/store";
import {
  errorMessage,
  getMovie,
  getMovieList,
  loadedMoviesSuccess,
  loadedMovieSuccess,
  setMovieFav,
  unsetMovieFav,
} from "./movie.actions";
import { MovieStates } from "./movie.states";

export const initialState: MovieStates = {
  movies: [],
  isLoading: false,
  movie: null,
};

export const listMovieReducer = createReducer(
  initialState,
  on(getMovieList, (state, {}) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(loadedMoviesSuccess, (state, payload) => {
    return {
      ...state,
      movies: payload.movies,
      isLoading: false,
    };
  }),
  on(setMovieFav, (state, payload) => {
    return {
      ...state,
      movies: state.movies.map((x) => {
        if (x.id === payload.id) {
          return { ...x, fav: true };
        } else {
          return x;
        }
      }),
    };
  }),
  on(unsetMovieFav, (state, payload) => {
    return {
      ...state,
      movies: state.movies.map((m) => {
        if (m.id === payload.id) {
          return { ...m, fav: false };
        } else {
          return m;
        }
      }),
    };
  }),
  on(getMovie, (state, payload) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(loadedMovieSuccess, (state, payload) => {
    return {
      ...state,
      isLoading: false,
      movie: { ...payload.movie, fav: true },
    };
  }),
  on(errorMessage, (state, payload) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
);

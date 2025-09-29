import { MovieStates } from "src/app/components/movies/state/movie.states";
import { ActionReducerMap } from '@ngrx/store';
import { listMovieReducer } from "src/app/components/movies/state/movie.reducers";

export interface AppState {
    movie: MovieStates
}


export const ROOT_REDUCER_MAP: ActionReducerMap<AppState> = {
    movie: listMovieReducer
}
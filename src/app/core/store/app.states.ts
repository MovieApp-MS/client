import { MovieStates } from "src/app/components/movies/state/movie.states";
import { ActionReducerMap } from "@ngrx/store";
import { listMovieReducer } from "src/app/components/movies/state/movie.reducers";
import { listRecommendedReducer } from "src/app/components/recommend/state/recommend.reducers";
import { RecommendState } from "src/app/components/recommend/state/recommend.states";

export interface AppState {
  movie: MovieStates;
  recommend: RecommendState;
}

export const ROOT_REDUCER_MAP: ActionReducerMap<AppState> = {
  movie: listMovieReducer,
  recommend: listRecommendedReducer,
};

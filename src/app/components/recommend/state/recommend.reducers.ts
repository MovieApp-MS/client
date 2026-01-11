import { createReducer, on } from "@ngrx/store";
import { RecommendState } from "./recommend.states";
import {
  getRecommendListSucceded,
  getRecomendedList,
} from "./recommend.actions";

export const initialState: RecommendState = {
  recommend: [],
  isLoading: false,
};

export const listRecommendedReducer = createReducer(
  initialState,
  on(getRecomendedList, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(getRecommendListSucceded, (state, payload) => {
    return {
      ...state,
      isLoading: false,
      recommend: payload.recommend,
    };
  }),
);

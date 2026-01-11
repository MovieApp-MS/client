import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/core/store/app.states";

export const recommendSelector = (state: AppState) => state.recommend;

export const recommendLoadingSelector = createSelector(
  recommendSelector,
  (state) => state.isLoading,
);

export const getRecommendListSelector = createSelector(
  recommendSelector,
  (state) => state.recommend,
);

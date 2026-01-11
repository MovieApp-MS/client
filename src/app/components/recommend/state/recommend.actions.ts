import { createAction, props } from "@ngrx/store";

export const getRecomendedList = createAction(
  "[Recommend List] Get recommend movies",
);

export const getRecommendListSucceded = createAction(
  "[Recommend List] Get recommend movies succeded",
  props<{ recommend: { title: "string" }[] }>(),
);

export const errorMessage = createAction(
  "[Recommend List] Error during the requests",
  props<{ err: string }>(),
);

export const snackBarMessage = createAction(
  "[Recommend List] SnackBar Message",
);

export const LodedRecommendedListMessage = createAction(
  "[Recommend List] Recommended list loaded message",
);

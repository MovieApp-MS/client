import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiResponse, HttpAxiosServices } from "@tools/services/http.services";
import { SnackBarService } from "@tools/services/snackBar.service";
import { catchError, exhaustMap, map, pipe } from "rxjs";
import {
  errorMessage,
  getRecommendListSucceded,
  getRecomendedList,
  LodedRecommendedListMessage,
} from "./recommend.actions";
import { environment } from "src/environment";

@Injectable()
export class RecommendEffects {
  private actions$ = inject(Actions);
  private httpService = inject(HttpAxiosServices);
  private service = inject(SnackBarService);

  getRecommendedListEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getRecomendedList),
      exhaustMap(() =>
        this.httpService
          .requestUrl<ApiResponse>(
            `${environment.apiUrl}/recommendation?userId=62805d41-fb42-4330-8a5c-d07a6e2fabae`,
          )
          .pipe(
            map((res) => {
              console.log("Me ejecute en getrecommended", res);
              return getRecommendListSucceded({
                recommend: res.data[0].recommended,
              });
            }),
            catchError(async (err) => errorMessage(err)),
          ),
      ),
    );
  });

  getRecommendListSucceded$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getRecommendListSucceded),
      pipe(
        map((res) => {
          this.service.openSnackBar("Recomendaciones cargadas", "success");
          return LodedRecommendedListMessage();
        }),
      ),
    );
  });
}

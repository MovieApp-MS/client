import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  errorMessage,
  getMovie,
  getMovieList,
  loadedMoviesSuccess,
  loadedMovieSuccess,
  setMovieFav,
  setMovieFavSuccess,
  snackBarMessage,
  unsetMovieFav,
  unsetMovieFavSuccess,
} from "./movie.actions";
import { inject, Injectable } from "@angular/core";
import { catchError, exhaustMap, map, of } from "rxjs";
import { ApiResponse, HttpAxiosServices } from "@tools/services/http.services";
import { environment } from "src/environment";
import { Movie } from "src/app/pages/search/domain/movie.entity";
import { SnackBarService } from "@tools/services/snackBar.service";

@Injectable()
export class MovieEffects {
  private actions$ = inject(Actions);
  private httpService = inject(HttpAxiosServices);
  private service = inject(SnackBarService);

  loadMoviesEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getMovieList),
      exhaustMap(({ title }) =>
        this.httpService
          .requestUrl<ApiResponse>(
            `${environment.apiUrl}/movies/by-title?title=${title}&userId=62805d41-fb42-4330-8a5c-d07a6e2fabae`,
          )
          .pipe(
            map((res) => {
              return loadedMoviesSuccess({ movies: res.data });
            }),
            catchError(async (err) => errorMessage(err)),
          ),
      ),
    );
  });

  setMovieAsFavourite$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(setMovieFav),
      exhaustMap(({ id }) =>
        this.httpService
          .postUrl<Movie>(
            `${environment.apiUrl}/movies/favorites?movieId=${id}&userId=62805d41-fb42-4330-8a5c-d07a6e2fabae`,
          )
          .pipe(
            map((res) => {
              this.service.openSnackBar(
                "Película agregada a favoritos",
                "success",
              );
              return setMovieFavSuccess();
            }),
          ),
      ),
    );
  });

  unsetMovieAsFavourite$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(unsetMovieFav),
      exhaustMap(({ id }) =>
        this.httpService
          .delete<ApiResponse>(
            `${environment.apiUrl}/movies/favorites?movieId=${id}&userId=62805d41-fb42-4330-8a5c-d07a6e2fabae`,
          )
          .pipe(
            map((res) => {
              this.service.openSnackBar(
                "Película borrada de favoritos",
                "success",
              );
              return unsetMovieFavSuccess();
            }),
          ),
      ),
    );
  });

  loadMovie$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getMovie),
      exhaustMap(({ id }) =>
        this.httpService
          .requestUrl<ApiResponse>(
            `${environment.apiUrl}/movies/by-id?movieId=${id}`,
          )
          .pipe(map((res) => loadedMovieSuccess({ movie: res.data }))),
      ),
    );
  });

  movieSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadedMoviesSuccess),
      map(({ movies }) => {
        this.service.openSnackBar(
          `${movies.length} Películas han sido encontradas`,
          "success",
        );
        return snackBarMessage();
      }),
    );
  });
}

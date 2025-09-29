import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
  isDevMode,
} from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";
import { StoreModule, provideStore } from "@ngrx/store";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { ROOT_REDUCER_MAP } from "./core/store/app.states";
import { provideEffects } from "@ngrx/effects";
import { MovieEffects } from "./components/movies/state/movie.effects";
import { AuthInterceptor } from "./core/interceptors/http-error.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    provideStore(ROOT_REDUCER_MAP),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(MovieEffects),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
};

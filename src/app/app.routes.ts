import { Routes } from "@angular/router";
import { FavoritesComponent } from "./pages/favorites/favorites.component";
import { SearchComponent } from "./pages/search/search.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { MovieComponent } from "./components/movies/movie.component";

export const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {
        path: "favorites",
        component: FavoritesComponent,
      },
      {
        path: "search",
        component: SearchComponent,
      },
      {
        path: "movie/:movie/:movieId",
        component: MovieComponent,
      },
    ],
  },
  {
    path: "**",
    redirectTo: "dashboard",
  },
];

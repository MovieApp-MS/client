import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from "@angular/core";
import { Store } from "@ngrx/store";
import { MovieCardComponent } from "@tools/movieCard/movie-card.component";
import { getFavorites } from "src/app/components/movies/state/movie.actions";
import { getFavoritesSelector } from "src/app/components/movies/state/movie.selectors";
import { MovieStates } from "src/app/components/movies/state/movie.states";

@Component({
  selector: "app-trendings",
  imports: [MovieCardComponent, CommonModule],
  templateUrl: "./favorites.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesComponent implements OnInit {
  private store = inject(Store<MovieStates>);
  public favorites$ = this.store.select(getFavoritesSelector);

  ngOnInit(): void {
    this.store.dispatch(
      getFavorites({ userId: "62805d41-fb42-4330-8a5c-d07a6e2fabae" }),
    );
  }
}

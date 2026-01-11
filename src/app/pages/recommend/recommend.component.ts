import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { Store } from "@ngrx/store";
import { getRecomendedList } from "src/app/components/recommend/state/recommend.actions";
import {
  recommendLoadingSelector,
  getRecommendListSelector,
} from "src/app/components/recommend/state/recommend.selectors";

@Component({
  selector: "app-recommend",
  templateUrl: "./recommend.component.html",
  imports: [CommonModule, MatProgressSpinnerModule, MatIconModule],
})
export class RecommendComponent {
  private store = inject(Store);
  public isLoading$ = this.store.select(recommendLoadingSelector);
  public recommendedMovies$ = this.store.select(getRecommendListSelector);

  public getRecommend() {
    this.store.dispatch(getRecomendedList());
  }
}

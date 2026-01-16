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
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";

@Component({
  selector: "app-recommend",
  templateUrl: "./recommend.component.html",
  imports: [CommonModule, MatProgressSpinnerModule, MatIconModule],
})
export class RecommendComponent {
  private store = inject(Store);
  public isLoading$ = this.store.select(recommendLoadingSelector);
  public recommendedMovies$ = this.store.select(getRecommendListSelector);

  public createChatBox = createChat({
    webhookUrl:
      "http://127.0.0.1:5678/webhook/97f17847-c211-4ce8-9f7f-165fcc9cc0ff/chat",
    webhookConfig: {
      method: "POST",
    },
  });

  public getRecommend() {
    this.store.dispatch(getRecomendedList());
  }
}

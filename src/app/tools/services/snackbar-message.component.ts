import { Component, Inject } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MAT_SNACK_BAR_DATA } from "@angular/material/snack-bar";
import { ApiResponse } from "./http.services";

@Component({
  selector: "app-snackbar-message",
  standalone: true,
  template: `<div class="flex w-100 items-center justify-start gap-3">
    <mat-icon
      aria-hidden="false"
      class="!w-[3rem]"
      [fontIcon]="data.error ? 'warning' : 'star'"
    ></mat-icon>
    @if (data.error) {
      <div class="grid grid-row">
        <p>Error: {{ data.error }}</p>
        <p>Status: {{ data.statusCode }}</p>
      </div>
    } @else {
      <p>{{ data }}</p>
    }
  </div>`,
  imports: [MatIconModule],
})
export class SnackbarMessageComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: ApiResponse) {}
}

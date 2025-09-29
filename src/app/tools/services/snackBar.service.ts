import { inject, Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackbarMessageComponent } from "./snackbar-message.component";
import { ApiResponse } from "./http.services";

@Injectable({ providedIn: "root" })
export class SnackBarService {
  private _snackBar = inject(MatSnackBar);

  durationInSeconds = 5;

  openSnackBar(data: ApiResponse | string, state: string) {
    this._snackBar.openFromComponent(SnackbarMessageComponent, {
      duration: this.durationInSeconds * 2000,
      data,
      panelClass: `${state === "success" ? "snackBarStateSuccess" : "snackBarStateWarning"}`,
    });
  }
}

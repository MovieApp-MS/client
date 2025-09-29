import { inject, Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { SnackBarService } from "@tools/services/snackBar.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  public snackService = inject(SnackBarService);
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((httpResponseError: HttpErrorResponse) => {
        this.snackService.openSnackBar(
          {
            error: httpResponseError.error.error,
            statusCode: httpResponseError.status,
            data: httpResponseError.url,
            message: httpResponseError.message,
          },
          "warning",
        );
        return throwError(() => httpResponseError);
      }),
    );
  }
}

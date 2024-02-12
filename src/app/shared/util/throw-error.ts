import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

export function handleError(err: HttpErrorResponse): Observable<never> {
  return throwError(() => `${err.error.message}`);
}

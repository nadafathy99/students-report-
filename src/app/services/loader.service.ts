import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loaderSubject = new BehaviorSubject(false);
  public loaderChanges = this.loaderSubject.asObservable();

  public changeLoadingState(state: boolean) {
    this.loaderSubject.next(state);
  }
}

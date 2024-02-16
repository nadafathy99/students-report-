import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreakpointsService {
  constructor() {
    this.checkWidth();
    window.addEventListener('resize', () => this.checkWidth());
  }
  private isXSmall = new BehaviorSubject<boolean>(false);
  public isXSmallChanges = this.isXSmall.asObservable();

  private isSmall = new BehaviorSubject<boolean>(false);
  public isSmallChanges = this.isSmall.asObservable();

  private isMedium = new BehaviorSubject<boolean>(false);
  public isMediumChanges = this.isMedium.asObservable();

  private isLarge = new BehaviorSubject<boolean>(false);
  public isLargeChanges = this.isLarge.asObservable();

  private isExtraLarge = new BehaviorSubject<boolean>(false);
  public isExtraChanges = this.isExtraLarge.asObservable();

  private isXXLarge = new BehaviorSubject<boolean>(false);
  public isXXLargeChanges = this.isXXLarge.asObservable();

  private checkWidth(): void {
    const screenWidth = window.innerWidth;

    this.isXSmall.next(screenWidth < 576);
    this.isSmall.next(screenWidth >= 576 && screenWidth < 768);
    this.isMedium.next(screenWidth >= 768 && screenWidth < 992);
    this.isLarge.next(screenWidth >= 992 && screenWidth < 1200);
    this.isExtraLarge.next(screenWidth >= 1200 && screenWidth < 1400);
    this.isXXLarge.next(screenWidth >= 1400);
  }
}

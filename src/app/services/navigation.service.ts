import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

export enum NavigationState {
  Closed,
  ComparisonList,
  WatchList,
  Basket
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private state: Subject<NavigationState> = new BehaviorSubject(NavigationState.Closed);

  constructor() { }

  observeNavigation(): Observable<NavigationState> {
    return this.state.asObservable();
  }

  change(state: NavigationState) {
    this.state.next(state);
  }
}

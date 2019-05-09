import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

export enum NavigationState {
  Closed,
  UserNavigation,
  ComparisonList,
  WishList,
  Basket
}

@Injectable()
export class NavigationService {

  private state: BehaviorSubject<NavigationState> = new BehaviorSubject(NavigationState.Closed);

  constructor() { }

  observeNavigation(): Observable<NavigationState> {
    return this.state.asObservable();
  }

  change(state: NavigationState) {
    this.state.next(state);
  }

  current(): NavigationState {
    return this.state.getValue();
  }
}

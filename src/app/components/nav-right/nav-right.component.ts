import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationService, NavigationState} from '../../services/navigation.service';
import {Observable, Subject, Subscription} from 'rxjs';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.sass']
})
export class NavRightComponent implements OnInit, OnDestroy {

  public navigation$: Subject<NavigationState> = new Subject<NavigationState>();

  private navigationSubscription: Subscription;

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit() {
    this.navigationSubscription = this.navigationService.observeNavigation().subscribe(state => {
      console.log(state);
      this.navigation$.next(state);
    });
  }

  ngOnDestroy() {
    this.navigationSubscription.unsubscribe();
  }

  shouldShowBasket(state: NavigationState) {
    return state === NavigationState.Basket;
  }

  shouldShowUserNavigation(state: NavigationState) {
    return state === NavigationState.UserNavigation;
  }

  shouldShowWishList(state: NavigationState) {
    return state === NavigationState.WishList;
  }

  shouldShowComparisonList(state: NavigationState) {
    return state === NavigationState.ComparisonList;
  }

  closeNavigation() {
    this.navigationService.change(NavigationState.Closed);
  }
}

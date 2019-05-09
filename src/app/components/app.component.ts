import { Component } from '@angular/core';
import {NavigationService, NavigationState} from '../services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private navigationService: NavigationService) {
  }

  toggleComparisonList() {
    this.navigationService.change(this.navigationService.current() === NavigationState.ComparisonList
      ? NavigationState.Closed
      : NavigationState.ComparisonList);
  }

  toggleWishList() {
    this.navigationService.change(this.navigationService.current() === NavigationState.WishList
      ? NavigationState.Closed
      : NavigationState.WishList);
  }

  toggleUserNavigation() {
    this.navigationService.change(this.navigationService.current() === NavigationState.UserNavigation
      ? NavigationState.Closed
      : NavigationState.UserNavigation);
  }

  toggleBasket() {
    this.navigationService.change(this.navigationService.current() === NavigationState.Basket
      ? NavigationState.Closed
      : NavigationState.Basket);
  }
}

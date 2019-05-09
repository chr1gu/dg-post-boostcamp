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

  showComparisonList() {
    this.navigationService.change(NavigationState.ComparisonList);
  }

  showWatchList() {
    this.navigationService.change(NavigationState.WatchList);
  }

    showBasket() {
    this.navigationService.change(NavigationState.Basket);
  }
}

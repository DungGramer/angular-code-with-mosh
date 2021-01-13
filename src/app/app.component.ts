import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: true,
  }
  onFavoriteChange(eventArgs: FavoriteChangedEventArgs) {
    console.log("h", eventArgs)
  }
}

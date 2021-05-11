import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isClickedMovies = false;
  isClickedPeople = false;

  clickedMovies() {
    this.isClickedMovies = !this.isClickedMovies;
    this.isClickedPeople = false;
  }

  clickedPeople() {
    this.isClickedPeople = !this.isClickedPeople;
    this.isClickedMovies = false;
  }
}

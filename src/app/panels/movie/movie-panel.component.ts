import { Component, OnDestroy, OnInit } from '@angular/core';
import { PanelService } from '../panel.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-panel',
  templateUrl: './movie-panel.component.html',
  styleUrls: ['./movie-panel.component.css'],
})
export class MovieComponent implements OnInit, OnDestroy {
  movies: any[] = [];

  private moviesSub: Subscription;

  constructor(public panelsService: PanelService) {}

  ngOnInit() {
    this.panelsService.getMovies();
    this.moviesSub = this.panelsService
      .getMoviesUpdateListener()
      .subscribe((films: any) => {
        this.movies = films;
        console.log(this.movies);
      });
  }

  ngOnDestroy() {
    this.moviesSub.unsubscribe();
  }
}

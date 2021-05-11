import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PanelService {
  private movies: any[] = [];
  private moviesUpdated = new Subject();

  constructor(private http: HttpClient) {}

  // getMovies() {
  //   return [...this.movies];
  // }

  getMoviesUpdateListener() {
    return this.moviesUpdated.asObservable();
  }

  getMovies() {
    this.http.get('http://localhost:3000/').subscribe((responseData: any) => {
      this.movies = responseData.results;
      this.moviesUpdated.next([...this.movies]);
    });
  }
}

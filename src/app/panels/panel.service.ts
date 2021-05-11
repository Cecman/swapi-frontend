import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PanelService {
  private movies: any[] = [];
  private moviesUpdated = new Subject();
  private characters: any[] = [];
  private updatedCharacters = new Subject();

  constructor(private http: HttpClient) {}

  getMovies() {
    this.http
      .get('http://localhost:3000/films')
      .subscribe((responseData: any) => {
        this.movies = responseData.results;
        this.moviesUpdated.next([...this.movies]);
      });
  }

  getMoviesUpdateListener() {
    return this.moviesUpdated.asObservable();
  }

  getPeople() {
    this.http
      .get('http://localhost:3000/characters')
      .subscribe((responseData: any) => {
        this.characters = responseData.results;
        this.updatedCharacters.next([...this.characters])
      });
  }

  getPeopleUpdateListener() {
    return this.updatedCharacters.asObservable();
  }
}

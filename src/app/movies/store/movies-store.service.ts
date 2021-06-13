import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesStoreService {
  constructor() {}
  private readonly _movieOrder = new BehaviorSubject([]);
  readonly movieOrder$ = this._movieOrder.asObservable();

  private get movieOrder() {
    return this._movieOrder.getValue();
  }

  private set movieOrder(movie) {
    this._movieOrder.next(movie);
  }
  arrangeList(movieOrder) {
    this.movieOrder = [movieOrder];
  }
}

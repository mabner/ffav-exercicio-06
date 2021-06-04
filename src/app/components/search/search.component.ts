import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMovieItem } from 'src/app/movies/models/IMovieItem';
import { MoviesStoreService } from 'src/app/movies/services/movies-store.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() filter = '';

  @Output() movies: Array<IMovieItem> = [];
  popularMovies = [];

  onInputChange(name: string) {
    if (this.popularMovies.length === 0) {
      this.popularMovies = this.movies;
    }

    if (name.trim().length === 0) {
      this.movies = this.popularMovies;
    } else {
      const filter = this.movies.filter((movie) =>
        movie.title.toLowerCase().match(name)
      );
      this.movies = filter;
    }
  }
  movieOrder = '';
  onSelectChange(ordering) {
    this.movieOrderStore.arrangeList(ordering);

    if (this.movieOrder == 'orderVotes') {
      this.movies.sort((first, next) =>
        first.vote_count > next.vote_count
          ? 1
          : next.vote_count > first.vote_count
          ? -1
          : 0
      );
    }

    if (this.movieOrder == 'orderTitle') {
      this.movies.sort((first, next) =>
        first.title > next.title ? 1 : next.title > first.title ? -1 : 0
      );
    }
  }
  constructor(private movieOrderStore: MoviesStoreService) {}

  ngOnInit(): void {
    this.movieOrderStore.orderedList$.subscribe((val) => {
      this.movieOrder = val[0];
    });

    if (typeof this.movieOrder === 'undefined') {
      this.popularMovies = this.movies;
    }
  }
}

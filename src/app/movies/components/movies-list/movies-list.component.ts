import { Component, Input, OnInit } from '@angular/core';
import { IMovieItem } from '../../models/IMovieItem';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  ID: Number;
  BASE_URL_IMAGE = `https://image.tmdb.org/t/p/w200`;
  @Input() movies: Array<IMovieItem> = [];

  constructor(
    private moviesService: MoviesService,

    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((data) => {
      this.movies = data.results;
    });
    this.route.params.subscribe((params) => {
      this.ID = params['id'];
    } );
  }
}

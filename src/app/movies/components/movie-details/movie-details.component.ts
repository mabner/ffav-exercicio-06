import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  BASE_URL_IMAGE = `https://image.tmdb.org/t/p/w200`;
  backdropURL = `https://image.tmdb.org/t/p/original`;
  ID: Number;
  movie: any = {};

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.ID = params['id'];
    });

    this.moviesService.getMovieDetail(this.ID).subscribe((data) => {
      this.movie = data;
    });
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MoviesListComponent } from '../components/movies-list/movies-list.component';
import { MovieItemComponent } from '../components/movie-item/movie-item.component';
import { MoviesService } from '../services/movies.service';
import { MoviesStoreService } from '../services/movies-store.service';

@NgModule({
  declarations: [MoviesListComponent, MovieItemComponent],
  exports: [MoviesListComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [MoviesService, MoviesStoreService],
})
export class MoviesModule {}

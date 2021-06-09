import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from '../services/movies.service';
import { MoviesStoreService } from '../services/movies-store.service';

@NgModule({
  declarations: [],
  exports: [],
  imports: [CommonModule, HttpClientModule],
  providers: [MoviesService, MoviesStoreService],
})
export class MoviesModule {}

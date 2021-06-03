import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../../app.component';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieComponent } from '../../components/movie/movie.component';
import { SearchComponent } from '../../components/search/search.component';
import { MoviesModule } from './movies.module';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    SearchComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, FormsModule, MoviesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

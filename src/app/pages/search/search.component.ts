import { Component, Input, inject, input, signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpAxiosServices } from '@tools/services/http.services';
import { environment } from 'src/environment';
import { MovieCardComponent } from '@tools/movieCard/movie-card.component';
import { Movie } from './domain/movie.entity';
import { Store } from '@ngrx/store';
import { getMovieList } from 'src/app/components/movies/state/movie.actions';
import { MovieStates } from 'src/app/components/movies/state/movie.states';
import { movieList, movieLoading } from 'src/app/components/movies/state/movie.selectors';
import { CommonModule } from '@angular/common';

export interface ApiResponse {
  data: any[];
  statusCode: string;
  message: string;
}

@Component({
  selector: 'app-search',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MovieCardComponent,
    CommonModule
  ],
  templateUrl: './search.component.html',
})
export class SearchComponent {
  private store = inject(Store<MovieStates>);
  
  isLoading$ = this.store.select(movieLoading)
  movieList$ = this.store.select(movieList)

  async getMovies(title: string) {
    this.store.dispatch(getMovieList({title}))
  }
}

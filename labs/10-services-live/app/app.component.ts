import {Component} from '@angular/core';
import {MovieService} from "./movie.service";
import  'rxjs/add/operator/map';

// Component annotation. Let op de injection van providers: []
@Component({
	selector   : 'movie-app',
	templateUrl: 'app/app.html',
})

// Class met properties, array met cities
export class AppComponent {
	// Properties voor de component/class
	public movies: any;
		   currentMovie;

	constructor(private movieService: MovieService) {
	}

	// search movies via live API/OMDbAPI
	searchMovies(keyword) {
		this.movieService.searchMovies(keyword)
			.map(res => res.json())
			.map((movies: any) => movies.Search)
			.subscribe(movieData => {
					this.movies = movieData;				// 1. success handler
				},
				err => console.log(err),						// 2. error handler
				() => console.log('Getting movies complete...')	// 3. complete handler
			)
	}

	// Set current movie to selected movie on click
	setMovie(movie) {
		this.currentMovie = movie;
	}

	// clear current movie
	clearMovie() {
		this.movies       = [];
		this.currentMovie = null;
	}
}
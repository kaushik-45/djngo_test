import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
   data:any;
   private addMovieUrl = 'http://127.0.0.1:8000/api/add_movie/';
   private allMoviesUrl = 'http://127.0.0.1:8000/api/get_movies/';
   private getMovieUrl = 'http://127.0.0.1:8000/api/movie';

  constructor(private http:HttpClient) { }

  cardData:any[]=[]
  addMovie(movie:any){
    return this.http.post(this.addMovieUrl, movie,{ headers: { 'Content-Type': 'application/json' } });
  }

  getAllMovies() {
    return this.http.get(this.allMoviesUrl);
  }

  getMovieDetails(id:number){
    return this.http.get(`${this.getMovieUrl}/${id}`)
  }
}

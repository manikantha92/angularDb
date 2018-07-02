import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  hello = "Hello from the other side of movie search";
movies = [
{title: "Deadpool"},
{title: "Batman"},
{title: "superman"},
{title: "spiderman"},
{title: "black panther"},
{title: "Avengers"}]
  constructor() { }

  ngOnInit() {
fetch(input:'https://api.internationalshowtimes.com/v4/movies/30767?fields=id,title,original_title,release_dates,imdb_id&apikey=ge5a5nBfoor2rhG1eA2FseyYVpNh5kbW')
.then(onfulfilled: response => console.log(response));
  }

}

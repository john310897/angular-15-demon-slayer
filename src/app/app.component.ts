import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  listItems: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getContents();
  }

  async getContents() {
    interface myData {
      Search: any[];
    }
    const apiKey = 'a20f9de';
    const i = 'tt3896198';
    this.http
      .get(`https://www.omdbapi.com/?i=${i}&apikey=${apiKey}&s=demon%20slayer`)
      .subscribe((data) => {
        this.listItems = (data as myData)?.Search;
      });
  }
}

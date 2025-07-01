import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'me';
  userlist : any[] = [];

  http=inject(HttpClient);
  getalluser() {
    this.http.get('http://localhost:3000/user/').subscribe((data:any)=> {
      console.log(data);
      this.userlist = data;
    });
  }
}

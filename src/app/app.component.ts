import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private http: HttpClient){
    http.get('api/user').subscribe(console.log)
  }
}

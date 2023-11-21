import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'first-project';

  constructor(private http: HttpClient, private route: Router) {}

  ngOnInit(): void {
    this.http
      .get<any[]>('https://wizard-world-api.herokuapp.com/Elixirs')
      .pipe(
        map((value) =>
          value.map((a) => {
            return { id: a.id, name: a.name };
          }),
        ),
      )
      .subscribe((result) => console.log(result));
  }
}

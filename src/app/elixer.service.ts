import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Elixer } from './elixer.model';

@Injectable({
  providedIn: 'root',
})
export class ElixerService {
  constructor(private http: HttpClient) {}
  getAllElixer(): Observable<Elixer[]> {
    return this.http
      .get<any[]>('https://wizard-world-api.herokuapp.com/Elixirs')
      .pipe(
        map((value) =>
          value.map(
            (a) =>
              new Elixer(
                a.name,
                a.effect,
                a.sideEffects,
                a.caracteristics,
                a.time,
                a.dificulty,
              ),
          ),
        ),
      );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Elixer } from './elixer.model';

@Injectable({
  providedIn: 'root',
})
export class ElixerService {
  elixersArray: Elixer[] = [];

  constructor(private http: HttpClient) {}

  getAllElixer(): Observable<Elixer[]> {
    return this.http.get<Elixer[]>(
      'https://wizard-world-api.herokuapp.com/Elixirs',
    );
  }

  getElixerById(id: string) {
    return this.getAllElixer().pipe(
      map((responseData) => {
        for (const id in responseData) {
          this.elixersArray.push({ ...responseData[id], id: id });
        }
        return this.elixersArray.filter((elixer) => elixer.id === id);
      }),
    );
  }
}

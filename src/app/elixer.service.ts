import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Elixer } from './elixer.model';

@Injectable({
  providedIn: 'root',
})
export class ElixerService {

  constructor(private http: HttpClient) {}

  getAllElixer(): Observable<Elixer[]> {
    return this.http
      .get<Elixer[]>('https://wizard-world-api.herokuapp.com/Elixirs')

  }
}

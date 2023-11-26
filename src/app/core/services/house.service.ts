import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { House } from '../models/house.model';

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  constructor(private http: HttpClient) {}

  getAllHouses(): Observable<House[]> {
    return this.http.get<House[]>(
      'https://wizard-world-api.herokuapp.com/Houses',
    );
  }
}

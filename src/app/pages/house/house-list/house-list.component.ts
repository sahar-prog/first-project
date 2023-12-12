import { Component } from '@angular/core';
import { HouseService } from 'src/app/core/services/house.service';

@Component({
  selector: 'app-house',
  templateUrl: './house-list.component.html',
})
export class HouseListComponent {
  constructor(private houseService: HouseService) {}

  houseList$ = this.houseService.getAllHouses();
}

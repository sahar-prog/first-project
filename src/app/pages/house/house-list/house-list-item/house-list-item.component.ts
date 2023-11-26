import { Component, Input } from '@angular/core';
import { House } from 'src/app/core/models/house.model';

@Component({
  selector: 'app-house-list-item',
  templateUrl: './house-list-item.component.html',
})
export class HouseListItemComponent {
  @Input() house!: House;
}

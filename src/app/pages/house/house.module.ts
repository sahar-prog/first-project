import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseRoutingModule } from './house-routing.module';
import { HouseListComponent } from './house-list/house-list.component';
import { HouseListItemComponent } from './house-list/house-list-item/house-list-item.component';

const SHARED = [CommonModule, HouseRoutingModule];

const COMPONENT = [HouseListComponent, HouseListItemComponent];

@NgModule({
  declarations: [...COMPONENT],
  imports: [...SHARED],
})
export class HouseModule {}

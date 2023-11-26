import { NgModule } from '@angular/core';
import { HouseService } from './services/house.service';
import { HttpClientModule } from '@angular/common/http';

const MODULES = [HttpClientModule];
const SERVICESES = [HouseService];

@NgModule({
  imports: [...MODULES],
  providers: [...SERVICESES],
})
export class CoreModule {}

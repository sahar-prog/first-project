import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { elixerItemComponent } from './elixer-item/elixer-item.component';
import { elixersListComponent } from './elixers-list/elixers-list.component';
import { ElixerComponent } from './elixers-list/elixer/elixer.component';
import { elixerDetailsComponent } from './elixers-list/elixer-details/elixer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    elixerItemComponent,
    elixersListComponent,
    ElixerComponent,
    elixerDetailsComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

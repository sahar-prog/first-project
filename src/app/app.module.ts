import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ElixersListComponent } from './pages/elixers-list/elixers-list.component';
import { ElixerComponent } from './pages/elixers-list/elixer/elixer.component';

@NgModule({
  declarations: [
    AppComponent,
    ElixersListComponent,
    ElixerComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

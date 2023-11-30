import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { elixerItemComponent } from './elixer-item/elixer-item.component';
import { elixersListComponent } from './elixers-list/elixers-list.component';
import { elixerDetailsComponent } from './elixers-list/elixer-details/elixer-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'elixers', pathMatch: 'full' },
  { path: 'elixers', component: elixersListComponent },
  { path: 'elixers/:id', component: elixerItemComponent },
  { path: 'elixer-details', component: elixerDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

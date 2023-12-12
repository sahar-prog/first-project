import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ElixersListComponent } from './pages/elixers-list/elixers-list.component';

const routes: Routes = [{ path: '', component: ElixersListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

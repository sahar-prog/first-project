import { Component } from '@angular/core';
import { ElixerService } from 'src/app/core/services/elixer.service';

@Component({
  selector: 'app-elixersList',
  templateUrl: './elixers-list.component.html',
})
export class ElixersListComponent {
  constructor(private elixerSer: ElixerService) {}
  elixer$ = this.elixerSer.getAllElixer();
}

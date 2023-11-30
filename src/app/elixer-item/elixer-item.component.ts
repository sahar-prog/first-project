import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElixerService } from '../elixer.service';

@Component({
  selector: 'app-elixerItem',
  templateUrl: './elixer-item.component.html',
  styleUrls: ['./elixer-item.component.scss'],
})
export class elixerItemComponent {
  constructor(
    private elixerSer: ElixerService,
    private route: ActivatedRoute,
  ) {}

  id = this.route.snapshot.params['id'];
  elixer$ = this.elixerSer.getElixerById(this.id);
}

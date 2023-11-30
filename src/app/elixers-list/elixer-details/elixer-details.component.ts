import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Elixer } from 'src/app/elixer.model';
import { ElixerService } from 'src/app/elixer.service';
@Component({
  selector: 'app-elixersList',
  templateUrl: './elixer-details.component.html',
  styleUrls: ['./elixer-details.component.scss'],
})
export class elixerDetailsComponent {
  @Input() elixer!: Elixer;
  selectedElixer?: Elixer;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private elixerSer: ElixerService,
  ) {}
}

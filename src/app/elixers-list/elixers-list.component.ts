import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElixerService } from '../elixer.service';
import { Elixer } from '../elixer.model';

@Component({
  selector: 'app-elixersList',
  templateUrl: './elixers-list.component.html',
  styleUrls: ['./elixers-list.component.scss'],
})
export class elixersListComponent implements OnInit {
  selectedElixer?: Elixer;
  constructor(
    private elixerSer: ElixerService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  elixer$ = this.elixerSer.getAllElixer();

  ngOnInit() {}

  onSelect(elixer: Elixer) {
    this.selectedElixer = elixer;
  }
}

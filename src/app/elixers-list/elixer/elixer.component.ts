import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Elixer } from 'src/app/elixer.model';

@Component({
  selector: 'app-elixer',
  templateUrl: './elixer.component.html',
  styleUrls: ['./elixer.component.scss'],
})
export class ElixerComponent {
  @Input() elixer!: Elixer;
  @Input() selectedElixer?: Elixer;
  constructor(private router: Router) {}

  onSelect(elixer: Elixer) {
    this.selectedElixer = elixer;
    // this.router.navigate(['/elixer-details']);
  }
}

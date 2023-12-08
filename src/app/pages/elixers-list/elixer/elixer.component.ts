import { Component, Input } from '@angular/core';
import { Elixer } from 'src/app/core/models/elixer.model';

@Component({
  selector: 'app-elixer',
  templateUrl: './elixer.component.html',
})
export class ElixerComponent {
  @Input() elixer!: Elixer;
  constructor() {}
}

import { Component, OnInit } from '@angular/core';
import { ElixerService } from './elixer.service';
import { Elixer } from './elixer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'first-project';
  elixersList!: Elixer[];
  constructor(private elixerSer: ElixerService) {}

  ngOnInit() {
    this.elixerSer.getAllElixer().subscribe((data) => {
      this.elixersList = data;
      console.log(this.elixersList);
    });
  }
}

import { Component, OnDestroy, OnInit, effect } from '@angular/core';
import { ElixerService } from './elixer.service';
import { Elixer } from './elixer.model';
import { map, Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'first-project';
  elixersList: Elixer[] = [];
  elixer!: Elixer;
  subscription!: Subscription;

  constructor(private elixerSer: ElixerService) {}

  ngOnInit() {
    this.subscription = this.elixerSer.getAllElixer().subscribe(
      (elixer) =>
        (this.elixersList = elixer.map(
          (value) =>
            (this.elixer = {
              name: value.name,
              effect: value.effect,
              sideEffects: value.sideEffects,
              caracteristics: value.caracteristics,
              time: value.time,
              dificulty: value.dificulty,
            }),
        )),
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
}

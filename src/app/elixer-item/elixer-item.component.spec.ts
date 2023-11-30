import { ComponentFixture, TestBed } from '@angular/core/testing';

import { elixerItemComponent } from './elixer-item.component';

describe('GetElixerByIdComponent', () => {
  let component: elixerItemComponent;
  let fixture: ComponentFixture<elixerItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [elixerItemComponent],
    });
    fixture = TestBed.createComponent(elixerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

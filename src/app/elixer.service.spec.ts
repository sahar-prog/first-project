import { TestBed } from '@angular/core/testing';

import { ElixerService } from './elixer.service';

describe('ElixerService', () => {
  let service: ElixerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElixerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

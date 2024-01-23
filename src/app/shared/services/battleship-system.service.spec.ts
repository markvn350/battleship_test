import { TestBed } from '@angular/core/testing';

import { BattleshipSystemService } from './battleship-system.service';

describe('BattleshipSystemService', () => {
  let service: BattleshipSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BattleshipSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

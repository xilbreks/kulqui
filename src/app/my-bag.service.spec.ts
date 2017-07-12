import { TestBed, inject } from '@angular/core/testing';

import { MyBagService } from './my-bag.service';

describe('MyBagService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyBagService]
    });
  });

  it('should be created', inject([MyBagService], (service: MyBagService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GenderServiceService } from './gender-service.service';

describe('Service: GenderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenderServiceService]
    });
  });

  it('should ...', inject([GenderServiceService], (service: GenderServiceService) => {
    expect(service).toBeTruthy();
  }));
});

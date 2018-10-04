import { TestBed, inject } from '@angular/core/testing';

import { PersonalApiCRUDService } from './personal-api-crud.service';

describe('PersonalApiCRUDService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonalApiCRUDService]
    });
  });

  it('should be created', inject([PersonalApiCRUDService], (service: PersonalApiCRUDService) => {
    expect(service).toBeTruthy();
  }));
});

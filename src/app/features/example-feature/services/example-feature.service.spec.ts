import { TestBed } from '@angular/core/testing';

import { ExampleFeatureService } from './example-feature.service';

describe('ExampleFeatureService', () => {
  let service: ExampleFeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleFeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

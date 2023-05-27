import { TestBed } from '@angular/core/testing';

import { AnalysisApiService } from './analysis.api';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AnalysisApiService', () => {
  let service: AnalysisApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnalysisApiService, HttpClient, HttpHandler],
    });
    service = TestBed.inject(AnalysisApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

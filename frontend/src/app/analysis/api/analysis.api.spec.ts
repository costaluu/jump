import { TestBed } from '@angular/core/testing';

import { AnalysisApiService } from './analysis.api';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { catchError, of, take } from 'rxjs';

fdescribe('AnalysisApiService', () => {
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

  it('should return undefined if name is not Ad+', () => {
    service
      .fetchProcessosDataByName('99')
      .pipe(
        catchError(() => {
          return of({ cases: undefined });
        })
      )
      .subscribe((value) => {
        expect(value.cases).toBeUndefined();
      });
  });
});

import { TestBed } from '@angular/core/testing';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { FluxogramaApiService } from './fluxograma.api';

describe('FluxogramaApiService', () => {
  let service: FluxogramaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FluxogramaApiService, HttpClient, HttpHandler],
    });
    service = TestBed.inject(FluxogramaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

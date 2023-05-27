import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Processo } from '../types/Processo';
import env from '../../../../env';

@Injectable()
export class AnalysisApiService {
  constructor(private readonly http: HttpClient) {}

  public fetchProcessosDataByName(name: string) {
    return this.http.post<{ cases: Processo[] }>(
      `${env.baseURL}/api/processos/`,
      {
        movimento: name,
      }
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stats from '../types/stats';
import env from 'env';

@Injectable()
export class FluxogramaApiService {
  constructor(private readonly http: HttpClient) {}

  public fetchStats() {
    return this.http.get<Stats[]>(`${env.baseURL}/api/processos/stats/`);
  }

  public fetchSvgChart() {
    return this.http.get<string>(`${env.baseURL}/api/visualization/image/`, {
      responseType: 'text' as 'json',
    });
  }
}

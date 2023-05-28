import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Processo } from '../types/Processo';
import env from '../../../../env';
import { Observable } from 'rxjs';

@Injectable()
export class AnalysisApiService {
  constructor(private readonly http: HttpClient) {}

  public fetchProcessosDataByName(name: string) {
    let reg = new RegExp(/A\d+/, 'gm');

    if (name == '' || reg.exec(name) == null) {
      return new Observable<{ cases: Processo[] }>((observer) => {
        observer.error(new Error('Invalid moviment name'));
      });
    }

    return this.http.post<{ cases: Processo[] }>(
      `${env.baseURL}/api/processos/`,
      {
        movimento: name,
      }
    );
  }
}

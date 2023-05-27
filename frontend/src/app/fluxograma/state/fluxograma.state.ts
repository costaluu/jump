import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Stats from '../types/stats';

@Injectable()
export class FluxogramaState {
  private readonly statsData = new BehaviorSubject<Stats[]>([]);
  private readonly svgChartData = new BehaviorSubject<string>('');

  public getStatsData() {
    return this.statsData.asObservable();
  }

  public setStatsData(statsData: Stats[]) {
    this.statsData.next(statsData);
  }

  public getsvgChart() {
    return this.svgChartData.asObservable();
  }

  public setsvgChart(svgChart: string) {
    this.svgChartData.next(svgChart);
  }
}

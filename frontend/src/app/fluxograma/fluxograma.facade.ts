import { Injectable } from '@angular/core';
import { FluxogramaState } from './state/fluxograma.state';
import { FluxogramaApiService } from './api/fluxograma.api';

@Injectable()
export class FluxogramaFacade {
  public constructor(
    private readonly state: FluxogramaState,
    private readonly api: FluxogramaApiService
  ) {}

  public fetchStats() {
    this.api.fetchStats().subscribe((processosData) => {
      this.state.setStatsData(processosData);
    });
  }

  public getStats() {
    return this.state.getStatsData();
  }

  public fetchSvgChart() {
    this.api.fetchSvgChart().subscribe((svgChart) => {
      this.state.setsvgChart(svgChart);
    });
  }

  public getSvgChart() {
    return this.state.getsvgChart();
  }
}

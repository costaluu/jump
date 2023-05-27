import { Injectable } from '@angular/core';
import { AnalysisState } from './state/analysis-state/analysis.state';
import { AnalysisApiService } from './api/analysis.api';

@Injectable()
export class AnalysisFacade {
  public constructor(
    private readonly state: AnalysisState,
    public readonly api: AnalysisApiService
  ) {}

  public fetchProcessosData(name: string) {
    this.api.fetchProcessosDataByName(name).subscribe((processosData) => {
      this.state.setProcessoData(processosData.cases);
    });
  }

  public getProcessoData() {
    return this.state.getProcessoData();
  }
}

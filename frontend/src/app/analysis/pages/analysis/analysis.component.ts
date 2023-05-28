import { Component } from '@angular/core';
import { Processo } from '../../types/Processo';
import { AnalysisFacade } from '../../analysis.facade';
import { ActivatedRoute } from '@angular/router';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss'],
})
export class AnalysisComponent {
  selectedMovimento: string | null = null;
  processoList: Processo[] | undefined = [];

  constructor(public facade: AnalysisFacade, private route: ActivatedRoute) {
    this.selectedMovimento = this.route.snapshot.paramMap.get('name');

    facade.api
      .fetchProcessosDataByName(this.selectedMovimento ?? '')
      .pipe(
        catchError(() => {
          return of({ cases: undefined });
        })
      )
      .subscribe((processoData) => {
        this.processoList = processoData.cases;
      });
  }
}

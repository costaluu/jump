import { Component } from '@angular/core';
import { Processo } from '../../types/Processo';
import { AnalysisFacade } from '../../analysis.facade';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss'],
})
export class AnalysisComponent {
  selectedMovimento: string | null = null;
  processoList: Processo[] = [];

  constructor(public facade: AnalysisFacade, private route: ActivatedRoute) {
    this.selectedMovimento = this.route.snapshot.paramMap.get('name');

    console.log(this.selectedMovimento);

    facade.api
      .fetchProcessosDataByName(this.selectedMovimento ?? '')
      .subscribe((processoData) => {
        console.log(processoData.cases);
        this.processoList = processoData.cases;
      });
  }
}

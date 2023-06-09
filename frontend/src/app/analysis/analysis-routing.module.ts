import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisComponent } from './pages/analysis/analysis.component';

const routes: Routes = [
  {
    path: 'analysis/:name',
    component: AnalysisComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalysisRoutingModule {}

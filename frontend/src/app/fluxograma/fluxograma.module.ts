import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FluxogramaComponent } from './pages/fluxograma/fluxograma.component';
import { FluxogramaRoutingModule } from './fluxograma-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { LucideAngularModule, AlarmCheck, Edit, Info } from 'lucide-angular';
import { FluxogramaState } from './state/fluxograma.state';
import { FluxogramaApiService } from './api/fluxograma.api';
import { FluxogramaFacade } from './fluxograma.facade';
import { statsInitializerProvider } from './fluxograma.initializer';
import { StatsComponent } from './components/stats/stats.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  providers: [
    FluxogramaState,
    FluxogramaApiService,
    FluxogramaFacade,
    statsInitializerProvider,
  ],
  declarations: [FluxogramaComponent, StatsComponent],
  imports: [
    LucideAngularModule.pick({ AlarmCheck, Edit, Info }),
    CommonModule,
    MatIconModule,
    MatSortModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    FluxogramaRoutingModule,
    MatTooltipModule,
  ],
})
export class FluxogramaModule {}

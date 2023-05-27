import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FluxogramaComponent } from './fluxograma.component';
import { FluxogramaFacade } from '../../fluxograma.facade';
import { FluxogramaState } from '../../state/fluxograma.state';
import { FluxogramaApiService } from '../../api/fluxograma.api';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { StatsComponent } from '../../components/stats/stats.component';
import { Combine, Group, Info, LucideAngularModule } from 'lucide-angular';

describe('FluxogramaPage', () => {
  let component: FluxogramaComponent;
  let fixture: ComponentFixture<FluxogramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LucideAngularModule.pick({ Combine, Group, Info })],
      declarations: [FluxogramaComponent, StatsComponent],
      providers: [
        FluxogramaFacade,
        FluxogramaState,
        FluxogramaApiService,
        HttpClient,
        HttpHandler,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FluxogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

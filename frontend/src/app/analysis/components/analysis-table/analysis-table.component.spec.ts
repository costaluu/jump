import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisTableComponent } from './analysis-table.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AnalysisTableComponent', () => {
  let component: AnalysisTableComponent;
  let fixture: ComponentFixture<AnalysisTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        BrowserAnimationsModule,
      ],
      declarations: [AnalysisTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnalysisTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

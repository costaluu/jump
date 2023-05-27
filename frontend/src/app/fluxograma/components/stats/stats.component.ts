import { Component, Input } from '@angular/core';
import Stats from '../../types/stats';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent {
  @Input() stats: Stats[] = [];
}

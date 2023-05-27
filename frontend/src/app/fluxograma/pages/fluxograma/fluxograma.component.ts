import { AfterViewInit, Component } from '@angular/core';
import Stats from '../../types/stats';
import { FluxogramaFacade } from '../../fluxograma.facade';
import * as d3 from 'd3';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fluxograma',
  templateUrl: './fluxograma.component.html',
  styleUrls: ['./fluxograma.component.scss'],
})
export class FluxogramaComponent implements AfterViewInit {
  stats: Stats[] = [];
  svgChart: string = '';

  constructor(public facade: FluxogramaFacade, private router: Router) {
    facade.getStats().subscribe((stats) => {
      this.stats = stats;
    });

    facade.getSvgChart().subscribe((svgChart) => {
      this.svgChart = svgChart;
      this.renderChart();
    });
  }

  ngAfterViewInit(): void {
    this.renderChart();
  }

  renderChart() {
    if (this.svgChart != '') {
      const router = this.router;
      const container = d3.select('#svg-container').html(this.svgChart);
      const nodes = container.selectAll('g.node');

      nodes.each(function () {
        const node = d3.select(this);
        const title = node.select('text');

        const movimento = title.text().trim();

        const x = parseInt(title.attr('x'));
        const y = parseInt(title.attr('y'));

        node
          .append('image')
          .attr(
            'xlink:href',
            'https://cdn-icons-png.flaticon.com/512/1810/1810852.png'
          ) // Replace with your desired image URL
          .attr('width', '16') // Replace with your desired image width
          .attr('height', '16') // Replace with your desired image height
          .attr('x', x - 65) // Replace with your desired image x-coordinate
          .attr('y', y - 5)
          .style('cursor', 'pointer')
          .on('click', () => {
            router.navigate([`/analysis/${movimento}`]);
            console.log(movimento);
          });
      });
    }
  }
}

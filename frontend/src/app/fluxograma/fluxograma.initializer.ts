import { APP_INITIALIZER } from '@angular/core';
import { FluxogramaFacade } from './fluxograma.facade';

export const fluxogramaInitializer =
  (fluxogramaFacade: FluxogramaFacade) => () => {
    console.log('chamou');
    fluxogramaFacade.fetchStats();
    fluxogramaFacade.fetchSvgChart();
  };

export const statsInitializerProvider = {
  provide: APP_INITIALIZER,
  useFactory: fluxogramaInitializer,
  multi: true,
  deps: [FluxogramaFacade],
};

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoTiburonn',
})
export class EstadoTiburonnPipe implements PipeTransform {
  transform(status: number): string {
    switch (status) {
      case 1:
        return 'Preocupación menor';
      case 2:
        return 'Vulnerable';
      case 3:
        return 'Peligro de extinción';
      default:
        return 'Status tiburón';
    }
  }
}

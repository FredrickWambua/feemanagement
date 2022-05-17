import { Pipe, PipeTransform } from '@angular/core';
import { FeemanagerComponent } from './feemanager/feemanager.component';

@Pipe({
  name: 'filtering'
})
export class FilteringPipe implements PipeTransform {

  transform(balance: number): void {


  }

}

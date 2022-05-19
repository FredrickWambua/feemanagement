import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtering'
})
export class FilteringPipe implements PipeTransform {

  transform(data:any): any {
    if(data.balance<0){
      return data  
    }   

  }

}

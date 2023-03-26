import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string,args:number): unknown {
    if(!value){
      return null;
    }else{
      return value.substring(0,args)
    }
    
  }

}

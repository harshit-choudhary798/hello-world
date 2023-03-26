import { TitleCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    
    if(!value){
      return null;
    }else{
      let value1 = value.split(" ");
      let titleCasedString = value1.map(function(word,index) {

        if (index === 0 && word.toLowerCase() === "the") {
          return "The";
        }else if(index>0 && word.toLowerCase()=== "the"){
          return "the";
        }
        if(word.toLowerCase()==="of"){
          return "of"
        }        
        
        // const first = word.slice(0, 1).toUpperCase();
        //we use below code instead of word[0] because [0] only works with ascii code alphabets but slice can work with anything like emojis
        var first = word.slice(0, 1).toUpperCase();
        var remaining = word.slice(1).toLowerCase();
        const total = first + remaining;
        return total;
      }).join(" ");
      return titleCasedString;
  }
  
  }
  
}

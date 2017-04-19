import { element } from 'protractor';
import { Todo } from './todo';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(value: Todo[], args?: string): Todo[] {
    if(args === "Active") return value.filter(element => element.isCompleted === false);
    else if (args ==="Completed") return  value.filter(element => element.isCompleted === true);
    else return value;

  }

}

import { Todo } from './todo';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  inputHint: string = "What needs to be done?"
  // todos: any[] = [];
  todos:Todo[] =[];
   content:string;
  isChecked: boolean = false;

  AddItemToTodosArray($event: KeyboardEvent): void {
    if ($event.keyCode === 13) {
      if (($event.target as HTMLInputElement).value !== "") {
        this.content = ($event.target as HTMLInputElement).value;
        this.todos.push({content:this.content, isCompleted:false});
        this.content = '';
      }
    }
  }

  ChangeChecked(todo:Todo){
    todo.isCompleted = ! todo.isCompleted;
  }
}

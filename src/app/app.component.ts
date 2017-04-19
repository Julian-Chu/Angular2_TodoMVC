import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  inputHint: string = "What needs to be done?"
  todos: any[] = [];
  todo: string;
  
  AddItemToTodosArray($event: KeyboardEvent): void {
    if ($event.keyCode === 13) {
      this.todo = ($event.target as HTMLInputElement).value;
      this.todos.push(this.todo);
      this.todo = '';
    }

  }
}

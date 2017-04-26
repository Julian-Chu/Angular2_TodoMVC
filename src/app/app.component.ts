import { RequestOptions, Response, Http, Headers } from '@angular/http';
import { TodosService } from './todos.service';
import { Todo } from './todo';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }


  title = 'app works!';
  inputHint: string = "What needs to be done?"
  // todos: any[] = [];
  todos: any[] = [];
  // todos: Observable<Todo[]>;
  content: string;
  isChecked: boolean = false;

  sortBy: string;


  requestOptions: RequestOptions = new RequestOptions({
    headers: new Headers(
      { 'Authorization': 'token 5b4e3144-0e67-4865-9f02-35821b2f4677', 'Content-Type': 'application/json' })
  });
  constructor(private todosvc: TodosService, private _http: Http) {
    // this.todos$ = todosvc.getTodos();
    this.todosvc.getTodos().subscribe(rsp => {
      this.todos = rsp.json();
      this.todosvc.todos = this.todos;
    })
  }
  AddTodo($event: HTMLInputElement): void {
    if ($event.value) {
      this.todos = [...this.todos, { content: this.content, isCompleted: false }];
      this.todosvc.todos = this.todos;
      this.content = '';
    }
  }

  ChangeCompleted(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
    this.todos = [...this.todos];
    this.todosvc.todos = this.todos;
  }
  ClearCompleted() {
    this.todos = this.todos.filter(todo => todo.isCompleted == false);
    this.todosvc.todos = this.todos;
  }
  FilterTodos(sortBy: string): void {
    this.sortBy = sortBy;
  }
  MarkedAllAsCompleted() {
    this.todos.map(e => e.isCompleted = true);
    this.todosvc.todos = this.todos;
  }
  deleteTodoItem(item: Todo) {
    this.todos = this.todos.filter(e => e != item);
    this.todosvc.todos = this.todos;
  }
}

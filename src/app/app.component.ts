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
      { 'Authorization': 'token 5b4e3144-0e67-4865-9f02-35821b2f4677', 'Content-Type':'application/json' })
  });
  constructor(private todosvc: TodosService, private _http: Http) {
    // this.todos$ = todosvc.getTodos();
    this.todosvc.getTodos().subscribe(rsp => {
      this.todos = rsp.json();
      console.log(rsp.json())
    })
  }

  updateTodos() {
    this._http.post('./me/TodoMVC', this.todos, this.requestOptions)
      .subscribe(rsp => console.log('更新完成！ ', rsp.json()));

  }
  AddItemToTodosArray($event: KeyboardEvent): void {
    if ($event.keyCode === 13) {
      if (($event.target as HTMLInputElement).value !== "") {
        this.content = ($event.target as HTMLInputElement).value;
        // this.todos.push({ content: this.content, isCompleted: false });
        this.todos = [...this.todos, { content: this.content, isCompleted: false }];
        this.content = '';
        this.updateTodos();
      }
    }
  }

  ChangeChecked(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
  }

  ClearCompleted() {
    this.todos = this.todos.filter(todo => todo.isCompleted == false);
    this.updateTodos();
  }

  FilterTodos(sortBy: string): void {
    this.sortBy = sortBy;
  }

  MarkedAllAsCompleted() {
    this.todos.map(e => e.isCompleted = true);
  }

  deleteTodoItem(item: Todo) {
    this.todos = this.todos.filter(e => e != item);
    this.updateTodos();
  }



}

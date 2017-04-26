import { Todo } from './todo';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs';

@Injectable()
export class TodosService {
  private Url = './me/TodoMVC';
    requestOptions: RequestOptions = new RequestOptions({
    headers: new Headers(
      { 'Authorization': 'token 5b4e3144-0e67-4865-9f02-35821b2f4677', 'Content-Type':'application/json' })
  });
  constructor(private http:Http) { }

  getTodos():Observable<Response>{
    console.log('getTodos');
    return this.http.get(this.Url, this.requestOptions);
  }


  addNewTodo(){


  }

  deleteTodo(){

  }

}

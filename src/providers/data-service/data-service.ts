import { IDataService } from './../../interfaces/IDataService';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/rx';

@Injectable()
export class DataServiceProvider implements IDataService {
  todos: any[] = [];

  constructor(public http: Http) { }

  getTodo() {
    return this.http.get('http://localhost:3000/posts')
      .map((response: any) => response.json());
  }

  addTodo(todo) {
    return this.http.post('http://localhost:3000/posts', todo)
      .map((response: any) => {
        return response.json()
      });
    //this.todos = [...this.todos, todo];
  }

  deleteTodo(todo: any) {
    return this.http.delete(`http://localhost:3000/posts/${todo.id}`);
    // this.todos = this.todos.filter((x) => {
    //   return todo !== x;
    // });
  }

  toggleTodo(todo: any) {
    return this.http.put(`http://localhost:3000/posts/${todo.id}`, todo);
  }

  searchTodos(searchQuery: string) {
    if (searchQuery) {
      return this.http.get(`http://localhost:3000/posts?title_like=${searchQuery}`)
        .map((response: any) => {
          return response.json();
        });
    }
    return this.getTodo();
    // return this.todos.filter((x) => {
    //   return (x.title.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1);
    // });
  }

}

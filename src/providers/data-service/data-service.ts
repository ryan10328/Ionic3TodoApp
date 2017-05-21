import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataServiceProvider {
  todos: any[] = [];
  constructor(public http: Http) { }

  addTodo(todo) {
    this.todos = [...this.todos, todo];
  }

  deleteTodo(todo) {
    this.todos = this.todos.filter((x) => {
      return todo !== x;
    });
  }

  searchTodos(searchQuery: string) {
    return this.todos.filter((x) => {
      return (x.title.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1);
    });
  }

}

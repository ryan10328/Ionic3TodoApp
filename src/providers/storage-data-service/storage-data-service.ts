import { Observable } from 'rxjs/Observable';
import { BaseDataService } from './../../interfaces/IDataService';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/rx';
import { Storage } from '@ionic/storage';

@Injectable()
export class StorageDataServiceProvider extends BaseDataService {
  todos: any[] = [];
  constructor(private storage: Storage) {
    super();

    // 如果 Storage 裡面完全沒有東西 就預設一個空陣列
    let promise = this.storage.get('todos');
    promise.then((response) => {
      if (!response) {
        this.storage.set('todos', []);
      }
      this.todos = response;
    })

  }

  getTodo() {
    return Observable.fromPromise(this.storage.get('todos'))
      .map((response: any) => {
        this.todos = response;
        return this.todos;
      });
  }

  addTodo(todo: any) {
    return Observable.fromPromise(this.storage.get('todos'))
      .map((response: any[]) => {
        todo.id = this.getGuid();
        return <any[]>[...response, todo];
      })
      .concatMap((data: any[]) => Observable.fromPromise(this.storage.set('todos', data)))
  }

  deleteTodo(todo: any) {
    return Observable.fromPromise(this.storage.get('todos'))
      .map((response: any[]) => {
        return response.filter((x: any) => {
          return x.id !== todo.id;
        });
      })
      .concatMap((data: any[]) => Observable.fromPromise(this.storage.set('todos', data)))
  }

  toggleTodo(todo: any) {
    return Observable.fromPromise(this.storage.get('todos'))
      .map((response: any[]) => {
        for (let item of response) {
          if (item.id === todo.id) {
            item.done = todo.done;
            break;
          }
        }

        return response;
      })
      .concatMap((data: any[]) => Observable.fromPromise(this.storage.set('todos', data)))
  }

  searchTodos(searchQuery: string) {
    if (searchQuery) {
      return Observable.fromPromise(this.storage.get('todos'))
        .map((response: any) => {
          let result = response;
          return result.filter((x) => {
            return (x.title.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1);
          })
        });
    }

    return this.getTodo();

  }

  private getGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}

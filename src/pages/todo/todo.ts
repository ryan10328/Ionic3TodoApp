import { StorageDataServiceProvider } from './../../providers/storage-data-service/storage-data-service';
// import { DataServiceProvider } from './../../providers/data-service/data-service';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
})
export class TodoPage {
  todos: any[] = [];
  searchQuery: string;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private dataService: StorageDataServiceProvider) {
    this.dataService.getTodo().subscribe((response: any) => {
      this.todos = response
    });

  }

  searchTodos() {
    // this.todos = this.dataService.searchTodos(this.searchQuery);
    this.dataService.searchTodos(this.searchQuery).subscribe((response) => {
      this.todos = response;
    });
  }

  toggleTodo(item) {
    this.dataService.toggleTodo(item).subscribe(() => {
      this.dataService.getTodo().subscribe((data) => {
        this.todos = data;
      });
    });
  }

  addTodo() {
    let alert = this.alertCtrl.create({
      title: '提示',
      message: '請輸入待辦事項',
      inputs: [
        { name: 'todo', placeholder: '待辦事項內容', type: 'text' }
      ],
      buttons: [
        {
          text: '新增', handler: data => {
            if (data) {
              this.dataService.addTodo({ title: data.todo, done: false })
                .subscribe(() => {
                  this.dataService.getTodo().subscribe((data) => {
                    this.todos = data;
                  });
                });
            }
          }
        },
        {
          text: '取消',
          role: 'cancel'
        }
      ]
    });
    alert.present();
  }

  deleteTodo(item) {
    let alert = this.alertCtrl.create({
      title: '提示',
      message: '請問您確認要刪除嗎?',
      buttons: [
        {
          text: '是', handler: () => {
            this.dataService.deleteTodo(item).subscribe(() => {
              this.dataService.getTodo().subscribe((data) => {
                this.todos = data;
              });
            });
          }
        },
        { text: '否', role: 'cancel' }
      ]
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoPage');
  }

}

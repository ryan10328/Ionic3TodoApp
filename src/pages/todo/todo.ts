import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
})
export class TodoPage {
  todos: any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.todos = [
      { title: 'Eat breakfast.', done: false },
      { title: 'Ionic 3 tutorial', done: false }
    ];
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
              this.todos = [...this.todos, { title: data.todo, done: false }];
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
            this.todos = this.todos.filter((x) => {
              return item !== x;
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

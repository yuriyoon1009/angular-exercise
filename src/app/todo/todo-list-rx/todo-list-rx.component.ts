import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../todo';
import { AngularFireList } from "angularfire2/database";
import { TodoStoreRxService } from '../todo-store-rx.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
    selector: 'app-todo-list-rx',
    templateUrl: './todo-list-rx.component.html',
    styleUrls: ['./todo-list-rx.component.less']
})
export class TodoListRxComponent implements OnInit {
  newTodoTitle='';
  todos: Todo[];
  rx = 'rx';
    constructor(private db:TodoStoreRxService) {
    }

    ngOnInit() {
      var x = this.db.getList().snapshotChanges().subscribe(data => {
        this.todos = [];
        data.forEach(element => {
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          this.todos.push(y as Todo);
        });
      });
    }


    //get todos(): Observable<Todo[]> {
    //}
    // toggleCompletion(todo: Todo) {
    // }
    // removeTodo(todo: Todo) {
    // }
    removeAll() {
      this.db.deleteAll();
    }

    remove(id) {
      this.db.delete(id);
    }

    addTodo() {
      const newTodo = new Todo(this.newTodoTitle, false);
      this.db.create(newTodo);
    }



}

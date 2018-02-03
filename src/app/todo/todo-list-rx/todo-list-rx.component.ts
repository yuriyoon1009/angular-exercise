import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Todo } from '../todo';

// Observable operators
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'app-todo-list-rx',
    templateUrl: './todo-list-rx.component.html',
    styleUrls: ['./todo-list-rx.component.less']
})
export class TodoListRxComponent implements OnInit {
    newTodoTitle = '';
    todos: any[] = [];
    subscription: Subscription;
    // RxJS는 비동기 데이터 스트림을 처리하는
    // API를 제공하는 라이브러리다
    // const observable$ = Observable.from(this.myArray);
    // const observable = Observable.from(this.todos);

    constructor() {
    }

    ngOnInit() {
        // 1. observable 생성
        const observable$ = Observable.from(this.todos);
    }

    // get todos(): Observable<Todo[]> {
    // }
    toggleCompletion(todo: Todo) {
    }

    addTodo() {
        /* if (!this.newTodoTitle) { return; }
        const newTodo = new Todo(this.newTodoTitle, false);
        this.todos = [newTodo, ...this.todos];
        this.newTodoTitle = '';
        console.log('[addNewTodo] : ', this.todos);*/
    }

    removeTodo(todo: Todo) {
    }

}

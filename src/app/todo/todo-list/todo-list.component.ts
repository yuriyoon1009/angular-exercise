import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';


@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit {
    newTodoTitle = '';

    constructor() {
    }

    ngOnInit() {
    }

    get todos(): Todo[] {
    }

    toggleCompletion(todo: Todo) {
    }

    addTodo() {
    }

    removeTodo(todo: Todo) {
    }

}

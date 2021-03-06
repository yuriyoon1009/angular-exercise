import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';


@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.less']
})
export class TodoItemComponent implements OnInit {
    @Input() todos: Todo;
    @Input() rx: string;
    @Output() toggle = new EventEmitter<Todo>();
    @Output() remove = new EventEmitter<Todo>();

    constructor() {
    }

    ngOnInit() {
    }

    // town
    // onToggleTodo() {
    //    this.toggle.emit(this.todos);
    // }

    // town
    // onRemoveTodo(id: string) {
    //    this.remove.emit(this.todos);
    // }
}

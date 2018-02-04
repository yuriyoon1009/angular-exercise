import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Todo } from './todo';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList, AngularFireObject } from "angularfire2/database";

const STORAGE_ITEM_NAME = 'ANGULAR_EXERCISE_TODO_STORAGE';


@Injectable()
export class TodoStoreRxService {
    private _todos: BehaviorSubject<Todo[]>;
    private basePath: string = '/todos';

    todos: AngularFireList<Todo[]> = null;
    todo: AngularFireObject<Todo> = null;

    constructor(private db: AngularFireDatabase) {
        this._todos = new BehaviorSubject([]);
    }

    // get todos(): Observable<Todo[]> {
    //     return this._todos.asObservable();
    // }

    getList(): AngularFireList<Todo[]> {
      this.todos = this.db.list('/todo');
      return this.todos
    }

    get(id: string): AngularFireObject<Todo> {
      const todoPath =  `${this.basePath}/${id}`;
      this.todo = this.db.object(todoPath);
      return this.todo
    }

    create(todo: Todo): void  {
       this.db.database.ref('/todo').push({
         title:todo.title,
         id:todo.id
       });

     }

     update(id: string, value: any): void {
       this.todos.update(id, value)
         .catch(error => this.handleError(error))
     }

     delete(id: string): void {
         this.todos.remove(id)
           .catch(error => this.handleError(error))
     }

     deleteAll(): void {
         this.todos.remove()
           .catch(error => this.handleError(error))
     }

     private handleError(error) {
       console.log(error)
     }


}

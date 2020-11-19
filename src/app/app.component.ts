import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs";
// import { getTodos, addTodo } from './todo.reducers';
import { TodosEffects } from './todo.effects';
import { ADD_TODO_SUCCESS } from './todo.reducers';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  //  todos$ : Observable<any>;
  // addTodoSuccess$ : Observable<any>;

  // constructor(
  //   private store : Store<any>,
  //   private todosEffects : TodosEffects
  // ) {
  //   this.store.dispatch(getTodos());  // effects will be triggered
  //   this.todos$ = store.select("todos");
  //   // this.addTodoSuccess$ = this.todosEffects.addTodo$.filter(
  //   //   ({type}) => type === ADD_TODO_SUCCESS
  //   // );
  // }

  // addTodo( todo ) {
  //   this.store.dispatch(addTodo(todo)); // effects will be triggered
  // }
}

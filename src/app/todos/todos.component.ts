import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../tutorial.state';
import { Tutorial } from './../models/tutorial.model'
import * as TutorialActions from './../tutorial.actions';
import { Observable } from 'rxjs';
import { TodosEffects } from '../todo.effects';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

	@Input() todo;

  constructor(private store: Store<AppState>, private todosEffects : TodosEffects) { 

  }

  ngOnInit() {
  }

  addTutorial(id, name, url) {
     this.store.dispatch(new TutorialActions.AddTutorial({id: id, name: name, url: url}) )
  }



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

}

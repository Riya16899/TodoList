import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../tutorial.state';
import { Tutorial } from './../models/tutorial.model'
import * as TutorialActions from './../tutorial.actions';
import { Observable } from 'rxjs';
import { TodosEffects } from '../todo.effects';
import { FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

	@Input() todo;

	public addForm = this.formBuilder.group({
	    id: new FormControl('', [Validators.required]),
	    name : new FormControl('', [Validators.required]),
	    url: new FormControl('', [Validators.required])
	});


  constructor(private store: Store<AppState>, private todosEffects : TodosEffects,
  	private formBuilder: FormBuilder ) { 

  }

  ngOnInit() {
  }

  addTutorial() {
  	console.log(this.addForm.value);
    this.store.dispatch(new TutorialActions.AddTutorial({id: this.addForm.value.id, name: this.addForm.value.name, url: this.addForm.value.url}) )
    this.addForm.reset();
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

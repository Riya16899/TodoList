import { Component, OnInit,  ChangeDetectionStrategy, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from '../models/tutorial.model';
import { AppState } from '../tutorial.state';
import * as TutorialActions from '../tutorial.actions';
import { FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

	@Input() todos;
	public updateForm = this.formBuilder.group({
	    id: new FormControl('', [Validators.required]),
	    name : new FormControl('', [Validators.required]),
	    url: new FormControl('', [Validators.required])
	});

	editEnable: boolean;
	showBool: boolean;
	tutorials: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>, private formBuilder: FormBuilder) {
	this.showBool = true;
	this.tutorials = store.select('tutorial');
  }

  ngOnInit() {
  	this.showBool = true;
  }

  delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index));
  }

  Edit(id) {
  	console.log(id);
  	this.editEnable = true;	

  	// this.store.dispatch(new TutorialActions.GetTutorial({id: id}));

   }

   Update(id: number) {

   	this.showBool = true;
   	this.store.dispatch(new TutorialActions.TryTutorial({id: this.updateForm.value.id,
   	 name: this.updateForm.value.name, url: this.updateForm.value.url}));

   }

}

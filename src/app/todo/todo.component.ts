import { Component, OnInit,  ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from '../models/tutorial.model';
import { AppState } from '../tutorial.state';
import * as TutorialActions from '../tutorial.actions';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

	@Input() todos;
	editEnable: boolean;
	showBool: boolean;
	tutorials: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>) {
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

  	this.store.dispatch(new TutorialActions.GetTutorial(id));

   }

   Update(idd, namee, urll) {
   	this.showBool = true;
   	let name: string;
   	let url: string;
   	let id: number;
   	this.store.dispatch(new TutorialActions.TryTutorial({id: idd, name: namee, url: urll}));
   }

}

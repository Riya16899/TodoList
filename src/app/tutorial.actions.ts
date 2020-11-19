import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Tutorial } from './models/tutorial.model';


export const ADD_TUTORIAL = '[TUTORIAL] Add';
export const REMOVE_TUTORIAL = '[TUTORIAL] Remove';
export const TRY = '[TUTORIAL] Try';
export const GET_TUTORIAL = '[TUTORIAL] Get';

export class AddTutorial implements Action {
	readonly type = ADD_TUTORIAL
	constructor (public payload: Tutorial) {
	}
}

export class RemoveTutorial implements Action {
	readonly type = REMOVE_TUTORIAL
	constructor(public payload:  number) {
		// code...
	}
};

export class TryTutorial implements Action {
	readonly type = TRY;

	constructor(public payload: Tutorial) {
	
	}
};


export class GetTutorial implements Action {
	readonly type = GET_TUTORIAL;

	constructor(public payload: number) {
	
	}
};

export type Action = AddTutorial | RemoveTutorial | TryTutorial | GetTutorial;
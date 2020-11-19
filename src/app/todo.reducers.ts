import { Injectable } from '@angular/core';
import { Tutorial } from './models/tutorial.model';
import * as TutorialActions from './tutorial.actions';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { TodosService } from './todo.service';

export const GET_TODOS = "GET_TODOS";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_ERROR = "GET_TODOS_ERROR";
export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_ERROR = "ADD_TODO_ERROR";

let initialState: Tutorial = {
  id: 1, 
  name: 'Initial ',
  url:'http://gg/com'
}

export function tutreducer(state: Tutorial[] = [initialState], action: TutorialActions.Action) {
  
  todoService: TodosService;
   let index, list;

  switch(action.type) {

    case TutorialActions.ADD_TUTORIAL:
      console.log(action.payload);
      return [...state, action.payload];

    case TutorialActions.REMOVE_TUTORIAL:
       const delArray = [...state];
       console.log(delArray, state);
       delArray.splice(action.payload, 1);

       return delArray;

    case TutorialActions.TRY:
      const index = state.findIndex(item => item.id == action.payload.id);
      list = [...state];
      list[index] = action.payload;
      console.log(list[index], action.payload);
      console.log(Object.assign({}, state, { list }));
      return list;
       
    default:
      return [...state];  
  }
}


// export function todos( state = initialState, { type, payload } ) {
//   switch( type ) {
//     case GET_TODOS:
//       return Object.assign({}, state, {pending: true, error: null});
//     case GET_TODOS_SUCCESS:
//       return Object.assign({}, state, {data: payload, pending: false});
//     case GET_TODOS_ERROR:
//       return Object.assign({}, state, {pending: false, error: "Error"});

//     case ADD_TODO_SUCCESS:
//       return Object.assign({}, state, {data: [...state.data, payload]});
//     case ADD_TODO_ERROR:
//       return Object.assign({}, state, {pending: false, error: "Error"});

//     default:
//       return state;
//   }
// }

// export function getTodos() {
//   return {
//     type: GET_TODOS
//   }
// }

// export function addTodo(title) {
//   return {
//     type: ADD_TODO,
//     payload: {
//       title
//     }
//   }
// }




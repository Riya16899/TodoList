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

  switch(action.type) {

    case TutorialActions.ADD_TUTORIAL:
      console.log(action.payload);
      return [...state, action.payload];

    case TutorialActions.REMOVE_TUTORIAL:
       const delArray = [...state];
       delArray.splice(action.payload, 1);
       console.log(typeof delArray);
       return delArray;

    case TutorialActions.TRY:

      state.find(item => {
        if(item.id == action.payload.id) {

          const entity: Tutorial[] = [{id: action.payload.id, name: action.payload.name, url: action.payload.url} ];// action.payload // {id: 3}
          const updatedEntities: Tutorial[] = {...state, ...entity};
          console.log(state.find(item => item.id == updatedEntities[0].id).name);

          console.log({...updatedEntities});
          return {...state, ...updatedEntities};

           // const user = action.payload.name;
           //  const entity = {name: user};
           //  const updatedEntities = {...state[0], ...entity};
           //  // console.log(user, entity, updatedEntities);
           //  console.log([updatedEntities]);
           //  return {...state, ...updatedEntities};
        }
        else {
          return state;
        }
      });

     case TutorialActions.GET_TUTORIAL:
       let id: number = (action.payload);
       console.log(action.payload, state[id]);
       return state; 

      // let myList = [{id:'aaa1', name: 'aaa'}, {id:'bbb2', name: 'bbb'}, {id:'ccc3', name: 'ccc'}];
      // let itemUpdated = {id: 1, name: 'riya', url: 'riya.com'};
      // updateState.find(item => item.id == itemUpdated.id).name = 'new namee';
      // let updateState = [...state];
      
      // console.log(action.payload);
      // return updateState; 
       
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




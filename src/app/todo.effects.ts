import { Injectable } from "@angular/core";
import { 
  GET_TODOS, GET_TODOS_SUCCESS, GET_TODOS_ERROR,
  ADD_TODO, ADD_TODO_SUCCESS, ADD_TODO_ERROR
} from "./todo.reducers";
import { TodosService } from "./todo.service";
import { TRY } from './tutorial.actions';
// import 'rxjs/add/operator/map';
// import { map } from 'rxjs/operators';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Observable,  of } from 'rxjs';
import { map, switchMap, catchError, tap, mergeMap } from 'rxjs/operators';
import * as TutorialActions from './tutorial.actions';

@Injectable()
export class TodosEffects {
  constructor( 
    private actions$ : Actions, 
    private todosService : TodosService 
  ) {}

  // to label our property getTodos$ as an effect 
  // that will be triggered when we dispatch actions with the store.
  // @Effect() getTodos$ = this.actions$.pipe(
  //   .ofType<any>(GET_TODOS)     //for filtering actions by action type
  //   .switchMap(
  //     (action: any) =>
  //       this.todosService.getTodos()
  //         .map(todos => ({type: GET_TODOS_SUCCESS, payload: todos}))
  //         .catch(() => Observable.of({type: GET_TODOS_ERROR}))
  //   ));

  // @Effect() getTodoss$ = this.actions$.pipe(
  //   ofType<any>(GET_TODOS),
  //   mergeMap(
  //     (action: any) => 
  //     this.todosService.getTodos().map(todos => ({type: GET_TODOS_SUCCESS, payload: todos}))
  //     .catch(() => ({type: GET_TODOS_ERROR}))
  //     )
  //   );

  @Effect() getTodoss$ = this.actions$.pipe(
    ofType(GET_TODOS),
    mergeMap(
      (action: any) => 
      this.todosService.getTodos().map(todos => ({type: GET_TODOS_SUCCESS, payload: todos}))
     
      )
    );




  // @Effect() addTodo$ = this.actions$.pipe(
  //   ofType(ADD_TODO),
  //   mergeMap( 
  //     (action: any) =>
  //       this.todosService.addTodo(action.payload.title)
  //         .map(todo => ({type: ADD_TODO_SUCCESS, payload: todo}))
  //         .catch(() => ({type: ADD_TODO_ERROR}))
  //   ));



  // @Effect()
  //   GetTodos$: Observable<Action> = this.actions$.pipe(
  //     ofType<TodoActions.GetTodos>(TodoActions.GET_TODOS),
  //     mergeMap(action =>
  //       this.http.get(environment.baseUrl)

  //         .map((data: Response) => {
  //           console.log(`${data[0]['docs']} GetTodos$`);
  //           return new TodoActions.GetTodosSuccess(data[0]['docs'] as TodoState[]);
  //         })

  //         .catch(() => of(new TodoActions.GetTodoError()))
  //     ));


  // @Effect() addTodo$ = this.actions$
  //   .ofType(ADD_TODO)
  //   .switchMap( 
  //     (action: any) =>
  //       this.todosService.addTodo(action.payload.title)
  //         .map(todo => ({type: ADD_TODO_SUCCESS, payload: todo}))
  //         .catch(() => Observable.of({type: ADD_TODO_ERROR}))
  //   );
}
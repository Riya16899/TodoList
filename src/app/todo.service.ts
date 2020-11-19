import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { timer } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable()
export class TodosService {

  numbers = timer(5000);

  constructor(private http: HttpClient) {

  }

  getTodos() {
    const todos = [
      {id: 1, title: "Learn ngrx/store", completed: false}, 
      {id: 2, title: "Learn ngrx/effects", completed: false}
    ];
    
    return (todos);
  }

  addTodo( title ) {
    return ({id: Math.random(), title, completed: false})
    // return Observable.timer(2000)
    //   .mapTo({id: Math.random(), title, completed: false})
  }


  try() {
    return this.http.post(`http://localhost:3000/data`, 
        {'id': 4, 'title': 'Trial', 'description': 'hello desc', 'date': '12/12/1111', 'status': 'off'}, 
         { headers: { 'Content-type': 'application/form-data; charset=utf-8' } });
  }

}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos/todos.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// import { todos } from './todo.reducers';
import { TodosService } from './todo.service';
import { TodosEffects } from './todo.effects';
import { tutreducer } from './todo.reducers';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      tutorial: tutreducer
    }),
    // StoreModule.forRoot({todos}),
    EffectsModule.forRoot([TodosEffects])
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

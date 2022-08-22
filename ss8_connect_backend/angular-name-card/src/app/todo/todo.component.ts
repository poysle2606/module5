import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TodoService} from '../service/todo.service';

let id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: Todo[] = [];
  content = new FormControl();

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.getTodos().subscribe(next => {
      this.todoList = next;
    } , error => {
      console.log(error);
    } , ( ) => {
      console.log('complete');
    });
  }
  addTodo( ) {
    const todo: Partial<Todo> = {
      content: this.content.value,
      complete: false
    } ;
    this .todoService.createTodo(todo).subscribe(next => {
      this .todoList.unshift(next);
      this .content.setValue('');
    });
  }
  deleteTodo(i) {
    const todo = this .todoList[i];
    this.todoService.deleteTodo(todo.id).subscribe(
      ( ) => {
        this.todoList = this .todoList.filter(
          t => t.id !== todo.id
        ) ;
      });
  }

  toggleTodo(i) {
    const todo = this .todoList[i];
    const todoData = {
      ...todo,
      completed: !todo.complete
    } ;
    this .todoService.updateTodo( todoData).subscribe(next => {
      this .todoList[i].complete = next.complete;
    });
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        id: id++,
        content: value,
        complete: false
      };
      this.todoList.push(todo);
      this.content.reset();
    }
  }
}

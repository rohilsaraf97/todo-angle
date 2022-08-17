import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/Todo';
// import { todos } from '../../../constants/todos.js';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  localItem: string;
  todos: Todo[];
  constructor() {
    this.localItem = localStorage.getItem('todos');
    if (!this.localItem) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }

  ngOnInit(): void {}
  handleDelete(sno: number) {
    this.todos = this.todos.filter((todo) => todo.sno != sno);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  handleDone(sno: number) {
    let foundIndex = this.todos.findIndex((x) => x.sno === sno);
    this.todos[foundIndex].active = !this.todos[foundIndex].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  handleAdd(todo: Todo) {
    this.todos = [todo, ...this.todos];
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}

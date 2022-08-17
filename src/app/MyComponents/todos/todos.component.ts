import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/Todo';
import { todos } from '../../../constants/todos.js';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor() {
    this.todos = todos;
  }

  ngOnInit(): void {}
  handleDelete(sno: number) {
    this.todos = this.todos.filter((todo) => todo.sno != sno);
  }
}

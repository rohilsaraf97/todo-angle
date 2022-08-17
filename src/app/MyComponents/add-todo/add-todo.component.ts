import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  title: string;
  desc: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const newTodo: Todo = {
      sno: Math.random(),
      title: this.title,
      desc: this.desc,
      active: true,
    };
    this.todoAdd.emit(newTodo);
    this.title = '';
    this.desc = '';
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @Output() todoDelete: EventEmitter<number> = new EventEmitter();
  @Output() todoDone: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  onDelete(sno: number) {
    this.todoDelete.emit(sno);
    console.log(sno);
  }
  onMarkAsDone() {
    this.todoDone.emit(this.todo.sno);
  }
}

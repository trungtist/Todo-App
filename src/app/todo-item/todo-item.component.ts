import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  
  @Input() todo!: Todo

  @Output() completeClicked = new EventEmitter<void>()
  @Output() editClicked = new EventEmitter<void>()
  @Output() deleteClicked = new EventEmitter<void>();

  ngOnInit(): void {
  }

  onEmitCheck() {
    this.completeClicked.emit()
  }

  onEmitEdit() {
    this.editClicked.emit();
  }

  onEmitDelete() {
    this.deleteClicked.emit()
  }

}

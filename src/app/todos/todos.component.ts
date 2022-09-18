import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {

  todos!: Todo[] 

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }

  toggleCompleted(todo: Todo) {
    todo.checked = !todo.checked;
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    
    return this.dataService.deleteTodo(index);
  }

}

import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  todos: Todo[] = [
    new Todo("This is the first content"),
    new Todo("This is the second content"),
  ]

  constructor() { }

  getAllTodos(): Todo[] {

    return this.todos;
  }

  addTodo(contentTodo: Todo) {

    return this.todos = [...this.todos, contentTodo];
  }

  updateTodo(index: number, updatedContent: Todo) {

    // Cập nhật nội dụng tại vị trí thứ index của todoList
    this.todos[index] = updatedContent;
  }

  deleteTodo(index: number) {

    // Xoá content tại vị trí index và số lượng content cần xoá là 1
    this.todos.splice(index, 1);
  }
}

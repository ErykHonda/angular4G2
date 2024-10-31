import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';
import {Todo} from '../shared/interfaces/todo.interface';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgStyle,
    NgClass
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos : Todo[] = [];

  addToDo(todo: string) : void {
    if(todo.length <= 3){
      alert("Za krótkie zadanie!");
      return;
    }
    this.todos.push({name: todo, isCompleted: false });
    console.log("Aktualna Lista: ", this.todos);
  }

  changeToDoStatus(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
  }
}

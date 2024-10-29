import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todo : string[] = [];

  addToDo(todo: string) : void {
    if(todo.length <= 3){
      alert("Za krótkie zadanie!");
      return;
    }
    this.todo.push(todo);
    console.log("Aktualna Lista: ", this.todo);
  }

}

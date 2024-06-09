// todo.component.ts
import { Component} from '@angular/core';
import { Todo } from '../class/todo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todoTask: string = '';
  todoList: Todo[] = [];
  update: boolean = false;
  addButtonDisplay: string = 'inline';
  updateButtonDisplay: string = 'none';
  selectedIndex: number = -1;
  strike: boolean[] = Array(this.todoList.length).fill(false);
  constructor() {}
  changeTodo(i: number) {
    this.strike[i] = !this.strike[i];
  }
  addTask(task: HTMLInputElement) {
    if (this.update) {
      this.todoList[this.selectedIndex].content = task.value;
      this.update = false;
    } else {
      this.todoList.push({
        content: task.value,
        value: false,
      });
    }
    task.value = '';
    this.addButtonDisplay = 'inline';
    this.updateButtonDisplay = 'none';
  }
  removeTask(i: number) {
    if (confirm('Are you sure to delete ')) {
      this.todoList.splice(i, 1);
    }
    this.strike[i] = !this.strike[i];
  }
  updateTask(i: number, task: HTMLInputElement) {
    task.value = this.todoList[i].content;
    this.selectedIndex = i;
    this.update = true;
    this.addButtonDisplay = 'none';
    this.updateButtonDisplay = 'inline';
  }
}

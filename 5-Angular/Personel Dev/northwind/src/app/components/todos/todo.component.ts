import {Component, OnInit} from '@angular/core';
import {Todos} from "../../models/todos";
import {TodosService} from "../../services/todos.service";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit{
  todos:Todos[] = [];

  constructor(private todosSerive:TodosService) {
  }
  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(){
    this.todosSerive.getTodos().subscribe((todos)=>{
      this.todos = todos;
    })
  }
}

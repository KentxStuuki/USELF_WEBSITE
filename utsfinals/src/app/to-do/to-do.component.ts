import { Component } from '@angular/core';
import { InformationService } from '../information.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
  todolist: any; span: any;
  constructor(private _information: InformationService){}
  ngOnInit(): void {
    this.todolist=this._information.todoList;
    this.span=this._information.todoSpan;
  }
}

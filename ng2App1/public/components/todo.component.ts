import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//Models
import {TodoServices } from "../services/todo.services"; 
import {TodoRenderComponent} from "./todo.renderer";

@Component({
    moduleId: module.id,
    selector: 'todo-main',
    directives : [TodoRenderComponent],
    providers: [TodoServices], 
    template: `
        <h1 [myHighlight]="red" [defaultColor]="'green'" >Todos</h1> 
        <ul>
            <input #newtodo type="text" /> 
            <button (click)="addTodo(newtodo, newtodo.value)">Add Todo</button> <br /><br />
            <li *ngFor="#todo of todos">
                <todo-render [todo]="todo" (todo_edit)="editTodo($event)" (todo_update) = "updateTodo($event)" (todo_remove) = "removeTodo($event)" (todo_cancel) = "cancelTodo($event)">
                </todo-render>
            </li>
        </ul>
    `
    
})
export class TodoAppComponent implements OnInit {
    public todos:any;
    public addTodo : Function; 
    
    @Output() onOut = new EventEmitter<boolean>();

    constructor(todoService:TodoServices) { 
        this.todos = todoService.todos;
        this.addTodo = todoService.addTodo; 
    } 
    public removeTodo(todo:any){
        console.log(todo, this.todos);
        let i = this.todos.indexOf(todo);
        this.todos.splice(i, 1);
    }
    public editTodo(todo){
        todo.isModified = true;
        console.log(todo)
    }
    public updateTodo(todo){
        let i = this.todos.indexOf(todo.original);
        console.log(todo, i);
        todo.original.title = todo.todovalue;
        this.todos.splice(i, 1, todo.original);
        todo.original.isModified = false;
    }
    public cancelTodo(todo){
        todo.isModified = false;
    }

    ngOnInit() {  
        
     this.onOut.emit();
    }


}
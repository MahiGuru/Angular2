import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {TodoServices } from "../services/todo.services";

@Component({
    moduleId: module.id,
    selector: 'todo-render',
    providers: [TodoServices], 
    template: `
        <div *ngIf="todo.isModified" >
                    <input type="text" #todoInput value="" />
                    <button (click)="updateTodo(todo, todoInput.value)">Update</button>
                    <button (click)="cancelTodo(todo)">Cancel</button>
                </div>
                <div *ngIf="!todo.isModified" > 
                    <span [ngClass]="todo.statusClass">
                        {{todo.title}}  
                    </span> - 
                    <button (click)="todo.toggle()">
                        <span *ngIf="!todo.status">Archive</span> 
                        <span *ngIf="todo.status">Move</span>
                    </button>
                    <button (click)="removeTodo(todo)">Remove</button>
                    <button (click)="editTodo(todo)">Edit</button>
                </div>
                <br /><br />
    `,
    outputs : ['todo_remove', 'todo_update','todo_edit', 'todo_cancel']
})
export class TodoRenderComponent implements OnInit { 
    
    @Input('todo') todo:any;
    todo_remove = new EventEmitter();
    todo_edit = new EventEmitter();
    todo_update = new EventEmitter();
    todo_cancel = new EventEmitter();

    constructor(todoService:TodoServices) {  
        console.log(this.todo);
    }
    public removeTodo(value:any){
        this.todo_remove.emit(value);
    }
    public editTodo(value:any){
        this.todo_edit.emit(value);
    }
    public updateTodo(todo:any, todoValue:any){
        this.todo_update.emit({original:todo, todovalue:todoValue});
    }
    public cancelTodo(value:any){
        this.todo_cancel.emit(value);
    }

    ngOnInit() { }

}
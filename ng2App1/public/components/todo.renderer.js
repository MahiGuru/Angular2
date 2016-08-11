"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var todo_services_1 = require("../services/todo.services");
var TodoRenderComponent = (function () {
    function TodoRenderComponent(todoService) {
        this.todo_remove = new core_1.EventEmitter();
        this.todo_edit = new core_1.EventEmitter();
        this.todo_update = new core_1.EventEmitter();
        this.todo_cancel = new core_1.EventEmitter();
        console.log(this.todo);
    }
    TodoRenderComponent.prototype.removeTodo = function (value) {
        this.todo_remove.emit(value);
    };
    TodoRenderComponent.prototype.editTodo = function (value) {
        this.todo_edit.emit(value);
    };
    TodoRenderComponent.prototype.updateTodo = function (todo, todoValue) {
        this.todo_update.emit({ original: todo, todovalue: todoValue });
    };
    TodoRenderComponent.prototype.cancelTodo = function (value) {
        this.todo_cancel.emit(value);
    };
    TodoRenderComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input('todo'), 
        __metadata('design:type', Object)
    ], TodoRenderComponent.prototype, "todo", void 0);
    TodoRenderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todo-render',
            providers: [todo_services_1.TodoServices],
            template: "\n        <div *ngIf=\"todo.isModified\" >\n                    <input type=\"text\" #todoInput value=\"\" />\n                    <button (click)=\"updateTodo(todo, todoInput.value)\">Update</button>\n                    <button (click)=\"cancelTodo(todo)\">Cancel</button>\n                </div>\n                <div *ngIf=\"!todo.isModified\" > \n                    <span [ngClass]=\"todo.statusClass\">\n                        {{todo.title}}  \n                    </span> - \n                    <button (click)=\"todo.toggle()\">\n                        <span *ngIf=\"!todo.status\">Archive</span> \n                        <span *ngIf=\"todo.status\">Move</span>\n                    </button>\n                    <button (click)=\"removeTodo(todo)\">Remove</button>\n                    <button (click)=\"editTodo(todo)\">Edit</button>\n                </div>\n                <br /><br />\n    ",
            outputs: ['todo_remove', 'todo_update', 'todo_edit', 'todo_cancel']
        }), 
        __metadata('design:paramtypes', [todo_services_1.TodoServices])
    ], TodoRenderComponent);
    return TodoRenderComponent;
}());
exports.TodoRenderComponent = TodoRenderComponent;

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
//Models
var todo_services_1 = require("../services/todo.services");
var todo_renderer_1 = require("./todo.renderer");
var TodoAppComponent = (function () {
    function TodoAppComponent(todoService) {
        this.onOut = new core_1.EventEmitter();
        this.todos = todoService.todos;
        this.addTodo = todoService.addTodo;
    }
    TodoAppComponent.prototype.removeTodo = function (todo) {
        console.log(todo, this.todos);
        var i = this.todos.indexOf(todo);
        this.todos.splice(i, 1);
    };
    TodoAppComponent.prototype.editTodo = function (todo) {
        todo.isModified = true;
        console.log(todo);
    };
    TodoAppComponent.prototype.updateTodo = function (todo) {
        var i = this.todos.indexOf(todo.original);
        console.log(todo, i);
        todo.original.title = todo.todovalue;
        this.todos.splice(i, 1, todo.original);
        todo.original.isModified = false;
    };
    TodoAppComponent.prototype.cancelTodo = function (todo) {
        todo.isModified = false;
    };
    TodoAppComponent.prototype.ngOnInit = function () {
        this.onOut.emit();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TodoAppComponent.prototype, "onOut", void 0);
    TodoAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todo-main',
            directives: [todo_renderer_1.TodoRenderComponent],
            providers: [todo_services_1.TodoServices],
            template: "\n        <h1 [myHighlight]=\"red\" [defaultColor]=\"'green'\" >Todos</h1> \n        <ul>\n            <input #newtodo type=\"text\" /> \n            <button (click)=\"addTodo(newtodo, newtodo.value)\">Add Todo</button> <br /><br />\n            <li *ngFor=\"#todo of todos\">\n                <todo-render [todo]=\"todo\" (todo_edit)=\"editTodo($event)\" (todo_update) = \"updateTodo($event)\" (todo_remove) = \"removeTodo($event)\" (todo_cancel) = \"cancelTodo($event)\">\n                </todo-render>\n            </li>\n        </ul>\n    "
        }), 
        __metadata('design:paramtypes', [todo_services_1.TodoServices])
    ], TodoAppComponent);
    return TodoAppComponent;
}());
exports.TodoAppComponent = TodoAppComponent;

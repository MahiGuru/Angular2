"use strict";
var todo_model_1 = require("./todo.model");
var TodoServices = (function () {
    function TodoServices() {
        this.todos = [new todo_model_1.TodoModel("Meow"), new todo_model_1.TodoModel("Bow")];
    }
    TodoServices.prototype.addTodo = function (elem, value) {
        if (value != "" && value != undefined && value != null) {
            elem.value = "";
            this.todos.push(new todo_model_1.TodoModel(value));
        }
        else {
            console.log("Value shouldn't be empty");
        }
    };
    return TodoServices;
}());
exports.TodoServices = TodoServices;

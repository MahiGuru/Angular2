"use strict";
var TodoModel = (function () {
    function TodoModel(title) {
        this._status = false;
        this.isModified = false;
        this.title = title;
        this.status = this._status;
    }
    TodoModel.prototype.toggle = function () {
        this._status = !this._status;
        this.status = this._status;
        this.statusClass = (this.status) ? "completed" : "started";
    };
    return TodoModel;
}());
exports.TodoModel = TodoModel;

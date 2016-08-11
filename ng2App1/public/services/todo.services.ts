import {TodoModel} from "./todo.model";

export class TodoServices{
    public todos : any; 

    constructor(){
        this.todos = [new TodoModel("Meow"), new TodoModel("Bow")];
    }

    public addTodo(elem, value:string){
        if(value != "" && value != undefined && value != null){
            elem.value = "";
            this.todos.push(new TodoModel(value))
        }else{
            console.log("Value shouldn't be empty");
        }
    }
    

}
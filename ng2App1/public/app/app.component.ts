import { Component, OnInit } from '@angular/core'; 
import {TodoAppComponent} from "../components/todo.component";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    directives : [TodoAppComponent],
    template: `
        <todo-main></todo-main> 
    `
})
export class AppComponent implements OnInit {
    constructor() {  
    }

    ngOnInit() { }

}
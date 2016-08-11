export class TodoModel{
    public title:string;
    public status : boolean;
    public statusClass : string;
    private _status:boolean = false;
    public isModified:boolean = false;

    constructor(title){
        this.title = title;
        this.status = this._status;
    }
    public toggle(){
        this._status = !this._status;        
        this.status = this._status;
        this.statusClass = (this.status) ? "completed" : "started"
    }


}
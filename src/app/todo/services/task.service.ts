import {Injectable} from "angular2/core";
import {Task} from "../models/task";
import {Http, Response} from "angular2/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";

@Injectable()
export class TaskService {

    private tasks:Task[] = [];

    constructor(private _http:Http) {
        this.getTasksInternal()
            .subscribe(tasks => this.tasks = tasks);
    }

    private getTasksInternal():Observable<Task[]> {
        return this._http
            .get("./app/todo/models/tasks.json")
            .do(response => console.log("TaskService " + response.json))
            .map((response:Response) => <Task[]>response.json().tasks);
    }

    getTasks():Task[] {
        return this.tasks;
    }

    getTask(id:number):Task {
        return this.tasks.filter(t => t.id === id)[0];
    }

    saveOrUpdate(task:Task) {
        if (task.id === 0) {
            this.save(task);
        } else {
            this.update(task.id, task);
        }
    }

    private save(newTask:Task):Task {
        newTask.id = this.nextId();
        this.tasks.push(newTask);
        return newTask;
    }

    private update(id:number, newTask:Task):Task {
        let task:Task = this.getTask(id);
        task.name = newTask.name;
        task.notes = newTask.notes;
        task.list = newTask.list;
        task.done = newTask.done;
        return task;
    }

    private nextId():number {
        let max:number = this.tasks.reduce((p, c) => p.id > c.id ? p.id : c.id);
        return max + 1;
    }
}
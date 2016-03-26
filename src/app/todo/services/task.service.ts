import {Injectable} from "angular2/core";
import {Task} from "../models/task";

@Injectable()
export class TaskService {

    private tasks:Array<Task> = [
        new Task(1, "Task 1", "Some notes on Task 1"),
        new Task(2, "Task 2", "Some notes on Task 2"),
        new Task(3, "Task 3", "Some notes on Task 3"),
        new Task(4, "Task 4", null),
        new Task(5, "Task 5", null, 'home', true)
    ];

    private _nextId:number = this.tasks.length + 1;

    getTasks():Array<Task> {
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
        try {
            return this._nextId;
        } finally {
            this._nextId++;
        }
    }
}
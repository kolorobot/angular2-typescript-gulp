import {Injectable} from "@angular/core";
import {Task} from "../models/task";

@Injectable()
export class TaskService {

    private tasks:Array<Task> = [
        new Task("Task 1", false),
        new Task("Task 2", false),
        new Task("Task 3", false),
        new Task("Task 4", false),
        new Task("Task 5", false)
    ];

    getTasks():Array<Task> {
        return this.tasks;
    }

    addTask(name:string) {
        this.tasks.push(new Task(name, false));
    }

}
import {Injectable} from "angular2/core";
import {Task} from "../models/task";

@Injectable()
export class TaskService {

    private tasks:Array<Task> = [
        new Task("Task 1", "Some notes on Task 1"),
        new Task("Task 2", "Some notes on Task 2"),
        new Task("Task 3", "Some notes on Task 3"),
        new Task("Task 4", null),
        new Task("Task 5", null)
    ];

    getTasks():Array<Task> {
        return this.tasks;
    }

    addTask(task:Task) {
        this.tasks.push(task);
    }

}
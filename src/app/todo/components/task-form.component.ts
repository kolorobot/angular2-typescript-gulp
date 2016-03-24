import {Component, OnInit} from "angular2/core";
import {TaskService} from "../services/task.service";
import {Task} from "../models/task";

@Component({
    selector: 'task-form',
    templateUrl: './app/todo/components/task-form.html'
})
export class TaskFormComponent implements OnInit {

    // must not be null
    task:Task = Task.newTask();

    constructor(private taskService:TaskService) {

    }

    ngOnInit():any {
        $.material.init();
    }

    availableLists():Array<string> {
        return Task.availableLists;
    }

    submit():void {
        this.taskService.addTask(this.task);
        this.task = Task.newTask();
    }
}
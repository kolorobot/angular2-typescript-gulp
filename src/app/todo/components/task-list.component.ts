import {Component} from "@angular/core";
import {Task} from "../models/task";
import {OnInit} from "@angular/core";
import {TaskService} from "../services/task-service";
import {TaskComponent} from "./task.component";
import {ROUTER_DIRECTIVES} from "@angular/router-deprecated";

declare var $:any;

@Component({
    selector: 'task-list',
    templateUrl: './app/todo/components/task-list.html',
    styleUrls: ['./app/todo/components/task-list.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class TaskListComponent implements OnInit {

    todoCount:number;
    selectedTask:Task;
    showAll = false;

    constructor(private _taskService:TaskService) {

    }

    ngOnInit() {
        this.calculateTodoCount();
        $.material.init();
    }

    calculateTodoCount() {
        this.todoCount = this.getTasks().filter(t => !t.done).length;
    }

    toggleShowAll() {
        this.showAll = !this.showAll;
    }

    filteredTasks():Task[] {
        if (this.showAll) {
            return this.getTasks();
        }
        return this.getTasks().filter(t => !t.done);
    }

    select(task:Task) {
        this.selectedTask = task;
    }

    private getTasks() {
        return this._taskService.getTasks();
    };
}
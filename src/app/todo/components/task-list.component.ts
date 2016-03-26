import {Component, PipeTransform, Pipe} from "angular2/core";
import {Task} from "../models/task";
import {OnInit} from "angular2/core";
import {TaskService} from "../services/task.service";
import {ROUTER_DIRECTIVES} from "angular2/router";

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
    tasks:Array<Task>;

    showAll = false;

    constructor(private _taskService:TaskService) {
        this.tasks = _taskService.getTasks();
        this.calculateTodoCount();
    }

    ngOnInit() {
        console.log("Todo component initialized with " + this.tasks.length + " tasks.");
        $.material.init();
    }

    calculateTodoCount() {
        this.todoCount = this.tasks.filter(t => !t.done).length;
    }

    toggleShowAll() {
        this.showAll = !this.showAll;
    }

    filteredTasks():Array<Task> {
        if (this.showAll) {
            return this.tasks;
        }
        return this.tasks.filter(t => !t.done);
    }


    select(task:Task) {
        this.selectedTask = task;
    }
}
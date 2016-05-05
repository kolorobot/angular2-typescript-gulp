import {Component, OnInit} from "@angular/core";
import {TaskService} from "../services/task.service";
import {Task} from "../models/task";
import {Router, RouteParams} from "@angular/router-deprecated";

declare var $:any;

@Component({
    selector: 'task-form',
    templateUrl: './app/todo/components/task-form.html'
})
export class TaskFormComponent implements OnInit {

    task:Task;
    isNew:boolean = true;

    constructor(private _router:Router,
                private _routeParams:RouteParams,
                private _taskService:TaskService) {
        let id:number = +_routeParams.get("id");
        if (id > 0) {
            this.task = Object.assign({}, _taskService.getTask(id));
            this.isNew = false;
        } else {
            this.task = Task.newTask();
            this.isNew = true;
        }
    }

    ngOnInit():any {
        $.material.init();
    }

    availableLists():Array<string> {
        return Task.availableLists;
    }

    cancel():void {
        this.navigateToTaskList();
    }

    submit():void {
        this._taskService.saveOrUpdate(this.task);
        this.navigateToTaskList();
    }

    private navigateToTaskList() {
        this._router.navigate(['TaskList']);
    };
}
import {Component} from "@angular/core";
import {Input} from "@angular/core";

import {Task} from "../models/task";
import {Output} from "@angular/core";
import {EventEmitter} from "@angular/core";

@Component({
    selector: 'task',
    templateUrl: './app/todo/components/task.html'
})
export class TaskComponent {
    @Input() task:Task;
    @Output() statusChanged:any = new EventEmitter<any>();

    toggleDone() {
        this.task.toggleDone();
        this.statusChanged.emit(null);
    }
}

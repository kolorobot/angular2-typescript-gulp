import {Component} from "angular2/core";
import {Input} from "angular2/core";

import {Task} from "../models/task";
import {Output} from "angular2/core";
import {EventEmitter} from "angular2/core";

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

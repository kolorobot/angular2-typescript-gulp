import {Component, OnInit} from "angular2/core";
import {RouteConfig, RouterLink, ROUTER_DIRECTIVES} from "angular2/router";
import {TaskListComponent} from "./todo/components/task-list.component";
import {AboutComponent} from "./about/components/about.components";
import {TaskFormComponent} from "./todo/components/task-form.component";

declare var $:any;

@Component({
    selector: "app",
    templateUrl: "./app/app.html",
    directives: [TaskListComponent, AboutComponent, RouterLink, ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/tasks', component: TaskListComponent, as: 'TaskList'},
    {path: '/task-form', component: TaskFormComponent, as: 'TaskForm'},
    {path: '/about', component: AboutComponent, as: 'About'}
])
export class AppComponent implements OnInit {
    ngOnInit() {
        $.material.init();
    }
}
import {Routes, RouterModule, ExtraOptions} from '@angular/router';
import {TaskListComponent} from "./todo/components/task-list.component";
import {AboutComponent} from "./about/components/about.components";
import {ModuleWithProviders} from "@angular/core";

const appRoutes: Routes = [
    {path: 'tasks', component: TaskListComponent, data: {title: 'TaskList'}},
    {path: 'about', component: AboutComponent, data: {title: 'About'}}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });

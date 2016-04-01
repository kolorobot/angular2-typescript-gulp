System.register(["angular2/core", "../services/task.service", "../models/task", "angular2/router"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, task_service_1, task_1, router_1;
    var TaskFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (task_service_1_1) {
                task_service_1 = task_service_1_1;
            },
            function (task_1_1) {
                task_1 = task_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            TaskFormComponent = (function () {
                function TaskFormComponent(_router, _routeParams, _taskService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._taskService = _taskService;
                    this.isNew = true;
                    var id = +_routeParams.get("id");
                    if (id > 0) {
                        this.task = Object.assign({}, _taskService.getTask(id));
                        this.isNew = false;
                    }
                    else {
                        this.task = task_1.Task.newTask();
                        this.isNew = true;
                    }
                }
                TaskFormComponent.prototype.ngOnInit = function () {
                    $.material.init();
                };
                TaskFormComponent.prototype.availableLists = function () {
                    return task_1.Task.availableLists;
                };
                TaskFormComponent.prototype.cancel = function () {
                    this.navigateToTaskList();
                };
                TaskFormComponent.prototype.submit = function () {
                    this._taskService.saveOrUpdate(this.task);
                    this.navigateToTaskList();
                };
                TaskFormComponent.prototype.navigateToTaskList = function () {
                    this._router.navigate(['TaskList']);
                };
                ;
                TaskFormComponent = __decorate([
                    core_1.Component({
                        selector: 'task-form',
                        templateUrl: './app/todo/components/task-form.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, task_service_1.TaskService])
                ], TaskFormComponent);
                return TaskFormComponent;
            }());
            exports_1("TaskFormComponent", TaskFormComponent);
        }
    }
});

//# sourceMappingURL=task-form.component.js.map

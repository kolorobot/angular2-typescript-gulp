System.register(["@angular/core", "@angular/http", "rxjs/Rx"], function(exports_1, context_1) {
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
    var core_1, http_1;
    var TaskService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            TaskService = (function () {
                function TaskService(_http) {
                    var _this = this;
                    this._http = _http;
                    this.tasks = [];
                    this.getTasksInternal()
                        .subscribe(function (tasks) { return _this.tasks = tasks; });
                }
                TaskService.prototype.getTasksInternal = function () {
                    return this._http
                        .get("./app/todo/models/tasks.json")
                        .do(function (response) { return console.log("TaskService " + response.json); })
                        .map(function (response) { return response.json().tasks; });
                };
                TaskService.prototype.getTasks = function () {
                    return this.tasks;
                };
                TaskService.prototype.getTask = function (id) {
                    return this.tasks.filter(function (t) { return t.id === id; })[0];
                };
                TaskService.prototype.saveOrUpdate = function (task) {
                    if (task.id === 0) {
                        this.save(task);
                    }
                    else {
                        this.update(task.id, task);
                    }
                };
                TaskService.prototype.save = function (newTask) {
                    newTask.id = this.nextId();
                    this.tasks.push(newTask);
                    return newTask;
                };
                TaskService.prototype.update = function (id, newTask) {
                    var task = this.getTask(id);
                    task.name = newTask.name;
                    task.notes = newTask.notes;
                    task.list = newTask.list;
                    task.done = newTask.done;
                    return task;
                };
                TaskService.prototype.nextId = function () {
                    var max = this.tasks.reduce(function (p, c) { return p.id > c.id ? p.id : c.id; });
                    return max + 1;
                };
                TaskService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TaskService);
                return TaskService;
            }());
            exports_1("TaskService", TaskService);
        }
    }
});

//# sourceMappingURL=task.service.js.map

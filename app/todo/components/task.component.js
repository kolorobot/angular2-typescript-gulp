System.register(["@angular/core", "../models/task"], function(exports_1, context_1) {
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
    var core_1, core_2, task_1, core_3, core_4;
    var TaskComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
                core_4 = core_1_1;
            },
            function (task_1_1) {
                task_1 = task_1_1;
            }],
        execute: function() {
            TaskComponent = (function () {
                function TaskComponent() {
                    this.statusChanged = new core_4.EventEmitter();
                }
                TaskComponent.prototype.toggleDone = function () {
                    this.task.toggleDone();
                    this.statusChanged.emit(null);
                };
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', task_1.Task)
                ], TaskComponent.prototype, "task", void 0);
                __decorate([
                    core_3.Output(), 
                    __metadata('design:type', Object)
                ], TaskComponent.prototype, "statusChanged", void 0);
                TaskComponent = __decorate([
                    core_1.Component({
                        selector: 'task',
                        templateUrl: './app/todo/components/task.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], TaskComponent);
                return TaskComponent;
            }());
            exports_1("TaskComponent", TaskComponent);
        }
    }
});

//# sourceMappingURL=task.component.js.map

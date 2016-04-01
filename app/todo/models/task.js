System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Task;
    return {
        setters:[],
        execute: function() {
            Task = (function () {
                function Task(id, name, notes, list, done) {
                    if (list === void 0) { list = 'home'; }
                    if (done === void 0) { done = false; }
                    this.id = id;
                    this.name = name;
                    this.notes = notes;
                    this.list = list;
                    this.done = done;
                }
                Task.newTask = function () {
                    return new Task(0, "", "");
                };
                Task.prototype.toggleDone = function () {
                    this.done = !this.done;
                };
                Task.availableLists = ['finance', 'home', 'work'];
                return Task;
            }());
            exports_1("Task", Task);
        }
    }
});

//# sourceMappingURL=task.js.map

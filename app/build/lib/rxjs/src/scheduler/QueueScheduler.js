System.register(['./QueueAction', './FutureAction'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var QueueAction_1, FutureAction_1;
    var QueueScheduler;
    return {
        setters:[
            function (QueueAction_1_1) {
                QueueAction_1 = QueueAction_1_1;
            },
            function (FutureAction_1_1) {
                FutureAction_1 = FutureAction_1_1;
            }],
        execute: function() {
            QueueScheduler = (function () {
                function QueueScheduler() {
                    this.active = false;
                    this.actions = []; // XXX: use `any` to remove type param `T` from `VirtualTimeScheduler`.
                    this.scheduledId = null;
                }
                QueueScheduler.prototype.now = function () {
                    return Date.now();
                };
                QueueScheduler.prototype.flush = function () {
                    if (this.active || this.scheduledId) {
                        return;
                    }
                    this.active = true;
                    var actions = this.actions;
                    // XXX: use `any` to remove type param `T` from `VirtualTimeScheduler`.
                    for (var action = null; action = actions.shift();) {
                        action.execute();
                        if (action.error) {
                            this.active = false;
                            throw action.error;
                        }
                    }
                    this.active = false;
                };
                QueueScheduler.prototype.schedule = function (work, delay, state) {
                    if (delay === void 0) { delay = 0; }
                    return (delay <= 0) ?
                        this.scheduleNow(work, state) :
                        this.scheduleLater(work, delay, state);
                };
                QueueScheduler.prototype.scheduleNow = function (work, state) {
                    return new QueueAction_1.QueueAction(this, work).schedule(state);
                };
                QueueScheduler.prototype.scheduleLater = function (work, delay, state) {
                    return new FutureAction_1.FutureAction(this, work).schedule(state, delay);
                };
                return QueueScheduler;
            }());
            exports_1("QueueScheduler", QueueScheduler);
        }
    }
});
//# sourceMappingURL=QueueScheduler.js.map
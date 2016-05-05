System.register(['../util/Immediate', './FutureAction'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Immediate_1, FutureAction_1;
    var AsapAction;
    return {
        setters:[
            function (Immediate_1_1) {
                Immediate_1 = Immediate_1_1;
            },
            function (FutureAction_1_1) {
                FutureAction_1 = FutureAction_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            AsapAction = (function (_super) {
                __extends(AsapAction, _super);
                function AsapAction() {
                    _super.apply(this, arguments);
                }
                AsapAction.prototype._schedule = function (state, delay) {
                    if (delay === void 0) { delay = 0; }
                    if (delay > 0) {
                        return _super.prototype._schedule.call(this, state, delay);
                    }
                    this.delay = delay;
                    this.state = state;
                    var scheduler = this.scheduler;
                    scheduler.actions.push(this);
                    if (!scheduler.scheduledId) {
                        scheduler.scheduledId = Immediate_1.Immediate.setImmediate(function () {
                            scheduler.scheduledId = null;
                            scheduler.flush();
                        });
                    }
                    return this;
                };
                AsapAction.prototype._unsubscribe = function () {
                    var scheduler = this.scheduler;
                    var scheduledId = scheduler.scheduledId, actions = scheduler.actions;
                    _super.prototype._unsubscribe.call(this);
                    if (actions.length === 0) {
                        scheduler.active = false;
                        if (scheduledId != null) {
                            scheduler.scheduledId = null;
                            Immediate_1.Immediate.clearImmediate(scheduledId);
                        }
                    }
                };
                return AsapAction;
            }(FutureAction_1.FutureAction));
            exports_1("AsapAction", AsapAction);
        }
    }
});
//# sourceMappingURL=AsapAction.js.map
System.register(['./FutureAction', './QueueScheduler'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var FutureAction_1, QueueScheduler_1;
    var AsyncScheduler;
    return {
        setters:[
            function (FutureAction_1_1) {
                FutureAction_1 = FutureAction_1_1;
            },
            function (QueueScheduler_1_1) {
                QueueScheduler_1 = QueueScheduler_1_1;
            }],
        execute: function() {
            AsyncScheduler = (function (_super) {
                __extends(AsyncScheduler, _super);
                function AsyncScheduler() {
                    _super.apply(this, arguments);
                }
                AsyncScheduler.prototype.scheduleNow = function (work, state) {
                    return new FutureAction_1.FutureAction(this, work).schedule(state, 0);
                };
                return AsyncScheduler;
            }(QueueScheduler_1.QueueScheduler));
            exports_1("AsyncScheduler", AsyncScheduler);
        }
    }
});
//# sourceMappingURL=AsyncScheduler.js.map
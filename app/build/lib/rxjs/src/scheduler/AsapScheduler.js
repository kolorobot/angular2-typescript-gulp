System.register(['./AsapAction', './QueueScheduler'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var AsapAction_1, QueueScheduler_1;
    var AsapScheduler;
    return {
        setters:[
            function (AsapAction_1_1) {
                AsapAction_1 = AsapAction_1_1;
            },
            function (QueueScheduler_1_1) {
                QueueScheduler_1 = QueueScheduler_1_1;
            }],
        execute: function() {
            AsapScheduler = (function (_super) {
                __extends(AsapScheduler, _super);
                function AsapScheduler() {
                    _super.apply(this, arguments);
                }
                AsapScheduler.prototype.scheduleNow = function (work, state) {
                    return new AsapAction_1.AsapAction(this, work).schedule(state);
                };
                return AsapScheduler;
            }(QueueScheduler_1.QueueScheduler));
            exports_1("AsapScheduler", AsapScheduler);
        }
    }
});
//# sourceMappingURL=AsapScheduler.js.map
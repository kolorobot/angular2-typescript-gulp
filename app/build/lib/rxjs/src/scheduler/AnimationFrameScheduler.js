System.register(['./QueueScheduler', './AnimationFrameAction'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var QueueScheduler_1, AnimationFrameAction_1;
    var AnimationFrameScheduler;
    return {
        setters:[
            function (QueueScheduler_1_1) {
                QueueScheduler_1 = QueueScheduler_1_1;
            },
            function (AnimationFrameAction_1_1) {
                AnimationFrameAction_1 = AnimationFrameAction_1_1;
            }],
        execute: function() {
            AnimationFrameScheduler = (function (_super) {
                __extends(AnimationFrameScheduler, _super);
                function AnimationFrameScheduler() {
                    _super.apply(this, arguments);
                }
                AnimationFrameScheduler.prototype.scheduleNow = function (work, state) {
                    return new AnimationFrameAction_1.AnimationFrameAction(this, work).schedule(state);
                };
                return AnimationFrameScheduler;
            }(QueueScheduler_1.QueueScheduler));
            exports_1("AnimationFrameScheduler", AnimationFrameScheduler);
        }
    }
});
//# sourceMappingURL=AnimationFrameScheduler.js.map
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SubscriptionLog;
    return {
        setters:[],
        execute: function() {
            SubscriptionLog = (function () {
                function SubscriptionLog(subscribedFrame, unsubscribedFrame) {
                    if (unsubscribedFrame === void 0) { unsubscribedFrame = Number.POSITIVE_INFINITY; }
                    this.subscribedFrame = subscribedFrame;
                    this.unsubscribedFrame = unsubscribedFrame;
                }
                return SubscriptionLog;
            }());
            exports_1("SubscriptionLog", SubscriptionLog);
        }
    }
});
//# sourceMappingURL=SubscriptionLog.js.map
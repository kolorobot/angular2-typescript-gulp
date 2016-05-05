System.register(['./BoundCallbackObservable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BoundCallbackObservable_1;
    var bindCallback;
    return {
        setters:[
            function (BoundCallbackObservable_1_1) {
                BoundCallbackObservable_1 = BoundCallbackObservable_1_1;
            }],
        execute: function() {
            exports_1("bindCallback", bindCallback = BoundCallbackObservable_1.BoundCallbackObservable.create);
        }
    }
});
//# sourceMappingURL=bindCallback.js.map
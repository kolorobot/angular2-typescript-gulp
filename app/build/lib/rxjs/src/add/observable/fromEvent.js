System.register(['../../Observable', '../../observable/fromEvent'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, fromEvent_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (fromEvent_1_1) {
                fromEvent_1 = fromEvent_1_1;
            }],
        execute: function() {
            Observable_1.Observable.fromEvent = fromEvent_1.fromEvent;
        }
    }
});
//# sourceMappingURL=fromEvent.js.map
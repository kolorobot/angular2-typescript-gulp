System.register(['../../Observable', '../../operator/timeoutWith'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, timeoutWith_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (timeoutWith_1_1) {
                timeoutWith_1 = timeoutWith_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.timeoutWith = timeoutWith_1.timeoutWith;
        }
    }
});
//# sourceMappingURL=timeoutWith.js.map
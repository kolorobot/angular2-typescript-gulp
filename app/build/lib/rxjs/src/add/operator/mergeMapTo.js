System.register(['../../Observable', '../../operator/mergeMapTo'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, mergeMapTo_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (mergeMapTo_1_1) {
                mergeMapTo_1 = mergeMapTo_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.flatMapTo = mergeMapTo_1.mergeMapTo;
            Observable_1.Observable.prototype.mergeMapTo = mergeMapTo_1.mergeMapTo;
        }
    }
});
//# sourceMappingURL=mergeMapTo.js.map
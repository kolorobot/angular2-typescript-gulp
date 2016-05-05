System.register(['../../Observable', '../../operator/mergeAll'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, mergeAll_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (mergeAll_1_1) {
                mergeAll_1 = mergeAll_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.mergeAll = mergeAll_1.mergeAll;
        }
    }
});
//# sourceMappingURL=mergeAll.js.map
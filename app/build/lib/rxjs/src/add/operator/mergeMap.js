System.register(['../../Observable', '../../operator/mergeMap'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, mergeMap_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (mergeMap_1_1) {
                mergeMap_1 = mergeMap_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.mergeMap = mergeMap_1.mergeMap;
            Observable_1.Observable.prototype.flatMap = mergeMap_1.mergeMap;
        }
    }
});
//# sourceMappingURL=mergeMap.js.map
System.register(['../../Observable', '../../operator/concatMap'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, concatMap_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (concatMap_1_1) {
                concatMap_1 = concatMap_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.concatMap = concatMap_1.concatMap;
        }
    }
});
//# sourceMappingURL=concatMap.js.map
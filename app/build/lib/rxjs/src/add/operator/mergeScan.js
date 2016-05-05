System.register(['../../Observable', '../../operator/mergeScan'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, mergeScan_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (mergeScan_1_1) {
                mergeScan_1 = mergeScan_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.mergeScan = mergeScan_1.mergeScan;
        }
    }
});
//# sourceMappingURL=mergeScan.js.map
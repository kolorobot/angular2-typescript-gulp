System.register(['../../Observable', '../../operator/concatMapTo'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, concatMapTo_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (concatMapTo_1_1) {
                concatMapTo_1 = concatMapTo_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.concatMapTo = concatMapTo_1.concatMapTo;
        }
    }
});
//# sourceMappingURL=concatMapTo.js.map
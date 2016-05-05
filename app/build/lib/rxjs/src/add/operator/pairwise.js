System.register(['../../Observable', '../../operator/pairwise'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, pairwise_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (pairwise_1_1) {
                pairwise_1 = pairwise_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.pairwise = pairwise_1.pairwise;
        }
    }
});
//# sourceMappingURL=pairwise.js.map
System.register(['../../Observable', '../../operator/min'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, min_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (min_1_1) {
                min_1 = min_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.min = min_1.min;
        }
    }
});
//# sourceMappingURL=min.js.map
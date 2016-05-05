System.register(['../../Observable', '../../operator/reduce'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, reduce_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (reduce_1_1) {
                reduce_1 = reduce_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.reduce = reduce_1.reduce;
        }
    }
});
//# sourceMappingURL=reduce.js.map
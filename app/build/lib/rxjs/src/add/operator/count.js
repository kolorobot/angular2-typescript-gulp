System.register(['../../Observable', '../../operator/count'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, count_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (count_1_1) {
                count_1 = count_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.count = count_1.count;
        }
    }
});
//# sourceMappingURL=count.js.map
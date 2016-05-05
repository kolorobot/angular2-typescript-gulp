System.register(['../../Observable', '../../operator/groupBy'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, groupBy_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (groupBy_1_1) {
                groupBy_1 = groupBy_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.groupBy = groupBy_1.groupBy;
        }
    }
});
//# sourceMappingURL=groupBy.js.map
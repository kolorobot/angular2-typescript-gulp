System.register(['../../Observable', '../../operator/filter'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, filter_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (filter_1_1) {
                filter_1 = filter_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.filter = filter_1.filter;
        }
    }
});
//# sourceMappingURL=filter.js.map
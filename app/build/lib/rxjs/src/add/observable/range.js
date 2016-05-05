System.register(['../../Observable', '../../observable/range'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, range_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (range_1_1) {
                range_1 = range_1_1;
            }],
        execute: function() {
            Observable_1.Observable.range = range_1.range;
        }
    }
});
//# sourceMappingURL=range.js.map
System.register(['../../Observable', '../../observable/merge'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, merge_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (merge_1_1) {
                merge_1 = merge_1_1;
            }],
        execute: function() {
            Observable_1.Observable.merge = merge_1.merge;
        }
    }
});
//# sourceMappingURL=merge.js.map
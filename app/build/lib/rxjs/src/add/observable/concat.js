System.register(['../../Observable', '../../observable/concat'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, concat_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (concat_1_1) {
                concat_1 = concat_1_1;
            }],
        execute: function() {
            Observable_1.Observable.concat = concat_1.concat;
        }
    }
});
//# sourceMappingURL=concat.js.map
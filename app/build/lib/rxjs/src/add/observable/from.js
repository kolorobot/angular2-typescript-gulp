System.register(['../../Observable', '../../observable/from'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, from_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (from_1_1) {
                from_1 = from_1_1;
            }],
        execute: function() {
            Observable_1.Observable.from = from_1.from;
        }
    }
});
//# sourceMappingURL=from.js.map
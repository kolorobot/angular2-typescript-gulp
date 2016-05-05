System.register(['../../Observable', '../../observable/fromEventPattern'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, fromEventPattern_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (fromEventPattern_1_1) {
                fromEventPattern_1 = fromEventPattern_1_1;
            }],
        execute: function() {
            Observable_1.Observable.fromEventPattern = fromEventPattern_1.fromEventPattern;
        }
    }
});
//# sourceMappingURL=fromEventPattern.js.map
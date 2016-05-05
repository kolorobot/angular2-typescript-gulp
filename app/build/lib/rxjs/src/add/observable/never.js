System.register(['../../Observable', '../../observable/never'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, never_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (never_1_1) {
                never_1 = never_1_1;
            }],
        execute: function() {
            Observable_1.Observable.never = never_1.never;
        }
    }
});
//# sourceMappingURL=never.js.map
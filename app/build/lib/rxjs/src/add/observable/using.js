System.register(['../../Observable', '../../observable/using'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, using_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (using_1_1) {
                using_1 = using_1_1;
            }],
        execute: function() {
            Observable_1.Observable.using = using_1.using;
        }
    }
});
//# sourceMappingURL=using.js.map
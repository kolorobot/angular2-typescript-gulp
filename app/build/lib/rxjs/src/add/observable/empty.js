System.register(['../../Observable', '../../observable/empty'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, empty_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (empty_1_1) {
                empty_1 = empty_1_1;
            }],
        execute: function() {
            Observable_1.Observable.empty = empty_1.empty;
        }
    }
});
//# sourceMappingURL=empty.js.map
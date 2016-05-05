System.register(['../../Observable', '../../observable/defer'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, defer_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (defer_1_1) {
                defer_1 = defer_1_1;
            }],
        execute: function() {
            Observable_1.Observable.defer = defer_1.defer;
        }
    }
});
//# sourceMappingURL=defer.js.map
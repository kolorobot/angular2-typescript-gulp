System.register(['../../Observable', '../../operator/debounceTime'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, debounceTime_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (debounceTime_1_1) {
                debounceTime_1 = debounceTime_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;
        }
    }
});
//# sourceMappingURL=debounceTime.js.map
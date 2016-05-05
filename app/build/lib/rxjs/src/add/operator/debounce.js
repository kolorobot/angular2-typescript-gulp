System.register(['../../Observable', '../../operator/debounce'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, debounce_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (debounce_1_1) {
                debounce_1 = debounce_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.debounce = debounce_1.debounce;
        }
    }
});
//# sourceMappingURL=debounce.js.map
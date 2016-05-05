System.register(['../../Observable', '../../operator/max'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, max_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (max_1_1) {
                max_1 = max_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.max = max_1.max;
        }
    }
});
//# sourceMappingURL=max.js.map
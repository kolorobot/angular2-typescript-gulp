System.register(['../../Observable', '../../operator/exhaust'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, exhaust_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (exhaust_1_1) {
                exhaust_1 = exhaust_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.exhaust = exhaust_1.exhaust;
        }
    }
});
//# sourceMappingURL=exhaust.js.map
System.register(['../../Observable', '../../operator/last'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, last_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (last_1_1) {
                last_1 = last_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.last = last_1.last;
        }
    }
});
//# sourceMappingURL=last.js.map
System.register(['../../Observable', '../../operator/takeUntil'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, takeUntil_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (takeUntil_1_1) {
                takeUntil_1 = takeUntil_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.takeUntil = takeUntil_1.takeUntil;
        }
    }
});
//# sourceMappingURL=takeUntil.js.map
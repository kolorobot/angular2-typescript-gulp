System.register(['../../Observable', '../../operator/combineLatest'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, combineLatest_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (combineLatest_1_1) {
                combineLatest_1 = combineLatest_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.combineLatest = combineLatest_1.combineLatest;
        }
    }
});
//# sourceMappingURL=combineLatest.js.map
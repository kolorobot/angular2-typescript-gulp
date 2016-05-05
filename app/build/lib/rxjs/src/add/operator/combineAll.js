System.register(['../../Observable', '../../operator/combineAll'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, combineAll_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (combineAll_1_1) {
                combineAll_1 = combineAll_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.combineAll = combineAll_1.combineAll;
        }
    }
});
//# sourceMappingURL=combineAll.js.map
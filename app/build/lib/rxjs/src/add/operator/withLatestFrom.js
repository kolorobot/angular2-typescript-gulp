System.register(['../../Observable', '../../operator/withLatestFrom'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, withLatestFrom_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (withLatestFrom_1_1) {
                withLatestFrom_1 = withLatestFrom_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.withLatestFrom = withLatestFrom_1.withLatestFrom;
        }
    }
});
//# sourceMappingURL=withLatestFrom.js.map
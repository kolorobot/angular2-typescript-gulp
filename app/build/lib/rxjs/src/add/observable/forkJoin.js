System.register(['../../Observable', '../../observable/forkJoin'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, forkJoin_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (forkJoin_1_1) {
                forkJoin_1 = forkJoin_1_1;
            }],
        execute: function() {
            Observable_1.Observable.forkJoin = forkJoin_1.forkJoin;
        }
    }
});
//# sourceMappingURL=forkJoin.js.map
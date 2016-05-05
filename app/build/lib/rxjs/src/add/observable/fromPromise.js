System.register(['../../Observable', '../../observable/fromPromise'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, fromPromise_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (fromPromise_1_1) {
                fromPromise_1 = fromPromise_1_1;
            }],
        execute: function() {
            Observable_1.Observable.fromPromise = fromPromise_1.fromPromise;
        }
    }
});
//# sourceMappingURL=fromPromise.js.map
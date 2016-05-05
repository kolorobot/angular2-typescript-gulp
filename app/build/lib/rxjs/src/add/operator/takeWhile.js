System.register(['../../Observable', '../../operator/takeWhile'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, takeWhile_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (takeWhile_1_1) {
                takeWhile_1 = takeWhile_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.takeWhile = takeWhile_1.takeWhile;
        }
    }
});
//# sourceMappingURL=takeWhile.js.map
System.register(['../../Observable', '../../operator/skipWhile'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, skipWhile_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (skipWhile_1_1) {
                skipWhile_1 = skipWhile_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.skipWhile = skipWhile_1.skipWhile;
        }
    }
});
//# sourceMappingURL=skipWhile.js.map
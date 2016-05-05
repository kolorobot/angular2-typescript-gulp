System.register(['../../Observable', '../../operator/skipUntil'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, skipUntil_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (skipUntil_1_1) {
                skipUntil_1 = skipUntil_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.skipUntil = skipUntil_1.skipUntil;
        }
    }
});
//# sourceMappingURL=skipUntil.js.map
System.register(['../../Observable', '../../operator/skip'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, skip_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (skip_1_1) {
                skip_1 = skip_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.skip = skip_1.skip;
        }
    }
});
//# sourceMappingURL=skip.js.map
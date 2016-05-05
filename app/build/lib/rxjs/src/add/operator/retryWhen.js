System.register(['../../Observable', '../../operator/retryWhen'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, retryWhen_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (retryWhen_1_1) {
                retryWhen_1 = retryWhen_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.retryWhen = retryWhen_1.retryWhen;
        }
    }
});
//# sourceMappingURL=retryWhen.js.map
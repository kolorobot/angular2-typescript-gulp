System.register(['../../Observable', '../../operator/delayWhen'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, delayWhen_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (delayWhen_1_1) {
                delayWhen_1 = delayWhen_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.delayWhen = delayWhen_1.delayWhen;
        }
    }
});
//# sourceMappingURL=delayWhen.js.map
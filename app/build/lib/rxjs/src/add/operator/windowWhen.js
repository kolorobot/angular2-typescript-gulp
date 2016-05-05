System.register(['../../Observable', '../../operator/windowWhen'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, windowWhen_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (windowWhen_1_1) {
                windowWhen_1 = windowWhen_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.windowWhen = windowWhen_1.windowWhen;
        }
    }
});
//# sourceMappingURL=windowWhen.js.map
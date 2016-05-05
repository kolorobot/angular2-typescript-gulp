System.register(['../../Observable', '../../operator/bufferWhen'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, bufferWhen_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (bufferWhen_1_1) {
                bufferWhen_1 = bufferWhen_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.bufferWhen = bufferWhen_1.bufferWhen;
        }
    }
});
//# sourceMappingURL=bufferWhen.js.map
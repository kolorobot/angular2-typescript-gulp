System.register(['../../Observable', '../../operator/bufferToggle'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, bufferToggle_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (bufferToggle_1_1) {
                bufferToggle_1 = bufferToggle_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.bufferToggle = bufferToggle_1.bufferToggle;
        }
    }
});
//# sourceMappingURL=bufferToggle.js.map
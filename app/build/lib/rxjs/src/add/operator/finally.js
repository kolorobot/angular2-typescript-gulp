System.register(['../../Observable', '../../operator/finally'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, finally_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (finally_1_1) {
                finally_1 = finally_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.finally = finally_1._finally;
        }
    }
});
//# sourceMappingURL=finally.js.map
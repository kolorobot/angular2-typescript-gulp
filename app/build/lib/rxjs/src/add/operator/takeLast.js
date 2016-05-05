System.register(['../../Observable', '../../operator/takeLast'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, takeLast_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (takeLast_1_1) {
                takeLast_1 = takeLast_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.takeLast = takeLast_1.takeLast;
        }
    }
});
//# sourceMappingURL=takeLast.js.map
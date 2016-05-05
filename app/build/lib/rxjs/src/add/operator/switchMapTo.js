System.register(['../../Observable', '../../operator/switchMapTo'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, switchMapTo_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (switchMapTo_1_1) {
                switchMapTo_1 = switchMapTo_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.switchMapTo = switchMapTo_1.switchMapTo;
        }
    }
});
//# sourceMappingURL=switchMapTo.js.map
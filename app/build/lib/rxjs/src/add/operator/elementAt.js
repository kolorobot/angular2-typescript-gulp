System.register(['../../Observable', '../../operator/elementAt'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, elementAt_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (elementAt_1_1) {
                elementAt_1 = elementAt_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.elementAt = elementAt_1.elementAt;
        }
    }
});
//# sourceMappingURL=elementAt.js.map
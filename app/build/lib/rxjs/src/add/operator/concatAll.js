System.register(['../../Observable', '../../operator/concatAll'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, concatAll_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (concatAll_1_1) {
                concatAll_1 = concatAll_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.concatAll = concatAll_1.concatAll;
        }
    }
});
//# sourceMappingURL=concatAll.js.map
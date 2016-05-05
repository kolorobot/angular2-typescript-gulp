System.register(['../../Observable', '../../operator/findIndex'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, findIndex_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (findIndex_1_1) {
                findIndex_1 = findIndex_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.findIndex = findIndex_1.findIndex;
        }
    }
});
//# sourceMappingURL=findIndex.js.map
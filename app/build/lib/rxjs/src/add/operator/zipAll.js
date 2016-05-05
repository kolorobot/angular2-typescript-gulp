System.register(['../../Observable', '../../operator/zipAll'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, zipAll_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (zipAll_1_1) {
                zipAll_1 = zipAll_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.zipAll = zipAll_1.zipAll;
        }
    }
});
//# sourceMappingURL=zipAll.js.map
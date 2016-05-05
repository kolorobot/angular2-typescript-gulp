System.register(['../../Observable', '../../operator/catch'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, catch_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (catch_1_1) {
                catch_1 = catch_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.catch = catch_1._catch;
        }
    }
});
//# sourceMappingURL=catch.js.map
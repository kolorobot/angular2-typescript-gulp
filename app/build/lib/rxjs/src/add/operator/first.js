System.register(['../../Observable', '../../operator/first'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, first_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (first_1_1) {
                first_1 = first_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.first = first_1.first;
        }
    }
});
//# sourceMappingURL=first.js.map
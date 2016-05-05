System.register(['../../Observable', '../../operator/take'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, take_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (take_1_1) {
                take_1 = take_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.take = take_1.take;
        }
    }
});
//# sourceMappingURL=take.js.map
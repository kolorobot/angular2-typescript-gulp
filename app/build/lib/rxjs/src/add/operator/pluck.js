System.register(['../../Observable', '../../operator/pluck'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, pluck_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (pluck_1_1) {
                pluck_1 = pluck_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.pluck = pluck_1.pluck;
        }
    }
});
//# sourceMappingURL=pluck.js.map
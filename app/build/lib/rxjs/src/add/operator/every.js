System.register(['../../Observable', '../../operator/every'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, every_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (every_1_1) {
                every_1 = every_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.every = every_1.every;
        }
    }
});
//# sourceMappingURL=every.js.map
System.register(['../../Observable', '../../operator/throttle'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, throttle_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (throttle_1_1) {
                throttle_1 = throttle_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.throttle = throttle_1.throttle;
        }
    }
});
//# sourceMappingURL=throttle.js.map
System.register(['../../Observable', '../../operator/delay'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, delay_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (delay_1_1) {
                delay_1 = delay_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.delay = delay_1.delay;
        }
    }
});
//# sourceMappingURL=delay.js.map
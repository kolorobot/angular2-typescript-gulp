System.register(['../../Observable', '../../operator/repeat'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, repeat_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (repeat_1_1) {
                repeat_1 = repeat_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.repeat = repeat_1.repeat;
        }
    }
});
//# sourceMappingURL=repeat.js.map
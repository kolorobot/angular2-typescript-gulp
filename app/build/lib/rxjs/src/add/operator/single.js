System.register(['../../Observable', '../../operator/single'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, single_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (single_1_1) {
                single_1 = single_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.single = single_1.single;
        }
    }
});
//# sourceMappingURL=single.js.map
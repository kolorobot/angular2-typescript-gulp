System.register(['../../Observable', '../../operator/distinctKey'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, distinctKey_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (distinctKey_1_1) {
                distinctKey_1 = distinctKey_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.distinctKey = distinctKey_1.distinctKey;
        }
    }
});
//# sourceMappingURL=distinctKey.js.map
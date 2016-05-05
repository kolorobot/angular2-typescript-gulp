System.register(['../../Observable', '../../operator/subscribeOn'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, subscribeOn_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (subscribeOn_1_1) {
                subscribeOn_1 = subscribeOn_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.subscribeOn = subscribeOn_1.subscribeOn;
        }
    }
});
//# sourceMappingURL=subscribeOn.js.map
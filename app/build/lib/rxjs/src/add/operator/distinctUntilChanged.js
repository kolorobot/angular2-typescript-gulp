System.register(['../../Observable', '../../operator/distinctUntilChanged'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, distinctUntilChanged_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (distinctUntilChanged_1_1) {
                distinctUntilChanged_1 = distinctUntilChanged_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;
        }
    }
});
//# sourceMappingURL=distinctUntilChanged.js.map
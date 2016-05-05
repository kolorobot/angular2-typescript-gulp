System.register(['../../Observable', '../../operator/distinctUntilKeyChanged'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, distinctUntilKeyChanged_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (distinctUntilKeyChanged_1_1) {
                distinctUntilKeyChanged_1 = distinctUntilKeyChanged_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.distinctUntilKeyChanged = distinctUntilKeyChanged_1.distinctUntilKeyChanged;
        }
    }
});
//# sourceMappingURL=distinctUntilKeyChanged.js.map
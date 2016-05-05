System.register(['../../Observable', '../../operator/windowCount'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, windowCount_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (windowCount_1_1) {
                windowCount_1 = windowCount_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.windowCount = windowCount_1.windowCount;
        }
    }
});
//# sourceMappingURL=windowCount.js.map
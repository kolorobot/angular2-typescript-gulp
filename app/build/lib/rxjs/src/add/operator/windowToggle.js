System.register(['../../Observable', '../../operator/windowToggle'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, windowToggle_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (windowToggle_1_1) {
                windowToggle_1 = windowToggle_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.windowToggle = windowToggle_1.windowToggle;
        }
    }
});
//# sourceMappingURL=windowToggle.js.map
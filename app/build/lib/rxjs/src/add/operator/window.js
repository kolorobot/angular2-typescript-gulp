System.register(['../../Observable', '../../operator/window'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, window_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (window_1_1) {
                window_1 = window_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.window = window_1.window;
        }
    }
});
//# sourceMappingURL=window.js.map
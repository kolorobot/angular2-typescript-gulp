System.register(['../../Observable', '../../observable/bindCallback'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, bindCallback_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (bindCallback_1_1) {
                bindCallback_1 = bindCallback_1_1;
            }],
        execute: function() {
            Observable_1.Observable.bindCallback = bindCallback_1.bindCallback;
        }
    }
});
//# sourceMappingURL=bindCallback.js.map
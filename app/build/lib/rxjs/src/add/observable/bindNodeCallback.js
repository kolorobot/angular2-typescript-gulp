System.register(['../../Observable', '../../observable/bindNodeCallback'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, bindNodeCallback_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (bindNodeCallback_1_1) {
                bindNodeCallback_1 = bindNodeCallback_1_1;
            }],
        execute: function() {
            Observable_1.Observable.bindNodeCallback = bindNodeCallback_1.bindNodeCallback;
        }
    }
});
//# sourceMappingURL=bindNodeCallback.js.map
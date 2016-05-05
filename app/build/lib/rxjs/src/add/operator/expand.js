System.register(['../../Observable', '../../operator/expand'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, expand_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (expand_1_1) {
                expand_1 = expand_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.expand = expand_1.expand;
        }
    }
});
//# sourceMappingURL=expand.js.map
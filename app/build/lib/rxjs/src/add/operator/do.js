System.register(['../../Observable', '../../operator/do'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, do_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (do_1_1) {
                do_1 = do_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.do = do_1._do;
        }
    }
});
//# sourceMappingURL=do.js.map
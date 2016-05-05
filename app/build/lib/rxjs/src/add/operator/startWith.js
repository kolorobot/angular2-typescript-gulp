System.register(['../../Observable', '../../operator/startWith'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, startWith_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (startWith_1_1) {
                startWith_1 = startWith_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.startWith = startWith_1.startWith;
        }
    }
});
//# sourceMappingURL=startWith.js.map
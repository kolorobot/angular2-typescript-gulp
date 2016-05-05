System.register(['../../Observable', '../../operator/toPromise'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, toPromise_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (toPromise_1_1) {
                toPromise_1 = toPromise_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.toPromise = toPromise_1.toPromise;
        }
    }
});
//# sourceMappingURL=toPromise.js.map
System.register(['../../Observable', '../../operator/publishLast'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, publishLast_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (publishLast_1_1) {
                publishLast_1 = publishLast_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.publishLast = publishLast_1.publishLast;
        }
    }
});
//# sourceMappingURL=publishLast.js.map
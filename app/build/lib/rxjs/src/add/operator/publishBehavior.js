System.register(['../../Observable', '../../operator/publishBehavior'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, publishBehavior_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (publishBehavior_1_1) {
                publishBehavior_1 = publishBehavior_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.publishBehavior = publishBehavior_1.publishBehavior;
        }
    }
});
//# sourceMappingURL=publishBehavior.js.map
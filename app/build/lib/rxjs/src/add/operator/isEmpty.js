System.register(['../../Observable', '../../operator/isEmpty'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, isEmpty_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (isEmpty_1_1) {
                isEmpty_1 = isEmpty_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.isEmpty = isEmpty_1.isEmpty;
        }
    }
});
//# sourceMappingURL=isEmpty.js.map
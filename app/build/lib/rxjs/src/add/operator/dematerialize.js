System.register(['../../Observable', '../../operator/dematerialize'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, dematerialize_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (dematerialize_1_1) {
                dematerialize_1 = dematerialize_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.dematerialize = dematerialize_1.dematerialize;
        }
    }
});
//# sourceMappingURL=dematerialize.js.map
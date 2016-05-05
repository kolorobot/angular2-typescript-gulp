System.register(['../../Observable', '../../operator/materialize'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, materialize_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (materialize_1_1) {
                materialize_1 = materialize_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.materialize = materialize_1.materialize;
        }
    }
});
//# sourceMappingURL=materialize.js.map
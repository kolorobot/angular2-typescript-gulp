System.register(['../../Observable', '../../observable/throw'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, throw_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (throw_1_1) {
                throw_1 = throw_1_1;
            }],
        execute: function() {
            Observable_1.Observable.throw = throw_1._throw;
        }
    }
});
//# sourceMappingURL=throw.js.map
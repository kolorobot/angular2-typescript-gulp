System.register(['../../Observable', '../../operator/exhaustMap'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, exhaustMap_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (exhaustMap_1_1) {
                exhaustMap_1 = exhaustMap_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.exhaustMap = exhaustMap_1.exhaustMap;
        }
    }
});
//# sourceMappingURL=exhaustMap.js.map
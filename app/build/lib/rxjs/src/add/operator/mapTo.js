System.register(['../../Observable', '../../operator/mapTo'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, mapTo_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (mapTo_1_1) {
                mapTo_1 = mapTo_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.mapTo = mapTo_1.mapTo;
        }
    }
});
//# sourceMappingURL=mapTo.js.map
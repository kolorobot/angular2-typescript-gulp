System.register(['../../Observable', '../../operator/observeOn'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, observeOn_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (observeOn_1_1) {
                observeOn_1 = observeOn_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.observeOn = observeOn_1.observeOn;
        }
    }
});
//# sourceMappingURL=observeOn.js.map
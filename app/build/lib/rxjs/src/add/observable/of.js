System.register(['../../Observable', '../../observable/of'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, of_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (of_1_1) {
                of_1 = of_1_1;
            }],
        execute: function() {
            Observable_1.Observable.of = of_1.of;
        }
    }
});
//# sourceMappingURL=of.js.map
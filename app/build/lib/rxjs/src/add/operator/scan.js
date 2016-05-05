System.register(['../../Observable', '../../operator/scan'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, scan_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (scan_1_1) {
                scan_1 = scan_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.scan = scan_1.scan;
        }
    }
});
//# sourceMappingURL=scan.js.map
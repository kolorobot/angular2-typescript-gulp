System.register(['../../Observable', '../../operator/audit'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, audit_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (audit_1_1) {
                audit_1 = audit_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.audit = audit_1.audit;
        }
    }
});
//# sourceMappingURL=audit.js.map
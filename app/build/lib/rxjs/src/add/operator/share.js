System.register(['../../Observable', '../../operator/share'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, share_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (share_1_1) {
                share_1 = share_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.share = share_1.share;
        }
    }
});
//# sourceMappingURL=share.js.map
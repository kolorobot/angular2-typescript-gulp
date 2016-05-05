System.register(['../../Observable', '../../operator/let'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, let_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (let_1_1) {
                let_1 = let_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.let = let_1.letProto;
            Observable_1.Observable.prototype.letBind = let_1.letProto;
        }
    }
});
//# sourceMappingURL=let.js.map
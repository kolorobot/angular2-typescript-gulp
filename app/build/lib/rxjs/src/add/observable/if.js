System.register(['../../Observable', '../../observable/if'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, if_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (if_1_1) {
                if_1 = if_1_1;
            }],
        execute: function() {
            Observable_1.Observable.if = if_1._if;
        }
    }
});
//# sourceMappingURL=if.js.map
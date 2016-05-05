System.register(['../../Observable', '../../operator/find'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, find_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (find_1_1) {
                find_1 = find_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.find = find_1.find;
        }
    }
});
//# sourceMappingURL=find.js.map
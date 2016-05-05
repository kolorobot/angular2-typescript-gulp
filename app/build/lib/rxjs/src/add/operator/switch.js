System.register(['../../Observable', '../../operator/switch'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, switch_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (switch_1_1) {
                switch_1 = switch_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.switch = switch_1._switch;
        }
    }
});
//# sourceMappingURL=switch.js.map
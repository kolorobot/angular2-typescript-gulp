System.register(['../../Observable', '../../operator/multicast'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, multicast_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (multicast_1_1) {
                multicast_1 = multicast_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.multicast = multicast_1.multicast;
        }
    }
});
//# sourceMappingURL=multicast.js.map
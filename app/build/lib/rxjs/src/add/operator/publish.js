System.register(['../../Observable', '../../operator/publish'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, publish_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (publish_1_1) {
                publish_1 = publish_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.publish = publish_1.publish;
        }
    }
});
//# sourceMappingURL=publish.js.map
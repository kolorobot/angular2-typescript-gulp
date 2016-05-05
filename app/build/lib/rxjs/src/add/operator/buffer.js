System.register(['../../Observable', '../../operator/buffer'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, buffer_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (buffer_1_1) {
                buffer_1 = buffer_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.buffer = buffer_1.buffer;
        }
    }
});
//# sourceMappingURL=buffer.js.map
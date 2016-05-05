System.register(['../operator/concat'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var concat_1;
    var concat;
    return {
        setters:[
            function (concat_1_1) {
                concat_1 = concat_1_1;
            }],
        execute: function() {
            exports_1("concat", concat = concat_1.concatStatic);
        }
    }
});
//# sourceMappingURL=concat.js.map
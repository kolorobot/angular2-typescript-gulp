System.register(['./AsapScheduler'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AsapScheduler_1;
    var asap;
    return {
        setters:[
            function (AsapScheduler_1_1) {
                AsapScheduler_1 = AsapScheduler_1_1;
            }],
        execute: function() {
            exports_1("asap", asap = new AsapScheduler_1.AsapScheduler());
        }
    }
});
//# sourceMappingURL=asap.js.map
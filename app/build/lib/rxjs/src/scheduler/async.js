System.register(['./AsyncScheduler'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AsyncScheduler_1;
    var async;
    return {
        setters:[
            function (AsyncScheduler_1_1) {
                AsyncScheduler_1 = AsyncScheduler_1_1;
            }],
        execute: function() {
            exports_1("async", async = new AsyncScheduler_1.AsyncScheduler());
        }
    }
});
//# sourceMappingURL=async.js.map
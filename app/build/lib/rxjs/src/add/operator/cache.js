System.register(['../../Observable', '../../operator/cache'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, cache_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (cache_1_1) {
                cache_1 = cache_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.cache = cache_1.cache;
        }
    }
});
//# sourceMappingURL=cache.js.map
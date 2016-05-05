System.register(['./DeferObservable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DeferObservable_1;
    var defer;
    return {
        setters:[
            function (DeferObservable_1_1) {
                DeferObservable_1 = DeferObservable_1_1;
            }],
        execute: function() {
            exports_1("defer", defer = DeferObservable_1.DeferObservable.create);
        }
    }
});
//# sourceMappingURL=defer.js.map
System.register(['./PromiseObservable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PromiseObservable_1;
    var fromPromise;
    return {
        setters:[
            function (PromiseObservable_1_1) {
                PromiseObservable_1 = PromiseObservable_1_1;
            }],
        execute: function() {
            exports_1("fromPromise", fromPromise = PromiseObservable_1.PromiseObservable.create);
        }
    }
});
//# sourceMappingURL=fromPromise.js.map
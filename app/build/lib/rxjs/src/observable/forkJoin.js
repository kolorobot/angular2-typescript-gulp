System.register(['./ForkJoinObservable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ForkJoinObservable_1;
    var forkJoin;
    return {
        setters:[
            function (ForkJoinObservable_1_1) {
                ForkJoinObservable_1 = ForkJoinObservable_1_1;
            }],
        execute: function() {
            exports_1("forkJoin", forkJoin = ForkJoinObservable_1.ForkJoinObservable.create);
        }
    }
});
//# sourceMappingURL=forkJoin.js.map
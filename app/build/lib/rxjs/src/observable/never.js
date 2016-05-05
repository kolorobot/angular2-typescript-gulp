System.register(['./NeverObservable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NeverObservable_1;
    var never;
    return {
        setters:[
            function (NeverObservable_1_1) {
                NeverObservable_1 = NeverObservable_1_1;
            }],
        execute: function() {
            exports_1("never", never = NeverObservable_1.NeverObservable.create);
        }
    }
});
//# sourceMappingURL=never.js.map
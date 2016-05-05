System.register(['./EmptyObservable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var EmptyObservable_1;
    var empty;
    return {
        setters:[
            function (EmptyObservable_1_1) {
                EmptyObservable_1 = EmptyObservable_1_1;
            }],
        execute: function() {
            exports_1("empty", empty = EmptyObservable_1.EmptyObservable.create);
        }
    }
});
//# sourceMappingURL=empty.js.map
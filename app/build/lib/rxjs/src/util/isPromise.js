System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function isPromise(value) {
        return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
    }
    exports_1("isPromise", isPromise);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=isPromise.js.map
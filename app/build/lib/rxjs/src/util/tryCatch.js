System.register(['./errorObject'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var errorObject_1;
    var tryCatchTarget;
    function tryCatcher() {
        try {
            return tryCatchTarget.apply(this, arguments);
        }
        catch (e) {
            errorObject_1.errorObject.e = e;
            return errorObject_1.errorObject;
        }
    }
    function tryCatch(fn) {
        tryCatchTarget = fn;
        return tryCatcher;
    }
    exports_1("tryCatch", tryCatch);
    return {
        setters:[
            function (errorObject_1_1) {
                errorObject_1 = errorObject_1_1;
            }],
        execute: function() {
            ;
        }
    }
});
//# sourceMappingURL=tryCatch.js.map
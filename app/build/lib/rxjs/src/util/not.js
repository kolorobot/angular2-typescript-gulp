System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function not(pred, thisArg) {
        function notPred() {
            return !(notPred.pred.apply(notPred.thisArg, arguments));
        }
        notPred.pred = pred;
        notPred.thisArg = thisArg;
        return notPred;
    }
    exports_1("not", not);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=not.js.map
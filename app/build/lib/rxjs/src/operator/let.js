System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    /**
     * @param func
     * @return {Observable<R>}
     * @method let
     * @owner Observable
     */
    function letProto(func) {
        return func(this);
    }
    exports_1("letProto", letProto);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=let.js.map
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var objectTypes, root, freeExports, freeModule, freeGlobal;
    return {
        setters:[],
        execute: function() {
            objectTypes = {
                'boolean': false,
                'function': true,
                'object': true,
                'number': false,
                'string': false,
                'undefined': false
            };
            exports_1("root", root = (objectTypes[typeof self] && self) || (objectTypes[typeof window] && window));
            /* tslint:disable:no-unused-variable */
            freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
            freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
            freeGlobal = objectTypes[typeof global] && global;
            if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
                exports_1("root", root = freeGlobal);
            }
        }
    }
});
//# sourceMappingURL=root.js.map
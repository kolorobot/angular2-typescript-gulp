System.register(['../util/root'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var root_1;
    var $$iterator, Symbol;
    return {
        setters:[
            function (root_1_1) {
                root_1 = root_1_1;
            }],
        execute: function() {
            Symbol = root_1.root.Symbol;
            if (typeof Symbol === 'function') {
                if (Symbol.iterator) {
                    exports_1("$$iterator", $$iterator = Symbol.iterator);
                }
                else if (typeof Symbol.for === 'function') {
                    exports_1("$$iterator", $$iterator = Symbol.for('iterator'));
                }
            }
            else {
                if (root_1.root.Set && typeof new root_1.root.Set()['@@iterator'] === 'function') {
                    // Bug for mozilla version
                    exports_1("$$iterator", $$iterator = '@@iterator');
                }
                else if (root_1.root.Map) {
                    // es6-shim specific logic
                    var keys = Object.getOwnPropertyNames(root_1.root.Map.prototype);
                    for (var i = 0; i < keys.length; ++i) {
                        var key = keys[i];
                        if (key !== 'entries' && key !== 'size' && root_1.root.Map.prototype[key] === root_1.root.Map.prototype['entries']) {
                            exports_1("$$iterator", $$iterator = key);
                            break;
                        }
                    }
                }
                else {
                    exports_1("$$iterator", $$iterator = '@@iterator');
                }
            }
        }
    }
});
//# sourceMappingURL=iterator.js.map
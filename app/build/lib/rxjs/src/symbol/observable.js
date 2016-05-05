System.register(['../util/root'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var root_1;
    var Symbol, $$observable;
    return {
        setters:[
            function (root_1_1) {
                root_1 = root_1_1;
            }],
        execute: function() {
            Symbol = root_1.root.Symbol;
            if (typeof Symbol === 'function') {
                if (Symbol.observable) {
                    exports_1("$$observable", $$observable = Symbol.observable);
                }
                else {
                    if (typeof Symbol.for === 'function') {
                        exports_1("$$observable", $$observable = Symbol.for('observable'));
                    }
                    else {
                        exports_1("$$observable", $$observable = Symbol('observable'));
                    }
                    Symbol.observable = $$observable;
                }
            }
            else {
                exports_1("$$observable", $$observable = '@@observable');
            }
        }
    }
});
//# sourceMappingURL=observable.js.map
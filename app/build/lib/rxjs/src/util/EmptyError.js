System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var EmptyError;
    return {
        setters:[],
        execute: function() {
            /**
             * An error thrown when an Observable or a sequence was queried but has no
             * elements.
             *
             * @see {@link first}
             * @see {@link last}
             * @see {@link single}
             *
             * @class EmptyError
             */
            EmptyError = (function (_super) {
                __extends(EmptyError, _super);
                function EmptyError() {
                    _super.call(this, 'no elements in sequence');
                    this.name = 'EmptyError';
                }
                return EmptyError;
            }(Error));
            exports_1("EmptyError", EmptyError);
        }
    }
});
//# sourceMappingURL=EmptyError.js.map
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var ArgumentOutOfRangeError;
    return {
        setters:[],
        execute: function() {
            /**
             * An error thrown when an element was queried at a certain index of an
             * Observable, but no such index or position exists in that sequence.
             *
             * @see {@link elementAt}
             * @see {@link take}
             * @see {@link takeLast}
             *
             * @class ArgumentOutOfRangeError
             */
            ArgumentOutOfRangeError = (function (_super) {
                __extends(ArgumentOutOfRangeError, _super);
                function ArgumentOutOfRangeError() {
                    _super.call(this, 'argument out of range');
                    this.name = 'ArgumentOutOfRangeError';
                }
                return ArgumentOutOfRangeError;
            }(Error));
            exports_1("ArgumentOutOfRangeError", ArgumentOutOfRangeError);
        }
    }
});
//# sourceMappingURL=ArgumentOutOfRangeError.js.map
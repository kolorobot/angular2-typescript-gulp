System.register(['../Subscriber', '../Subscription'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1, Subscription_1;
    var FinallyOperator, FinallySubscriber;
    /**
     * Returns an Observable that mirrors the source Observable, but will call a specified function when
     * the source terminates on complete or error.
     * @param {function} finallySelector function to be called when source terminates.
     * @return {Observable} an Observable that mirrors the source, but will call the specified function on termination.
     * @method finally
     * @owner Observable
     */
    function _finally(finallySelector) {
        return this.lift(new FinallyOperator(finallySelector));
    }
    exports_1("_finally", _finally);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            },
            function (Subscription_1_1) {
                Subscription_1 = Subscription_1_1;
            }],
        execute: function() {
            FinallyOperator = (function () {
                function FinallyOperator(finallySelector) {
                    this.finallySelector = finallySelector;
                }
                FinallyOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new FinallySubscriber(subscriber, this.finallySelector));
                };
                return FinallyOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            FinallySubscriber = (function (_super) {
                __extends(FinallySubscriber, _super);
                function FinallySubscriber(destination, finallySelector) {
                    _super.call(this, destination);
                    this.add(new Subscription_1.Subscription(finallySelector));
                }
                return FinallySubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});
//# sourceMappingURL=finally.js.map
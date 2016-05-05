System.register(['../Observable', '../Subscription', '../util/tryCatch', '../util/errorObject'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1, Subscription_1, tryCatch_1, errorObject_1;
    var FromEventPatternObservable;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (Subscription_1_1) {
                Subscription_1 = Subscription_1_1;
            },
            function (tryCatch_1_1) {
                tryCatch_1 = tryCatch_1_1;
            },
            function (errorObject_1_1) {
                errorObject_1 = errorObject_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @extends {Ignored}
             * @hide true
             */
            FromEventPatternObservable = (function (_super) {
                __extends(FromEventPatternObservable, _super);
                function FromEventPatternObservable(addHandler, removeHandler, selector) {
                    _super.call(this);
                    this.addHandler = addHandler;
                    this.removeHandler = removeHandler;
                    this.selector = selector;
                }
                /**
                 * @param addHandler
                 * @param removeHandler
                 * @param selector
                 * @return {FromEventPatternObservable}
                 * @static true
                 * @name fromEventPattern
                 * @owner Observable
                 */
                FromEventPatternObservable.create = function (addHandler, removeHandler, selector) {
                    return new FromEventPatternObservable(addHandler, removeHandler, selector);
                };
                FromEventPatternObservable.prototype._subscribe = function (subscriber) {
                    var addHandler = this.addHandler;
                    var removeHandler = this.removeHandler;
                    var selector = this.selector;
                    var handler = selector ? function (e) {
                        var result = tryCatch_1.tryCatch(selector).apply(null, arguments);
                        if (result === errorObject_1.errorObject) {
                            subscriber.error(result.e);
                        }
                        else {
                            subscriber.next(result);
                        }
                    } : function (e) { subscriber.next(e); };
                    var result = tryCatch_1.tryCatch(addHandler)(handler);
                    if (result === errorObject_1.errorObject) {
                        subscriber.error(result.e);
                    }
                    subscriber.add(new Subscription_1.Subscription(function () {
                        //TODO: determine whether or not to forward to error handler
                        removeHandler(handler);
                    }));
                };
                return FromEventPatternObservable;
            }(Observable_1.Observable));
            exports_1("FromEventPatternObservable", FromEventPatternObservable);
        }
    }
});
//# sourceMappingURL=FromEventPatternObservable.js.map
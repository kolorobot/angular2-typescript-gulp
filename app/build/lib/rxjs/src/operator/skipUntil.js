System.register(['../OuterSubscriber', '../util/subscribeToResult'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var OuterSubscriber_1, subscribeToResult_1;
    var SkipUntilOperator, SkipUntilSubscriber;
    /**
     * Returns an Observable that skips items emitted by the source Observable until a second Observable emits an item.
     *
     * <img src="./img/skipUntil.png" width="100%">
     *
     * @param {Observable} the second Observable that has to emit an item before the source Observable's elements begin to
     * be mirrored by the resulting Observable.
     * @return {Observable<T>} an Observable that skips items from the source Observable until the second Observable emits
     * an item, then emits the remaining items.
     * @method skipUntil
     * @owner Observable
     */
    function skipUntil(notifier) {
        return this.lift(new SkipUntilOperator(notifier));
    }
    exports_1("skipUntil", skipUntil);
    return {
        setters:[
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            }],
        execute: function() {
            SkipUntilOperator = (function () {
                function SkipUntilOperator(notifier) {
                    this.notifier = notifier;
                }
                SkipUntilOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new SkipUntilSubscriber(subscriber, this.notifier));
                };
                return SkipUntilOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            SkipUntilSubscriber = (function (_super) {
                __extends(SkipUntilSubscriber, _super);
                function SkipUntilSubscriber(destination, notifier) {
                    _super.call(this, destination);
                    this.hasValue = false;
                    this.isInnerStopped = false;
                    this.add(subscribeToResult_1.subscribeToResult(this, notifier));
                }
                SkipUntilSubscriber.prototype._next = function (value) {
                    if (this.hasValue) {
                        _super.prototype._next.call(this, value);
                    }
                };
                SkipUntilSubscriber.prototype._complete = function () {
                    if (this.isInnerStopped) {
                        _super.prototype._complete.call(this);
                    }
                    else {
                        this.unsubscribe();
                    }
                };
                SkipUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                    this.hasValue = true;
                };
                SkipUntilSubscriber.prototype.notifyComplete = function () {
                    this.isInnerStopped = true;
                    if (this.isStopped) {
                        _super.prototype._complete.call(this);
                    }
                };
                return SkipUntilSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
        }
    }
});
//# sourceMappingURL=skipUntil.js.map
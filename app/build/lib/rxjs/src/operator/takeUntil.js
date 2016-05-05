System.register(['../OuterSubscriber', '../util/subscribeToResult'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var OuterSubscriber_1, subscribeToResult_1;
    var TakeUntilOperator, TakeUntilSubscriber;
    /**
     * @param notifier
     * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
     * @method takeUntil
     * @owner Observable
     */
    function takeUntil(notifier) {
        return this.lift(new TakeUntilOperator(notifier));
    }
    exports_1("takeUntil", takeUntil);
    return {
        setters:[
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            }],
        execute: function() {
            TakeUntilOperator = (function () {
                function TakeUntilOperator(notifier) {
                    this.notifier = notifier;
                }
                TakeUntilOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new TakeUntilSubscriber(subscriber, this.notifier));
                };
                return TakeUntilOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            TakeUntilSubscriber = (function (_super) {
                __extends(TakeUntilSubscriber, _super);
                function TakeUntilSubscriber(destination, notifier) {
                    _super.call(this, destination);
                    this.notifier = notifier;
                    this.add(subscribeToResult_1.subscribeToResult(this, notifier));
                }
                TakeUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                    this.complete();
                };
                TakeUntilSubscriber.prototype.notifyComplete = function () {
                    // noop
                };
                return TakeUntilSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
        }
    }
});
//# sourceMappingURL=takeUntil.js.map
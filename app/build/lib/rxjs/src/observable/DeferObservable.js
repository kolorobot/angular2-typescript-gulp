System.register(['../Observable', '../util/subscribeToResult', '../OuterSubscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1, subscribeToResult_1, OuterSubscriber_1;
    var DeferObservable, DeferSubscriber;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            },
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @extends {Ignored}
             * @hide true
             */
            DeferObservable = (function (_super) {
                __extends(DeferObservable, _super);
                function DeferObservable(observableFactory) {
                    _super.call(this);
                    this.observableFactory = observableFactory;
                }
                /**
                 * Creates an Observable that, on subscribe, calls an Observable factory to
                 * make an Observable for each new Observer.
                 *
                 * <span class="informal">Creates the Observable lazily, that is, only when it
                 * is subscribed.
                 * </span>
                 *
                 * <img src="./img/defer.png" width="100%">
                 *
                 * `defer` allows you to create the Observable only when the Observer
                 * subscribes, and create a fresh Observable for each Observer. It waits until
                 * an Observer subscribes to it, and then it generates an Observable,
                 * typically with an Observable factory function. It does this afresh for each
                 * subscriber, so although each subscriber may think it is subscribing to the
                 * same Observable, in fact each subscriber gets its own individual
                 * Observable.
                 *
                 * @example <caption>Subscribe to either an Observable of clicks or an Observable of interval, at random</caption>
                 * var clicksOrInterval = Rx.Observable.defer(function () {
                 *   if (Math.random() > 0.5) {
                 *     return Rx.Observable.fromEvent(document, 'click');
                 *   } else {
                 *     return Rx.Observable.interval(1000);
                 *   }
                 * });
                 * clicksOrInterval.subscribe(x => console.log(x));
                 *
                 * @see {@link create}
                 *
                 * @param {function(): Observable|Promise} observableFactory The Observable
                 * factory function to invoke for each Observer that subscribes to the output
                 * Observable. May also return a Promise, which will be converted on the fly
                 * to an Observable.
                 * @return {Observable} An Observable whose Observers' subscriptions trigger
                 * an invocation of the given Observable factory function.
                 * @static true
                 * @name defer
                 * @owner Observable
                 */
                DeferObservable.create = function (observableFactory) {
                    return new DeferObservable(observableFactory);
                };
                DeferObservable.prototype._subscribe = function (subscriber) {
                    return new DeferSubscriber(subscriber, this.observableFactory);
                };
                return DeferObservable;
            }(Observable_1.Observable));
            exports_1("DeferObservable", DeferObservable);
            DeferSubscriber = (function (_super) {
                __extends(DeferSubscriber, _super);
                function DeferSubscriber(destination, factory) {
                    _super.call(this, destination);
                    this.factory = factory;
                    this.tryDefer();
                }
                DeferSubscriber.prototype.tryDefer = function () {
                    try {
                        this._callFactory();
                    }
                    catch (err) {
                        this._error(err);
                    }
                };
                DeferSubscriber.prototype._callFactory = function () {
                    var result = this.factory();
                    if (result) {
                        this.add(subscribeToResult_1.subscribeToResult(this, result));
                    }
                };
                return DeferSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
        }
    }
});
//# sourceMappingURL=DeferObservable.js.map
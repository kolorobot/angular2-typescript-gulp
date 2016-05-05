System.register(['../util/isArray', '../util/isFunction', '../util/isPromise', '../util/isScheduler', './PromiseObservable', './IteratorObservable', './ArrayObservable', './ArrayLikeObservable', '../symbol/observable', '../symbol/iterator', '../Observable', '../operator/observeOn'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var isArray_1, isFunction_1, isPromise_1, isScheduler_1, PromiseObservable_1, IteratorObservable_1, ArrayObservable_1, ArrayLikeObservable_1, observable_1, iterator_1, Observable_1, observeOn_1;
    var isArrayLike, FromObservable;
    return {
        setters:[
            function (isArray_1_1) {
                isArray_1 = isArray_1_1;
            },
            function (isFunction_1_1) {
                isFunction_1 = isFunction_1_1;
            },
            function (isPromise_1_1) {
                isPromise_1 = isPromise_1_1;
            },
            function (isScheduler_1_1) {
                isScheduler_1 = isScheduler_1_1;
            },
            function (PromiseObservable_1_1) {
                PromiseObservable_1 = PromiseObservable_1_1;
            },
            function (IteratorObservable_1_1) {
                IteratorObservable_1 = IteratorObservable_1_1;
            },
            function (ArrayObservable_1_1) {
                ArrayObservable_1 = ArrayObservable_1_1;
            },
            function (ArrayLikeObservable_1_1) {
                ArrayLikeObservable_1 = ArrayLikeObservable_1_1;
            },
            function (observable_1_1) {
                observable_1 = observable_1_1;
            },
            function (iterator_1_1) {
                iterator_1 = iterator_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (observeOn_1_1) {
                observeOn_1 = observeOn_1_1;
            }],
        execute: function() {
            isArrayLike = (function (x) { return x && typeof x.length === 'number'; });
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @extends {Ignored}
             * @hide true
             */
            FromObservable = (function (_super) {
                __extends(FromObservable, _super);
                function FromObservable(ish, scheduler) {
                    _super.call(this, null);
                    this.ish = ish;
                    this.scheduler = scheduler;
                }
                FromObservable.create = function (ish, mapFnOrScheduler, thisArg, lastScheduler) {
                    var scheduler = null;
                    var mapFn = null;
                    if (isFunction_1.isFunction(mapFnOrScheduler)) {
                        scheduler = lastScheduler || null;
                        mapFn = mapFnOrScheduler;
                    }
                    else if (isScheduler_1.isScheduler(scheduler)) {
                        scheduler = mapFnOrScheduler;
                    }
                    if (ish != null) {
                        if (typeof ish[observable_1.$$observable] === 'function') {
                            if (ish instanceof Observable_1.Observable && !scheduler) {
                                return ish;
                            }
                            return new FromObservable(ish, scheduler);
                        }
                        else if (isArray_1.isArray(ish)) {
                            return new ArrayObservable_1.ArrayObservable(ish, scheduler);
                        }
                        else if (isPromise_1.isPromise(ish)) {
                            return new PromiseObservable_1.PromiseObservable(ish, scheduler);
                        }
                        else if (typeof ish[iterator_1.$$iterator] === 'function' || typeof ish === 'string') {
                            return new IteratorObservable_1.IteratorObservable(ish, null, null, scheduler);
                        }
                        else if (isArrayLike(ish)) {
                            return new ArrayLikeObservable_1.ArrayLikeObservable(ish, mapFn, thisArg, scheduler);
                        }
                    }
                    throw new TypeError((ish !== null && typeof ish || ish) + ' is not observable');
                };
                FromObservable.prototype._subscribe = function (subscriber) {
                    var ish = this.ish;
                    var scheduler = this.scheduler;
                    if (scheduler == null) {
                        return ish[observable_1.$$observable]().subscribe(subscriber);
                    }
                    else {
                        return ish[observable_1.$$observable]().subscribe(new observeOn_1.ObserveOnSubscriber(subscriber, scheduler, 0));
                    }
                };
                return FromObservable;
            }(Observable_1.Observable));
            exports_1("FromObservable", FromObservable);
        }
    }
});
//# sourceMappingURL=FromObservable.js.map
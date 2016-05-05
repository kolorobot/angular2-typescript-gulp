System.register(['../Observable', './EmptyObservable', '../util/isArray', '../util/subscribeToResult', '../OuterSubscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1, EmptyObservable_1, isArray_1, subscribeToResult_1, OuterSubscriber_1;
    var ForkJoinObservable, ForkJoinSubscriber;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (EmptyObservable_1_1) {
                EmptyObservable_1 = EmptyObservable_1_1;
            },
            function (isArray_1_1) {
                isArray_1 = isArray_1_1;
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
            ForkJoinObservable = (function (_super) {
                __extends(ForkJoinObservable, _super);
                function ForkJoinObservable(sources, resultSelector) {
                    _super.call(this);
                    this.sources = sources;
                    this.resultSelector = resultSelector;
                }
                /**
                 * @param sources
                 * @return {any}
                 * @static true
                 * @name forkJoin
                 * @owner Observable
                 */
                ForkJoinObservable.create = function () {
                    var sources = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        sources[_i - 0] = arguments[_i];
                    }
                    if (sources === null || arguments.length === 0) {
                        return new EmptyObservable_1.EmptyObservable();
                    }
                    var resultSelector = null;
                    if (typeof sources[sources.length - 1] === 'function') {
                        resultSelector = sources.pop();
                    }
                    // if the first and only other argument besides the resultSelector is an array
                    // assume it's been called with `forkJoin([obs1, obs2, obs3], resultSelector)`
                    if (sources.length === 1 && isArray_1.isArray(sources[0])) {
                        sources = sources[0];
                    }
                    if (sources.length === 0) {
                        return new EmptyObservable_1.EmptyObservable();
                    }
                    return new ForkJoinObservable(sources, resultSelector);
                };
                ForkJoinObservable.prototype._subscribe = function (subscriber) {
                    return new ForkJoinSubscriber(subscriber, this.sources, this.resultSelector);
                };
                return ForkJoinObservable;
            }(Observable_1.Observable));
            exports_1("ForkJoinObservable", ForkJoinObservable);
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            ForkJoinSubscriber = (function (_super) {
                __extends(ForkJoinSubscriber, _super);
                function ForkJoinSubscriber(destination, sources, resultSelector) {
                    _super.call(this, destination);
                    this.sources = sources;
                    this.resultSelector = resultSelector;
                    this.completed = 0;
                    this.haveValues = 0;
                    var len = sources.length;
                    this.total = len;
                    this.values = new Array(len);
                    for (var i = 0; i < len; i++) {
                        var source = sources[i];
                        var innerSubscription = subscribeToResult_1.subscribeToResult(this, source, null, i);
                        if (innerSubscription) {
                            innerSubscription.outerIndex = i;
                            this.add(innerSubscription);
                        }
                    }
                }
                ForkJoinSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                    this.values[outerIndex] = innerValue;
                    if (!innerSub._hasValue) {
                        innerSub._hasValue = true;
                        this.haveValues++;
                    }
                };
                ForkJoinSubscriber.prototype.notifyComplete = function (innerSub) {
                    var destination = this.destination;
                    var _a = this, haveValues = _a.haveValues, resultSelector = _a.resultSelector, values = _a.values;
                    var len = values.length;
                    if (!innerSub._hasValue) {
                        destination.complete();
                        return;
                    }
                    this.completed++;
                    if (this.completed !== len) {
                        return;
                    }
                    if (haveValues === len) {
                        var value = resultSelector ? resultSelector.apply(this, values) : values;
                        destination.next(value);
                    }
                    destination.complete();
                };
                return ForkJoinSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
        }
    }
});
//# sourceMappingURL=ForkJoinObservable.js.map
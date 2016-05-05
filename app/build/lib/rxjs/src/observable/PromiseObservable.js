System.register(['../util/root', '../Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var root_1, Observable_1;
    var PromiseObservable;
    function dispatchNext(arg) {
        var value = arg.value, subscriber = arg.subscriber;
        if (!subscriber.isUnsubscribed) {
            subscriber.next(value);
            subscriber.complete();
        }
    }
    function dispatchError(arg) {
        var err = arg.err, subscriber = arg.subscriber;
        if (!subscriber.isUnsubscribed) {
            subscriber.error(err);
        }
    }
    return {
        setters:[
            function (root_1_1) {
                root_1 = root_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @extends {Ignored}
             * @hide true
             */
            PromiseObservable = (function (_super) {
                __extends(PromiseObservable, _super);
                function PromiseObservable(promise, scheduler) {
                    if (scheduler === void 0) { scheduler = null; }
                    _super.call(this);
                    this.promise = promise;
                    this.scheduler = scheduler;
                }
                /**
                 * @param promise
                 * @param scheduler
                 * @return {PromiseObservable}
                 * @static true
                 * @name fromPromise
                 * @owner Observable
                 */
                PromiseObservable.create = function (promise, scheduler) {
                    if (scheduler === void 0) { scheduler = null; }
                    return new PromiseObservable(promise, scheduler);
                };
                PromiseObservable.prototype._subscribe = function (subscriber) {
                    var _this = this;
                    var promise = this.promise;
                    var scheduler = this.scheduler;
                    if (scheduler == null) {
                        if (this._isScalar) {
                            if (!subscriber.isUnsubscribed) {
                                subscriber.next(this.value);
                                subscriber.complete();
                            }
                        }
                        else {
                            promise.then(function (value) {
                                _this.value = value;
                                _this._isScalar = true;
                                if (!subscriber.isUnsubscribed) {
                                    subscriber.next(value);
                                    subscriber.complete();
                                }
                            }, function (err) {
                                if (!subscriber.isUnsubscribed) {
                                    subscriber.error(err);
                                }
                            })
                                .then(null, function (err) {
                                // escape the promise trap, throw unhandled errors
                                root_1.root.setTimeout(function () { throw err; });
                            });
                        }
                    }
                    else {
                        if (this._isScalar) {
                            if (!subscriber.isUnsubscribed) {
                                return scheduler.schedule(dispatchNext, 0, { value: this.value, subscriber: subscriber });
                            }
                        }
                        else {
                            promise.then(function (value) {
                                _this.value = value;
                                _this._isScalar = true;
                                if (!subscriber.isUnsubscribed) {
                                    subscriber.add(scheduler.schedule(dispatchNext, 0, { value: value, subscriber: subscriber }));
                                }
                            }, function (err) {
                                if (!subscriber.isUnsubscribed) {
                                    subscriber.add(scheduler.schedule(dispatchError, 0, { err: err, subscriber: subscriber }));
                                }
                            })
                                .then(null, function (err) {
                                // escape the promise trap, throw unhandled errors
                                root_1.root.setTimeout(function () { throw err; });
                            });
                        }
                    }
                };
                return PromiseObservable;
            }(Observable_1.Observable));
            exports_1("PromiseObservable", PromiseObservable);
        }
    }
});
//# sourceMappingURL=PromiseObservable.js.map
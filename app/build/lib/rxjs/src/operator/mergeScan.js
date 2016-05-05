System.register(['../util/tryCatch', '../util/errorObject', '../util/subscribeToResult', '../OuterSubscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var tryCatch_1, errorObject_1, subscribeToResult_1, OuterSubscriber_1;
    var MergeScanOperator, MergeScanSubscriber;
    /**
     * @param project
     * @param seed
     * @param concurrent
     * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
     * @method mergeScan
     * @owner Observable
     */
    function mergeScan(project, seed, concurrent) {
        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
        return this.lift(new MergeScanOperator(project, seed, concurrent));
    }
    exports_1("mergeScan", mergeScan);
    return {
        setters:[
            function (tryCatch_1_1) {
                tryCatch_1 = tryCatch_1_1;
            },
            function (errorObject_1_1) {
                errorObject_1 = errorObject_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            },
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            }],
        execute: function() {
            MergeScanOperator = (function () {
                function MergeScanOperator(project, seed, concurrent) {
                    this.project = project;
                    this.seed = seed;
                    this.concurrent = concurrent;
                }
                MergeScanOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new MergeScanSubscriber(subscriber, this.project, this.seed, this.concurrent));
                };
                return MergeScanOperator;
            }());
            exports_1("MergeScanOperator", MergeScanOperator);
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            MergeScanSubscriber = (function (_super) {
                __extends(MergeScanSubscriber, _super);
                function MergeScanSubscriber(destination, project, acc, concurrent) {
                    _super.call(this, destination);
                    this.project = project;
                    this.acc = acc;
                    this.concurrent = concurrent;
                    this.hasValue = false;
                    this.hasCompleted = false;
                    this.buffer = [];
                    this.active = 0;
                    this.index = 0;
                }
                MergeScanSubscriber.prototype._next = function (value) {
                    if (this.active < this.concurrent) {
                        var index = this.index++;
                        var ish = tryCatch_1.tryCatch(this.project)(this.acc, value);
                        var destination = this.destination;
                        if (ish === errorObject_1.errorObject) {
                            destination.error(errorObject_1.errorObject.e);
                        }
                        else {
                            this.active++;
                            this._innerSub(ish, value, index);
                        }
                    }
                    else {
                        this.buffer.push(value);
                    }
                };
                MergeScanSubscriber.prototype._innerSub = function (ish, value, index) {
                    this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
                };
                MergeScanSubscriber.prototype._complete = function () {
                    this.hasCompleted = true;
                    if (this.active === 0 && this.buffer.length === 0) {
                        if (this.hasValue === false) {
                            this.destination.next(this.acc);
                        }
                        this.destination.complete();
                    }
                };
                MergeScanSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                    var destination = this.destination;
                    this.acc = innerValue;
                    this.hasValue = true;
                    destination.next(innerValue);
                };
                MergeScanSubscriber.prototype.notifyComplete = function (innerSub) {
                    var buffer = this.buffer;
                    this.remove(innerSub);
                    this.active--;
                    if (buffer.length > 0) {
                        this._next(buffer.shift());
                    }
                    else if (this.active === 0 && this.hasCompleted) {
                        if (this.hasValue === false) {
                            this.destination.next(this.acc);
                        }
                        this.destination.complete();
                    }
                };
                return MergeScanSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
            exports_1("MergeScanSubscriber", MergeScanSubscriber);
        }
    }
});
//# sourceMappingURL=mergeScan.js.map
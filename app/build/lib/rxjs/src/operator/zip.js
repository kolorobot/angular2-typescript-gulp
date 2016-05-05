System.register(['../observable/ArrayObservable', '../util/isArray', '../Subscriber', '../OuterSubscriber', '../util/subscribeToResult', '../symbol/iterator'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var ArrayObservable_1, isArray_1, Subscriber_1, OuterSubscriber_1, subscribeToResult_1, iterator_1;
    var ZipOperator, ZipSubscriber, StaticIterator, StaticArrayIterator, ZipBufferIterator;
    /**
     * @param observables
     * @return {Observable<R>}
     * @method zip
     * @owner Observable
     */
    function zipProto() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i - 0] = arguments[_i];
        }
        observables.unshift(this);
        return zipStatic.apply(this, observables);
    }
    exports_1("zipProto", zipProto);
    /* tslint:enable:max-line-length */
    /**
     * @param observables
     * @return {Observable<R>}
     * @static true
     * @name zip
     * @owner Observable
     */
    function zipStatic() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i - 0] = arguments[_i];
        }
        var project = observables[observables.length - 1];
        if (typeof project === 'function') {
            observables.pop();
        }
        return new ArrayObservable_1.ArrayObservable(observables).lift(new ZipOperator(project));
    }
    exports_1("zipStatic", zipStatic);
    return {
        setters:[
            function (ArrayObservable_1_1) {
                ArrayObservable_1 = ArrayObservable_1_1;
            },
            function (isArray_1_1) {
                isArray_1 = isArray_1_1;
            },
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            },
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            },
            function (iterator_1_1) {
                iterator_1 = iterator_1_1;
            }],
        execute: function() {
            ZipOperator = (function () {
                function ZipOperator(project) {
                    this.project = project;
                }
                ZipOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new ZipSubscriber(subscriber, this.project));
                };
                return ZipOperator;
            }());
            exports_1("ZipOperator", ZipOperator);
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            ZipSubscriber = (function (_super) {
                __extends(ZipSubscriber, _super);
                function ZipSubscriber(destination, project, values) {
                    if (values === void 0) { values = Object.create(null); }
                    _super.call(this, destination);
                    this.index = 0;
                    this.iterators = [];
                    this.active = 0;
                    this.project = (typeof project === 'function') ? project : null;
                    this.values = values;
                }
                ZipSubscriber.prototype._next = function (value) {
                    var iterators = this.iterators;
                    var index = this.index++;
                    if (isArray_1.isArray(value)) {
                        iterators.push(new StaticArrayIterator(value));
                    }
                    else if (typeof value[iterator_1.$$iterator] === 'function') {
                        iterators.push(new StaticIterator(value[iterator_1.$$iterator]()));
                    }
                    else {
                        iterators.push(new ZipBufferIterator(this.destination, this, value, index));
                    }
                };
                ZipSubscriber.prototype._complete = function () {
                    var iterators = this.iterators;
                    var len = iterators.length;
                    this.active = len;
                    for (var i = 0; i < len; i++) {
                        var iterator = iterators[i];
                        if (iterator.stillUnsubscribed) {
                            this.add(iterator.subscribe(iterator, i));
                        }
                        else {
                            this.active--; // not an observable
                        }
                    }
                };
                ZipSubscriber.prototype.notifyInactive = function () {
                    this.active--;
                    if (this.active === 0) {
                        this.destination.complete();
                    }
                };
                ZipSubscriber.prototype.checkIterators = function () {
                    var iterators = this.iterators;
                    var len = iterators.length;
                    var destination = this.destination;
                    // abort if not all of them have values
                    for (var i = 0; i < len; i++) {
                        var iterator = iterators[i];
                        if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
                            return;
                        }
                    }
                    var shouldComplete = false;
                    var args = [];
                    for (var i = 0; i < len; i++) {
                        var iterator = iterators[i];
                        var result = iterator.next();
                        // check to see if it's completed now that you've gotten
                        // the next value.
                        if (iterator.hasCompleted()) {
                            shouldComplete = true;
                        }
                        if (result.done) {
                            destination.complete();
                            return;
                        }
                        args.push(result.value);
                    }
                    if (this.project) {
                        this._tryProject(args);
                    }
                    else {
                        destination.next(args);
                    }
                    if (shouldComplete) {
                        destination.complete();
                    }
                };
                ZipSubscriber.prototype._tryProject = function (args) {
                    var result;
                    try {
                        result = this.project.apply(this, args);
                    }
                    catch (err) {
                        this.destination.error(err);
                        return;
                    }
                    this.destination.next(result);
                };
                return ZipSubscriber;
            }(Subscriber_1.Subscriber));
            exports_1("ZipSubscriber", ZipSubscriber);
            StaticIterator = (function () {
                function StaticIterator(iterator) {
                    this.iterator = iterator;
                    this.nextResult = iterator.next();
                }
                StaticIterator.prototype.hasValue = function () {
                    return true;
                };
                StaticIterator.prototype.next = function () {
                    var result = this.nextResult;
                    this.nextResult = this.iterator.next();
                    return result;
                };
                StaticIterator.prototype.hasCompleted = function () {
                    var nextResult = this.nextResult;
                    return nextResult && nextResult.done;
                };
                return StaticIterator;
            }());
            StaticArrayIterator = (function () {
                function StaticArrayIterator(array) {
                    this.array = array;
                    this.index = 0;
                    this.length = 0;
                    this.length = array.length;
                }
                StaticArrayIterator.prototype[iterator_1.$$iterator] = function () {
                    return this;
                };
                StaticArrayIterator.prototype.next = function (value) {
                    var i = this.index++;
                    var array = this.array;
                    return i < this.length ? { value: array[i], done: false } : { done: true };
                };
                StaticArrayIterator.prototype.hasValue = function () {
                    return this.array.length > this.index;
                };
                StaticArrayIterator.prototype.hasCompleted = function () {
                    return this.array.length === this.index;
                };
                return StaticArrayIterator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            ZipBufferIterator = (function (_super) {
                __extends(ZipBufferIterator, _super);
                function ZipBufferIterator(destination, parent, observable, index) {
                    _super.call(this, destination);
                    this.parent = parent;
                    this.observable = observable;
                    this.index = index;
                    this.stillUnsubscribed = true;
                    this.buffer = [];
                    this.isComplete = false;
                }
                ZipBufferIterator.prototype[iterator_1.$$iterator] = function () {
                    return this;
                };
                // NOTE: there is actually a name collision here with Subscriber.next and Iterator.next
                //    this is legit because `next()` will never be called by a subscription in this case.
                ZipBufferIterator.prototype.next = function () {
                    var buffer = this.buffer;
                    if (buffer.length === 0 && this.isComplete) {
                        return { done: true };
                    }
                    else {
                        return { value: buffer.shift(), done: false };
                    }
                };
                ZipBufferIterator.prototype.hasValue = function () {
                    return this.buffer.length > 0;
                };
                ZipBufferIterator.prototype.hasCompleted = function () {
                    return this.buffer.length === 0 && this.isComplete;
                };
                ZipBufferIterator.prototype.notifyComplete = function () {
                    if (this.buffer.length > 0) {
                        this.isComplete = true;
                        this.parent.notifyInactive();
                    }
                    else {
                        this.destination.complete();
                    }
                };
                ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                    this.buffer.push(innerValue);
                    this.parent.checkIterators();
                };
                ZipBufferIterator.prototype.subscribe = function (value, index) {
                    return subscribeToResult_1.subscribeToResult(this, this.observable, this, index);
                };
                return ZipBufferIterator;
            }(OuterSubscriber_1.OuterSubscriber));
        }
    }
});
//# sourceMappingURL=zip.js.map
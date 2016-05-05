System.register(['./Observable', './Subscriber', './Subscription', './SubjectSubscription', './symbol/rxSubscriber', './util/throwError', './util/ObjectUnsubscribedError'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1, Subscriber_1, Subscription_1, SubjectSubscription_1, rxSubscriber_1, throwError_1, ObjectUnsubscribedError_1;
    var Subject, SubjectObservable;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            },
            function (Subscription_1_1) {
                Subscription_1 = Subscription_1_1;
            },
            function (SubjectSubscription_1_1) {
                SubjectSubscription_1 = SubjectSubscription_1_1;
            },
            function (rxSubscriber_1_1) {
                rxSubscriber_1 = rxSubscriber_1_1;
            },
            function (throwError_1_1) {
                throwError_1 = throwError_1_1;
            },
            function (ObjectUnsubscribedError_1_1) {
                ObjectUnsubscribedError_1 = ObjectUnsubscribedError_1_1;
            }],
        execute: function() {
            /**
             * @class Subject<T>
             */
            Subject = (function (_super) {
                __extends(Subject, _super);
                function Subject(destination, source) {
                    _super.call(this);
                    this.destination = destination;
                    this.source = source;
                    this.observers = [];
                    this.isUnsubscribed = false;
                    this.isStopped = false;
                    this.hasErrored = false;
                    this.dispatching = false;
                    this.hasCompleted = false;
                    this.source = source;
                }
                Subject.prototype.lift = function (operator) {
                    var subject = new Subject(this.destination || this, this);
                    subject.operator = operator;
                    return subject;
                };
                Subject.prototype.add = function (subscription) {
                    return Subscription_1.Subscription.prototype.add.call(this, subscription);
                };
                Subject.prototype.remove = function (subscription) {
                    Subscription_1.Subscription.prototype.remove.call(this, subscription);
                };
                Subject.prototype.unsubscribe = function () {
                    Subscription_1.Subscription.prototype.unsubscribe.call(this);
                };
                Subject.prototype._subscribe = function (subscriber) {
                    if (this.source) {
                        return this.source.subscribe(subscriber);
                    }
                    else {
                        if (subscriber.isUnsubscribed) {
                            return;
                        }
                        else if (this.hasErrored) {
                            return subscriber.error(this.errorValue);
                        }
                        else if (this.hasCompleted) {
                            return subscriber.complete();
                        }
                        this.throwIfUnsubscribed();
                        var subscription = new SubjectSubscription_1.SubjectSubscription(this, subscriber);
                        this.observers.push(subscriber);
                        return subscription;
                    }
                };
                Subject.prototype._unsubscribe = function () {
                    this.source = null;
                    this.isStopped = true;
                    this.observers = null;
                    this.destination = null;
                };
                Subject.prototype.next = function (value) {
                    this.throwIfUnsubscribed();
                    if (this.isStopped) {
                        return;
                    }
                    this.dispatching = true;
                    this._next(value);
                    this.dispatching = false;
                    if (this.hasErrored) {
                        this._error(this.errorValue);
                    }
                    else if (this.hasCompleted) {
                        this._complete();
                    }
                };
                Subject.prototype.error = function (err) {
                    this.throwIfUnsubscribed();
                    if (this.isStopped) {
                        return;
                    }
                    this.isStopped = true;
                    this.hasErrored = true;
                    this.errorValue = err;
                    if (this.dispatching) {
                        return;
                    }
                    this._error(err);
                };
                Subject.prototype.complete = function () {
                    this.throwIfUnsubscribed();
                    if (this.isStopped) {
                        return;
                    }
                    this.isStopped = true;
                    this.hasCompleted = true;
                    if (this.dispatching) {
                        return;
                    }
                    this._complete();
                };
                Subject.prototype.asObservable = function () {
                    var observable = new SubjectObservable(this);
                    return observable;
                };
                Subject.prototype._next = function (value) {
                    if (this.destination) {
                        this.destination.next(value);
                    }
                    else {
                        this._finalNext(value);
                    }
                };
                Subject.prototype._finalNext = function (value) {
                    var index = -1;
                    var observers = this.observers.slice(0);
                    var len = observers.length;
                    while (++index < len) {
                        observers[index].next(value);
                    }
                };
                Subject.prototype._error = function (err) {
                    if (this.destination) {
                        this.destination.error(err);
                    }
                    else {
                        this._finalError(err);
                    }
                };
                Subject.prototype._finalError = function (err) {
                    var index = -1;
                    var observers = this.observers;
                    // optimization to block our SubjectSubscriptions from
                    // splicing themselves out of the observers list one by one.
                    this.observers = null;
                    this.isUnsubscribed = true;
                    if (observers) {
                        var len = observers.length;
                        while (++index < len) {
                            observers[index].error(err);
                        }
                    }
                    this.isUnsubscribed = false;
                    this.unsubscribe();
                };
                Subject.prototype._complete = function () {
                    if (this.destination) {
                        this.destination.complete();
                    }
                    else {
                        this._finalComplete();
                    }
                };
                Subject.prototype._finalComplete = function () {
                    var index = -1;
                    var observers = this.observers;
                    // optimization to block our SubjectSubscriptions from
                    // splicing themselves out of the observers list one by one.
                    this.observers = null;
                    this.isUnsubscribed = true;
                    if (observers) {
                        var len = observers.length;
                        while (++index < len) {
                            observers[index].complete();
                        }
                    }
                    this.isUnsubscribed = false;
                    this.unsubscribe();
                };
                Subject.prototype.throwIfUnsubscribed = function () {
                    if (this.isUnsubscribed) {
                        throwError_1.throwError(new ObjectUnsubscribedError_1.ObjectUnsubscribedError());
                    }
                };
                Subject.prototype[rxSubscriber_1.$$rxSubscriber] = function () {
                    return new Subscriber_1.Subscriber(this);
                };
                Subject.create = function (destination, source) {
                    return new Subject(destination, source);
                };
                return Subject;
            }(Observable_1.Observable));
            exports_1("Subject", Subject);
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            SubjectObservable = (function (_super) {
                __extends(SubjectObservable, _super);
                function SubjectObservable(source) {
                    _super.call(this);
                    this.source = source;
                }
                return SubjectObservable;
            }(Observable_1.Observable));
        }
    }
});
//# sourceMappingURL=Subject.js.map
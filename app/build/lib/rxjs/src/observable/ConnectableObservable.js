System.register(['../Observable', '../Subscriber', '../Subscription'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1, Subscriber_1, Subscription_1;
    var ConnectableObservable, ConnectableSubscription, RefCountObservable, RefCountSubscriber;
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
            }],
        execute: function() {
            /**
             * @class ConnectableObservable<T>
             */
            ConnectableObservable = (function (_super) {
                __extends(ConnectableObservable, _super);
                function ConnectableObservable(source, subjectFactory) {
                    _super.call(this);
                    this.source = source;
                    this.subjectFactory = subjectFactory;
                }
                ConnectableObservable.prototype._subscribe = function (subscriber) {
                    return this.getSubject().subscribe(subscriber);
                };
                ConnectableObservable.prototype.getSubject = function () {
                    var subject = this.subject;
                    if (subject && !subject.isUnsubscribed) {
                        return subject;
                    }
                    return (this.subject = this.subjectFactory());
                };
                ConnectableObservable.prototype.connect = function () {
                    var source = this.source;
                    var subscription = this.subscription;
                    if (subscription && !subscription.isUnsubscribed) {
                        return subscription;
                    }
                    subscription = source.subscribe(this.getSubject());
                    subscription.add(new ConnectableSubscription(this));
                    return (this.subscription = subscription);
                };
                ConnectableObservable.prototype.refCount = function () {
                    return new RefCountObservable(this);
                };
                /**
                 * This method is opened for `ConnectableSubscription`.
                 * Not to call from others.
                 */
                ConnectableObservable.prototype._closeSubscription = function () {
                    this.subject = null;
                    this.subscription = null;
                };
                return ConnectableObservable;
            }(Observable_1.Observable));
            exports_1("ConnectableObservable", ConnectableObservable);
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            ConnectableSubscription = (function (_super) {
                __extends(ConnectableSubscription, _super);
                function ConnectableSubscription(connectable) {
                    _super.call(this);
                    this.connectable = connectable;
                }
                ConnectableSubscription.prototype._unsubscribe = function () {
                    var connectable = this.connectable;
                    connectable._closeSubscription();
                    this.connectable = null;
                };
                return ConnectableSubscription;
            }(Subscription_1.Subscription));
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            RefCountObservable = (function (_super) {
                __extends(RefCountObservable, _super);
                function RefCountObservable(connectable, refCount) {
                    if (refCount === void 0) { refCount = 0; }
                    _super.call(this);
                    this.connectable = connectable;
                    this.refCount = refCount;
                }
                RefCountObservable.prototype._subscribe = function (subscriber) {
                    var connectable = this.connectable;
                    var refCountSubscriber = new RefCountSubscriber(subscriber, this);
                    var subscription = connectable.subscribe(refCountSubscriber);
                    if (!subscription.isUnsubscribed && ++this.refCount === 1) {
                        refCountSubscriber.connection = this.connection = connectable.connect();
                    }
                    return subscription;
                };
                return RefCountObservable;
            }(Observable_1.Observable));
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            RefCountSubscriber = (function (_super) {
                __extends(RefCountSubscriber, _super);
                function RefCountSubscriber(destination, refCountObservable) {
                    _super.call(this, null);
                    this.destination = destination;
                    this.refCountObservable = refCountObservable;
                    this.connection = refCountObservable.connection;
                    destination.add(this);
                }
                RefCountSubscriber.prototype._next = function (value) {
                    this.destination.next(value);
                };
                RefCountSubscriber.prototype._error = function (err) {
                    this._resetConnectable();
                    this.destination.error(err);
                };
                RefCountSubscriber.prototype._complete = function () {
                    this._resetConnectable();
                    this.destination.complete();
                };
                RefCountSubscriber.prototype._resetConnectable = function () {
                    var observable = this.refCountObservable;
                    var obsConnection = observable.connection;
                    var subConnection = this.connection;
                    if (subConnection && subConnection === obsConnection) {
                        observable.refCount = 0;
                        obsConnection.unsubscribe();
                        observable.connection = null;
                        this.unsubscribe();
                    }
                };
                RefCountSubscriber.prototype._unsubscribe = function () {
                    var observable = this.refCountObservable;
                    if (observable.refCount === 0) {
                        return;
                    }
                    if (--observable.refCount === 0) {
                        var obsConnection = observable.connection;
                        var subConnection = this.connection;
                        if (subConnection && subConnection === obsConnection) {
                            obsConnection.unsubscribe();
                            observable.connection = null;
                        }
                    }
                };
                return RefCountSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});
//# sourceMappingURL=ConnectableObservable.js.map
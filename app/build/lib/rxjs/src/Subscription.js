System.register(['./util/isArray', './util/isObject', './util/isFunction', './util/tryCatch', './util/errorObject', './util/UnsubscriptionError'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var isArray_1, isObject_1, isFunction_1, tryCatch_1, errorObject_1, UnsubscriptionError_1;
    var Subscription;
    return {
        setters:[
            function (isArray_1_1) {
                isArray_1 = isArray_1_1;
            },
            function (isObject_1_1) {
                isObject_1 = isObject_1_1;
            },
            function (isFunction_1_1) {
                isFunction_1 = isFunction_1_1;
            },
            function (tryCatch_1_1) {
                tryCatch_1 = tryCatch_1_1;
            },
            function (errorObject_1_1) {
                errorObject_1 = errorObject_1_1;
            },
            function (UnsubscriptionError_1_1) {
                UnsubscriptionError_1 = UnsubscriptionError_1_1;
            }],
        execute: function() {
            /**
             * Represents a disposable resource, such as the execution of an Observable. A
             * Subscription has one important method, `unsubscribe`, that takes no argument
             * and just disposes the resource held by the subscription.
             *
             * Additionally, subscriptions may be grouped together through the `add()`
             * method, which will attach a child Subscription to the current Subscription.
             * When a Subscription is unsubscribed, all its children (and its grandchildren)
             * will be unsubscribed as well.
             *
             * @class Subscription
             */
            Subscription = (function () {
                /**
                 * @param {function(): void} [unsubscribe] A function describing how to
                 * perform the disposal of resources when the `unsubscribe` method is called.
                 */
                function Subscription(unsubscribe) {
                    /**
                     * A flag to indicate whether this Subscription has already been unsubscribed.
                     * @type {boolean}
                     */
                    this.isUnsubscribed = false;
                    if (unsubscribe) {
                        this._unsubscribe = unsubscribe;
                    }
                }
                /**
                 * Disposes the resources held by the subscription. May, for instance, cancel
                 * an ongoing Observable execution or cancel any other type of work that
                 * started when the Subscription was created.
                 * @return {void}
                 */
                Subscription.prototype.unsubscribe = function () {
                    var hasErrors = false;
                    var errors;
                    if (this.isUnsubscribed) {
                        return;
                    }
                    this.isUnsubscribed = true;
                    var _a = this, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
                    this._subscriptions = null;
                    if (isFunction_1.isFunction(_unsubscribe)) {
                        var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
                        if (trial === errorObject_1.errorObject) {
                            hasErrors = true;
                            (errors = errors || []).push(errorObject_1.errorObject.e);
                        }
                    }
                    if (isArray_1.isArray(_subscriptions)) {
                        var index = -1;
                        var len = _subscriptions.length;
                        while (++index < len) {
                            var sub = _subscriptions[index];
                            if (isObject_1.isObject(sub)) {
                                var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                                if (trial === errorObject_1.errorObject) {
                                    hasErrors = true;
                                    errors = errors || [];
                                    var err = errorObject_1.errorObject.e;
                                    if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                                        errors = errors.concat(err.errors);
                                    }
                                    else {
                                        errors.push(err);
                                    }
                                }
                            }
                        }
                    }
                    if (hasErrors) {
                        throw new UnsubscriptionError_1.UnsubscriptionError(errors);
                    }
                };
                /**
                 * Adds a tear down to be called during the unsubscribe() of this
                 * Subscription.
                 *
                 * If the tear down being added is a subscription that is already
                 * unsubscribed, is the same reference `add` is being called on, or is
                 * `Subscription.EMPTY`, it will not be added.
                 *
                 * If this subscription is already in an `isUnsubscribed` state, the passed
                 * tear down logic will be executed immediately.
                 *
                 * @param {TeardownLogic} teardown The additional logic to execute on
                 * teardown.
                 * @return {Subscription} Returns the Subscription used or created to be
                 * added to the inner subscriptions list. This Subscription can be used with
                 * `remove()` to remove the passed teardown logic from the inner subscriptions
                 * list.
                 */
                Subscription.prototype.add = function (teardown) {
                    if (!teardown || (teardown === this) || (teardown === Subscription.EMPTY)) {
                        return;
                    }
                    var sub = teardown;
                    switch (typeof teardown) {
                        case 'function':
                            sub = new Subscription(teardown);
                        case 'object':
                            if (sub.isUnsubscribed || typeof sub.unsubscribe !== 'function') {
                                break;
                            }
                            else if (this.isUnsubscribed) {
                                sub.unsubscribe();
                            }
                            else {
                                (this._subscriptions || (this._subscriptions = [])).push(sub);
                            }
                            break;
                        default:
                            throw new Error('Unrecognized teardown ' + teardown + ' added to Subscription.');
                    }
                    return sub;
                };
                /**
                 * Removes a Subscription from the internal list of subscriptions that will
                 * unsubscribe during the unsubscribe process of this Subscription.
                 * @param {Subscription} subscription The subscription to remove.
                 * @return {void}
                 */
                Subscription.prototype.remove = function (subscription) {
                    // HACK: This might be redundant because of the logic in `add()`
                    if (subscription == null || (subscription === this) || (subscription === Subscription.EMPTY)) {
                        return;
                    }
                    var subscriptions = this._subscriptions;
                    if (subscriptions) {
                        var subscriptionIndex = subscriptions.indexOf(subscription);
                        if (subscriptionIndex !== -1) {
                            subscriptions.splice(subscriptionIndex, 1);
                        }
                    }
                };
                Subscription.EMPTY = (function (empty) {
                    empty.isUnsubscribed = true;
                    return empty;
                }(new Subscription()));
                return Subscription;
            }());
            exports_1("Subscription", Subscription);
        }
    }
});
//# sourceMappingURL=Subscription.js.map
System.register(['../Subscriber', '../Notification'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1, Notification_1;
    var ObserveOnOperator, ObserveOnSubscriber, ObserveOnMessage;
    /**
     * @see {@link Notification}
     *
     * @param scheduler
     * @param delay
     * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
     * @method observeOn
     * @owner Observable
     */
    function observeOn(scheduler, delay) {
        if (delay === void 0) { delay = 0; }
        return this.lift(new ObserveOnOperator(scheduler, delay));
    }
    exports_1("observeOn", observeOn);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            },
            function (Notification_1_1) {
                Notification_1 = Notification_1_1;
            }],
        execute: function() {
            ObserveOnOperator = (function () {
                function ObserveOnOperator(scheduler, delay) {
                    if (delay === void 0) { delay = 0; }
                    this.scheduler = scheduler;
                    this.delay = delay;
                }
                ObserveOnOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
                };
                return ObserveOnOperator;
            }());
            exports_1("ObserveOnOperator", ObserveOnOperator);
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            ObserveOnSubscriber = (function (_super) {
                __extends(ObserveOnSubscriber, _super);
                function ObserveOnSubscriber(destination, scheduler, delay) {
                    if (delay === void 0) { delay = 0; }
                    _super.call(this, destination);
                    this.scheduler = scheduler;
                    this.delay = delay;
                }
                ObserveOnSubscriber.dispatch = function (arg) {
                    var notification = arg.notification, destination = arg.destination;
                    notification.observe(destination);
                };
                ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
                    this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
                };
                ObserveOnSubscriber.prototype._next = function (value) {
                    this.scheduleMessage(Notification_1.Notification.createNext(value));
                };
                ObserveOnSubscriber.prototype._error = function (err) {
                    this.scheduleMessage(Notification_1.Notification.createError(err));
                };
                ObserveOnSubscriber.prototype._complete = function () {
                    this.scheduleMessage(Notification_1.Notification.createComplete());
                };
                return ObserveOnSubscriber;
            }(Subscriber_1.Subscriber));
            exports_1("ObserveOnSubscriber", ObserveOnSubscriber);
            ObserveOnMessage = (function () {
                function ObserveOnMessage(notification, destination) {
                    this.notification = notification;
                    this.destination = destination;
                }
                return ObserveOnMessage;
            }());
            exports_1("ObserveOnMessage", ObserveOnMessage);
        }
    }
});
//# sourceMappingURL=observeOn.js.map
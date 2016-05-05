System.register(['../Subscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1;
    var IsEmptyOperator, IsEmptySubscriber;
    /**
     * If the source Observable is empty it returns an Observable that emits true, otherwise it emits false.
     *
     * <img src="./img/isEmpty.png" width="100%">
     *
     * @return {Observable} an Observable that emits a Boolean.
     * @method isEmpty
     * @owner Observable
     */
    function isEmpty() {
        return this.lift(new IsEmptyOperator());
    }
    exports_1("isEmpty", isEmpty);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            }],
        execute: function() {
            IsEmptyOperator = (function () {
                function IsEmptyOperator() {
                }
                IsEmptyOperator.prototype.call = function (observer, source) {
                    return source._subscribe(new IsEmptySubscriber(observer));
                };
                return IsEmptyOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            IsEmptySubscriber = (function (_super) {
                __extends(IsEmptySubscriber, _super);
                function IsEmptySubscriber(destination) {
                    _super.call(this, destination);
                }
                IsEmptySubscriber.prototype.notifyComplete = function (isEmpty) {
                    var destination = this.destination;
                    destination.next(isEmpty);
                    destination.complete();
                };
                IsEmptySubscriber.prototype._next = function (value) {
                    this.notifyComplete(false);
                };
                IsEmptySubscriber.prototype._complete = function () {
                    this.notifyComplete(true);
                };
                return IsEmptySubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});
//# sourceMappingURL=isEmpty.js.map
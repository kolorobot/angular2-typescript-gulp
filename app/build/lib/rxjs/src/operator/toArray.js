System.register(['../Subscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1;
    var ToArrayOperator, ToArraySubscriber;
    /**
     * @return {Observable<any[]>|WebSocketSubject<T>|Observable<T>}
     * @method toArray
     * @owner Observable
     */
    function toArray() {
        return this.lift(new ToArrayOperator());
    }
    exports_1("toArray", toArray);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            }],
        execute: function() {
            ToArrayOperator = (function () {
                function ToArrayOperator() {
                }
                ToArrayOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new ToArraySubscriber(subscriber));
                };
                return ToArrayOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            ToArraySubscriber = (function (_super) {
                __extends(ToArraySubscriber, _super);
                function ToArraySubscriber(destination) {
                    _super.call(this, destination);
                    this.array = [];
                }
                ToArraySubscriber.prototype._next = function (x) {
                    this.array.push(x);
                };
                ToArraySubscriber.prototype._complete = function () {
                    this.destination.next(this.array);
                    this.destination.complete();
                };
                return ToArraySubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});
//# sourceMappingURL=toArray.js.map
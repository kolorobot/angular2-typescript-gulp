System.register(['../OuterSubscriber', '../util/subscribeToResult'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var OuterSubscriber_1, subscribeToResult_1;
    var BufferOperator, BufferSubscriber;
    /**
     * Buffers the source Observable values until `closingNotifier` emits.
     *
     * <span class="informal">Collects values from the past as an array, and emits
     * that array only when another Observable emits.</span>
     *
     * <img src="./img/buffer.png" width="100%">
     *
     * Buffers the incoming Observable values until the given `closingNotifier`
     * Observable emits a value, at which point it emits the buffer on the output
     * Observable and starts a new buffer internally, awaiting the next time
     * `closingNotifier` emits.
     *
     * @example <caption>On every click, emit array of most recent interval events</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var interval = Rx.Observable.interval(1000);
     * var buffered = interval.buffer(clicks);
     * buffered.subscribe(x => console.log(x));
     *
     * @see {@link bufferCount}
     * @see {@link bufferTime}
     * @see {@link bufferToggle}
     * @see {@link bufferWhen}
     * @see {@link window}
     *
     * @param {Observable<any>} closingNotifier An Observable that signals the
     * buffer to be emitted on the output Observable.
     * @return {Observable<T[]>} An Observable of buffers, which are arrays of
     * values.
     * @method buffer
     * @owner Observable
     */
    function buffer(closingNotifier) {
        return this.lift(new BufferOperator(closingNotifier));
    }
    exports_1("buffer", buffer);
    return {
        setters:[
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            }],
        execute: function() {
            BufferOperator = (function () {
                function BufferOperator(closingNotifier) {
                    this.closingNotifier = closingNotifier;
                }
                BufferOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new BufferSubscriber(subscriber, this.closingNotifier));
                };
                return BufferOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            BufferSubscriber = (function (_super) {
                __extends(BufferSubscriber, _super);
                function BufferSubscriber(destination, closingNotifier) {
                    _super.call(this, destination);
                    this.buffer = [];
                    this.add(subscribeToResult_1.subscribeToResult(this, closingNotifier));
                }
                BufferSubscriber.prototype._next = function (value) {
                    this.buffer.push(value);
                };
                BufferSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                    var buffer = this.buffer;
                    this.buffer = [];
                    this.destination.next(buffer);
                };
                return BufferSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
        }
    }
});
//# sourceMappingURL=buffer.js.map
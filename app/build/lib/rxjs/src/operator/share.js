System.register(['./multicast', '../Subject'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var multicast_1, Subject_1;
    function shareSubjectFactory() {
        return new Subject_1.Subject();
    }
    /**
     * Returns a new Observable that multicasts (shares) the original Observable. As long as there is at least one
     * Subscriber this Observable will be subscribed and emitting data. When all subscribers have unsubscribed it will
     * unsubscribe from the source Observable. Because the Observable is multicasting it makes the stream `hot`.
     * This is an alias for .publish().refCount().
     *
     * <img src="./img/share.png" width="100%">
     *
     * @return {Observable<T>} an Observable that upon connection causes the source Observable to emit items to its Observers
     * @method share
     * @owner Observable
     */
    function share() {
        return multicast_1.multicast.call(this, shareSubjectFactory).refCount();
    }
    exports_1("share", share);
    return {
        setters:[
            function (multicast_1_1) {
                multicast_1 = multicast_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            ;
        }
    }
});
//# sourceMappingURL=share.js.map
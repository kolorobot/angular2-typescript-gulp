System.register(['./Subject', './Observable', './add/observable/bindCallback', './add/observable/bindNodeCallback', './add/observable/combineLatest', './add/observable/concat', './add/observable/defer', './add/observable/empty', './add/observable/forkJoin', './add/observable/from', './add/observable/fromEvent', './add/observable/fromEventPattern', './add/observable/fromPromise', './add/observable/interval', './add/observable/merge', './add/observable/race', './add/observable/never', './add/observable/of', './add/observable/range', './add/observable/throw', './add/observable/timer', './add/observable/zip', './add/operator/buffer', './add/operator/bufferCount', './add/operator/bufferTime', './add/operator/bufferToggle', './add/operator/bufferWhen', './add/operator/cache', './add/operator/catch', './add/operator/combineAll', './add/operator/combineLatest', './add/operator/concat', './add/operator/concatAll', './add/operator/concatMap', './add/operator/concatMapTo', './add/operator/count', './add/operator/dematerialize', './add/operator/debounce', './add/operator/debounceTime', './add/operator/defaultIfEmpty', './add/operator/delay', './add/operator/delayWhen', './add/operator/distinctUntilChanged', './add/operator/do', './add/operator/expand', './add/operator/filter', './add/operator/finally', './add/operator/first', './add/operator/groupBy', './add/operator/ignoreElements', './add/operator/audit', './add/operator/auditTime', './add/operator/last', './add/operator/let', './add/operator/every', './add/operator/map', './add/operator/mapTo', './add/operator/materialize', './add/operator/merge', './add/operator/mergeAll', './add/operator/mergeMap', './add/operator/mergeMapTo', './add/operator/multicast', './add/operator/observeOn', './add/operator/partition', './add/operator/pluck', './add/operator/publish', './add/operator/publishBehavior', './add/operator/publishReplay', './add/operator/publishLast', './add/operator/race', './add/operator/reduce', './add/operator/repeat', './add/operator/retry', './add/operator/retryWhen', './add/operator/sample', './add/operator/sampleTime', './add/operator/scan', './add/operator/share', './add/operator/single', './add/operator/skip', './add/operator/skipUntil', './add/operator/skipWhile', './add/operator/startWith', './add/operator/subscribeOn', './add/operator/switch', './add/operator/switchMap', './add/operator/switchMapTo', './add/operator/take', './add/operator/takeLast', './add/operator/takeUntil', './add/operator/takeWhile', './add/operator/throttle', './add/operator/throttleTime', './add/operator/timeout', './add/operator/timeoutWith', './add/operator/toArray', './add/operator/toPromise', './add/operator/window', './add/operator/windowCount', './add/operator/windowTime', './add/operator/windowToggle', './add/operator/windowWhen', './add/operator/withLatestFrom', './add/operator/zip', './add/operator/zipAll', './Operator', './Subscription', './Subscriber', './AsyncSubject', './ReplaySubject', './BehaviorSubject', './observable/ConnectableObservable', './Notification', './util/EmptyError', './util/ArgumentOutOfRangeError', './util/ObjectUnsubscribedError', './util/UnsubscriptionError', './scheduler/asap', './scheduler/async', './scheduler/queue', './symbol/rxSubscriber', './symbol/observable', './symbol/iterator'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var asap_1, async_1, queue_1, rxSubscriber_1, observable_1, iterator_1;
    var Scheduler, Symbol;
    return {
        setters:[
            function (Subject_1_1) {
                exports_1({
                    "Subject": Subject_1_1["Subject"]
                });
            },
            function (Observable_1_1) {
                exports_1({
                    "Observable": Observable_1_1["Observable"]
                });
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {},
            function (_7) {},
            function (_8) {},
            function (_9) {},
            function (_10) {},
            function (_11) {},
            function (_12) {},
            function (_13) {},
            function (_14) {},
            function (_15) {},
            function (_16) {},
            function (_17) {},
            function (_18) {},
            function (_19) {},
            function (_20) {},
            function (_21) {},
            function (_22) {},
            function (_23) {},
            function (_24) {},
            function (_25) {},
            function (_26) {},
            function (_27) {},
            function (_28) {},
            function (_29) {},
            function (_30) {},
            function (_31) {},
            function (_32) {},
            function (_33) {},
            function (_34) {},
            function (_35) {},
            function (_36) {},
            function (_37) {},
            function (_38) {},
            function (_39) {},
            function (_40) {},
            function (_41) {},
            function (_42) {},
            function (_43) {},
            function (_44) {},
            function (_45) {},
            function (_46) {},
            function (_47) {},
            function (_48) {},
            function (_49) {},
            function (_50) {},
            function (_51) {},
            function (_52) {},
            function (_53) {},
            function (_54) {},
            function (_55) {},
            function (_56) {},
            function (_57) {},
            function (_58) {},
            function (_59) {},
            function (_60) {},
            function (_61) {},
            function (_62) {},
            function (_63) {},
            function (_64) {},
            function (_65) {},
            function (_66) {},
            function (_67) {},
            function (_68) {},
            function (_69) {},
            function (_70) {},
            function (_71) {},
            function (_72) {},
            function (_73) {},
            function (_74) {},
            function (_75) {},
            function (_76) {},
            function (_77) {},
            function (_78) {},
            function (_79) {},
            function (_80) {},
            function (_81) {},
            function (_82) {},
            function (_83) {},
            function (_84) {},
            function (_85) {},
            function (_86) {},
            function (_87) {},
            function (_88) {},
            function (_89) {},
            function (_90) {},
            function (_91) {},
            function (_92) {},
            function (_93) {},
            function (_94) {},
            function (_95) {},
            function (_96) {},
            function (_97) {},
            function (_98) {},
            function (_99) {},
            function (_100) {},
            function (_101) {},
            function (_102) {},
            function (_103) {},
            function (_104) {},
            function (Operator_1_1) {
                exports_1({
                    "Operator": Operator_1_1["Operator"]
                });
            },
            function (Subscription_1_1) {
                exports_1({
                    "Subscription": Subscription_1_1["Subscription"]
                });
            },
            function (Subscriber_1_1) {
                exports_1({
                    "Subscriber": Subscriber_1_1["Subscriber"]
                });
            },
            function (AsyncSubject_1_1) {
                exports_1({
                    "AsyncSubject": AsyncSubject_1_1["AsyncSubject"]
                });
            },
            function (ReplaySubject_1_1) {
                exports_1({
                    "ReplaySubject": ReplaySubject_1_1["ReplaySubject"]
                });
            },
            function (BehaviorSubject_1_1) {
                exports_1({
                    "BehaviorSubject": BehaviorSubject_1_1["BehaviorSubject"]
                });
            },
            function (ConnectableObservable_1_1) {
                exports_1({
                    "ConnectableObservable": ConnectableObservable_1_1["ConnectableObservable"]
                });
            },
            function (Notification_1_1) {
                exports_1({
                    "Notification": Notification_1_1["Notification"]
                });
            },
            function (EmptyError_1_1) {
                exports_1({
                    "EmptyError": EmptyError_1_1["EmptyError"]
                });
            },
            function (ArgumentOutOfRangeError_1_1) {
                exports_1({
                    "ArgumentOutOfRangeError": ArgumentOutOfRangeError_1_1["ArgumentOutOfRangeError"]
                });
            },
            function (ObjectUnsubscribedError_1_1) {
                exports_1({
                    "ObjectUnsubscribedError": ObjectUnsubscribedError_1_1["ObjectUnsubscribedError"]
                });
            },
            function (UnsubscriptionError_1_1) {
                exports_1({
                    "UnsubscriptionError": UnsubscriptionError_1_1["UnsubscriptionError"]
                });
            },
            function (asap_1_1) {
                asap_1 = asap_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            },
            function (queue_1_1) {
                queue_1 = queue_1_1;
            },
            function (rxSubscriber_1_1) {
                rxSubscriber_1 = rxSubscriber_1_1;
            },
            function (observable_1_1) {
                observable_1 = observable_1_1;
            },
            function (iterator_1_1) {
                iterator_1 = iterator_1_1;
            }],
        execute: function() {
            /* tslint:enable:no-unused-variable */
            /**
             * @typedef {Object} Rx.Scheduler
             * @property {Scheduler} queue Schedules on a queue in the current event frame
             * (trampoline scheduler). Use this for iteration operations.
             * @property {Scheduler} asap Schedules on the micro task queue, which uses the
             * fastest transport mechanism available, either Node.js' `process.nextTick()`
             * or Web Worker MessageChannel or setTimeout or others. Use this for
             * asynchronous conversions.
             * @property {Scheduler} async Schedules work with `setInterval`. Use this for
             * time-based operations.
             */
            Scheduler = {
                asap: asap_1.asap,
                async: async_1.async,
                queue: queue_1.queue
            };
            /**
             * @typedef {Object} Rx.Symbol
             * @property {Symbol|string} rxSubscriber A symbol to use as a property name to
             * retrieve an "Rx safe" Observer from an object. "Rx safety" can be defined as
             * an object that has all of the traits of an Rx Subscriber, including the
             * ability to add and remove subscriptions to the subscription chain and
             * guarantees involving event triggering (can't "next" after unsubscription,
             * etc).
             * @property {Symbol|string} observable A symbol to use as a property name to
             * retrieve an Observable as defined by the [ECMAScript "Observable" spec](https://github.com/zenparsing/es-observable).
             * @property {Symbol|string} iterator The ES6 symbol to use as a property name
             * to retrieve an iterator from an object.
             */
            Symbol = {
                rxSubscriber: rxSubscriber_1.$$rxSubscriber,
                observable: observable_1.$$observable,
                iterator: iterator_1.$$iterator
            };
            exports_1("Scheduler", Scheduler);
            exports_1("Symbol", Symbol);
        }
    }
});
//# sourceMappingURL=Rx.js.map
System.register(['./root', './isArray', './isPromise', '../Observable', '../symbol/iterator', '../symbol/observable', '../InnerSubscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var root_1, isArray_1, isPromise_1, Observable_1, iterator_1, observable_1, InnerSubscriber_1;
    function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
        var destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
        if (destination.isUnsubscribed) {
            return;
        }
        if (result instanceof Observable_1.Observable) {
            if (result._isScalar) {
                destination.next(result.value);
                destination.complete();
                return;
            }
            else {
                return result.subscribe(destination);
            }
        }
        if (isArray_1.isArray(result)) {
            for (var i = 0, len = result.length; i < len && !destination.isUnsubscribed; i++) {
                destination.next(result[i]);
            }
            if (!destination.isUnsubscribed) {
                destination.complete();
            }
        }
        else if (isPromise_1.isPromise(result)) {
            result.then(function (value) {
                if (!destination.isUnsubscribed) {
                    destination.next(value);
                    destination.complete();
                }
            }, function (err) { return destination.error(err); })
                .then(null, function (err) {
                // Escaping the Promise trap: globally throw unhandled errors
                root_1.root.setTimeout(function () { throw err; });
            });
            return destination;
        }
        else if (typeof result[iterator_1.$$iterator] === 'function') {
            for (var _i = 0, _a = result; _i < _a.length; _i++) {
                var item = _a[_i];
                destination.next(item);
                if (destination.isUnsubscribed) {
                    break;
                }
            }
            if (!destination.isUnsubscribed) {
                destination.complete();
            }
        }
        else if (typeof result[observable_1.$$observable] === 'function') {
            var obs = result[observable_1.$$observable]();
            if (typeof obs.subscribe !== 'function') {
                destination.error('invalid observable');
            }
            else {
                return obs.subscribe(new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex));
            }
        }
        else {
            destination.error(new TypeError('unknown type returned'));
        }
    }
    exports_1("subscribeToResult", subscribeToResult);
    return {
        setters:[
            function (root_1_1) {
                root_1 = root_1_1;
            },
            function (isArray_1_1) {
                isArray_1 = isArray_1_1;
            },
            function (isPromise_1_1) {
                isPromise_1 = isPromise_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (iterator_1_1) {
                iterator_1 = iterator_1_1;
            },
            function (observable_1_1) {
                observable_1 = observable_1_1;
            },
            function (InnerSubscriber_1_1) {
                InnerSubscriber_1 = InnerSubscriber_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=subscribeToResult.js.map
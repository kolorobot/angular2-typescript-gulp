System.register(['../util/root'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var root_1;
    /**
     * @param PromiseCtor
     * @return {Promise<T>}
     * @method toPromise
     * @owner Observable
     */
    function toPromise(PromiseCtor) {
        var _this = this;
        if (!PromiseCtor) {
            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
                PromiseCtor = root_1.root.Rx.config.Promise;
            }
            else if (root_1.root.Promise) {
                PromiseCtor = root_1.root.Promise;
            }
        }
        if (!PromiseCtor) {
            throw new Error('no Promise impl found');
        }
        return new PromiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    }
    exports_1("toPromise", toPromise);
    return {
        setters:[
            function (root_1_1) {
                root_1 = root_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=toPromise.js.map
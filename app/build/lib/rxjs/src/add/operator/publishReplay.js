System.register(['../../Observable', '../../operator/publishReplay'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, publishReplay_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (publishReplay_1_1) {
                publishReplay_1 = publishReplay_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.publishReplay = publishReplay_1.publishReplay;
        }
    }
});
//# sourceMappingURL=publishReplay.js.map
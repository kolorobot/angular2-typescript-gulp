System.register(['./QueueScheduler'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var QueueScheduler_1;
    var queue;
    return {
        setters:[
            function (QueueScheduler_1_1) {
                QueueScheduler_1 = QueueScheduler_1_1;
            }],
        execute: function() {
            exports_1("queue", queue = new QueueScheduler_1.QueueScheduler());
        }
    }
});
//# sourceMappingURL=queue.js.map
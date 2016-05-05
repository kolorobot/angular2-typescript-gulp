System.register(['./Rx', './add/observable/if', './add/observable/using', './add/operator/distinct', './add/operator/distinctKey', './add/operator/distinctUntilKeyChanged', './add/operator/elementAt', './add/operator/exhaust', './add/operator/exhaustMap', './add/operator/find', './add/operator/findIndex', './add/operator/isEmpty', './add/operator/max', './add/operator/mergeScan', './add/operator/min', './add/operator/pairwise', './add/operator/timeInterval', './add/operator/timestamp', './operator/timeInterval', './operator/timestamp', './testing/TestScheduler', './scheduler/VirtualTimeScheduler'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var exportedNames_1 = {
        'TimeInterval': true,
        'Timestamp': true,
        'TestScheduler': true,
        'VirtualTimeScheduler': true
    };
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default"&& !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (Rx_1_1) {
                exportStar_1(Rx_1_1);
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
            function (timeInterval_1_1) {
                exports_1({
                    "TimeInterval": timeInterval_1_1["TimeInterval"]
                });
            },
            function (timestamp_1_1) {
                exports_1({
                    "Timestamp": timestamp_1_1["Timestamp"]
                });
            },
            function (TestScheduler_1_1) {
                exports_1({
                    "TestScheduler": TestScheduler_1_1["TestScheduler"]
                });
            },
            function (VirtualTimeScheduler_1_1) {
                exports_1({
                    "VirtualTimeScheduler": VirtualTimeScheduler_1_1["VirtualTimeScheduler"]
                });
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=Rx.KitchenSink.js.map
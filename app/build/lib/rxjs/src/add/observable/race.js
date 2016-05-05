System.register(['../../Observable', '../../operator/race'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, race_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (race_1_1) {
                race_1 = race_1_1;
            }],
        execute: function() {
            Observable_1.Observable.race = race_1.raceStatic;
        }
    }
});
//# sourceMappingURL=race.js.map
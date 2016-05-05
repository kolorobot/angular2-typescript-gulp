System.register(['./root', './MapPolyfill'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var root_1, MapPolyfill_1;
    var Map;
    return {
        setters:[
            function (root_1_1) {
                root_1 = root_1_1;
            },
            function (MapPolyfill_1_1) {
                MapPolyfill_1 = MapPolyfill_1_1;
            }],
        execute: function() {
            exports_1("Map", Map = root_1.root.Map || (function () { return MapPolyfill_1.MapPolyfill; })());
        }
    }
});
//# sourceMappingURL=Map.js.map
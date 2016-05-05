System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MapPolyfill;
    return {
        setters:[],
        execute: function() {
            MapPolyfill = (function () {
                function MapPolyfill() {
                    this.size = 0;
                    this._values = [];
                    this._keys = [];
                }
                MapPolyfill.prototype.get = function (key) {
                    var i = this._keys.indexOf(key);
                    return i === -1 ? undefined : this._values[i];
                };
                MapPolyfill.prototype.set = function (key, value) {
                    var i = this._keys.indexOf(key);
                    if (i === -1) {
                        this._keys.push(key);
                        this._values.push(value);
                        this.size++;
                    }
                    else {
                        this._values[i] = value;
                    }
                    return this;
                };
                MapPolyfill.prototype.delete = function (key) {
                    var i = this._keys.indexOf(key);
                    if (i === -1) {
                        return false;
                    }
                    this._values.splice(i, 1);
                    this._keys.splice(i, 1);
                    this.size--;
                    return true;
                };
                MapPolyfill.prototype.clear = function () {
                    this._keys.length = 0;
                    this._values.length = 0;
                    this.size = 0;
                };
                MapPolyfill.prototype.forEach = function (cb, thisArg) {
                    for (var i = 0; i < this.size; i++) {
                        cb.call(thisArg, this._values[i], this._keys[i]);
                    }
                };
                return MapPolyfill;
            }());
            exports_1("MapPolyfill", MapPolyfill);
        }
    }
});
//# sourceMappingURL=MapPolyfill.js.map
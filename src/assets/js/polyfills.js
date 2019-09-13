if (typeof Object.assign != "function") {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) {
      // .length of function is 2
      //   "use strict";
      if (target == null) {
        // TypeError if undefined or null
        throw new TypeError("Cannot convert undefined or null to object");
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) {
          // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
  if (!String.prototype.repeat) {
    String.prototype.repeat = function(count) {
      //   "use strict";
      if (this == null) {
        // check if `this` is null or undefined
        throw new TypeError("can't convert " + this + " to object");
      }
      var str = "" + this;
      // To convert string to integer.
      count = +count;
      if (count < 0) {
        throw new RangeError("repeat count must be non-negative");
      }
      if (count === Infinity) {
        throw new RangeError("repeat count must be less than infinity");
      }
      count |= 0; // floors and rounds-down it.
      if (str.length === 0 || count === 0) {
        return "";
      }
      // Ensuring count is a 31-bit integer allows us to heavily optimize the
      // main part. But anyway, most current (August 2014) browsers can't handle
      // strings 1 << 28 chars or longer, so:
      if (str.length * count >= 1 << 28) {
        throw new RangeError(
          "repeat count must not overflow maximum string size"
        );
      }
      while ((count >>= 1)) {
        // shift it by multiple of 2 because this is binary summation of series
        str += str; // binary summation
      }
      str += str.substring(0, str.length * count - str.length);
      return str;
    };
  }
}

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reply_to_request_reply_to_request_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reply-to-request/reply-to-request.component */ "./src/app/reply-to-request/reply-to-request.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _home_hr_home_hr_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-hr/home-hr.component */ "./src/app/home-hr/home-hr.component.ts");
/* harmony import */ var _home_hr_holiday_list_holiday_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-hr/holiday-list/holiday-list.component */ "./src/app/home-hr/holiday-list/holiday-list.component.ts");
/* harmony import */ var _home_hr_newjoinee_newjoinee_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home-hr/newjoinee/newjoinee.component */ "./src/app/home-hr/newjoinee/newjoinee.component.ts");
/* harmony import */ var _home_hr_project_project_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home-hr/project/project.component */ "./src/app/home-hr/project/project.component.ts");
/* harmony import */ var _home_hr_manage_leaves_manage_leaves_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home-hr/manage-leaves/manage-leaves.component */ "./src/app/home-hr/manage-leaves/manage-leaves.component.ts");
/* harmony import */ var _app_components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app/components/sign-in/sign-in.component */ "./src/app/components/sign-in/sign-in.component.ts");
/* harmony import */ var _display_response_display_response_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./display-response/display-response.component */ "./src/app/display-response/display-response.component.ts");
/* harmony import */ var _app_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../app/shared/guard/auth.guard */ "./src/app/shared/guard/auth.guard.ts");
/* harmony import */ var _app_shared_guard_secure_inner_pages_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../app/shared/guard/secure-inner-pages.guard */ "./src/app/shared/guard/secure-inner-pages.guard.ts");
/* harmony import */ var _display_holiday_list_display_holiday_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./display-holiday-list/display-holiday-list.component */ "./src/app/display-holiday-list/display-holiday-list.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





















var routes = [
    { path: '', redirectTo: '/sign-in', pathMatch: 'full', canActivate: [_app_shared_guard_secure_inner_pages_guard__WEBPACK_IMPORTED_MODULE_15__["SecureInnerPagesGuard"]] },
    { path: 'sign-in', component: _app_components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_12__["SignInComponent"] },
    { path: 'home-hr', component: _home_hr_home_hr_component__WEBPACK_IMPORTED_MODULE_7__["HomeHrComponent"], canActivate: [_app_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"], canActivate: [_app_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'newjoinee', component: _home_hr_newjoinee_newjoinee_component__WEBPACK_IMPORTED_MODULE_9__["NewJoineeComponent"] },
    { path: 'display', component: _display_holiday_list_display_holiday_list_component__WEBPACK_IMPORTED_MODULE_16__["DisplayHolidayListComponent"] },
    { path: 'nav', component: _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"], canActivate: [_app_shared_guard_secure_inner_pages_guard__WEBPACK_IMPORTED_MODULE_15__["SecureInnerPagesGuard"]] },
    { path: 'holiday-list', component: _home_hr_holiday_list_holiday_list_component__WEBPACK_IMPORTED_MODULE_8__["HolidayListComponent"] },
    { path: 'footer', component: _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"] },
    { path: 'contact-us', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__["ContactUsComponent"], canActivate: [_app_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'project', component: _home_hr_project_project_component__WEBPACK_IMPORTED_MODULE_10__["ProjectComponent"] },
    { path: 'manage-leaves', component: _home_hr_manage_leaves_manage_leaves_component__WEBPACK_IMPORTED_MODULE_11__["ManageLeavesComponent"] },
    { path: 'reply', component: _reply_to_request_reply_to_request_component__WEBPACK_IMPORTED_MODULE_3__["ReplyToRequestComponent"] },
    { path: 'display-response', component: _display_response_display_response_component__WEBPACK_IMPORTED_MODULE_13__["DisplayResponseComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table, th, td {\n    border: 1px solid black;\n  }\n  .example-h2 {\n    margin: 10px;\n  }\n  .example-section {\n    display: flex;\n    align-content: center;\n    align-items: center;\n    height: 60px;\n  }\n  .example-margin {\n    margin: 0 10px;\n  }\n  .loading-indicator {\n    position: fixed;\n    z-index: 999;\n    height: 2em;\n    width: 2em;\n    overflow: show;\n    margin: auto;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    \n  }\n  .mat-progress-spinner::ng-deep circle {\n    stroke: blueviolet;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUVBO0lBQ0UsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsWUFBWTtFQUNkO0VBRUE7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVO0lBQ1YsY0FBYztJQUNkLFlBQVk7SUFDWixNQUFNO0lBQ04sT0FBTztJQUNQLFNBQVM7SUFDVCxRQUFROztFQUVWO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlLCB0aCwgdGQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICB9XG4gIC5leGFtcGxlLWgyIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1tYXJnaW4ge1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICB9XG4gIC5sb2FkaW5nLWluZGljYXRvciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICB3aWR0aDogMmVtO1xuICAgIG92ZXJmbG93OiBzaG93O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgXG4gIH1cbiAgLm1hdC1wcm9ncmVzcy1zcGlubmVyOjpuZy1kZWVwIGNpcmNsZSB7XG4gICAgc3Ryb2tlOiBibHVldmlvbGV0O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Current Message\n<h3> {{ message | async | json }} </h3>\n\n\n<div *ngIf=\"status._value \">\n<app-nav>\n    \n    <router-outlet>\n\n    </router-outlet> \n</app-nav>\n<app-footer class=\"meta-auto\"></app-footer>\n</div>\n<div *ngIf=\"!status._value\">\n   \n    <router-outlet>\n\n    </router-outlet> \n</div>\n<div class=\"loading-indicator\" *ngIf=\"Progress._value\">\n    <mat-progress-spinner  mode=\"indeterminate\"></mat-progress-spinner>\n<font color=\"blue\" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Loading</font>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/ApiService */ "./src/app/services/ApiService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_messaging_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/messaging.service */ "./src/app/shared/messaging.service.ts");






var AppComponent = /** @class */ (function () {
    function AppComponent(messagingService, ApiService, authService, router) {
        this.messagingService = messagingService;
        this.ApiService = ApiService;
        this.authService = authService;
        this.router = router;
        this.title = 'NewLAP';
    }
    AppComponent.prototype.ngOnDestroy = function () {
        console.log("distroyed");
        localStorage.setItem('current-page', "home-hr");
    };
    // tslint:disable-next-line: use-life-cycle-interface
    AppComponent.prototype.ngOnInit = function () {
        var userId = 'user001';
        this.messagingService.requestPermission(userId);
        this.messagingService.receiveMessage();
        this.message = this.messagingService.currentMessage;
        if ((this.authService.isLoggedIn)) {
            //this.router.navigate(['home-hr'])
            this.router.navigate([localStorage.getItem('current-page')]);
        }
        //    else if((localStorage.getItem('current-page'))!='home-hr'){
        // this.router.navigate([localStorage.getItem('current-page')])
        //    }
        //variable to check if data is loading or not. Used to show Spinner
        this.Progress = this.ApiService.progress;
        this.status = this.authService.LoggedInEmail;
        //If Logged in Source Object is null then add the value 'true' in behavioural object. it is basically to store value of loggedinSource even on refreshing of window
        if ((this.authService.isLoggedInSource.value != null))
            this.authService.isLoggedInSource.next(true);
        //get loggedin Email for Local Storage Variable 'email'     
        var email = localStorage.getItem('email');
        //get designation of Employee from Local Storage Variable 'designation'  
        this.designation = localStorage.getItem('designation');
        //If Logged in Email Object is null then add the value of Local variable 'email' in behavioural object. it is basically to store value of loggedinemail even on refreshing of window
        if (!this.authService.LoggedInEmail.value)
            this.authService.LoggedInEmail.next(email);
        //Function to scroll teh window to top of the page
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_messaging_service__WEBPACK_IMPORTED_MODULE_5__["MessagingService"], _services_ApiService__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_hr_manage_leaves_manage_leaves_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home-hr/manage-leaves/manage-leaves.component */ "./src/app/home-hr/manage-leaves/manage-leaves.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services//ApiService */ "./src/app/services/ApiService.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _home_hr_home_hr_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home-hr/home-hr.component */ "./src/app/home-hr/home-hr.component.ts");
/* harmony import */ var _home_hr_holiday_list_holiday_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home-hr/holiday-list/holiday-list.component */ "./src/app/home-hr/holiday-list/holiday-list.component.ts");
/* harmony import */ var _display_holiday_list_display_holiday_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./display-holiday-list/display-holiday-list.component */ "./src/app/display-holiday-list/display-holiday-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/accordion.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(primeng_accordion__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var ngx_dropdown__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-dropdown */ "./node_modules/ngx-dropdown/index.js");
/* harmony import */ var ngx_dropdown__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(ngx_dropdown__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/multiselect.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(primeng_multiselect__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _home_hr_newjoinee_newjoinee_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./home-hr/newjoinee/newjoinee.component */ "./src/app/home-hr/newjoinee/newjoinee.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_hr_project_project_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./home-hr/project/project.component */ "./src/app/home-hr/project/project.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/index.js");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-bootstrap/popover */ "./node_modules/ngx-bootstrap/popover/index.js");
/* harmony import */ var _reply_to_request_reply_to_request_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./reply-to-request/reply-to-request.component */ "./src/app/reply-to-request/reply-to-request.component.ts");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "./src/app/components/sign-in/sign-in.component.ts");
/* harmony import */ var _mat_confirm_dialog_mat_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./mat-confirm-dialog/mat-confirm-dialog.component */ "./src/app/mat-confirm-dialog/mat-confirm-dialog.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _display_response_display_response_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./display-response/display-response.component */ "./src/app/display-response/display-response.component.ts");
/* harmony import */ var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./data-table/data-table.component */ "./src/app/data-table/data-table.component.ts");
/* harmony import */ var _sample_table_sample_table_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./sample-table/sample-table.component */ "./src/app/sample-table/sample-table.component.ts");
/* harmony import */ var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/fire/messaging */ "./node_modules/@angular/fire/messaging/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _shared_messaging_service__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./shared/messaging.service */ "./src/app/shared/messaging.service.ts");
















// import { MaterialModule } from './material.module';








// import {DialogModule} from 'primeng/dialog';

















// multislect
// Firebase
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _home_hr_manage_leaves_manage_leaves_component__WEBPACK_IMPORTED_MODULE_9__["ManageLeavesComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_12__["ContactUsComponent"],
                _home_hr_home_hr_component__WEBPACK_IMPORTED_MODULE_13__["HomeHrComponent"],
                _home_hr_holiday_list_holiday_list_component__WEBPACK_IMPORTED_MODULE_14__["HolidayListComponent"],
                _home_hr_newjoinee_newjoinee_component__WEBPACK_IMPORTED_MODULE_26__["NewJoineeComponent"],
                _home_hr_project_project_component__WEBPACK_IMPORTED_MODULE_29__["ProjectComponent"],
                _reply_to_request_reply_to_request_component__WEBPACK_IMPORTED_MODULE_35__["ReplyToRequestComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_42__["DashboardComponent"],
                _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_43__["SignInComponent"],
                _display_holiday_list_display_holiday_list_component__WEBPACK_IMPORTED_MODULE_15__["DisplayHolidayListComponent"],
                _mat_confirm_dialog_mat_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_44__["MatConfirmDialogComponent"],
                _display_response_display_response_component__WEBPACK_IMPORTED_MODULE_46__["DisplayResponseComponent"],
                _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_47__["DataTableComponent"],
                _sample_table_sample_table_component__WEBPACK_IMPORTED_MODULE_48__["SampleTableComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_50__["AngularFireDatabaseModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_41__["AngularFireAuthModule"],
                _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_49__["AngularFireMessagingModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_37__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_38__["environment"].firebase),
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_45__["MatProgressSpinnerModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_39__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_41__["AngularFireAuthModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_40__["AngularFireStorageModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__["NgMultiSelectDropDownModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_33__["CarouselModule"].forRoot(),
                ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_34__["PopoverModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_36__["TooltipModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                ngx_dropdown__WEBPACK_IMPORTED_MODULE_23__["DropdownModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__["MatFormFieldModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__["MatIconModule"],
                //  MaterialModule,
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_19__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_19__["ButtonsModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_19__["ModalModule"].forRoot(),
                primeng_accordion__WEBPACK_IMPORTED_MODULE_22__["AccordionModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"],
                primeng_multiselect__WEBPACK_IMPORTED_MODULE_24__["MultiSelectModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_37__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_38__["environment"].firebase, 'Leave and Attendance Portal'),
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"]
            ],
            providers: [_services_ApiService__WEBPACK_IMPORTED_MODULE_11__["ApiService"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["DatePipe"], _shared_messaging_service__WEBPACK_IMPORTED_MODULE_51__["MessagingService"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["AsyncPipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            entryComponents: [_mat_confirm_dialog_mat_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_44__["MatConfirmDialogComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/Holiday.ts":
/*!************************************!*\
  !*** ./src/app/classes/Holiday.ts ***!
  \************************************/
/*! exports provided: Holiday */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Holiday", function() { return Holiday; });
var Holiday = /** @class */ (function () {
    function Holiday() {
    }
    return Holiday;
}());



/***/ }),

/***/ "./src/app/classes/Register.ts":
/*!*************************************!*\
  !*** ./src/app/classes/Register.ts ***!
  \*************************************/
/*! exports provided: Register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
var Register = /** @class */ (function () {
    function Register() {
    }
    return Register;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import 'https://use.fontawesome.com/releases/v5.5.0/css/all.css';\n\n* {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  font-weight: 400;\n  width: 100%;\n  height: 100%;\n  font-family: 'Poppins', sans-serif;\n}\n\n.feather {\n  width: 16px;\n  height: 16px;\n  vertical-align: text-bottom;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 600;\n}\n\n.media-body h1 {\n  font-weight: 300;\n  margin-bottom: 20px;\n}\n\n.media-body h1 strong {\n  font-weight: 600;\n}\n\n.media-body p {\n  margin-bottom: 10px;\n  font-weight: 300;\n}\n\n.media-body p strong {\n  margin-bottom: 10px;\n  font-weight: 600;\n}\n\n.px-logo {\n  display: block;\n  clear: both;\n  margin: 0 auto 20px;\n  width: 220px;\n}\n\n.px-logo a img {\n  width: 100%;\n}\n\n.displayTable {\n  display: table;\n  width: 100%;\n  height: 100%;\n  background: #3F51B5;\n}\n\n.displayTableCell {\n  display: table-cell;\n  vertical-align: middle;\n  width: 100%;\n  height: 100%;\n}\n\nh3 {\n  text-align: center;\n  font-size: 22px;\n  margin: 0 0 20px;\n}\n\n.authBlock {\n  margin: 0 auto;\n  max-width: 400px;\n  background: white;\n  padding: 30px 40px 10px;\n  overflow: hidden;\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, .04);\n}\n\nlabel {\n  display: block;\n  font-size: 13px;\n  padding-bottom: 5px;\n  font-weight: 600;\n}\n\n.formGroup {\n  margin-bottom: 20px;\n  float: left;\n  width: 100%;\n}\n\n.formControl {\n  width: 100%;\n  display: block;\n  padding: 15px 15px 14px;\n  border: 2px solid #e7e7e7;\n  outline: none;\n  font-size: 15px;\n  color: #444444;\n  background: #fcfcfc;\n}\n\n.formControl:focus {\n  border: 2px solid #d3d3d6\n}\n\ninput::-webkit-input-placeholder {\n  color: #BBBBBB;\n}\n\ninput::-moz-placeholder {\n  color: #BBBBBB;\n}\n\ninput:-ms-input-placeholder {\n  color: #BBBBBB;\n}\n\ninput:-moz-placeholder {\n  color: #BBBBBB\n}\n\n.displayTable .btn {\n  width: 100%;\n  border: none;\n  font-size: 16px;\n  font-weight: 600;\n  padding: 15px 0;\n  background: #15CD72;\n  color: #ffffff;\n  cursor: pointer;\n  outline: none;\n}\n\n.displayTable .btn:hover {\n  opacity: .88;\n}\n\n.displayTable .btnSecondary {\n  background: #EEEEEE;\n  color: #404040;\n}\n\n.displayTable .googleBtn {\n  background: #eb5e4c;\n}\n\n.displayTable .facebookBtn {\n  background: #5d82d1;\n}\n\n.or {\n  text-align: center;\n  display: block;\n  color: #a0a0a0;\n  background: white;\n  position: relative;\n  margin: 5px 0 0px;\n}\n\n.orInner {\n  background: white;\n  display: inline-block;\n  z-index: 4;\n  position: relative;\n  padding: 0 12px;\n}\n\n.or:before {\n  position: absolute;\n  content: '';\n  left: 0;\n  top: 11px;\n  width: 100%;\n  height: 1px;\n  background: #e2e2e2;\n}\n\n.halfWidth {\n  width: 48.5%;\n}\n\n.left {\n  float: left;\n}\n\n.right {\n  float: right;\n}\n\n.forgotPassword {\n  text-align: center;\n  margin: -12px 0 15px 0;\n  float: left;\n  width: 100%;\n}\n\n.forgotPassword span {\n  color: #3C89EF;\n  font-size: 14px;\n  font-weight: 400;\n  cursor: pointer;\n  display: inline-block;\n  padding-top: 20px;\n}\n\n.redirectToLogin {\n  padding: 15px 0 0;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 400;\n  display: block;\n  color: rgba(255, 255, 255, .6);\n}\n\n.redirectToLogin .redirect {\n  cursor: pointer;\n  color: #ffffff;\n  text-decoration: underline;\n}\n\n.sidebar {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n  padding: 48px 0 0;\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\n}\n\n.sidebar-sticky {\n  position: relative;\n  top: 0;\n  height: calc(100vh - 48px);\n  padding-top: .5rem;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n  .sidebar-sticky {\n    position: -webkit-sticky;\n    position: sticky;\n  }\n}\n\n.sidebar .nav-link {\n  font-weight: 500;\n  color: #333;\n}\n\n.sidebar .nav-link .feather {\n  margin-right: 4px;\n  color: #999;\n}\n\n.sidebar-heading {\n  font-size: .75rem;\n  text-transform: uppercase;\n}\n\n.nav-link {\n  padding: 1.5rem 1rem;\n  border-bottom: 1px solid #dde0e2;\n  cursor: pointer;\n}\n\n.sidebar .nav-link.active,\n.sidebar a:hover,\na:not([href]):not([tabindex]):focus,\na:not([href]):not([tabindex]):hover {\n  color: #E91E63;\n  background: #efefef;\n}\n\n[role=\"main\"] {\n  padding-top: 48px;\n}\n\n.dasboard-text {\n  border-left: 1px solid rgb(255, 255, 255, .3);\n  color: rgb(255, 255, 255, .5);\n  display: inline-block;\n  padding: 0 0 0 14px;\n  font-size: 15px;\n  margin-left: 15px;\n  position: relative;\n  top: -1px;\n}\n\n.navbar-brand {\n  padding-top: .75rem;\n  padding-bottom: .75rem;\n}\n\n.navbar .form-control {\n  padding: .75rem 1rem;\n  border-width: 0;\n  border-radius: 0;\n}\n\n.form-control-dark {\n  color: #fff;\n  background-color: rgba(255, 255, 255, .1);\n  border-color: rgba(255, 255, 255, .1);\n}\n\n.form-control-dark:focus {\n  border-color: transparent;\n  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);\n}\n\n.form-control:focus {\n  border-color: #00BCD4;\n  box-shadow: none;\n}\n\n.form-control {\n  font-size: 14px;\n}\n\n.bg-dark {\n  background-color: #3F51B5 !important;\n}\n\n.gap-right {\n  margin-right: 10px;\n}\n\ni {\n  width: 22px;\n  text-align: center;\n  margin-right: 5px;\n}\n\n.inner-adjust {\n  padding: 0 20px;\n}\n\n.action-block {\n  cursor: pointer;\n}\n\n.action-block .fa-edit:hover {\n  color: #009688;\n}\n\n.action-block .fa-trash-alt:hover {\n  color: #E91E63;\n}\n\n.btn-primary.focus,\n.btn-primary:focus {\n  box-shadow: none;\n}\n\n/* Pagination */\n\nbody pagination-template {\n  padding: 0;\n  margin: 8px 0 0;\n  float: left;\n  width: 100%;\n  text-align: right;\n}\n\nbody .ngx-pagination li:last-child {\n  margin: 0;\n}\n\nbody .ngx-pagination .current {\n  background: #055AF9;\n}\n\n.ngx-pagination a:hover,\n.ngx-pagination button:hover {\n  text-decoration: none;\n}\n\n/* Error */\n\n.error {\n  color: red;\n  margin-top: 5px;\n}\n\ninput.ng-invalid.ng-touched {\n  border: 1px solid red;\n}\n\n.btn-success.disabled,\n.btn-success:disabled {\n  cursor: not-allowed;\n}\n\n/* Nav */\n\nbody .navbar {\n  padding: 6px 0 !important;\n}\n\nbody .navbar-brand {\n  background: none;\n}\n\n.brand-logo {\n  max-width: 85%;\n}\n\n.pt-3,\n.py-3 {\n  padding-top: 2.4rem !important;\n}\n\n.sidebar-sticky {\n  padding-top: 1.2rem !important;\n}\n\nlabel {\n  font-weight: 500;\n}\n\n.form-control {\n  padding: 1.375rem .75rem;\n}\n\n.no-data img {\n  max-width: 420px;\n  margin: 20px auto 0;\n}\n\n.nodata-msg {\n  margin: 25px 0 15px;\n  font-size: 28px;\n  color: #a9a6c5;\n  font-weight: 300;\n  letter-spacing: .2px;\n}\n\n[role=\"main\"] {\n  padding-top: 65px;\n}\n\n.preloader {\n  min-height: 400px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: -15px;\n}\n\n.custom-text {\n  font-size: 15px;\n  color: #5f5f5f;\n  letter-spacing: .2px;\n}\n\n.navbar-dark .navbar-brand {\n  margin-left: 6px;\n}\n\n.custom-text strong {\n  color: #3a3a3a;\n}\n\n.mb-3,\n.my-3 {\n  margin-bottom: 1.4rem !important;\n}\n\n.custom-fa-plus {\n  margin: 0;\n  width: auto;\n}\n\n.user-image {\n  width: 42px;\n  height: 42px;\n  display: inline-block;\n  border-radius: 50%;\n  vertical-align: middle;\n  margin-right: 7px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 0 0;\n}\n\nbody .table thead th {\n  background: #f3f5ff;\n}\n\n.pricing-header {\n  padding-bottom: 50px;\n}\n\n.userImage {\n  max-width: 125px;\n}\n\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 1)\n}\n\n.card {\n  border: none\n}\n\n.list-group-item {\n  padding: 0 1.25rem 15px;\n  border: none\n}\n\n.fa-sign-out-alt {\n  position: relative;\n  top: 1px;\n}\n\n.logOutBtn {\n  cursor: pointer;\n}\n\n.no-access {\n  text-align: center;\n  font-size: 26px;\n  padding: 70px 0;\n}\n\n.rounded-circle {\n  max-width: 150px;\n}\n\n/* Responsive */\n\n@media(max-width:767px) {\n  .sidebar {\n    position: static;\n    padding: 40px 0 10px;\n    height: auto;\n  }\n\n  [role=\"main\"] {\n    padding-top: 0;\n  }\n\n  .inner-adjust {\n    padding: 0;\n  }\n\n  ul.nav.flex-column {\n    flex-direction: inherit !important;\n  }\n\n  .pt-3,\n  .py-3 {\n    padding-top: 1.5rem !important;\n  }\n\n  .brand-logo {\n    max-width: 175px;\n    margin: 0 auto;\n    display: block;\n  }\n\n  .dasboard-text {\n    display: none !important;\n  }\n\n  .sidebar-sticky {\n    padding-top: 1.9rem !important;\n    height: auto;\n  }\n\n  .sidebar-sticky .nav li {\n    width: 50%;\n    text-align: center;\n    border-right: 1px solid #c7ceff;\n  }\n\n  .sidebar-sticky .nav li:last-child {\n    border: none;\n  }\n\n  .no-data img {\n    max-width: 100%;\n    margin-top: 0;\n  }\n\n  .nodata-msg,\n  .h2,\n  h2 {\n    font-size: 1.4rem;\n  }\n\n  .custom-text {\n    font-size: 14px;\n  }\n\n  .navbar-nav {\n    float: right;\n    width: 50%;\n    text-align: right;\n    display: inherit;\n    margin: 0;\n  }\n\n  .navbar-dark .navbar-brand {\n    margin: 0;\n    width: 50%;\n    float: left;\n    display: inherit;\n  }\n\n  .sidebar {\n    padding: 40px 0 0;\n  }\n\n  footer br {\n    display: none;\n  }\n\n  .media {\n    display: block;\n  }\n\n  .rounded-circle {\n    max-width: 150px;\n    margin: 0 auto 20px !important;\n    display: block;\n  }\n\n  b,\n  strong {\n    display: block;\n  }\n\n  .displayTable {\n    background: white\n  }\n\n  .authBlock {\n    box-shadow: none\n  }\n\n  .px-logo {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUVBQWlFOztBQUVqRTtFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0FBQzdCOztBQUVBOzs7Ozs7RUFNRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFFaEIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGVBQWU7RUFDZixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZ0NBQWdDO0VBQ2hDLGVBQWU7QUFDakI7O0FBRUE7Ozs7RUFJRSxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNkNBQTZDO0VBQzdDLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5Q0FBeUM7RUFDekMscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQSxlQUFlOztBQUNmO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixXQUFXO0VBQ1gsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBRUEsVUFBVTs7QUFDVjtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQSxRQUFROztBQUNSO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsU0FBUztFQUNULFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLGVBQWU7O0FBQ2Y7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGtDQUFrQztFQUNwQzs7RUFFQTs7SUFFRSw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSw4QkFBOEI7SUFDOUIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiwrQkFBK0I7RUFDakM7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsYUFBYTtFQUNmOztFQUVBOzs7SUFHRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsOEJBQThCO0lBQzlCLGNBQWM7RUFDaEI7O0VBRUE7O0lBRUUsY0FBYztFQUNoQjs7RUFFQTtJQUNFO0VBQ0Y7O0VBRUE7SUFDRTtFQUNGOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2h0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS41LjAvY3NzL2FsbC5jc3MnO1xuXG4qIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXdlaWdodDogNDAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xufVxuXG4uZmVhdGhlciB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm1lZGlhLWJvZHkgaDEge1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubWVkaWEtYm9keSBoMSBzdHJvbmcge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubWVkaWEtYm9keSBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLm1lZGlhLWJvZHkgcCBzdHJvbmcge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucHgtbG9nbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjbGVhcjogYm90aDtcbiAgbWFyZ2luOiAwIGF1dG8gMjBweDtcbiAgd2lkdGg6IDIyMHB4O1xufVxuXG4ucHgtbG9nbyBhIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGlzcGxheVRhYmxlIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMzRjUxQjU7XG59XG5cbi5kaXNwbGF5VGFibGVDZWxsIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luOiAwIDAgMjBweDtcbn1cblxuLmF1dGhCbG9jayB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMzBweCA0MHB4IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDRweCAwIHJnYmEoMCwgMCwgMCwgLjA0KTtcbiAgYm94LXNoYWRvdzogMCAwIDRweCAwIHJnYmEoMCwgMCwgMCwgLjA0KTtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZm9ybUdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybUNvbnRyb2wge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDE1cHggMTVweCAxNHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTdlN2U3O1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjNDQ0NDQ0O1xuICBiYWNrZ3JvdW5kOiAjZmNmY2ZjO1xufVxuXG4uZm9ybUNvbnRyb2w6Zm9jdXMge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZDNkM2Q2XG59XG5cbmlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNCQkJCQkI7XG59XG5cbmlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNCQkJCQkI7XG59XG5cbmlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjQkJCQkJCO1xufVxuXG5pbnB1dDotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNCQkJCQkJcbn1cblxuLmRpc3BsYXlUYWJsZSAuYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIGJhY2tncm91bmQ6ICMxNUNENzI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5kaXNwbGF5VGFibGUgLmJ0bjpob3ZlciB7XG4gIG9wYWNpdHk6IC44ODtcbn1cblxuLmRpc3BsYXlUYWJsZSAuYnRuU2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZDogI0VFRUVFRTtcbiAgY29sb3I6ICM0MDQwNDA7XG59XG5cbi5kaXNwbGF5VGFibGUgLmdvb2dsZUJ0biB7XG4gIGJhY2tncm91bmQ6ICNlYjVlNGM7XG59XG5cbi5kaXNwbGF5VGFibGUgLmZhY2Vib29rQnRuIHtcbiAgYmFja2dyb3VuZDogIzVkODJkMTtcbn1cblxuLm9yIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICNhMGEwYTA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogNXB4IDAgMHB4O1xufVxuXG4ub3JJbm5lciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHotaW5kZXg6IDQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMCAxMnB4O1xufVxuXG4ub3I6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiAnJztcbiAgbGVmdDogMDtcbiAgdG9wOiAxMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQ6ICNlMmUyZTI7XG59XG5cbi5oYWxmV2lkdGgge1xuICB3aWR0aDogNDguNSU7XG59XG5cbi5sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmZvcmdvdFBhc3N3b3JkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IC0xMnB4IDAgMTVweCAwO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3Jnb3RQYXNzd29yZCBzcGFuIHtcbiAgY29sb3I6ICMzQzg5RUY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4ucmVkaXJlY3RUb0xvZ2luIHtcbiAgcGFkZGluZzogMTVweCAwIDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjYpO1xufVxuXG4ucmVkaXJlY3RUb0xvZ2luIC5yZWRpcmVjdCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uc2lkZWJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMDtcbiAgcGFkZGluZzogNDhweCAwIDA7XG4gIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCAwIHJnYmEoMCwgMCwgMCwgLjEpO1xufVxuXG4uc2lkZWJhci1zdGlja3kge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDhweCk7XG4gIHBhZGRpbmctdG9wOiAuNXJlbTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG5Ac3VwcG9ydHMgKChwb3NpdGlvbjotd2Via2l0LXN0aWNreSkgb3IgKHBvc2l0aW9uOnN0aWNreSkpIHtcbiAgLnNpZGViYXItc3RpY2t5IHtcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgfVxufVxuXG4uc2lkZWJhciAubmF2LWxpbmsge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzMzMztcbn1cblxuLnNpZGViYXIgLm5hdi1saW5rIC5mZWF0aGVyIHtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIGNvbG9yOiAjOTk5O1xufVxuXG4uc2lkZWJhci1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAuNzVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5uYXYtbGluayB7XG4gIHBhZGRpbmc6IDEuNXJlbSAxcmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZTBlMjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlLFxuLnNpZGViYXIgYTpob3ZlcixcbmE6bm90KFtocmVmXSk6bm90KFt0YWJpbmRleF0pOmZvY3VzLFxuYTpub3QoW2hyZWZdKTpub3QoW3RhYmluZGV4XSk6aG92ZXIge1xuICBjb2xvcjogI0U5MUU2MztcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cbltyb2xlPVwibWFpblwiXSB7XG4gIHBhZGRpbmctdG9wOiA0OHB4O1xufVxuXG4uZGFzYm9hcmQtdGV4dCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUsIC4zKTtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuNSk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMCAwIDAgMTRweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xcHg7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICBwYWRkaW5nLXRvcDogLjc1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogLjc1cmVtO1xufVxuXG4ubmF2YmFyIC5mb3JtLWNvbnRyb2wge1xuICBwYWRkaW5nOiAuNzVyZW0gMXJlbTtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uZm9ybS1jb250cm9sLWRhcmsge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XG59XG5cbi5mb3JtLWNvbnRyb2wtZGFyazpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yNSk7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICMwMEJDRDQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5iZy1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNGNTFCNSAhaW1wb3J0YW50O1xufVxuXG4uZ2FwLXJpZ2h0IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5pIHtcbiAgd2lkdGg6IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5pbm5lci1hZGp1c3Qge1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbi5hY3Rpb24tYmxvY2sge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hY3Rpb24tYmxvY2sgLmZhLWVkaXQ6aG92ZXIge1xuICBjb2xvcjogIzAwOTY4ODtcbn1cblxuLmFjdGlvbi1ibG9jayAuZmEtdHJhc2gtYWx0OmhvdmVyIHtcbiAgY29sb3I6ICNFOTFFNjM7XG59XG5cbi5idG4tcHJpbWFyeS5mb2N1cyxcbi5idG4tcHJpbWFyeTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8qIFBhZ2luYXRpb24gKi9cbmJvZHkgcGFnaW5hdGlvbi10ZW1wbGF0ZSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogOHB4IDAgMDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuYm9keSAubmd4LXBhZ2luYXRpb24gbGk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbjogMDtcbn1cblxuYm9keSAubmd4LXBhZ2luYXRpb24gLmN1cnJlbnQge1xuICBiYWNrZ3JvdW5kOiAjMDU1QUY5O1xufVxuXG4ubmd4LXBhZ2luYXRpb24gYTpob3Zlcixcbi5uZ3gtcGFnaW5hdGlvbiBidXR0b246aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIEVycm9yICovXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxuLmJ0bi1zdWNjZXNzLmRpc2FibGVkLFxuLmJ0bi1zdWNjZXNzOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLyogTmF2ICovXG5ib2R5IC5uYXZiYXIge1xuICBwYWRkaW5nOiA2cHggMCAhaW1wb3J0YW50O1xufVxuXG5ib2R5IC5uYXZiYXItYnJhbmQge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uYnJhbmQtbG9nbyB7XG4gIG1heC13aWR0aDogODUlO1xufVxuXG4ucHQtMyxcbi5weS0zIHtcbiAgcGFkZGluZy10b3A6IDIuNHJlbSAhaW1wb3J0YW50O1xufVxuXG4uc2lkZWJhci1zdGlja3kge1xuICBwYWRkaW5nLXRvcDogMS4ycmVtICFpbXBvcnRhbnQ7XG59XG5cbmxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIHBhZGRpbmc6IDEuMzc1cmVtIC43NXJlbTtcbn1cblxuLm5vLWRhdGEgaW1nIHtcbiAgbWF4LXdpZHRoOiA0MjBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMDtcbn1cblxuLm5vZGF0YS1tc2cge1xuICBtYXJnaW46IDI1cHggMCAxNXB4O1xuICBmb250LXNpemU6IDI4cHg7XG4gIGNvbG9yOiAjYTlhNmM1O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogLjJweDtcbn1cblxuW3JvbGU9XCJtYWluXCJdIHtcbiAgcGFkZGluZy10b3A6IDY1cHg7XG59XG5cbi5wcmVsb2FkZXIge1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xufVxuXG4uY3VzdG9tLXRleHQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjNWY1ZjVmO1xuICBsZXR0ZXItc3BhY2luZzogLjJweDtcbn1cblxuLm5hdmJhci1kYXJrIC5uYXZiYXItYnJhbmQge1xuICBtYXJnaW4tbGVmdDogNnB4O1xufVxuXG4uY3VzdG9tLXRleHQgc3Ryb25nIHtcbiAgY29sb3I6ICMzYTNhM2E7XG59XG5cbi5tYi0zLFxuLm15LTMge1xuICBtYXJnaW4tYm90dG9tOiAxLjRyZW0gIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1mYS1wbHVzIHtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogYXV0bztcbn1cblxuLnVzZXItaW1hZ2Uge1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbn1cblxuYm9keSAudGFibGUgdGhlYWQgdGgge1xuICBiYWNrZ3JvdW5kOiAjZjNmNWZmO1xufVxuXG4ucHJpY2luZy1oZWFkZXIge1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cblxuLnVzZXJJbWFnZSB7XG4gIG1heC13aWR0aDogMTI1cHg7XG59XG5cbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKVxufVxuXG4uY2FyZCB7XG4gIGJvcmRlcjogbm9uZVxufVxuXG4ubGlzdC1ncm91cC1pdGVtIHtcbiAgcGFkZGluZzogMCAxLjI1cmVtIDE1cHg7XG4gIGJvcmRlcjogbm9uZVxufVxuXG4uZmEtc2lnbi1vdXQtYWx0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDFweDtcbn1cblxuLmxvZ091dEJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5vLWFjY2VzcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBwYWRkaW5nOiA3MHB4IDA7XG59XG5cbi5yb3VuZGVkLWNpcmNsZSB7XG4gIG1heC13aWR0aDogMTUwcHg7XG59XG5cbi8qIFJlc3BvbnNpdmUgKi9cbkBtZWRpYShtYXgtd2lkdGg6NzY3cHgpIHtcbiAgLnNpZGViYXIge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgcGFkZGluZzogNDBweCAwIDEwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgW3JvbGU9XCJtYWluXCJdIHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgfVxuXG4gIC5pbm5lci1hZGp1c3Qge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICB1bC5uYXYuZmxleC1jb2x1bW4ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHQtMyxcbiAgLnB5LTMge1xuICAgIHBhZGRpbmctdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5icmFuZC1sb2dvIHtcbiAgICBtYXgtd2lkdGg6IDE3NXB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmRhc2JvYXJkLXRleHQge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zaWRlYmFyLXN0aWNreSB7XG4gICAgcGFkZGluZy10b3A6IDEuOXJlbSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC5zaWRlYmFyLXN0aWNreSAubmF2IGxpIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYzdjZWZmO1xuICB9XG5cbiAgLnNpZGViYXItc3RpY2t5IC5uYXYgbGk6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG5cbiAgLm5vLWRhdGEgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuXG4gIC5ub2RhdGEtbXNnLFxuICAuaDIsXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgfVxuXG4gIC5jdXN0b20tdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLm5hdmJhci1uYXYge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDogNTAlO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGRpc3BsYXk6IGluaGVyaXQ7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLm5hdmJhci1kYXJrIC5uYXZiYXItYnJhbmQge1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogNTAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGRpc3BsYXk6IGluaGVyaXQ7XG4gIH1cblxuICAuc2lkZWJhciB7XG4gICAgcGFkZGluZzogNDBweCAwIDA7XG4gIH1cblxuICBmb290ZXIgYnIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubWVkaWEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLnJvdW5kZWQtY2lyY2xlIHtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvIDIwcHggIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIGIsXG4gIHN0cm9uZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuZGlzcGxheVRhYmxlIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZVxuICB9XG5cbiAgLmF1dGhCbG9jayB7XG4gICAgYm94LXNoYWRvdzogbm9uZVxuICB9XG5cbiAgLnB4LWxvZ28ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"container-fluid\">\n  \n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">\n      <div class=\"inner-adjust\">\n\n        <div class=\"pt-3 pb-2 mb-3 border-bottom\">\n          <h1 class=\"h2\">User Profile</h1>\n        </div>\n        <div class=\"row\" *ngIf=\"authService.userData as user\">\n          <div class=\"col-md-12\">\n            <div class=\"media\">\n              <img class=\"align-self-start mr-5 img-thumbnail rounded-circle\" src=\"{{(user.photoURL) ? user.photoURL : '/assets/dummy-user.png'}}\"\n                alt=\"{{user.displayName}}\">\n              <div class=\"media-body\">\n                <h1>Hello: <strong>{{(user.displayName) ? user.displayName : 'User'}}</strong></h1>\n                \n                <p>Email: <strong>{{user.email}}</strong></p>\n              <div *ngFor=\"let com1 of detailsList\">\n                <p>Manager Name: <strong>{{com1?.ManagerFirstName}}  {{com1?.ManagerLastName}}</strong></p>\n                <p>Contact Number: <strong>{{com1?.phone}}</strong></p>\n                <p>{{user.displayName}} is working on <strong>{{com1?.pname}}</strong> Project</p>\n                </div>\n                \n  </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </main>\n\n  \n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ApiService */ "./src/app/services/ApiService.ts");





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_freeApiService, authService, router, ngZone) {
        this._freeApiService = _freeApiService;
        this.authService = authService;
        this.router = router;
        this.ngZone = ngZone;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // Storing current page in Local Variable 'current-page'
        localStorage.setItem('current-page', "dashboard");
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ApiService__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  .flex-me {\n    display: inline-flex;\n    flex-flow: row wrap;\n    background: grey;\n  }\n.example-card {\n    \n    width: 350px;\n    height: 350px;\n    display: block;\n    margin-left:auto;\n    margin-right:auto;  \n    vertical-align: middle;\n    box-shadow: 0 0 4px 0 rgba(0, 0, 0, .04);  \n    overflow: hidden;\n    -webkit-box-shadow: 0 0 4px 0 rgba(0, 0, 0, .04);\n    position: absolute;\n    margin-top: 10%;\n    margin-left: 37%; \n    opacity: 0.8;\n    background-color: white;\n    border-radius: 3ex;\n  }\n.mat-card-actions{\n    padding-top: 26%;\n  }\n@media (max-width:768px){\n    .example-card{\n      \n    width: 250px;\n    height: 300px;\n    display: block;\n    margin-left:20%;\n    vertical-align:middle;\n    position: absolute;\n    margin-top: 45%;\n    }\n    .img{\n      max-width: 100%;\n    }\n  }\n.mat-card-title{\n    font-family: Garamond;\n    font-size: 32px;\n    font-weight: bold;\n    color:#302C56;\n  }\n.btn {\n    color: white    ;\n    border: none;\n    justify-content: center;\n    background-color:#21618C  ;\n    padding: 14px 28px;\n    font-size: 19px;\n    cursor: pointer;\n    border-radius: 0%;\n    font-family: Garamond;\n    border-radius: 5ex;\n    opacity: 0.9;\n}\n.btn:hover{\n  background-color: #335887   ;\n  color:white ;\n  width: 25ex;\n  height: 7ex;\n  box-shadow: 3px 3px #585769;\n}\n#hero{\n  background: url(\"/assets/images/banner.png\");\n  background-size: cover;\n  background-position: center center;\n  position: relative;\n  top: 0;\n  bottom: 0;\n  height: 100vh;\n  /* z-index: -6; */\n  opacity: 0.8;\n}\n@media (max-width: 1000px) {\n  .center{}\n  .center-inner{left:25%;top:25%;position:absolute;width:50%;height:300px;background:#f0f;text-align:center;max-width:500px;max-height:500px;}\n}\n@media (min-width: 1000px) {\n  .center{left:50%;top:25%;position:absolute;}\n  .center-inner{width:500px;height:100%;margin-left:-250px;height:300px;background:#f0f;text-align:center;max-width:500px;max-height:500px;}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiRUFBRTtJQUNFLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0lBRUksWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsd0NBQXdDO0lBQ3hDLGdCQUFnQjtJQUNoQixnREFBZ0Q7SUFDaEQsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0U7O0lBRUEsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmO0lBQ0E7TUFDRSxlQUFlO0lBQ2pCO0VBQ0Y7QUFDRjtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7RUFDZjtBQUNGO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLDRDQUE0QztFQUM1QyxzQkFBc0I7RUFDdEIsa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULGFBQWE7RUFDYixpQkFBaUI7RUFDakIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxRQUFRO0VBQ1IsY0FBYyxRQUFRLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztBQUM3STtBQUNBO0VBQ0UsUUFBUSxRQUFRLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO0VBQzNDLGNBQWMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztBQUMzSSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIC5mbGV4LW1lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIGJhY2tncm91bmQ6IGdyZXk7XG4gIH1cbi5leGFtcGxlLWNhcmQge1xuICAgIFxuICAgIHdpZHRoOiAzNTBweDtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OmF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87ICBcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGJveC1zaGFkb3c6IDAgMCA0cHggMCByZ2JhKDAsIDAsIDAsIC4wNCk7ICBcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDRweCAwIHJnYmEoMCwgMCwgMCwgLjA0KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAzNyU7IFxuICAgIG9wYWNpdHk6IDAuODtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAzZXg7XG4gIH1cbiAgLm1hdC1jYXJkLWFjdGlvbnN7XG4gICAgcGFkZGluZy10b3A6IDI2JTtcbiAgfVxuIFxuICBAbWVkaWEgKG1heC13aWR0aDo3NjhweCl7XG4gICAgLmV4YW1wbGUtY2FyZHtcbiAgICAgIFxuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OjIwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi10b3A6IDQ1JTtcbiAgICB9XG4gICAgLmltZ3tcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbi5tYXQtY2FyZC10aXRsZXtcbiAgICBmb250LWZhbWlseTogR2FyYW1vbmQ7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiMzMDJDNTY7XG4gIH1cbi5idG4ge1xuICAgIGNvbG9yOiB3aGl0ZSAgICA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IzIxNjE4QyAgO1xuICAgIHBhZGRpbmc6IDE0cHggMjhweDtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xuICAgIGZvbnQtZmFtaWx5OiBHYXJhbW9uZDtcbiAgICBib3JkZXItcmFkaXVzOiA1ZXg7XG4gICAgb3BhY2l0eTogMC45O1xufVxuLmJ0bjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzNTg4NyAgIDtcbiAgY29sb3I6d2hpdGUgO1xuICB3aWR0aDogMjVleDtcbiAgaGVpZ2h0OiA3ZXg7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggIzU4NTc2OTtcbn1cbiNoZXJve1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9iYW5uZXIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICAvKiB6LWluZGV4OiAtNjsgKi9cbiAgb3BhY2l0eTogMC44O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuY2VudGVye31cbiAgLmNlbnRlci1pbm5lcntsZWZ0OjI1JTt0b3A6MjUlO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjUwJTtoZWlnaHQ6MzAwcHg7YmFja2dyb3VuZDojZjBmO3RleHQtYWxpZ246Y2VudGVyO21heC13aWR0aDo1MDBweDttYXgtaGVpZ2h0OjUwMHB4O31cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgLmNlbnRlcntsZWZ0OjUwJTt0b3A6MjUlO3Bvc2l0aW9uOmFic29sdXRlO31cbiAgLmNlbnRlci1pbm5lcnt3aWR0aDo1MDBweDtoZWlnaHQ6MTAwJTttYXJnaW4tbGVmdDotMjUwcHg7aGVpZ2h0OjMwMHB4O2JhY2tncm91bmQ6I2YwZjt0ZXh0LWFsaWduOmNlbnRlcjttYXgtd2lkdGg6NTAwcHg7bWF4LWhlaWdodDo1MDBweDt9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div id=\"hero\">\n    \n  <div id=\"hero-overlay\">\n    <div class=\"authBlock\" >\n      <mat-card class=\"example-card\" >\n        <mat-card-header class=\"one\" align=\"center\">\n            <div fxFlex></div>\n          <mat-card-title>Leave and Attendance Portal</mat-card-title>\n        </mat-card-header>\n        <mat-card-actions class=\"two\" align=\"center\">\n            <div fxFlex></div>\n            <button type=\"button\" class=\"btn googleBtn\" (click)=\"authService.GoogleAuth()\">\n                \n                Log in with &nbsp;<img src=\"assets/images/gg2.png\" width=\"25px\" height=\"25px\">\n              </button>\n          \n        </mat-card-actions>\n      </mat-card>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.ts ***!
  \*********************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SignInComponent = /** @class */ (function () {
    function SignInComponent(authService, router, location) {
        this.authService = authService;
        this.router = router;
    }
    SignInComponent.prototype.ngOnInit = function () { };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/components/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/components/sign-in/sign-in.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["PlatformLocation"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/*!*****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact{\n    max-width:900px;\n    margin: 30px auto 0 auto;\n    display: flex;\n    justify-content: center;\n    flex-wrap: nowrap;\n    flex-direction: row;\n    justify-content: stretch;\n    flex-flow: wrap;    \n   \n}\n\n.half1{\n    flex:1;\n}\n\n.half2{\n    text-align: center;\n    padding-top: 40px;\n    background-color:#E3DFE5;\n    flex:1;\n}\n\n.text{\n    font-size:30px;\n    font-family:  'system-ui';\n    font-weight: 400;\n}\n\n@media (max-width:766px){\n    img{\n        /* max-width: 100%;\n        max-height: 100%; */\n        display: none;\n    }  \n\n    .half1{\n        flex:0;\n    }\n    .half2{\n        margin-left:1%;\n        margin-right: 1%;\n        height:70vh; \n        \n    }\n    .contact{\n        margin: 0;\n        height:55vh;\n    }\n}\n\nimg{\n    max-width: 100%;\n    max-height: 50%;\n}\n\ninput{\n    max-width: 300px;\n    margin: auto;\n}\n\ntextarea{\n    max-width: 300px;\n    margin: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxNQUFNO0FBQ1Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixNQUFNO0FBQ1Y7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJO1FBQ0k7MkJBQ21CO1FBQ25CLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxNQUFNO0lBQ1Y7SUFDQTtRQUNJLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsV0FBVzs7SUFFZjtJQUNBO1FBQ0ksU0FBUztRQUNULFdBQVc7SUFDZjtBQUNKOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdHtcbiAgICBtYXgtd2lkdGg6OTAwcHg7XG4gICAgbWFyZ2luOiAzMHB4IGF1dG8gMCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gICAgZmxleC1mbG93OiB3cmFwOyAgICBcbiAgIFxufVxuXG4uaGFsZjF7XG4gICAgZmxleDoxO1xufVxuXG4uaGFsZjJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6I0UzREZFNTtcbiAgICBmbGV4OjE7XG59XG4udGV4dHtcbiAgICBmb250LXNpemU6MzBweDtcbiAgICBmb250LWZhbWlseTogICdzeXN0ZW0tdWknO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDo3NjZweCl7XG4gICAgaW1ne1xuICAgICAgICAvKiBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7ICovXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfSAgXG5cbiAgICAuaGFsZjF7XG4gICAgICAgIGZsZXg6MDtcbiAgICB9XG4gICAgLmhhbGYye1xuICAgICAgICBtYXJnaW4tbGVmdDoxJTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxJTtcbiAgICAgICAgaGVpZ2h0Ojcwdmg7IFxuICAgICAgICBcbiAgICB9XG4gICAgLmNvbnRhY3R7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgaGVpZ2h0OjU1dmg7XG4gICAgfVxufVxuaW1ne1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiA1MCU7XG59XG5pbnB1dHtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbn1cbnRleHRhcmVhe1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.html":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact\">\n  <div class=\"half1\">\n    <img src=\"assets/images/contact.jpeg\" width=\"500px\" height=\"500px\">\n  </div>\n  <div class=\"half2\" width=\"500px\" height=\"500px\">\n    <form #contactForm=\"ngForm\" (ngSubmit)=\"saveContact(contact)\" novalidate>\n      <p class=\"text\">GET IN TOUCH</p><br/>\n      <div class=\"form-group\">\n          <input required id=\"Name\" name=\"Name\" placeholder=\"Name\" [(ngModel)]=\"contact.Name\" type=\"text\" class=\"form-control\" #Name=\"ngModel\">\n      </div>\n      <div class=\"form-group\">\n          <input required id=\"_Email\" name=\"_Email\" placeholder=\"Email\" [(ngModel)]=\"contact._Email\" type=\"text\" class=\"form-control\" #_Email=\"ngModel\">\n      </div>\n      <div class=\"form-group\">\n          <input required id=\"Subject\" name=\"Subject\" placeholder=\"Subject\" [(ngModel)]=\"contact.Subject\" type=\"text\" class=\"form-control\" #Subject=\"ngModel\">\n      </div>\n      <div class=\"form-group\">\n          <textarea required id=\"Message\" name=\"Message\" placeholder=\"Message\" [(ngModel)]=\"contact.Message\" type=\"text\" class=\"form-control\" #Message=\"ngModel\"></textarea>\n      </div><br/>\n      <button mat-raised-button type=\"submit\">Submit</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ApiService */ "./src/app/services/ApiService.ts");



var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(_freeApiService) {
        this._freeApiService = _freeApiService;
        this.contact = {
            Name: null,
            _Email: null,
            Message: null,
            Subject: null,
        };
    }
    ContactUsComponent.prototype.ngOnInit = function () {
        // Storing current page in Local Variable 'current-page'
        localStorage.setItem('current-page', "contact-us");
    };
    ContactUsComponent.prototype.saveContact = function (ctc) {
        var _this = this;
        //Function call to submit Contact Form data in the Database
        this._freeApiService.SubmitContactForm(ctc).subscribe(function (data) { return _this.objPostContact = data; });
        //Command to reset form once data is submitted in the database
        this.formValues.resetForm();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contactForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ContactUsComponent.prototype, "formValues", void 0);
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/contact-us/contact-us.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ApiService__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/data-table/data-table-datasource.ts":
/*!*****************************************************!*\
  !*** ./src/app/data-table/data-table-datasource.ts ***!
  \*****************************************************/
/*! exports provided: DataTableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableDataSource", function() { return DataTableDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
var DataTableDataSource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DataTableDataSource, _super);
    function DataTableDataSource(paginator, sort, _freeApiService) {
        var _this = _super.call(this) || this;
        _this.paginator = paginator;
        _this.sort = sort;
        _this._freeApiService = _freeApiService;
        _this.data = _this._freeApiService.getLeavesData();
        _this.connect();
        return _this;
    }
    //   this.data= this.apiService.displayclearedLeaves();console.log("data",this.data);
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
   //  */
    DataTableDataSource.prototype.connect = function () {
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        var _this = this;
        var dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        //   // Set the paginator's length
        this.paginator.length = this.data.length;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"].apply(void 0, dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _this.getPagedData(_this.getSortedData(_this.data.slice()));
        }));
    };
    // /**
    //  *  Called when the table is being destroyed. Use this function, to clean up
    //  * any open connections or free any held resources that were set up during connect.
    //  */
    DataTableDataSource.prototype.disconnect = function () { };
    // /**
    //  * Paginate the data (client-side). If you're using server-side pagination,
    //  * this would be replaced by requesting the appropriate data from the server.
    //  */
    DataTableDataSource.prototype.getPagedData = function (data) {
        var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    };
    // /**
    //  * Sort the data (client-side). If you're using server-side sorting,
    //  * this would be replaced by requesting the appropriate data from the server.
    //  */
    DataTableDataSource.prototype.getSortedData = function (data) {
        var _this = this;
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'ClApproved': return compare(+a.ClApproved, +b.ClApproved, isAsc);
                case 'SlApproved': return compare(+a.SlApproved, +b.SlApproved, isAsc);
                default: return 0;
            }
        });
    };
    return DataTableDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/data-table/data-table.component.css":
/*!*****************************************************!*\
  !*** ./src/app/data-table/data-table.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width-table {\n  align : center;\n  width: 100%;\n}\n/* .mat-header-cell{\n  display:flex;\n  justify-content:center;\n} */\nmat-header-cell {\ntext-align: center;\npadding-right: 10px;\n\nflex: 0 0 75px;\n  }\n.greenClass{\n  color: green;\n}\n.redClass{\n  color: red;\n}\ntable, th, td {\n  padding: 15px;  \n  border: 1px solid #ddd;\n  text-align: center;\n\n}\ntr:hover {background-color: #f5f5f5;}\nth {\n  background-color:#21618C;\n  color: white;\n  font-family: \"Carter One\";\n  font-size: 16px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 190;\n  line-height: 26.4px;\n}\ntable{\ntable-layout:fixed;\ntext-align: center;\n}\n.btn{\nbackground-color: #21618C;\ncolor: white;\nflex-wrap:wrap;\nborder-radius: 0px;\ntext-align: center;\nborder: none;\npadding: 10px 25px;\ndisplay: inline-block;\nborder-radius: 1px;\n}\n.btn:hover{\nbackground-color: #335887 !important;\ncolor: whitesmoke;\n}\nmat-tab{\nbackground-color: #21618C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YS10YWJsZS9kYXRhLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztBQUNiO0FBQ0E7OztHQUdHO0FBQ0g7QUFDQSxrQkFBa0I7QUFDbEIsbUJBQW1COztBQUVuQixjQUFjO0VBQ1o7QUFDRjtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjs7QUFFcEI7QUFDQSxVQUFVLHlCQUF5QixDQUFDO0FBQ3BDO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQjtBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCLFlBQVk7QUFDWixjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLHFCQUFxQjtBQUNyQixrQkFBa0I7QUFDbEI7QUFFQTtBQUNBLG9DQUFvQztBQUNwQyxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgtdGFibGUge1xuICBhbGlnbiA6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4vKiAubWF0LWhlYWRlci1jZWxse1xuICBkaXNwbGF5OmZsZXg7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG59ICovXG5tYXQtaGVhZGVyLWNlbGwge1xudGV4dC1hbGlnbjogY2VudGVyO1xucGFkZGluZy1yaWdodDogMTBweDtcblxuZmxleDogMCAwIDc1cHg7XG4gIH1cbi5ncmVlbkNsYXNze1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5yZWRDbGFzc3tcbiAgY29sb3I6IHJlZDtcbn1cblxudGFibGUsIHRoLCB0ZCB7XG4gIHBhZGRpbmc6IDE1cHg7ICBcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG50cjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTt9XG50aCB7XG4gIGJhY2tncm91bmQtY29sb3I6IzIxNjE4QztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJDYXJ0ZXIgT25lXCI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDE5MDtcbiAgbGluZS1oZWlnaHQ6IDI2LjRweDtcbn1cblxudGFibGV7XG50YWJsZS1sYXlvdXQ6Zml4ZWQ7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG57XG5iYWNrZ3JvdW5kLWNvbG9yOiAjMjE2MThDO1xuY29sb3I6IHdoaXRlO1xuZmxleC13cmFwOndyYXA7XG5ib3JkZXItcmFkaXVzOiAwcHg7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5ib3JkZXI6IG5vbmU7XG5wYWRkaW5nOiAxMHB4IDI1cHg7XG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5ib3JkZXItcmFkaXVzOiAxcHg7XG59XG5cbi5idG46aG92ZXJ7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjMzM1ODg3ICFpbXBvcnRhbnQ7XG5jb2xvcjogd2hpdGVzbW9rZTtcbn1cbm1hdC10YWJ7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjMjE2MThDO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/data-table/data-table.component.html":
/*!******************************************************!*\
  !*** ./src/app/data-table/data-table.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n  <table  align=\"center\" mat-table class=\"full-width-table\" [dataSource]=\"child\" matSort aria-label=\"Elements\">\n      <ng-container matColumnDef=\"FName\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>&nbsp;&nbsp;&nbsp;\n            FName</th>\n          <td mat-cell *matCellDef=\"let row\">{{row.FName}}</td>\n        </ng-container>\n      <ng-container matColumnDef=\"LName\">\n           <th mat-header-cell *matHeaderCellDef mat-sort-header>&nbsp;&nbsp;&nbsp;&nbsp;\n             LName</th>\n           <td mat-cell *matCellDef=\"let row\">{{row.LName}}</td>\n    </ng-container>\n    <ng-container matColumnDef=\"ClApproved\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>&nbsp;&nbsp;&nbsp;&nbsp;\n        ClApproved</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.CLApproved}}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"SlApproved\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>&nbsp;&nbsp;&nbsp;&nbsp;\n        SlApproved</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.SLApproved}}</td>\n    </ng-container>\n    <ng-container matColumnDef=\"ElApproved\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>&nbsp;&nbsp;&nbsp;&nbsp;\n        ElApproved</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.ELApproved}}</td>\n    </ng-container> \n\n\n    <ng-container matColumnDef=\"FromDate\"> \n      <th mat-header-cell *matHeaderCellDef mat-sort-header>&nbsp;&nbsp;&nbsp;&nbsp;\n        FromDate</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.FromDate | date:'mediumDate'}}</td>\n    </ng-container>\n    <ng-container matColumnDef=\"ToDate\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>&nbsp;&nbsp;&nbsp;&nbsp;\n        ToDate</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.ToDate | date:'mediumDate'}}</td>\n    </ng-container>\n    <ng-container matColumnDef=\"AppliedDate\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>&nbsp;&nbsp;&nbsp;&nbsp;\n        AppliedDate</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.AppliedDate | date:'mediumDate'}}</td>\n    </ng-container>\n    <ng-container matColumnDef=\"Reason\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>&nbsp;&nbsp;&nbsp;&nbsp;\n        Reason</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.Reason}}</td>\n    </ng-container>\n    <ng-container matColumnDef=\"Status\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>&nbsp;&nbsp;&nbsp;&nbsp;\n        Status</th>\n      <td mat-cell *matCellDef=\"let row\" [ngClass]=\"{greenClass: row.Status == true, redClass: row.Status == false}\">{{row.Status == true ?  'Accepted' :  'Rejected'}}</td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator #paginator \n  [length]=\"child.data.length\"\n   [pageIndex]=\"0\"\n   [pageSize]=\"10\" \n   [pageSizeOptions]=\"[5,10,20,50]\">\n  </mat-paginator>\n</div>\n\n<!-- \n<table>\n  <tr *ngFor=\"let list of ListClearedLeaves\">\n<td> {{ list.CLApproved}}</td>\n  </tr>\n</table> -->"

/***/ }),

/***/ "./src/app/data-table/data-table.component.ts":
/*!****************************************************!*\
  !*** ./src/app/data-table/data-table.component.ts ***!
  \****************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _data_table_datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-table-datasource */ "./src/app/data-table/data-table-datasource.ts");
/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/ApiService */ "./src/app/services/ApiService.ts");





var DataTableComponent = /** @class */ (function () {
    function DataTableComponent(_freeApiService) {
        this._freeApiService = _freeApiService;
        this.child = {};
        this.displayedColumns = ['FName', 'LName', 'ClApproved', 'SlApproved', 'ElApproved', 'FromDate', 'ToDate', 'AppliedDate', 'Reason', 'Status'];
        this.getClearedLeave();
    }
    DataTableComponent.prototype.getClearedLeave = function () {
        var _this = this;
        this._freeApiService.GetClearedLeaves().subscribe(function (data) {
            _this._freeApiService.passLeavesData(_this.dataSource = data);
            _this.child = new _data_table_datasource__WEBPACK_IMPORTED_MODULE_3__["DataTableDataSource"](_this.paginator, _this.sort, _this._freeApiService);
        });
    };
    DataTableComponent.prototype.ngOnInit = function () {
        this.data = new _data_table_datasource__WEBPACK_IMPORTED_MODULE_3__["DataTableDataSource"](this.paginator, this.sort, this._freeApiService);
        this._freeApiService.progress.next(true);
        this.dataSource = this._freeApiService.ListClearedLeaves;
        this._freeApiService.SaveClearedLeaves(this.dataSource);
        this.dataSource = this._freeApiService.displayclearedLeaves();
        this._freeApiService.progress.next(false);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], DataTableComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], DataTableComponent.prototype, "sort", void 0);
    DataTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-data-table',
            template: __webpack_require__(/*! ./data-table.component.html */ "./src/app/data-table/data-table.component.html"),
            styles: [__webpack_require__(/*! ./data-table.component.css */ "./src/app/data-table/data-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ApiService__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], DataTableComponent);
    return DataTableComponent;
}());



/***/ }),

/***/ "./src/app/display-holiday-list/display-holiday-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/display-holiday-list/display-holiday-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table, th, td {\n  padding: 15px;  \n  border: 1px solid #ddd;\n  text-align: center;\n\n}\ntr:hover {background-color: #f5f5f5;}\nth {\n  background-color:#4f6a7c;\n  color: white;\n  font-family: \"Carter One\"; font-size: 16px; font-style: normal; font-variant: normal; font-weight: 190; line-height: 26.4px;\n  \n}\ntable\n{\ntable-layout:fixed;\n}\n.btn {\n    color: white;\n  \n    border: none;\n    background-color:rgb(76, 78, 175);\n    padding: 14px 28px;\n    font-size: 16px;\n    cursor: pointer;\n    display: inline-block;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzcGxheS1ob2xpZGF5LWxpc3QvZGlzcGxheS1ob2xpZGF5LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCOztBQUVwQjtBQUNBLFVBQVUseUJBQXlCLENBQUM7QUFDcEM7RUFDRSx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLHlCQUF5QixFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxvQkFBb0IsRUFBRSxnQkFBZ0IsRUFBRSxtQkFBbUI7O0FBRTdIO0FBRUU7O0FBRUYsa0JBQWtCO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZOztJQUVaLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0lBQ2YscUJBQXFCO0VBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvZGlzcGxheS1ob2xpZGF5LWxpc3QvZGlzcGxheS1ob2xpZGF5LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlLCB0aCwgdGQge1xuICBwYWRkaW5nOiAxNXB4OyAgXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxudHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7fVxudGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiM0ZjZhN2M7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiQ2FydGVyIE9uZVwiOyBmb250LXNpemU6IDE2cHg7IGZvbnQtc3R5bGU6IG5vcm1hbDsgZm9udC12YXJpYW50OiBub3JtYWw7IGZvbnQtd2VpZ2h0OiAxOTA7IGxpbmUtaGVpZ2h0OiAyNi40cHg7XG4gIFxufVxuXG4gIHRhYmxlXG57XG50YWJsZS1sYXlvdXQ6Zml4ZWQ7XG59XG4uYnRuIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIFxuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig3NiwgNzgsIDE3NSk7XG4gICAgcGFkZGluZzogMTRweCAyOHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/display-holiday-list/display-holiday-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/display-holiday-list/display-holiday-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<table align=\"center\">\n  <tr>\n    <th>Date</th>\n    <th>Description</th>\n  </tr>\n  <tr *ngFor=\"let com of ListHoliday\">\n\n    <td>{{com?.Date | date:'longDate'}}</td>\n    <td>{{com?.Description}}</td>\n  </tr>\n</table>"

/***/ }),

/***/ "./src/app/display-holiday-list/display-holiday-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/display-holiday-list/display-holiday-list.component.ts ***!
  \************************************************************************/
/*! exports provided: DisplayHolidayListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayHolidayListComponent", function() { return DisplayHolidayListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ApiService */ "./src/app/services/ApiService.ts");



var DisplayHolidayListComponent = /** @class */ (function () {
    function DisplayHolidayListComponent(_freeApiService) {
        this._freeApiService = _freeApiService;
    }
    DisplayHolidayListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Storing current page in Local Variable 'current-page'
        localStorage.setItem('current-page', "display");
        //Function Call to Fetch HolidayList from Database
        this._freeApiService.getHolidayList()
            .subscribe(function (data) { return _this.ListHoliday = data; });
    };
    DisplayHolidayListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-display-holiday-list',
            template: __webpack_require__(/*! ./display-holiday-list.component.html */ "./src/app/display-holiday-list/display-holiday-list.component.html"),
            styles: [__webpack_require__(/*! ./display-holiday-list.component.css */ "./src/app/display-holiday-list/display-holiday-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ApiService__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], DisplayHolidayListComponent);
    return DisplayHolidayListComponent;
}());



/***/ }),

/***/ "./src/app/display-response/display-response.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/display-response/display-response.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3BsYXktcmVzcG9uc2UvZGlzcGxheS1yZXNwb25zZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/display-response/display-response.component.html":
/*!******************************************************************!*\
  !*** ./src/app/display-response/display-response.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n<p>\n  You have Sucessfully cleared a Leave. <a routerLink='/manage-leaves'>click here</a> to go back and manage leaves.\n</p>\n-->\n<br><br><br><br><br><br><br><br><br><br><br><br><br><br>"

/***/ }),

/***/ "./src/app/display-response/display-response.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/display-response/display-response.component.ts ***!
  \****************************************************************/
/*! exports provided: DisplayResponseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayResponseComponent", function() { return DisplayResponseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/ApiService */ "./src/app/services/ApiService.ts");




var DisplayResponseComponent = /** @class */ (function () {
    function DisplayResponseComponent(router, apiservice) {
        this.router = router;
        this.apiservice = apiservice;
    }
    DisplayResponseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiservice.progress.next(true);
        //function to set 3 seconds time  to redirect page automatically after 3 seconds to 'manage-leaves' page
        setTimeout(function () {
            _this.apiservice.progress.next(true);
            _this.router.navigate(['manage-leaves']);
        }, 7000); //5s
    };
    DisplayResponseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-display-response',
            template: __webpack_require__(/*! ./display-response.component.html */ "./src/app/display-response/display-response.component.html"),
            styles: [__webpack_require__(/*! ./display-response.component.css */ "./src/app/display-response/display-response.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_ApiService__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], DisplayResponseComponent);
    return DisplayResponseComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n   Multicoloured Hover Variations\n*/\n\n#social-fb:hover {\n    color: #3B5998;\n}\n#social-tw:hover {\n    color: #4099FF;\n}\n#social-gp:hover {\n    color: #d34836;\n}\n#social-em:hover {\n    color: #f39c12;\n}\n.footer {\n    position:absolute;\n   \n    clear:both;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    background-color: red;\n    color:blue;\n    text-align: center;\n    height: 40px;\n    margin-top: -40px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7R0FDRzs7OztJQUlDLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGlCQUFpQjs7SUFFakIsVUFBVTtJQUNWLE9BQU87SUFDUCxTQUFTO0lBQ1QsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgIE11bHRpY29sb3VyZWQgSG92ZXIgVmFyaWF0aW9uc1xuKi9cblxuI3NvY2lhbC1mYjpob3ZlciB7XG4gICAgY29sb3I6ICMzQjU5OTg7XG59XG4jc29jaWFsLXR3OmhvdmVyIHtcbiAgICBjb2xvcjogIzQwOTlGRjtcbn1cbiNzb2NpYWwtZ3A6aG92ZXIge1xuICAgIGNvbG9yOiAjZDM0ODM2O1xufVxuI3NvY2lhbC1lbTpob3ZlciB7XG4gICAgY29sb3I6ICNmMzljMTI7XG59XG4uZm9vdGVyIHtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgIFxuICAgIGNsZWFyOmJvdGg7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGNvbG9yOmJsdWU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n\n<footer>\n  <br>  \n  <div>\n    <div class=\"text-center center-block\">\n      <a target=\"blank\" href=\"https://www.facebook.com/nineleaps/?ref=aymt_homepage_panel\">\n        <i class=\"fa fa-facebook-square fa-3x social\"></i>\n      </a>&nbsp;\n      <a target=\"blank\" href=\"https://twitter.com/nineleaps\">\n        <i class=\"fa fa-twitter-square fa-3x social\"></i>\n      </a>&nbsp;\n      <a target=\"blank\" href=\"https://plus.google.com/u/0/+Nineleaps\">\n        <i class=\"fa fa-google-plus-square fa-3x social\"></i>\n      </a>&nbsp;\n      <a target=\"blank\" href=\"admin @nineleaps.com\">\n        <i class=\"fa fa-envelope-square fa-3x social\"></i>\n      </a>&nbsp;\n    </div>\n    <hr />\n  </div>\n  <div class=\"footer-copyright text-center py-3\">\n    Privacy Policy\n    <a href=\"https://www.nineleaps.com/\"> © 2019 Nineleaps</a>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home-hr/holiday-list/holiday-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/home-hr/holiday-list/holiday-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label{\n  font-family: \"Carter One\"; font-style: normal;font-size: 17px; font-variant: normal; font-weight: 190; line-height: 26.4px;\n}\n.btn{\n  background-color: #21618C;\n  color: white;\n  flex-wrap:wrap;\n  border-radius: 0px;\n  text-align: center;\n  border: none;\n  padding: 10px 25px;\n  display: inline-block;\n  border-radius: 1px;\n}\n.btn:hover{\n  background-color: #335887 !important;\n  color: whitesmoke;\n}\ntable, th, td {\n    padding: 15px;  \n    border: 1px solid black;\n    text-align: center;\n\n}\ntr:hover {background-color: #f5f5f5;}\nth {\n    background-color: #4CAF50;\n    color: white;\n  }\ntable\n{\ntable-layout:fixed;\n}\n.panel.panel-primary{\n    margin-top: 70px;\n    height: 100%;\n    font-family: cursive;\n    font-weight: bold;\n  }\n.panel-body{\n    width:0%;\n    height: 500rem;\n    color: #21618C;\n  }\n.panel-footer{\n\n    margin: 0 auto; width: 180px;\n  \n  }\n.control-label{\n    color: #1f2833;\n    font-size: 100%;\n    font-family: serif;\n  \n  }\ntr:hover {background-color: #f5f5f5;}\ntable, th, td {\n    border: px solid black;\n  }\n.panel-default > .panel-heading-custom {\n    background: #21618C; \n    color: #fff; \n    text-align:center;\n    font-size: 30px;\n    font-family: \"cursive\";\n  }\n.inf{\n    color: #1f2833;\n  }\n.form-group{\n    padding-right:15rem;\n    padding-left:15rem;\n    \n  }\n@media (max-width:415px){\n  .form-group {\n    padding-right: 0.9rem;\n    padding-left: 0.9rem;\n    \n  }\n}\n\n  \n\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1oci9ob2xpZGF5LWxpc3QvaG9saWRheS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUIsRUFBRSxrQkFBa0IsQ0FBQyxlQUFlLEVBQUUsb0JBQW9CLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CO0FBQzVIO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGlCQUFpQjtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7O0FBRXRCO0FBQ0EsVUFBVSx5QkFBeUIsQ0FBQztBQUNwQztJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7QUFFQTs7QUFFRixrQkFBa0I7QUFDbEI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGlCQUFpQjtFQUNuQjtBQUVBO0lBQ0UsUUFBUTtJQUNSLGNBQWM7SUFDZCxjQUFjO0VBQ2hCO0FBQ0U7O0lBRUEsY0FBYyxFQUFFLFlBQVk7O0VBRTlCO0FBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjs7RUFFcEI7QUFDQSxVQUFVLHlCQUF5QixDQUFDO0FBQ3BDO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysc0JBQXNCO0VBQ3hCO0FBQ0E7SUFDRSxjQUFjO0VBQ2hCO0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsa0JBQWtCOztFQUVwQjtBQUNGO0VBQ0U7SUFDRSxxQkFBcUI7SUFDckIsb0JBQW9COztFQUV0QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1oci9ob2xpZGF5LWxpc3QvaG9saWRheS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbHtcbiAgZm9udC1mYW1pbHk6IFwiQ2FydGVyIE9uZVwiOyBmb250LXN0eWxlOiBub3JtYWw7Zm9udC1zaXplOiAxN3B4OyBmb250LXZhcmlhbnQ6IG5vcm1hbDsgZm9udC13ZWlnaHQ6IDE5MDsgbGluZS1oZWlnaHQ6IDI2LjRweDtcbn1cbi5idG57XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTYxOEM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZmxleC13cmFwOndyYXA7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHggMjVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG59XG5cbi5idG46aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzU4ODcgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG50YWJsZSwgdGgsIHRkIHtcbiAgICBwYWRkaW5nOiAxNXB4OyAgXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG50cjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTt9XG50aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICB0YWJsZVxue1xudGFibGUtbGF5b3V0OmZpeGVkO1xufVxuXG4ucGFuZWwucGFuZWwtcHJpbWFyeXtcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgLnBhbmVsLWJvZHl7XG4gICAgd2lkdGg6MCU7XG4gICAgaGVpZ2h0OiA1MDByZW07XG4gICAgY29sb3I6ICMyMTYxOEM7XG4gIH1cbiAgICAucGFuZWwtZm9vdGVye1xuXG4gICAgbWFyZ2luOiAwIGF1dG87IHdpZHRoOiAxODBweDtcbiAgXG4gIH1cbiBcbiAgLmNvbnRyb2wtbGFiZWx7XG4gICAgY29sb3I6ICMxZjI4MzM7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcbiAgXG4gIH1cbiAgdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7fVxuICB0YWJsZSwgdGgsIHRkIHtcbiAgICBib3JkZXI6IHB4IHNvbGlkIGJsYWNrO1xuICB9XG4gIFxuICAucGFuZWwtZGVmYXVsdCA+IC5wYW5lbC1oZWFkaW5nLWN1c3RvbSB7XG4gICAgYmFja2dyb3VuZDogIzIxNjE4QzsgXG4gICAgY29sb3I6ICNmZmY7IFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LWZhbWlseTogXCJjdXJzaXZlXCI7XG4gIH1cbiAgLmluZntcbiAgICBjb2xvcjogIzFmMjgzMztcbiAgfVxuXG4gIC5mb3JtLWdyb3Vwe1xuICAgIHBhZGRpbmctcmlnaHQ6MTVyZW07XG4gICAgcGFkZGluZy1sZWZ0OjE1cmVtO1xuICAgIFxuICB9XG5AbWVkaWEgKG1heC13aWR0aDo0MTVweCl7XG4gIC5mb3JtLWdyb3VwIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjlyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAwLjlyZW07XG4gICAgXG4gIH1cbn1cblxuICBcblxuICAiXX0= */"

/***/ }),

/***/ "./src/app/home-hr/holiday-list/holiday-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/home-hr/holiday-list/holiday-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form #holidaylistForm=\"ngForm\" (ngSubmit)=\"saveholiday(holidaylist)\" class=\"mt-auto\" novalidate >\n  <div class=\"col-md-10 col-md-offset-1\"><br/><br/><br/>\n    <div class=\"panel panel-default\" id=\"holidayform\">\n      <div class=\"panel-heading panel-heading-custom\">\n        <h3 class=\"panel-title\" >Upload Holiday list</h3>\n      </div>\n      <br />\n        \n        <div class=\"form-group\" [class.has-success]=\"date.valid\" [class.has-error]=\"date.invalid && date.touched\">\n          <label for=\"date\" class=\"control-label\">Holiday Date</label>\n          <input required id=\"date\" name=\"date\" [(ngModel)]=\"holidaylist.date\" type=\"text\" [minDate]=\"minDate\" [maxDate]=\"maxDate\" placement=\"bottom\" class=\"form-control\" #date=\"ngModel\" autocomplete=\"off\"\n          bsDatepicker [bsConfig]=\"datePickerConfig\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY' }\">\n          <span class=\"help-block\" *ngIf=\"date.invalid && date.touched\">\n            Pick the date of Holiday\n          </span>\n        </div>\n      <br/>\n      <br/>\n\n      <div class=\"form-group\" [class.has-success]=\"occasion.valid\" [class.has-error]=\"occasion.invalid && occasion.touched\">\n        <label for=\"occasion\" class=\"control-label\">Occasion :</label>\n        \n        <input required pattern=\"^[^-\\s][a-zA-Z_\\s-]{3,20}$\" id=\"occasion\" name=\"occasion\" [(ngModel)]=\"holidaylist.occasion\" type=\"text\" class=\"form-control\" #occasion=\"ngModel\">\n      \n        <span class=\"help-block\" *ngIf=\"!!occasion.errors?.required && !!occasion.touched\">\n          Enter occasion of Holiday\n        </span>\n        <span class=\"help-block\" *ngIf=\"!!occasion.errors?.pattern && !!occasion.touched\">\n          Occasion cannot be blank\n        </span>\n      </div>\n\n      <div class=\"text-center\"><br/>\n        <button type=\"submit\"  [disabled]=\"holidaylistForm.invalid\" class=\"btn\">\n          Submit\n        </button><br/><br>\n    \n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/home-hr/holiday-list/holiday-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/home-hr/holiday-list/holiday-list.component.ts ***!
  \****************************************************************/
/*! exports provided: HolidayListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolidayListComponent", function() { return HolidayListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ApiService */ "./src/app/services/ApiService.ts");
/* harmony import */ var src_app_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_classes_Holiday__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/classes/Holiday */ "./src/app/classes/Holiday.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");









var HolidayListComponent = /** @class */ (function () {
    function HolidayListComponent(authService, _freeApiService, _http, datepipe, dialogService, router) {
        this.authService = authService;
        this._freeApiService = _freeApiService;
        this._http = _http;
        this.datepipe = datepipe;
        this.dialogService = dialogService;
        this.router = router;
        this.holidaylist = {
            date: new Date(),
            occasion: '',
        };
        // Storing current page in Local Variable 'current-page'
        localStorage.setItem('current-page', "holiday-list");
        this.authService.isLoggedInSource.next(true);
        //Event call on Pressing Refresh button
        window.addEventListener("beforeunload", function (e) {
            var confirmationMessage = "Reloading the page will loose the data from previous page";
            e.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+
            return confirmationMessage; // Gecko, WebKit, Chrome <34
        });
        //max and min date validation
        this.datePickerConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue',
            showWeekNumbers: false,
            minDate: new Date(2019, 0, 1),
            maxDate: new Date(2019, 11, 31),
        });
    }
    HolidayListComponent.prototype.ngOnInit = function () {
    };
    HolidayListComponent.prototype.saveholiday = function (holidaylist) {
        var _this = this;
        this.dialogService.openConfirmDialog('Submit this Holiday?')
            .afterClosed().subscribe(function (res) {
            if (res) {
                var HolidayListObject = new src_app_classes_Holiday__WEBPACK_IMPORTED_MODULE_6__["Holiday"];
                HolidayListObject.Date = _this.datepipe.transform(holidaylist.date, 'MM-dd-yyyy');
                HolidayListObject.Description = holidaylist.occasion;
                //Function call to upload Holiday List in the Database
                _this._freeApiService.uploadHoliday(HolidayListObject).subscribe(function (data) { return _this.objPost = data; });
                //command to reset form once data is sent in the database
                _this.formValues.resetForm();
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('holidaylistForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HolidayListComponent.prototype, "formValues", void 0);
    HolidayListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-holiday-list',
            template: __webpack_require__(/*! ./holiday-list.component.html */ "./src/app/home-hr/holiday-list/holiday-list.component.html"),
            styles: [__webpack_require__(/*! ./holiday-list.component.css */ "./src/app/home-hr/holiday-list/holiday-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            _services_ApiService__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
            src_app_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], HolidayListComponent);
    return HolidayListComponent;
}());



/***/ }),

/***/ "./src/app/home-hr/home-hr.component.css":
/*!***********************************************!*\
  !*** ./src/app/home-hr/home-hr.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nsection {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  min-width: 0;\n  margin: 1px;\n  height:240vh;\n}\n\np{\n  font-size: 20px;\n}\n\n.parallax img{\n  width: 1100px;\n  max-width: 100%; \n  max-height: 500px;\n  display: block;\n  flex:1;\n  background-attachment: fixed;\n  -webkit-chrome-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n}\n\n.equal-height-container{\n  font-family: 'Cardo', serif;\n  font-size: 1.7rem;\n  font-weight: bolder;\n  max-width:900px;\n  margin: 0 auto;   \n  justify-content: space-between;\n  \n}\n\na, p{\n  font-family: \"Carter One\"; font-size: 22px; font-style: normal; font-variant: normal; font-weight: 190; line-height: 26.4px;\n}\n\n.first{\n  padding: 20px;\n  flex: 1;\n  margin: auto;\n  flex-basis:40%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n}\n\n.second{\n  padding: 10px;\n  margin: auto; \n  flex:1;\n  justify-content: center;\n  flex-basis:40%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.equal-height-container img{\n  max-width:300px;\n  max-height: 290px;\n}\n\n@media (min-width:500px){\n  .equal-height-container{\n    display: flex;\n  }\n  .section{\n    height: 100vh;\n    width: 100vw;\n  }\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1oci9ob21lLWhyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLE1BQU07RUFDTiw0QkFBNEI7RUFDNUIsd0NBQXdDO0VBRXhDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0VBQ2QsOEJBQThCOztBQUVoQzs7QUFFQTtFQUNFLHlCQUF5QixFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxvQkFBb0IsRUFBRSxnQkFBZ0IsRUFBRSxtQkFBbUI7QUFDN0g7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsT0FBTztFQUNQLFlBQVk7RUFDWixjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7O0FBRXpCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixNQUFNO0VBQ04sdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7RUFDZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1oci9ob21lLWhyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbnNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtaW4td2lkdGg6IDA7XG4gIG1hcmdpbjogMXB4O1xuICBoZWlnaHQ6MjQwdmg7XG59XG5cbnB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5wYXJhbGxheCBpbWd7XG4gIHdpZHRoOiAxMTAwcHg7XG4gIG1heC13aWR0aDogMTAwJTsgXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleDoxO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAtd2Via2l0LWNocm9tZS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246YWxsIDAuMnMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cblxuLmVxdWFsLWhlaWdodC1jb250YWluZXJ7XG4gIGZvbnQtZmFtaWx5OiAnQ2FyZG8nLCBzZXJpZjtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIG1heC13aWR0aDo5MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87ICAgXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgXG59XG5cbmEsIHB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhcnRlciBPbmVcIjsgZm9udC1zaXplOiAyMnB4OyBmb250LXN0eWxlOiBub3JtYWw7IGZvbnQtdmFyaWFudDogbm9ybWFsOyBmb250LXdlaWdodDogMTkwOyBsaW5lLWhlaWdodDogMjYuNHB4O1xufVxuLmZpcnN0e1xuICBwYWRkaW5nOiAyMHB4O1xuICBmbGV4OiAxO1xuICBtYXJnaW46IGF1dG87XG4gIGZsZXgtYmFzaXM6NDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxufVxuLnNlY29uZHtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiBhdXRvOyBcbiAgZmxleDoxO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1iYXNpczo0MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmVxdWFsLWhlaWdodC1jb250YWluZXIgaW1ne1xuICBtYXgtd2lkdGg6MzAwcHg7XG4gIG1heC1oZWlnaHQ6IDI5MHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDo1MDBweCl7XG4gIC5lcXVhbC1oZWlnaHQtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLnNlY3Rpb257XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gIH1cbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/home-hr/home-hr.component.html":
/*!************************************************!*\
  !*** ./src/app/home-hr/home-hr.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <section>\n    <div class=\"parallax\">\n        <carousel class=\"carousel\">\n            <slide>\n              <img src=\"assets/images/co3.jpg\" alt=\"first slide\" style=\"display: block; width: 1100px;height:600px\">\n            </slide>\n            <slide>\n              <img src=\"assets/images/co1.jpg\" alt=\"second slide\" style=\"display: block; width: 1100px;height:600px\">\n            </slide>\n            <slide>\n              <img src=\"assets/images/co2.jpg\" alt=\"third slide\" style=\"display: block; width: 1100px;height:600px\">\n            </slide>\n        </carousel>\n       \n        <div class=\"equal-height-container\">\n            <div class=\"first\" >\n                <img class=\"img\" src=\"assets/images/holiday.jpeg\">\n            </div>\n            <div class=\"second\" >\n                <a routerLink=\"/holiday-list\" appDrct>Upload Holiday List</a>&nbsp;\n            </div>\n        </div>\n        <div class=\"equal-height-container\">\n            <div class=\"first\" >\n                <img class=\"f3\" class=\"img\" src=\"assets/images/newjoinee.jpeg\">\n            </div>\n            <div class=\"second\" >\n                <a routerLink=\"/newjoinee\" appDrct >Introduce New Employee</a>&nbsp;\n            </div>\n        </div>\n        <div class=\"equal-height-container\">\n            <div class=\"first\" id=\"f5\">\n                <img class=\"img\" src=\"assets/images/project.jpeg\">\n            </div>\n            <div class=\"second\" id=\"f6\">\n                <a appDrct routerLink=\"/project\"> Enter Project Details</a>&nbsp;\n            </div>\n        </div>\n        <div class=\"equal-height-container\">\n            <div class=\"first\" id=\"f8\">\n                <img class=\"img\" src=\"assets/images/leave.jpeg\">\n            </div>\n            <div class=\"second\" id=\"f7\">\n                <a routerLink=\"/manage-leaves\" appDrct>Manage Employee Leaves</a>&nbsp;\n            </div>\n        </div>\n    </div>\n</section>\n \n\n\n\n"

/***/ }),

/***/ "./src/app/home-hr/home-hr.component.ts":
/*!**********************************************!*\
  !*** ./src/app/home-hr/home-hr.component.ts ***!
  \**********************************************/
/*! exports provided: HomeHrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeHrComponent", function() { return HomeHrComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var HomeHrComponent = /** @class */ (function () {
    function HomeHrComponent(location) {
    }
    HomeHrComponent.prototype.ngOnInit = function () {
        // Storing current page in Local Variable 'current-page'
        localStorage.setItem('current-page', "home-hr");
    };
    HomeHrComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-hr',
            template: __webpack_require__(/*! ./home-hr.component.html */ "./src/app/home-hr/home-hr.component.html"),
            styles: [__webpack_require__(/*! ./home-hr.component.css */ "./src/app/home-hr/home-hr.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["PlatformLocation"]])
    ], HomeHrComponent);
    return HomeHrComponent;
}());



/***/ }),

/***/ "./src/app/home-hr/manage-leaves/manage-leaves.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/home-hr/manage-leaves/manage-leaves.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table, th, td {\n    padding: 15px;  \n    border: 1px solid #ddd;\n    text-align: center;\n\n}\ntr:hover {background-color: #f5f5f5;}\nth {\n    background-color:#4f6a7c;\n    color: white;\n    font-family: \"Carter One\"; font-size: 16px; font-style: normal; font-variant: normal; font-weight: 190; line-height: 26.4px;\n    \n  }\ntable\n{\ntable-layout:fixed;\n}\n.btn{\n  background-color: #21618C;\n  color: white;\n  flex-wrap:wrap;\n  border-radius: 0px;\n  text-align: center;\n  border: none;\n  padding: 10px 25px;\n  display: inline-block;\n  border-radius: 1px;\n}\n.btn:hover{\n  background-color: #335887 !important;\n  color: whitesmoke;\n}\nmat-tab{\n  background-color: #21618C;\n}\n.greenClass{\n  color: green;\n}\n.redClass{\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1oci9tYW5hZ2UtbGVhdmVzL21hbmFnZS1sZWF2ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCOztBQUV0QjtBQUNBLFVBQVUseUJBQXlCLENBQUM7QUFDcEM7SUFDSSx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLHlCQUF5QixFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxvQkFBb0IsRUFBRSxnQkFBZ0IsRUFBRSxtQkFBbUI7O0VBRTdIO0FBRUE7O0FBRUYsa0JBQWtCO0FBQ2xCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtaHIvbWFuYWdlLWxlYXZlcy9tYW5hZ2UtbGVhdmVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSwgdGgsIHRkIHtcbiAgICBwYWRkaW5nOiAxNXB4OyAgXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cbnRyOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O31cbnRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0ZjZhN2M7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBcIkNhcnRlciBPbmVcIjsgZm9udC1zaXplOiAxNnB4OyBmb250LXN0eWxlOiBub3JtYWw7IGZvbnQtdmFyaWFudDogbm9ybWFsOyBmb250LXdlaWdodDogMTkwOyBsaW5lLWhlaWdodDogMjYuNHB4O1xuICAgIFxuICB9XG5cbiAgdGFibGVcbntcbnRhYmxlLWxheW91dDpmaXhlZDtcbn1cblxuLmJ0bntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxNjE4QztcbiAgY29sb3I6IHdoaXRlO1xuICBmbGV4LXdyYXA6d3JhcDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweCAyNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbn1cblxuLmJ0bjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzNTg4NyAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cbm1hdC10YWJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTYxOEM7XG59XG4uZ3JlZW5DbGFzc3tcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ucmVkQ2xhc3N7XG4gIGNvbG9yOiByZWQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/home-hr/manage-leaves/manage-leaves.component.html":
/*!********************************************************************!*\
  !*** ./src/app/home-hr/manage-leaves/manage-leaves.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\n<mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4\">\n  <mat-tab label=\"Pending Request\">\n    <ng-template matTabContent>\n     <br/>\n     <br/>\n      \n     <div class=\"table-responsive-sm\" style=\"overflow-x:auto;\">\n  <div       align=\"center\" *ngIf=\"ListPendingLeaves==null\">\n        \n    No Pending Leaves Exist \n    <br><br><br><br><br><br><br><br>\n  </div>\n  <app-sample-table></app-sample-table>\n\n<!-- \n      <table align=\"center\" *ngIf=\"ListPendingLeaves!=null\">\n        <tr>\n\n    <th>Request</th>   \n    <th>Response</th>\n         \n        </tr>\n\n        \n        <tr *ngFor =\"let com of ListPendingLeaves\">\n\n    \n          <td><u>{{com.FName}} {{com.LName}}</u> is requesting Leave From <u>{{ com.FromDate | date:'mediumDate'}}</u> to <u>{{com.ToDate | date:'mediumDate'}}</u> </td>\n          <td><button class=\"btn info\" (click)=ManageLeaves(com) >Reply</button></td>\n        <br/>\n        </tr>\n      </table> -->\n     </div>\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"Cleared Request\">\n    <ng-template matTabContent>\n      <br/>\n      <br/>\n      \n      <div class=\"table-striped w-auto\" style=\"overflow-x:auto;\">\n        <div       align=\"center\" *ngIf=\"ListClearedLeaves==null\">\n        \n          No Cleared Leaves Exist \n          <br><br><br><br><br><br><br><br>\n        </div>\n      \n     \n        <app-data-table></app-data-table>\n        <!-- <table align=\"center\" *ngIf=\"ListClearedLeaves!=null\">\n         <tr>\n           \n           <th>First Name</th>\n \n           <th>Last Name</th>\n           <th>CL Approved</th>\n           <th>SL Approved</th>\n           <th>EL Approved</th>\n           <th>From Date</th>\n           <th>ToDate</th>\n           <th>AppliedDate </th>\n           <th>Reason</th>\n           <th>Leave Status</th>\n         </tr>\n \n         \n         <tr *ngFor =\"let val of ListClearedLeaves\">\n \n           \n           <td>{{val.FName}}</td>\n           <td>{{val.LName}}</td>\n           <td>{{val.CLApproved}}</td>\n           <td>{{val.SLApproved}}</td>\n           <td>{{val.ELApproved}}</td>\n           <td>{{val.FromDate | date:'mediumDate'}}</td>\n           <td>{{val.ToDate | date:'mediumDate'}}</td>\n           <td>{{val.AppliedDate | date:'mediumDate'}}</td>\n           <td>{{val.Reason | titlecase}}</td>\n           <td [ngClass]=\"{greenClass: val.Status == true, redClass: val.Status == false}\" >{{val.Status == true ?  'Accepted' :  'Rejected'}}</td>\n         </tr>\n       </table> -->\n      </div>\n    </ng-template>\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/app/home-hr/manage-leaves/manage-leaves.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/home-hr/manage-leaves/manage-leaves.component.ts ***!
  \******************************************************************/
/*! exports provided: ManageLeavesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageLeavesComponent", function() { return ManageLeavesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ApiService */ "./src/app/services/ApiService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");






var ManageLeavesComponent = /** @class */ (function () {
    function ManageLeavesComponent(authService, _freeApiService, router, location) {
        this.authService = authService;
        this._freeApiService = _freeApiService;
        this.router = router;
    }
    ManageLeavesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Storing current page in Local Variable 'current-page'
        localStorage.setItem('current-page', "manage-leaves");
        this._freeApiService.progress.next(true);
        //Function call to get data of Employees whose List iis Pending
        this._freeApiService.GetPendingLeaves().subscribe(function (data) {
            return _this.ListPendingLeaves = data;
        });
        //Function call to save Pending Leaves Data of employee
        this._freeApiService.SavePendingLeaves(this.ListPendingLeaves);
        //Function call to get Pending Leaves Data
        this.ListPendingLeaves = this._freeApiService.displayPendingLeaves();
        //Function call to Fetch Cleared Leaves data of Employee
        this._freeApiService.GetClearedLeaves().subscribe(function (data) { return _this.ListClearedLeaves = data; });
        //Function call to save Cleared Leaves
        this._freeApiService.SaveClearedLeaves(this.ListClearedLeaves);
        //Function call to get Cleared Leaves Data
        this.ListClearedLeaves = this._freeApiService.displayclearedLeaves();
        this._freeApiService.progress.next(false);
    };
    ManageLeavesComponent.prototype.ManageLeaves = function (reply) {
        //Function call to save Leaves data of particular employee so that it can be used in next component
        this._freeApiService.passData(reply);
        this.ListPendingLeaves = [];
        //command to navigate to 'reply' Coomponent
        this.router.navigateByUrl('reply');
    };
    ManageLeavesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-leaves',
            template: __webpack_require__(/*! ./manage-leaves.component.html */ "./src/app/home-hr/manage-leaves/manage-leaves.component.html"),
            styles: [__webpack_require__(/*! ./manage-leaves.component.css */ "./src/app/home-hr/manage-leaves/manage-leaves.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _services_ApiService__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["PlatformLocation"]])
    ], ManageLeavesComponent);
    return ManageLeavesComponent;
}());



/***/ }),

/***/ "./src/app/home-hr/newjoinee/newjoinee.component.css":
/*!***********************************************************!*\
  !*** ./src/app/home-hr/newjoinee/newjoinee.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel.panel-primary{\n    margin-top: 70px;\n    height: 100%;\n    font-family: serif;\n    font-weight: bold;\n  }\n  .panel-body{\n    width:100%;\n    height: 100%;\n  }\n  .control-label{\n    color: #1f2833;\n    font-size: 100%;\n    font-family: serif;        \n  }\n  .panel-heading{\n    font-size: 190%;\n    text-align: center;\n  }\n  label{\n    font-family: \"Carter One\"; font-style: normal;font-size: 17px; font-variant: normal; font-weight: 190; line-height: 26.4px;\n  }\n  .inf{\n    color: #1f2833;\n    margin-top: 50rem;\n  }\n  .panel-footer{\n    margin: 0 auto; width: 180px;\n  \n  }\n  .form-group{\n    padding-right: 20rem;\n    padding-left:20rem;\n    \n  }\n  .panel-default > .panel-heading-custom {\n    background:#21618C; \n    color: #fff; \n    text-align:center;\n    font-size: 30px;\n    font-family: \"cursive\";\n  }\n  .btn{\n    background-color: #21618C;\n    color: white;\n    flex-wrap:wrap;\n    border-radius: 0px;\n    text-align: center;\n    border: none;\n    padding: 10px 25px;\n    display: inline-block;\n    border-radius: 1px;\n  }\n  .btn:hover{\n    background-color: #335887 !important;\n    color: whitesmoke;\n  }\n  .btn:hover{\n    background-color: #335887 !important;\n    color: whitesmoke;\n  }\n  el-heading-custom {\n    background:#21618C; \n    color: #fff; \n    text-align:center;\n    font-size: 30px;\n    font-family: \"cursive\";\n  }\n  @media (max-width:415px){\n    .form-group {\n      padding-right: 0.9rem;\n      padding-left: 0.9rem;\n      \n    }\n  }\n  table, th, td {\n    padding: 15px;  \n    border: 1px solid black;\n    text-align: center;\n\n}\n  tr:hover {background-color: #f5f5f5;}\n  th {\n    background-color: #4CAF50;\n    color: white;\n  }\n  table\n{\ntable-layout:fixed;\n}\n  .btn{\n  background-color: #21618C;\n  color: white;\n  flex-wrap:wrap;\n  border-radius: 0px;\n  text-align: center;\n  border: none;\n  padding: 10px 25px;\n  display: inline-block;\n  border-radius: 1px;\n}\n  .btn:hover{\n  background-color: #335887 !important;\n  color: whitesmoke;\n}\n  .scrollbar {\n  height: 100px;\n  overflow: auto; \n}\n  \n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1oci9uZXdqb2luZWUvbmV3am9pbmVlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLFVBQVU7SUFDVixZQUFZO0VBQ2Q7RUFDQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCO0VBRUE7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSx5QkFBeUIsRUFBRSxrQkFBa0IsQ0FBQyxlQUFlLEVBQUUsb0JBQW9CLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CO0VBQzVIO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxjQUFjLEVBQUUsWUFBWTs7RUFFOUI7RUFDQTtJQUNFLG9CQUFvQjtJQUNwQixrQkFBa0I7O0VBRXBCO0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjtFQUVBO0lBQ0Usb0NBQW9DO0lBQ3BDLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0Usb0NBQW9DO0lBQ3BDLGlCQUFpQjtFQUNuQjtFQUFDO0lBQ0Msa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0U7TUFDRSxxQkFBcUI7TUFDckIsb0JBQW9COztJQUV0QjtFQUNGO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjs7QUFFdEI7RUFDQSxVQUFVLHlCQUF5QixDQUFDO0VBQ3BDO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDtFQUVBOztBQUVGLGtCQUFrQjtBQUNsQjtFQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7RUFFQTtFQUNFLG9DQUFvQztFQUNwQyxpQkFBaUI7QUFDbkI7RUFDQztFQUNDLGFBQWE7RUFDYixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1oci9uZXdqb2luZWUvbmV3am9pbmVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFuZWwucGFuZWwtcHJpbWFyeXtcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmb250LWZhbWlseTogc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLnBhbmVsLWJvZHl7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLmNvbnRyb2wtbGFiZWx7XG4gICAgY29sb3I6ICMxZjI4MzM7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiBzZXJpZjsgICAgICAgIFxuICB9XG4gIFxuICAucGFuZWwtaGVhZGluZ3tcbiAgICBmb250LXNpemU6IDE5MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIGxhYmVse1xuICAgIGZvbnQtZmFtaWx5OiBcIkNhcnRlciBPbmVcIjsgZm9udC1zdHlsZTogbm9ybWFsO2ZvbnQtc2l6ZTogMTdweDsgZm9udC12YXJpYW50OiBub3JtYWw7IGZvbnQtd2VpZ2h0OiAxOTA7IGxpbmUtaGVpZ2h0OiAyNi40cHg7XG4gIH1cbiAgLmluZntcbiAgICBjb2xvcjogIzFmMjgzMztcbiAgICBtYXJnaW4tdG9wOiA1MHJlbTtcbiAgfVxuICAucGFuZWwtZm9vdGVye1xuICAgIG1hcmdpbjogMCBhdXRvOyB3aWR0aDogMTgwcHg7XG4gIFxuICB9XG4gIC5mb3JtLWdyb3Vwe1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcmVtO1xuICAgIHBhZGRpbmctbGVmdDoyMHJlbTtcbiAgICBcbiAgfVxuXG4gIC5wYW5lbC1kZWZhdWx0ID4gLnBhbmVsLWhlYWRpbmctY3VzdG9tIHtcbiAgICBiYWNrZ3JvdW5kOiMyMTYxOEM7IFxuICAgIGNvbG9yOiAjZmZmOyBcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiY3Vyc2l2ZVwiO1xuICB9XG4gIC5idG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxNjE4QztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZmxleC13cmFwOndyYXA7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gIH1cbiAgXG4gIC5idG46aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzNTg4NyAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICB9XG4gIC5idG46aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzNTg4NyAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICB9ZWwtaGVhZGluZy1jdXN0b20ge1xuICAgIGJhY2tncm91bmQ6IzIxNjE4QzsgXG4gICAgY29sb3I6ICNmZmY7IFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LWZhbWlseTogXCJjdXJzaXZlXCI7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6NDE1cHgpe1xuICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDAuOXJlbTtcbiAgICAgIHBhZGRpbmctbGVmdDogMC45cmVtO1xuICAgICAgXG4gICAgfVxuICB9XG4gIHRhYmxlLCB0aCwgdGQge1xuICAgIHBhZGRpbmc6IDE1cHg7ICBcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cbnRyOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O31cbnRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIHRhYmxlXG57XG50YWJsZS1sYXlvdXQ6Zml4ZWQ7XG59XG4uYnRue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE2MThDO1xuICBjb2xvcjogd2hpdGU7XG4gIGZsZXgtd3JhcDp3cmFwO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDI1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xufVxuXG4uYnRuOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM1ODg3ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuIC5zY3JvbGxiYXIge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBvdmVyZmxvdzogYXV0bzsgXG59XG4gIFxuIl19 */"

/***/ }),

/***/ "./src/app/home-hr/newjoinee/newjoinee.component.html":
/*!************************************************************!*\
  !*** ./src/app/home-hr/newjoinee/newjoinee.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #newjoineeForm=\"ngForm\" (ngSubmit)=\"saveEmployee(newjoinee)\" novalidate >\n    <div class=\"col-md-10 col-md-offset-1\">\n      <br><br>      \n      <div class=\"panel panel-default\" id=\"newjoineeform\">\n        <div class=\"panel-heading panel-heading-custom\">\n          <h3 class=\"panel-title\">REGISTER NEW JOINEE</h3>\n        </div>\n        <div class=\"panel-body\">\n  \n          <div class=\"form-group\" [class.has-success]=\"firstname.valid\" [class.has-error]=\"firstname.invalid && firstname.touched\">\n            <label for=\"firstname\" class=\"control-label\">First Name</label>\n            <input required pattern=\"^[^-\\s][a-zA-Z_\\s-]{3,20}$\" id=\"firstname\" name=\"firstname\" [(ngModel)]=\"newjoinee.firstname\" type=\"text\" class=\"form-control\" #firstname=\"ngModel\">\n            <span class=\"help-block\" *ngIf=\"!!firstname.errors?.required && !!firstname.touched\">\n              First Name is required\n            </span>\n            <span class=\"help-block\" *ngIf=\"!!firstname.errors?.pattern && !!firstname.touched\">\n              Invalid First Name(Max of 20 characters only)\n            </span>            \n          </div>\n  \n          <div class=\"form-group\" [class.has-success]=\"lastname.valid\" [class.has-error]=\"lastname.invalid && lastname.touched\">\n            <label for=\"lastname\" class=\"control-label\">Last Name</label>\n            <input required pattern=\"^[^-\\s][a-zA-Z_\\s-]{3,20}$\" id=\"lastname\" name=\"lastname\" [(ngModel)]=\"newjoinee.lastname\" type=\"text\" class=\"form-control\" #lastname=\"ngModel\">\n            <span class=\"help-block\" *ngIf=\"!!lastname.errors?.required && !!lastname.touched\">\n              Last Name is required\n            </span>\n            <span class=\"help-block\" *ngIf=\"!!lastname.errors?.pattern && !!lastname.touched\">\n              Invalid Last Name(Max of 20 characters only)\n            </span>\n          </div>\n  \n          <div class=\"form-group\" [class.has-success]=\"email.valid\" [class.has-error]=\"email.invalid && email.touched\">\n            <label for=\"email\" class=\"control-label\">Email</label>\n            <input required pattern=\"^[ a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\\.)?[a-zA-Z]+\\.)?(nineleaps)\\.com$\" id=\"email\" name=\"email\" [(ngModel)]=\"newjoinee.email\" type=\"text\" class=\"form-control\" #email=\"ngModel\" autocomplete=\"off\">\n            <span class=\"help-block\" *ngIf=\"!!email.errors?.required && !!email.touched\">\n              Email is required\n            </span>\n            <span class=\"help-block\" *ngIf=\"!!email.errors?.pattern && !!email.touched\">\n              Email is invalid\n            </span>\n          </div>\n  \n          <div class=\"form-group\" [class.has-success]=\"phonenumber.valid\" [class.has-error]=\"phonenumber.invalid && phonenumber.touched\">\n            <label for=\"phonenumber\" class=\"control-label\">Phone Number</label>\n            <input required pattern=\"^[6-9]\\d{9}$\" id=\"phonenumber\" name=\"phonenumber\" [(ngModel)]=\"newjoinee.phonenumber\" type=\"text\" class=\"form-control\" #phonenumber=\"ngModel\">\n            <span class=\"help-block\" *ngIf=\"!!phonenumber.errors?.required && !!phonenumber.touched\">\n              Phone number is required\n            </span>\n            <span class=\"help-block\" *ngIf=\"!!phonenumber.errors?.pattern && !!phonenumber.touched\">\n              Phone number is invalid\n            </span>\n          </div>\n  \n          <div class=\"form-group\" [class.has-success]=\"dateofjoining.valid\" [class.has-error]=\"dateofjoining.invalid && dateofjoining.touched\">\n            <label for=\"dateofjoining\" class=\"control-label\">Date of Joining</label>\n            <input required id=\"dateofjoining\" name=\"dateofjoining\" [(ngModel)]=\"newjoinee.dateofjoining\" type=\"text\" placement=\"top\" [maxDate]=\"maxDate\" class=\"form-control\" #dateofjoining=\"ngModel\" autocomplete=\"off\"\n            bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY' }\">\n            <span class=\"help-block\" *ngIf=\"dateofjoining.invalid && dateofjoining.touched\">\n              DOJ is required\n            </span>\n          </div>\n  \n          <div class=\"form-group\" [class.has-success]=\"role.valid\" [class.has-error]=\"role.invalid && role.touched\">\n            <label for=\"role\" class=\"control-label\">Role / Designation</label>\n            <select required style=\"height: auto;\" id=\"role\" width=\"30rem\" name=\"role\" [(ngModel)]=\"newjoinee.role\" type=\"text\" class=\"form-control\" #role=\"ngModel\">\n              <option value=\"1\">Human Resourse(HR)</option>\n              <option value=\"2\">Software Developer</option>\n              <option value=\"3\">Management</option>\n              <option value=\"4\">Finance</option>\n            </select>\n            <span class=\"help-block\" *ngIf=\"role.invalid && role.touched\">\n              Designation of the New Joinee is required\n            </span>\n          </div>\n          <br/>\n  \n          <div class=\"text-center\">\n            <button width=\"50%\" height=\"25%\" type=\"submit\" [disabled]=\"newjoineeForm.invalid\" class=\"btn\" >\n              SUBMIT\n            </button>&nbsp;&nbsp;\n            <!-- <button width=\"50%\" height=\"25%\" type=\"reset\" class=\"btn\" (click)=\"newjoineeForm.reset()\">\n              Clear\n            </button> -->\n  \n          </div>\n        </div>\n      </div>\n    </div>\n  </form> \n"

/***/ }),

/***/ "./src/app/home-hr/newjoinee/newjoinee.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/home-hr/newjoinee/newjoinee.component.ts ***!
  \**********************************************************/
/*! exports provided: NewJoineeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewJoineeComponent", function() { return NewJoineeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_classes_Register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/classes/Register */ "./src/app/classes/Register.ts");
/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/ApiService */ "./src/app/services/ApiService.ts");
/* harmony import */ var src_app_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");










var NewJoineeComponent = /** @class */ (function () {
    function NewJoineeComponent(_freeApiService, _http, datepipe, dialogService, router, authService) {
        this._freeApiService = _freeApiService;
        this._http = _http;
        this.datepipe = datepipe;
        this.dialogService = dialogService;
        this.router = router;
        this.authService = authService;
        this.flag = 0;
        this.getEmail = [];
        this.newjoinee = {
            id: null,
            firstname: null,
            lastname: null,
            gender: null,
            email: ' ',
            phonenumber: null,
            dateofjoining: new Date(),
            role: null,
        };
        this.maxDate = new Date();
        this.maxDate.setDate(this.maxDate.getDate() + 0);
    }
    NewJoineeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Storing current page in Local Variable 'current-page'
        localStorage.setItem('current-page', "newjoinee");
        //code to scroll the the window to top
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
        //Function call to get Email of Employees that are Regsitered in database
        this._freeApiService.getEmail().subscribe(function (data) {
            _this.listEmail = data;
        });
    };
    NewJoineeComponent.prototype.saveEmployee = function (newJoinee) {
        var _this = this;
        this.dialogService.openConfirmDialog('Submit this Employee?')
            .afterClosed().subscribe(function (res) {
            if (res) {
                for (var _i = 0, _a = _this.listEmail; _i < _a.length; _i++) {
                    var val = _a[_i];
                    if (newJoinee.email === val.email) {
                        _this.flag = 1;
                        break;
                    }
                }
                //If statement to check if employee already exist in database or not
                if (_this.flag === 0) {
                    var value = _this.datepipe.transform(newJoinee.dateofjoining, 'MM-dd-yyyy');
                    var oRegister = new src_app_classes_Register__WEBPACK_IMPORTED_MODULE_4__["Register"]();
                    oRegister.FName = newJoinee.firstname;
                    oRegister.LName = newJoinee.lastname;
                    oRegister.Email = newJoinee.email;
                    oRegister.Designation = newJoinee.role;
                    oRegister.Phone = newJoinee.phonenumber.toString();
                    //Function call to register the Employee Data on Database
                    _this._freeApiService.RegisterNewJoinee(oRegister, value).subscribe(function (data) { return _this.objPostRegister = data; });
                    //Command to reset form once data is submitted in database
                    _this.formValues.resetForm();
                }
                else {
                    window.alert("Data already exist in Database");
                }
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('newjoineeForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewJoineeComponent.prototype, "formValues", void 0);
    NewJoineeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newjoinee',
            template: __webpack_require__(/*! ./newjoinee.component.html */ "./src/app/home-hr/newjoinee/newjoinee.component.html"),
            styles: [__webpack_require__(/*! ./newjoinee.component.css */ "./src/app/home-hr/newjoinee/newjoinee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ApiService__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            src_app_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
    ], NewJoineeComponent);
    return NewJoineeComponent;
}());



/***/ }),

/***/ "./src/app/home-hr/project/project.component.css":
/*!*******************************************************!*\
  !*** ./src/app/home-hr/project/project.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-form-field-underline {\n  display: none;\n}\n\nlabel{\n  font-family: \"Carter One\"; font-style: normal;font-size: 17px; font-variant: normal; font-weight: 190; line-height: 26.4px;\n}\n\nmat-form-field {\n  width: 100%;\n}\n\n.panel-default{\n    margin-left: 10%;\n }\n\n.form-group{\n    padding-right: 20rem;\n    padding-left:20rem;\n}\n\nbutton:hover{\n  background-color:#A569BD !important;\n  color: whitesmoke;\n}\n\n.panel-default > .panel-heading-custom {\n  background:#21618C; \n  color: #fff; \n  text-align:center;\n  font-size: 30px;\n  font-family: \"cursive\";\n}\n\n@media (max-width:415px){\n .form-group {\n    padding-right: 0.9rem;\n    padding-left: 0.9rem;\n  }\n}\n\n.btn{\n  background-color: #21618C;\n  color: white;\n  flex-wrap:wrap;\n  border-radius: 0px;\n  text-align: center;\n  border: none;\n  padding: 10px 25px;\n  display: inline-block;\n  border-radius: 1px;\n}\n\n.btn:hover{\n  background-color: #335887 !important;\n  color: whitesmoke;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1oci9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QixFQUFFLGtCQUFrQixDQUFDLGVBQWUsRUFBRSxvQkFBb0IsRUFBRSxnQkFBZ0IsRUFBRSxtQkFBbUI7QUFDNUg7O0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7SUFDSSxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBQ0E7Q0FDQztJQUNHLHFCQUFxQjtJQUNyQixvQkFBb0I7RUFDdEI7QUFDRjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtaHIvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmxhYmVse1xuICBmb250LWZhbWlseTogXCJDYXJ0ZXIgT25lXCI7IGZvbnQtc3R5bGU6IG5vcm1hbDtmb250LXNpemU6IDE3cHg7IGZvbnQtdmFyaWFudDogbm9ybWFsOyBmb250LXdlaWdodDogMTkwOyBsaW5lLWhlaWdodDogMjYuNHB4O1xufVxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cbi5wYW5lbC1kZWZhdWx0e1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gfVxuIFxuLmZvcm0tZ3JvdXB7XG4gICAgcGFkZGluZy1yaWdodDogMjByZW07XG4gICAgcGFkZGluZy1sZWZ0OjIwcmVtO1xufVxuXG5idXR0b246aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6I0E1NjlCRCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cbi5wYW5lbC1kZWZhdWx0ID4gLnBhbmVsLWhlYWRpbmctY3VzdG9tIHtcbiAgYmFja2dyb3VuZDojMjE2MThDOyBcbiAgY29sb3I6ICNmZmY7IFxuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LWZhbWlseTogXCJjdXJzaXZlXCI7XG59XG5AbWVkaWEgKG1heC13aWR0aDo0MTVweCl7XG4gLmZvcm0tZ3JvdXAge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuOXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuOXJlbTtcbiAgfVxufVxuLmJ0bntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxNjE4QztcbiAgY29sb3I6IHdoaXRlO1xuICBmbGV4LXdyYXA6d3JhcDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweCAyNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbn1cblxuLmJ0bjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzNTg4NyAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home-hr/project/project.component.html":
/*!********************************************************!*\
  !*** ./src/app/home-hr/project/project.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #projectForm=\"ngForm\" (ngSubmit)=\"saveProject(project)\" novalidate>\n  <br />\n  <br />\n  <div class=\"col-md-9 col-md-offset-1\">\n    <div class=\"panel panel-default\" id=\"projectform\">\n      <div class=\"panel-heading panel-heading-custom\">\n        <h3 class=\"panel-title\">Project Details</h3>\n      </div>\n\n\n      <div class=\"panel-body\">\n        <div class=\"form-group\" [class.has-success]=\"projectname.valid\"\n          [class.has-error]=\"projectname.invalid && projectname.touched\">\n          <label for=\"projectname\" class=\"control-label\">Project Name</label>\n          <input required pattern=\"^[^-\\s][a-zA-Z_\\s-]{3,20}$\" id=\"projectname\" name=\"projectname\"\n            [(ngModel)]=\"project.projectname\" type=\"text\" class=\"form-control\" #projectname=\"ngModel\">\n          <span class=\"help-block\" *ngIf=\"!!projectname.errors?.required && !!projectname.touched\">\n            Project Name is required\n          </span>\n          <span class=\"help-block\" *ngIf=\"!!projectname.errors?.pattern && !!projectname.touched\">\n            Invalid Project Name(Max of 20 characters only)\n          </span>\n\n        </div>\n\n\n        <div class=\"form-group\">\n          <mat-form-field class=\"example-full-width\">\n            <label for=\"email\" class=\"control-label\">Project Manager</label>\n            <mat-select name=\"projectmanager\" [(ngModel)]=\"project.projectmanager\" \n            class=\"form-control\">\n              <mat-option *ngFor=\"let email of listEmail\" [value]=\"email.Email\" (click)=\"focusOut(email)\">\n                {{email.Email}}</mat-option>\n            </mat-select>\n          </mat-form-field>    \n        </div>\n\n        <div class=\"form-group\" *ngIf=\"flag==true\">\n          <label for=\"teammembers\" class=\"control-label\">Team Members</label><br />\n          <ng-multiselect-dropdown (click)=\"fetchEmail()\" [placeholder]=\"'Select Team Members'\" [data]=\"listEmail1\"\n            [(ngModel)]=\"project.teammembers\" name=\"teammembers\" [settings]=\"dropdownSettings\"\n            (onSelect)=\"onItemSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" ngModel required>\n          </ng-multiselect-dropdown>\n          <br>\n        </div>\n        <div class=\"text-center\">\n          <button width=\"50%\" height=\"25%\" type=\"submit\" [disabled]=\"projectForm.invalid\" class=\"btn btn-custom\">\n            SUBMIT\n          </button><br /><br />\n        </div>\n      </div>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/home-hr/project/project.component.ts":
/*!******************************************************!*\
  !*** ./src/app/home-hr/project/project.component.ts ***!
  \******************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ApiService */ "./src/app/services/ApiService.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var src_app_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");











var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(authService, _freeApiService, _http, dialogService, router) {
        var _this = this;
        this.authService = authService;
        this._freeApiService = _freeApiService;
        this._http = _http;
        this.dialogService = dialogService;
        this.router = router;
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.listEmail1 = [];
        this.selectedmembers = [];
        this.getEmails = [];
        this.project = {
            projectname: null,
            projectmanager: null,
            teammembers: null,
        };
        this.flag = false;
        //Function to Get Emails of available Developers
        this._freeApiService.getEmail().subscribe(function (data) {
            _this.listEmail = data;
        });
        //function to detect if page is Refereshed
        window.addEventListener("beforeunload", function (e) {
            var confirmationMessage = "Reloading the page will loose the data from previous page";
            e.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+
            return confirmationMessage; // Gecko, WebKit, Chrome <34
        });
    }
    ProjectComponent.prototype.ngOnInit = function () {
        // Storing current page in Local Variable 'current-page'
        localStorage.setItem('current-page', "project");
        //code to scroll winndow at the top of page
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
        //making Dropdown Settings
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'Email',
            textField: 'Email',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 10,
            allowSearchFilter: true
        };
    };
    // function to select Items
    ProjectComponent.prototype.onItemSelect = function (item) {
    };
    //Function too Select all  Items
    ProjectComponent.prototype.onSelectAll = function (items) {
    };
    //Function to get form Data
    ProjectComponent.prototype.saveProject = function (project) {
        var _this = this;
        this.dialogService.openConfirmDialog('Submit this Project?')
            .afterClosed().subscribe(function (res) {
            if (res) {
                //Function to Submit Project Details in the databse 
                _this._freeApiService.UploadProjectDetails(project).subscribe(function (data) {
                    _this.lstProjectDetails = data;
                });
                //command to reset the Form
                _this.formValues.resetForm();
            }
        });
    };
    ProjectComponent.prototype.fetchEmail = function () {
        //Function call to Fetch emails of available developers
        this.listEmail1 = this._freeApiService.sendProjectTeamMembers();
    };
    ProjectComponent.prototype.focusOut = function (data) {
        this.flag = false;
        this.selectedValue = data;
        this.flag = true;
        this.listEmail1 = [];
        //adding the avaialble developers in List which is not a Selected Project Manager
        for (var _i = 0, _a = this.listEmail; _i < _a.length; _i++) {
            var email = _a[_i];
            if (email != this.selectedValue) {
                this.listEmail1.push(email);
            }
        }
        //Function call to save Project Data 
        this._freeApiService.saveProjectdata(this.listEmail1);
        //Function to Fetch List of avaialble Employee that doesnot include selected Project Manager
        this.listEmail1 = this._freeApiService.sendProjectTeamMembers();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('projectForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectComponent.prototype, "formValues", void 0);
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/home-hr/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/home-hr/project/project.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["NgMultiSelectDropDownModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _services_ApiService__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            src_app_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/mat-confirm-dialog/mat-confirm-dialog.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/mat-confirm-dialog/mat-confirm-dialog.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdC1jb25maXJtLWRpYWxvZy9tYXQtY29uZmlybS1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/mat-confirm-dialog/mat-confirm-dialog.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/mat-confirm-dialog/mat-confirm-dialog.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"content-container\">\n    <mat-icon id=\"close-icon\" (click)=\"closeDialog()\">close</mat-icon>\n    <span class=\"content-span full-width\">{{data.message}}</span>\n  </div>\n  <button mat-flat-button id=\"no-button\" [mat-dialog-close]=\"false\" >No</button>\n  <button mat-flat-button id=\"yes-button\" [mat-dialog-close]=\"true\">Yes</button>\n</div>\n"

/***/ }),

/***/ "./src/app/mat-confirm-dialog/mat-confirm-dialog.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/mat-confirm-dialog/mat-confirm-dialog.component.ts ***!
  \********************************************************************/
/*! exports provided: MatConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatConfirmDialogComponent", function() { return MatConfirmDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MatConfirmDialogComponent = /** @class */ (function () {
    function MatConfirmDialogComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
    }
    MatConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    MatConfirmDialogComponent.prototype.openConfirmDialog = function () { };
    MatConfirmDialogComponent.prototype.closeDialog = function () {
        this.dialogRef.close(false);
    };
    MatConfirmDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mat-confirm-dialog',
            template: __webpack_require__(/*! ./mat-confirm-dialog.component.html */ "./src/app/mat-confirm-dialog/mat-confirm-dialog.component.html"),
            styles: [__webpack_require__(/*! ./mat-confirm-dialog.component.css */ "./src/app/mat-confirm-dialog/mat-confirm-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], MatConfirmDialogComponent);
    return MatConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Lato:900);\n.sidenav-container {\n\theight: 100%;\n  }\n.sidenav {\n\twidth: 200px;\n  }\n@media (min-width:769px){\n\t.mat-sidenav{\n\t  display: none;\n\t}\n  }\n.spacer{\n\tflex: 1 1 auto;\n  }\n.mat-toolbar{\n  position: fixed;\n  height: 62px;\n}\n.mat-sidenav-content{\n  margin-top: 8rem;\n}\n.mat-nav-list a{\n    text-decoration: none;\n}\n.mat-toolbar a{\n\tdisplay: inline-block;\n  margin:0px 10px;\n\tcolor: white;\n\ttext-decoration: none;\n  }\nmat-toolbar {\n    position: sticky;\n    position: -webkit-sticky;\n    top: 0;\n\t\tz-index: 1000;\n\n}\n.dropdown:hover .dropbtn {\n  background-color: red;\n}\n.dropdown-content {\n  display: none;\n  position: relative;\n  background-color: #f9f9f9;\n  max-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n}\n@media (max-width:768px){\n\t.mat-toolbar a{\n\t\tdisplay:none;\n  }\n  button:hover{\n    background-color: #335887 !important;\n    color: whitesmoke;\n }\n  .dropdown:hover>.dropdown-menu {\n    z-index: 99;\n    display: block;\n  }\n  .dropdown-menu {\n    width: 20rem !important;\n    position: absolute;\n    top: 101%;\n    left: 1%;\n    line-height: 5px;\n  }\n  .dropdown-item{\n    height: 4rem;\n  }\n  \n  .dropdown>.dropdown-toggle:active{\n    /*Without this, clicking will make it sticky*/\n      pointer-events: none;\n  }\n}\n/* @media (hover: hover){\n  button:hover{\n    background-color: #335887 !important;\n    color: whitesmoke;\n }\n  .dropdown:hover>.dropdown-menu {\n    z-index: 99;\n    display: block;\n  }\n} */\nbutton{\n  background-color: whitesmoke;\n  color: #21618C;\n  font-family: \"Carter One\"; font-size: 16px; font-style: normal; font-variant: normal; font-weight: 500;\n }\nbutton:hover{\n   background-color: #335887 !important;\n   color: whitesmoke;\n}\n.mat-sidenav .btn-center{\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n }\n/* .dropdown:hover .dropdown-content {\n  display:block;\n} */\n.dropdown:hover>.dropdown-menu {\n  display: inline-block;\n}\n.dropdown-menu {\n  min-width: 50px !important;\n}\n.dropdown>.dropdown-toggle:active {\n  /*Without this, clicking will make it sticky*/\n    pointer-events: none;\n}\n.mat-toolbar{\n  background-color:#21618C  ;\n  box-shadow: 1px 2px #2E4053;\n}\n.mat-icon-button{\n  background-color: #21618C;\n  color: white;\n}\n.mm{\n  margin:0;\n}\n.matmenu{\n  font-size: 1%;\n\n}\n*, *:before, *:after{\n  box-sizing:border-box;\n}\nbody{\n  font-family: 'Lato',  Courier;\n}\n.letter{\n  display: inline-block;\n  font-weight: 500;\n  font-size: 1.4em;\n  position: relative;\n  color: #00B4F1;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  -webkit-perspective: 400;\n          perspective: 400;\n  z-index: 1;\n  font-family: 'Lato',  Courier;\n}\n.letter:before, .letter:after{\n  position:absolute;\n  content: attr(data-letter);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n  top:0;\n  left:0;\n}\n.letter, .letter:before, .letter:after{\n  transition: all 0.3s ease-in-out;\n}\n.letter:before{\n  color: #fff;\n  text-shadow: \n    -1px 0px 1px rgba(255,255,255,.8),\n    1px 0px 1px rgba(0,0,0,.8);\n  z-index: 3;\n  -webkit-transform:\n    rotateX(0deg)\n    rotateY(-15deg)\n    rotateZ(0deg);\n          transform:\n    rotateX(0deg)\n    rotateY(-15deg)\n    rotateZ(0deg);\n}\n.letter:after{\n  color: rgba(0,0,0,.11);\n  z-index:2;\n  -webkit-transform:\n    scale(1.08,1)\n    rotateX(0deg)\n    rotateY(0deg)\n    rotateZ(0deg)\n    skew(0deg,1deg);\n          transform:\n    scale(1.08,1)\n    rotateX(0deg)\n    rotateY(0deg)\n    rotateZ(0deg)\n    skew(0deg,1deg);\n}\n.letter:hover:before{\n  color: #fafafa;\n  -webkit-transform:\n    rotateX(0deg)\n    rotateY(-40deg)\n    rotateZ(0deg);\n          transform:\n    rotateX(0deg)\n    rotateY(-40deg)\n    rotateZ(0deg);\n}\n.letter:hover:after{\n  -webkit-transform:\n    scale(1.08,1)\n    rotateX(0deg)\n    rotateY(40deg)\n    rotateZ(0deg)\n    skew(0deg,22deg);\n          transform:\n    scale(1.08,1)\n    rotateX(0deg)\n    rotateY(40deg)\n    rotateZ(0deg)\n    skew(0deg,22deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZEQUE2RDtBQUM3RDtDQUNDLFlBQVk7RUFDWDtBQUVBO0NBQ0QsWUFBWTtFQUNYO0FBRUE7Q0FDRDtHQUNFLGFBQWE7Q0FDZjtFQUNDO0FBRUE7Q0FDRCxjQUFjO0VBQ2I7QUFDRjtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7Q0FDQyxxQkFBcUI7RUFDcEIsZUFBZTtDQUNoQixZQUFZO0NBQ1oscUJBQXFCO0VBQ3BCO0FBR0Y7SUFDSSxnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLE1BQU07RUFDUixhQUFhOztBQUVmO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQiw0Q0FBNEM7RUFDNUMsVUFBVTtBQUNaO0FBQ0E7Q0FDQztFQUNDLFlBQVk7RUFDWjtFQUNBO0lBQ0Usb0NBQW9DO0lBQ3BDLGlCQUFpQjtDQUNwQjtFQUNDO0lBQ0UsV0FBVztJQUNYLGNBQWM7RUFDaEI7RUFDQTtJQUNFLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLDZDQUE2QztNQUMzQyxvQkFBb0I7RUFDeEI7QUFDRjtBQUNBOzs7Ozs7Ozs7R0FTRztBQUNIO0VBQ0UsNEJBQTRCO0VBQzVCLGNBQWM7RUFDZCx5QkFBeUIsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUUsZ0JBQWdCO0NBQ3ZHO0FBQ0E7R0FDRSxvQ0FBb0M7R0FDcEMsaUJBQWlCO0FBQ3BCO0FBRUM7RUFDQyxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0NBQ2pDO0FBQ0E7O0dBRUU7QUFDSDtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSw2Q0FBNkM7SUFDM0Msb0JBQW9CO0FBQ3hCO0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxRQUFRO0FBQ1Y7QUFDQTtFQUNFLGFBQWE7O0FBRWY7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG9DQUE0QjtVQUE1Qiw0QkFBNEI7RUFDNUIsd0JBQWdCO1VBQWhCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsS0FBSztFQUNMLE1BQU07QUFDUjtBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxXQUFXO0VBQ1g7OzhCQUU0QjtFQUM1QixVQUFVO0VBQ1Y7OztpQkFHZTtVQUhmOzs7aUJBR2U7QUFDakI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1Q7Ozs7O21CQUtpQjtVQUxqQjs7Ozs7bUJBS2lCO0FBQ25CO0FBQ0E7RUFDRSxjQUFjO0VBQ2Q7OztpQkFHZTtVQUhmOzs7aUJBR2U7QUFDakI7QUFDQTtFQUNFOzs7OztvQkFLa0I7VUFMbEI7Ozs7O29CQUtrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjkwMCk7XG4uc2lkZW5hdi1jb250YWluZXIge1xuXHRoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuc2lkZW5hdiB7XG5cdHdpZHRoOiAyMDBweDtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOjc2OXB4KXtcblx0Lm1hdC1zaWRlbmF2e1xuXHQgIGRpc3BsYXk6IG5vbmU7XG5cdH1cbiAgfVxuXG4gIC5zcGFjZXJ7XG5cdGZsZXg6IDEgMSBhdXRvO1xuICB9XG4ubWF0LXRvb2xiYXJ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiA2MnB4O1xufVxuXG4ubWF0LXNpZGVuYXYtY29udGVudHtcbiAgbWFyZ2luLXRvcDogOHJlbTtcbn1cblxuLm1hdC1uYXYtbGlzdCBhe1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5tYXQtdG9vbGJhciBhe1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjowcHggMTBweDtcblx0Y29sb3I6IHdoaXRlO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuXG5tYXQtdG9vbGJhciB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgdG9wOiAwO1xuXHRcdHotaW5kZXg6IDEwMDA7XG5cbn1cblxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIG1heC13aWR0aDogMTYwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xuICB6LWluZGV4OiAxO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6NzY4cHgpe1xuXHQubWF0LXRvb2xiYXIgYXtcblx0XHRkaXNwbGF5Om5vbmU7XG4gIH1cbiAgYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzU4ODcgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiB9XG4gIC5kcm9wZG93bjpob3Zlcj4uZHJvcGRvd24tbWVudSB7XG4gICAgei1pbmRleDogOTk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmRyb3Bkb3duLW1lbnUge1xuICAgIHdpZHRoOiAyMHJlbSAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwMSU7XG4gICAgbGVmdDogMSU7XG4gICAgbGluZS1oZWlnaHQ6IDVweDtcbiAgfVxuICAuZHJvcGRvd24taXRlbXtcbiAgICBoZWlnaHQ6IDRyZW07XG4gIH1cbiAgXG4gIC5kcm9wZG93bj4uZHJvcGRvd24tdG9nZ2xlOmFjdGl2ZXtcbiAgICAvKldpdGhvdXQgdGhpcywgY2xpY2tpbmcgd2lsbCBtYWtlIGl0IHN0aWNreSovXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxufVxuLyogQG1lZGlhIChob3ZlcjogaG92ZXIpe1xuICBidXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzNTg4NyAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuIH1cbiAgLmRyb3Bkb3duOmhvdmVyPi5kcm9wZG93bi1tZW51IHtcbiAgICB6LWluZGV4OiA5OTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufSAqL1xuYnV0dG9ue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBjb2xvcjogIzIxNjE4QztcbiAgZm9udC1mYW1pbHk6IFwiQ2FydGVyIE9uZVwiOyBmb250LXNpemU6IDE2cHg7IGZvbnQtc3R5bGU6IG5vcm1hbDsgZm9udC12YXJpYW50OiBub3JtYWw7IGZvbnQtd2VpZ2h0OiA1MDA7XG4gfVxuIGJ1dHRvbjpob3ZlcntcbiAgIGJhY2tncm91bmQtY29sb3I6ICMzMzU4ODcgIWltcG9ydGFudDtcbiAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4gLm1hdC1zaWRlbmF2IC5idG4tY2VudGVye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuIH1cbiAvKiAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OmJsb2NrO1xufSAqL1xuLmRyb3Bkb3duOmhvdmVyPi5kcm9wZG93bi1tZW51IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmRyb3Bkb3duLW1lbnUge1xuICBtaW4td2lkdGg6IDUwcHggIWltcG9ydGFudDtcbn1cblxuLmRyb3Bkb3duPi5kcm9wZG93bi10b2dnbGU6YWN0aXZlIHtcbiAgLypXaXRob3V0IHRoaXMsIGNsaWNraW5nIHdpbGwgbWFrZSBpdCBzdGlja3kqL1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ubWF0LXRvb2xiYXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IzIxNjE4QyAgO1xuICBib3gtc2hhZG93OiAxcHggMnB4ICMyRTQwNTM7XG59XG4ubWF0LWljb24tYnV0dG9ue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE2MThDO1xuICBjb2xvcjogd2hpdGU7XG59XG4ubW17XG4gIG1hcmdpbjowO1xufVxuLm1hdG1lbnV7XG4gIGZvbnQtc2l6ZTogMSU7XG5cbn1cblxuKiwgKjpiZWZvcmUsICo6YWZ0ZXJ7XG4gIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcbn1cbmJvZHl7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsICBDb3VyaWVyO1xufVxuXG4ubGV0dGVye1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICMwMEI0RjE7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHBlcnNwZWN0aXZlOiA0MDA7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsICBDb3VyaWVyO1xufVxuLmxldHRlcjpiZWZvcmUsIC5sZXR0ZXI6YWZ0ZXJ7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICBjb250ZW50OiBhdHRyKGRhdGEtbGV0dGVyKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XG4gIHRvcDowO1xuICBsZWZ0OjA7XG59XG4ubGV0dGVyLCAubGV0dGVyOmJlZm9yZSwgLmxldHRlcjphZnRlcntcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ubGV0dGVyOmJlZm9yZXtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtc2hhZG93OiBcbiAgICAtMXB4IDBweCAxcHggcmdiYSgyNTUsMjU1LDI1NSwuOCksXG4gICAgMXB4IDBweCAxcHggcmdiYSgwLDAsMCwuOCk7XG4gIHotaW5kZXg6IDM7XG4gIHRyYW5zZm9ybTpcbiAgICByb3RhdGVYKDBkZWcpXG4gICAgcm90YXRlWSgtMTVkZWcpXG4gICAgcm90YXRlWigwZGVnKTtcbn1cbi5sZXR0ZXI6YWZ0ZXJ7XG4gIGNvbG9yOiByZ2JhKDAsMCwwLC4xMSk7XG4gIHotaW5kZXg6MjtcbiAgdHJhbnNmb3JtOlxuICAgIHNjYWxlKDEuMDgsMSlcbiAgICByb3RhdGVYKDBkZWcpXG4gICAgcm90YXRlWSgwZGVnKVxuICAgIHJvdGF0ZVooMGRlZylcbiAgICBza2V3KDBkZWcsMWRlZyk7XG59XG4ubGV0dGVyOmhvdmVyOmJlZm9yZXtcbiAgY29sb3I6ICNmYWZhZmE7XG4gIHRyYW5zZm9ybTpcbiAgICByb3RhdGVYKDBkZWcpXG4gICAgcm90YXRlWSgtNDBkZWcpXG4gICAgcm90YXRlWigwZGVnKTtcbn1cbi5sZXR0ZXI6aG92ZXI6YWZ0ZXJ7XG4gIHRyYW5zZm9ybTpcbiAgICBzY2FsZSgxLjA4LDEpXG4gICAgcm90YXRlWCgwZGVnKVxuICAgIHJvdGF0ZVkoNDBkZWcpXG4gICAgcm90YXRlWigwZGVnKVxuICAgIHNrZXcoMGRlZywyMmRlZyk7XG59Il19 */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n\t<mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\n\t\t[attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\" [opened]=\"!(isHandset$ | async)\"\n\t\t[mode]=\"(isHandset$ | async)? 'over':'side'\">\n\t\t<mat-toolbar color=\"primary\">Menu</mat-toolbar><br /><br /><br /><br/>\n\t\t<mat-nav-list>\n\n\t\t\t<a mat-list-item routerLink=\"home-hr\"><i class=\"material-icons\">home</i>&nbsp;&nbsp;Home</a>\n\n\t\t\t<a mat-list-item routerLink=\"/contact-us\"><i class=\"material-icons\">call</i>&nbsp;&nbsp;Contact Us</a>\n\t\t\t<a mat-list-item routerLink=\"display\"><i class=\"material-icons\">calendar_today</i>&nbsp;&nbsp;View Holiday List</a>\n\t\t\t<div class=\"dropdown\">\n\t\t\t\t<a mat-list-item><i class=\"material-icons\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\">account_circle</i>&nbsp;&nbsp;Dashboard&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t\t\t<i class=\"material-icons\">expand_more</i></a>\n\t\t\t\t\n\t\t\t\t<div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n\t\t\t\t\t<button class=\"dropdown-item\" routerLink=\"/dashboard\">\n\t\t\t\t\t\t<i class=\"fa fa-user\"></i>&nbsp;&nbsp;User Profile\n\t\t\t\t\t</button>\n\t\t\t\t\t<button class=\"dropdown-item\" (click)=\"authService.SignOut()\">\n\t\t\t\t\t\t<i class=\"fa fa-sign-out\"></i>&nbsp;&nbsp;Log Out\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>&nbsp;\n\t\t</mat-nav-list>\n\t</mat-sidenav>\n\t<mat-sidenav-content>\n\t\t<mat-toolbar color=\"primary\">\n\t\t\t<button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\"\n\t\t\t\t*ngIf=\"isHandset$ | async\">\n\t\t\t\t<mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n\t\t\t</button>\n\t\t\t<!-- <span><img src=\"assets/images/logo1.png\" width=\"120px\" height=\"47px\"></span> -->\n\t\t\t&nbsp;&nbsp;&nbsp;<span class=\"letter\" data-letter=\"LAP\" routerLink=\"/home-hr\" >LAP</span>\n\t\t\t<span class=\"spacer\"></span>\n\t\t\t\n\n\t\t\t\t<a mat-list-item routerLink=\"home-hr\"><i class=\"material-icons\" data-toggle=\"popover\" title=\"Home\">home</i></a>&nbsp;\n\t\t\t\t<div class=\"dropdown\">\n\t\t\t\t\t<a mat-list-item><i class=\"material-icons\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n\t\t\t\t\t\t\taria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\taccount_circle\n\t\t\t\t\t\t</i></a>\n\t\t\t\t\t<div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n\t\t\t\t\t\t<button class=\"dropdown-item\" routerLink=\"/dashboard\">\n\t\t\t\t\t\t\t<i class=\"fa fa-user\"></i>&nbsp;&nbsp;User Profile\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<button class=\"dropdown-item\" (click)=\"authService.SignOut()\">\n\t\t\t\t\t\t\t<i class=\"fa fa-sign-out\"></i>&nbsp;&nbsp;Log Out\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>&nbsp;\n\t\t\t\t<a mat-list-item routerLink=\"display\"><i class=\"material-icons\" data-toggle=\"popover\" title=\"Holiday List\">calendar_today</i>&nbsp;</a>\n\t\t\t\t<a mat-list-item routerLink=\"/contact-us\"><i class=\"material-icons\" data-toggle=\"popover\" title=\"Contact Us\" data-placement=\"left\">call</i></a>&nbsp;\n\t\t</mat-toolbar>\n\t\t<ng-content></ng-content>\n\t</mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var NavComponent = /** @class */ (function () {
    function NavComponent(breakpointObserver, router, config, authService) {
        var _this = this;
        this.breakpointObserver = breakpointObserver;
        this.authService = authService;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
        config.placement = 'bottom';
        router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.isHandset$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_a) {
            var a = _a[0], b = _a[1];
            return b && a instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"];
        })).subscribe(function (_) { return _this.drawer.close(); });
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('drawer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"])
    ], NavComponent.prototype, "drawer", void 0);
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownConfig"]],
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownConfig"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/reply-to-request/reply-to-request.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/reply-to-request/reply-to-request.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn{\n  background-color: #21618C;\n  color: white;\n  flex-wrap:wrap;\n  border-radius: 0px;\n  text-align: center;\n  border: none;\n  padding: 10px 25px;\n  display: inline-block;\n  border-radius: 1px;\n}\n\n.btn:hover{\n  background-color: #335887 !important;\n  color: whitesmoke;\n}\n\n.action-buttons{\n    position: relative;\n    float: left;\n    top: 41%;\n    left:59%;\n \n  }\n\nth {\n  font-family: \"Carter One\"; font-size: 18px; font-style: normal; font-variant: normal; font-weight: 190; line-height: 26.4px;     \n}\n\n.ttl{\n  color:   #335887;\n  font-size: 20px;\n  font-weight: bold;\n  font-variant:small-caps;\n  position: relative;\n  float: left;\n  top: 41%;\n  left:59%;\n}\n\n@media (max-width:766px){\n  .ttl{\n    left:0;\n    \n  }\n  .action-buttons{\n    position: relative;\n    \n    top: 41%;\n    left:30%;\n \n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwbHktdG8tcmVxdWVzdC9yZXBseS10by1yZXF1ZXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxpQkFBaUI7QUFDbkI7O0FBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7SUFDUixRQUFROztFQUVWOztBQUNGO0VBQ0UseUJBQXlCLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLGdCQUFnQixFQUFFLG1CQUFtQjtBQUM3SDs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFFBQVE7RUFDUixRQUFRO0FBQ1Y7O0FBQ0E7RUFDRTtJQUNFLE1BQU07O0VBRVI7RUFDQTtJQUNFLGtCQUFrQjs7SUFFbEIsUUFBUTtJQUNSLFFBQVE7O0VBRVY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3JlcGx5LXRvLXJlcXVlc3QvcmVwbHktdG8tcmVxdWVzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxNjE4QztcbiAgY29sb3I6IHdoaXRlO1xuICBmbGV4LXdyYXA6d3JhcDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweCAyNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbn1cblxuLmJ0bjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzNTg4NyAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cbiAgLmFjdGlvbi1idXR0b25ze1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0b3A6IDQxJTtcbiAgICBsZWZ0OjU5JTtcbiBcbiAgfVxudGgge1xuICBmb250LWZhbWlseTogXCJDYXJ0ZXIgT25lXCI7IGZvbnQtc2l6ZTogMThweDsgZm9udC1zdHlsZTogbm9ybWFsOyBmb250LXZhcmlhbnQ6IG5vcm1hbDsgZm9udC13ZWlnaHQ6IDE5MDsgbGluZS1oZWlnaHQ6IDI2LjRweDsgICAgIFxufVxuLnR0bHtcbiAgY29sb3I6ICAgIzMzNTg4NztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC12YXJpYW50OnNtYWxsLWNhcHM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRvcDogNDElO1xuICBsZWZ0OjU5JTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOjc2NnB4KXtcbiAgLnR0bHtcbiAgICBsZWZ0OjA7XG4gICAgXG4gIH1cbiAgLmFjdGlvbi1idXR0b25ze1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBcbiAgICB0b3A6IDQxJTtcbiAgICBsZWZ0OjMwJTtcbiBcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/reply-to-request/reply-to-request.component.html":
/*!******************************************************************!*\
  !*** ./src/app/reply-to-request/reply-to-request.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<table text-align: center class=\"table table-striped\" width=\"50%\">\n  <thead>\n    <tr>\n\n      <th scope=\"col\" class=\"ttl\">Leave Requests Details</th>\n\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">First Name</th>\n      <td>{{Fname}}</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Last Name</th>\n      <td>{{Lname}}</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Casual Leave Applied</th>\n      <td>{{Clapplied}}</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Sick Leave Applied</th>\n      <td>{{Slapplied}}</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Earned Leave Applied</th>\n      <td>{{Elapplied}}</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">From Date </th>\n      <td>{{FromDate}}</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">To Date </th>\n      <td>{{Todate}}</td>\n    </tr>\n\n    <tr>\n      <th scope=\"row\">Reason for Leave</th>\n      <td>{{reason}}</td>\n    </tr><br>\n    <div class=\"action-buttons\">\n      <td><button class=\"btn info\" (click)=applyLeave(LID,true)>Accept</button></td>\n      <td><button class=\"btn info\" (click)=applyLeave(LID,false)>Reject</button></td>\n    </div>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/reply-to-request/reply-to-request.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/reply-to-request/reply-to-request.component.ts ***!
  \****************************************************************/
/*! exports provided: ReplyToRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplyToRequestComponent", function() { return ReplyToRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ApiService */ "./src/app/services/ApiService.ts");
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");







var leavesdata;
var ReplyToRequestComponent = /** @class */ (function () {
    function ReplyToRequestComponent(authService, location, router, _freeApiService, dialogService) {
        // if(leavesdata.FName==null){
        //   this.router.navigate(['manage-leaves']);
        // }
        this.authService = authService;
        this.router = router;
        this._freeApiService = _freeApiService;
        this.dialogService = dialogService;
        this.flag = true;
        this.flag = false;
        //Function call to Fetch Leaves Data of Employee
        leavesdata = this._freeApiService.getData();
        this.Fname = leavesdata.FName;
        this.Lname = leavesdata.LName;
        this.Clapplied = leavesdata.CLApplied;
        this.AppliedDate = leavesdata.AppliedDate;
        this.Elapplied = leavesdata.ELApplied;
        this.Slapplied = leavesdata.SLApplied;
        this.FromDate = leavesdata.FromDate;
        this.Todate = leavesdata.ToDate;
        this.reason = leavesdata.Reason;
        this.LID = leavesdata.LID;
    }
    ReplyToRequestComponent.prototype.ngOnInit = function () {
        // Storing current page in Local Variable 'current-page'
        localStorage.setItem('current-page', "manage-leaves");
    };
    //Function to get response from HR whether Leave is Approved or not
    ReplyToRequestComponent.prototype.applyLeave = function (id, status) {
        var _this = this;
        if (status) {
            this.dialogService.openConfirmDialog('Are you sure to Approve this leave?')
                .afterClosed().subscribe(function (res) {
                if (res) {
                    //Function call to Approve the Leave Request
                    _this._freeApiService.ApproveRequest(id, status).subscribe(function (response) { return _this.response = response; });
                    //Function call to inform that Leave Request is Cleared
                    _this._freeApiService.requestcleared();
                }
            });
        }
        else {
            this.dialogService.openConfirmDialog('Are you sure to Reject this leave?')
                .afterClosed().subscribe(function (res) {
                console.log(res);
                if (res) {
                    //Function call to Reject the Leave of Employee
                    _this._freeApiService.ApproveRequest(id, status).subscribe(function (response) { return _this.response = response; });
                    //Function call to inform that Leave Request is Cleared
                    _this._freeApiService.requestcleared();
                }
            });
        }
    };
    ReplyToRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reply-to-request',
            template: __webpack_require__(/*! ./reply-to-request.component.html */ "./src/app/reply-to-request/reply-to-request.component.html"),
            styles: [__webpack_require__(/*! ./reply-to-request.component.css */ "./src/app/reply-to-request/reply-to-request.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["PlatformLocation"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_ApiService__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]])
    ], ReplyToRequestComponent);
    return ReplyToRequestComponent;
}());



/***/ }),

/***/ "./src/app/sample-table/sample-table-datasource.ts":
/*!*********************************************************!*\
  !*** ./src/app/sample-table/sample-table-datasource.ts ***!
  \*********************************************************/
/*! exports provided: SampleTableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleTableDataSource", function() { return SampleTableDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
var SampleTableDataSource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SampleTableDataSource, _super);
    function SampleTableDataSource(paginator, sort, _freeApiService) {
        var _this = _super.call(this) || this;
        _this.paginator = paginator;
        _this.sort = sort;
        _this._freeApiService = _freeApiService;
        _this.data = _this._freeApiService.getPendingLeavesData();
        _this.connect();
        return _this;
    }
    // this.data= this.apiService.displayclearedLeaves();console.log("data",this.data);
    /**
    * Connect this data source to the table. The table will only update when
    * the returned stream emits new items.
    * @returns A stream of the items to be rendered.
    // */
    SampleTableDataSource.prototype.connect = function () {
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        var _this = this;
        var dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        // // Set the paginator's length
        this.paginator.length = this.data.length;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"].apply(void 0, dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _this.getPagedData(_this.getSortedData(_this.data.slice()));
        }));
    };
    // /**
    // * Called when the table is being destroyed. Use this function, to clean up
    // * any open connections or free any held resources that were set up during connect.
    // */
    SampleTableDataSource.prototype.disconnect = function () { };
    // /**
    // * Paginate the data (client-side). If you're using server-side pagination,
    // * this would be replaced by requesting the appropriate data from the server.
    // */
    SampleTableDataSource.prototype.getPagedData = function (data) {
        var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    };
    // /**
    // * Sort the data (client-side). If you're using server-side sorting,
    // * this would be replaced by requesting the appropriate data from the server.
    // */
    SampleTableDataSource.prototype.getSortedData = function (data) {
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
    };
    return SampleTableDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/sample-table/sample-table.component.css":
/*!*********************************************************!*\
  !*** ./src/app/sample-table/sample-table.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width-table {\n  width: 80%;\n  margin: 20px auto;\n}\ntable, th, td {\n  padding: 15px;  \n  border: 1px solid #ddd;\n  text-align: center;\n\n}\nng-container{\n  text-align: center;\n}\nth mat-header-cell{\n  text-align: center;\n}\ntr:hover {background-color: #f5f5f5;}\nth {\n  background-color:#21618C;\n  color: white;\n  font-family: \"Carter One\";\n  font-size: 16px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 190;\n  line-height: 26.4px;\n}\ntable{\ntable-layout:fixed;\ntext-align: center;\n}\n.btn{\nbackground-color: #21618C;\ncolor: white;\nflex-wrap:wrap;\nborder-radius: 0px;\ntext-align: center;\nborder: none;\npadding: 10px 25px;\ndisplay: inline-block;\nborder-radius: 1px;\n}\n.btn:hover{\nbackground-color: #335887 !important;\ncolor: whitesmoke;\n}\nmat-tab{\nbackground-color: #21618C;\n}\n.greenClass{\ncolor: green;\n}\n.redClass{\ncolor: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FtcGxlLXRhYmxlL3NhbXBsZS10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7O0FBRXBCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBLFVBQVUseUJBQXlCLENBQUM7QUFDcEM7RUFDRSx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCO0FBRUE7QUFDQSx5QkFBeUI7QUFDekIsWUFBWTtBQUNaLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLFlBQVk7QUFDWixrQkFBa0I7QUFDbEIscUJBQXFCO0FBQ3JCLGtCQUFrQjtBQUNsQjtBQUVBO0FBQ0Esb0NBQW9DO0FBQ3BDLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFFQTtBQUNBLFVBQVU7QUFDViIsImZpbGUiOiJzcmMvYXBwL3NhbXBsZS10YWJsZS9zYW1wbGUtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoLXRhYmxlIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG50YWJsZSwgdGgsIHRkIHtcbiAgcGFkZGluZzogMTVweDsgIFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cbm5nLWNvbnRhaW5lcntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxudGggbWF0LWhlYWRlci1jZWxse1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG50cjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTt9XG50aCB7XG4gIGJhY2tncm91bmQtY29sb3I6IzIxNjE4QztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJDYXJ0ZXIgT25lXCI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDE5MDtcbiAgbGluZS1oZWlnaHQ6IDI2LjRweDtcbn1cblxudGFibGV7XG50YWJsZS1sYXlvdXQ6Zml4ZWQ7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG57XG5iYWNrZ3JvdW5kLWNvbG9yOiAjMjE2MThDO1xuY29sb3I6IHdoaXRlO1xuZmxleC13cmFwOndyYXA7XG5ib3JkZXItcmFkaXVzOiAwcHg7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5ib3JkZXI6IG5vbmU7XG5wYWRkaW5nOiAxMHB4IDI1cHg7XG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5ib3JkZXItcmFkaXVzOiAxcHg7XG59XG5cbi5idG46aG92ZXJ7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjMzM1ODg3ICFpbXBvcnRhbnQ7XG5jb2xvcjogd2hpdGVzbW9rZTtcbn1cbm1hdC10YWJ7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjMjE2MThDO1xufVxuLmdyZWVuQ2xhc3N7XG5jb2xvcjogZ3JlZW47XG59XG5cbi5yZWRDbGFzc3tcbmNvbG9yOiByZWQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/sample-table/sample-table.component.html":
/*!**********************************************************!*\
  !*** ./src/app/sample-table/sample-table.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n  <table align=\"center\" mat-table class=\"full-width-table\" [dataSource]=\"child\" matSort aria-label=\"Elements\">\n    <!--Requst Column -->\n    <ng-container matColumnDef=\"Request\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Request</th>\n      <td mat-cell *matCellDef=\"let row\"><u>{{row.FName}} {{row.LName}}</u> is requesting Leave From <u>{{ row.FromDate | date:'mediumDate'}}</u>\n        to <u>{{row.ToDate | date:'mediumDate'}}</u></td>\n    </ng-container>\n\n    <!-- Response Column -->\n    <ng-container matColumnDef=\"Response\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Response</th>\n      <td mat-cell *matCellDef=\"let row\"><button class=\"btn info\" (click)=ManageLeaves(row)>Reply</button></td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator #paginator\n      [length]=\"child.data.length\"\n      [pageIndex]=\"0\"\n      [pageSize]=\"10\"\n      [pageSizeOptions]=\"[5,10,20,50]\">\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/sample-table/sample-table.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sample-table/sample-table.component.ts ***!
  \********************************************************/
/*! exports provided: SampleTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleTableComponent", function() { return SampleTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _sample_table_datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample-table-datasource */ "./src/app/sample-table/sample-table-datasource.ts");
/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/ApiService */ "./src/app/services/ApiService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var SampleTableComponent = /** @class */ (function () {
    function SampleTableComponent(_freeApiService, router, location) {
        this._freeApiService = _freeApiService;
        this.router = router;
        this.child = {};
        this.displayedColumns = ['Request', 'Response'];
        this.getPendingLeave();
    }
    SampleTableComponent.prototype.getPendingLeave = function () {
        var _this = this;
        this._freeApiService.GetPendingLeaves().subscribe(function (data) {
            _this._freeApiService.passPendingLeavesData(_this.dataSource = data);
            _this.child = new _sample_table_datasource__WEBPACK_IMPORTED_MODULE_3__["SampleTableDataSource"](_this.paginator, _this.sort, _this._freeApiService);
        });
    };
    SampleTableComponent.prototype.ngOnInit = function () {
        this.data = new _sample_table_datasource__WEBPACK_IMPORTED_MODULE_3__["SampleTableDataSource"](this.paginator, this.sort, this._freeApiService);
        this._freeApiService.progress.next(true);
        this.dataSource = this._freeApiService.ListPendingLeaves;
        // this.array= this._freeApiService.getLeavesData();
        this._freeApiService.SavePendingLeaves(this.dataSource);
        this.dataSource = this._freeApiService.displayPendingLeaves();
        this._freeApiService.progress.next(false);
    };
    SampleTableComponent.prototype.ManageLeaves = function (reply) {
        this._freeApiService.passData(reply);
        this.dataSource = [];
        this.router.navigateByUrl('reply');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], SampleTableComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], SampleTableComponent.prototype, "sort", void 0);
    SampleTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sample-table',
            template: __webpack_require__(/*! ./sample-table.component.html */ "./src/app/sample-table/sample-table.component.html"),
            styles: [__webpack_require__(/*! ./sample-table.component.css */ "./src/app/sample-table/sample-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ApiService__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["PlatformLocation"]])
    ], SampleTableComponent);
    return SampleTableComponent;
}());



/***/ }),

/***/ "./src/app/services/ApiService.ts":
/*!****************************************!*\
  !*** ./src/app/services/ApiService.ts ***!
  \****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");











var ApiService = /** @class */ (function () {
    function ApiService(httpclient, router) {
        this.httpclient = httpclient;
        this.router = router;
        this.progress = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    ApiService.prototype.passLeavesData = function (data) {
        this.LeavesData = data;
    };
    ApiService.prototype.getLeavesData = function () {
        return this.LeavesData;
    };
    ApiService.prototype.passPendingLeavesData = function (data) {
        this.PendingLeavesData = data;
    };
    ApiService.prototype.getPendingLeavesData = function () {
        return this.PendingLeavesData;
    };
    //Function to Save Pending Leaves
    ApiService.prototype.SavePendingLeaves = function (data) {
        this.ListPendingLeaves = data;
    };
    //Function to Save Cleared Leaves
    ApiService.prototype.SaveClearedLeaves = function (data) {
        this.ListClearedLeaves = data;
    };
    //Function that return Cleared Leaves
    ApiService.prototype.displayclearedLeaves = function () {
        return this.ListClearedLeaves;
    };
    //Function to return Pending Leaves
    ApiService.prototype.displayPendingLeaves = function () {
        return this.ListPendingLeaves;
    };
    //Function to save a Leave Data of employee 
    ApiService.prototype.passData = function (reply) {
        this.outputData = reply;
    };
    ///Function to return Leave Data of employee
    ApiService.prototype.getData = function () {
        return this.outputData;
    };
    //function to implement put method to approve pending Leave of employee in the database
    ApiService.prototype.ApproveRequest = function (id, status) {
        var url = "" + (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + '/ProjectDataBase/api/ProcessLeave/') + id;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };
        return this.httpclient.put(url, JSON.stringify(status), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    //function definition to display that Leave is approved
    ApiService.prototype.requestcleared = function () {
        this.router.navigate(['display-response']);
    };
    //Function to handle error returned by server on API server call
    ApiService.prototype.handleError = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = "Error: " + error.error.message;
        }
        else {
            // server-side error
            if (error.status === 400) {
                errorMessage = "Error Code: " + error.status + "\nMessage: Data already exist on database";
                window.alert(errorMessage);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
            }
            if (error.status === 0) {
                errorMessage = "Error Code: " + error.status + "\nMessage: Unable to connect to network";
                window.alert(errorMessage);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
            }
            if (error.status === 404) {
                errorMessage = "Error Code: " + error.status + "\nMessage: Data does not exist on database";
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
            }
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.error.Message;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    };
    //Function definition to implement post method to  submit a Contact Form Data in the database
    ApiService.prototype.SubmitContactForm = function (oContact) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + '/ProjectDataBase/api/EmailService';
        return this.httpclient.post(url, oContact).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    //Function definition to implement get method using Id Parameter to get Leaves of particular Employee from Database
    ApiService.prototype.getLeavesbyId = function (opost1) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + '/ProjectDataBase/api/AppliedLeaveById';
        return this.httpclient.post(url, opost1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    //Function definition to implement post method to Upload Holiday data in the Database
    ApiService.prototype.uploadHoliday = function (HolidayListObject) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + '/ProjectDataBase/api/AddHoliday';
        return this.httpclient.post(url, HolidayListObject).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    //Function definition to implement get method to get the list of Available Developers from Database
    ApiService.prototype.getEmail = function () {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + '/ProjectDataBase/api/AvailableDevelopersEmail';
        return this.httpclient.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    //Function definition to implement get method by using email parameter to fetch Full Details of Employee from Database
    ApiService.prototype.getFullDetails = function (email) {
        var param1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('email', email);
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + '/ProjectDataBase/api/Employee';
        return this.httpclient.get(url, { params: param1 }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    //Function definition to implement get  method to fetch Holiday List from Database
    ApiService.prototype.getHolidayList = function () {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + '/ProjectDataBase/api/HolidaysList';
        return this.httpclient.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    //Function definition to implement post method to save Employee Registration in the Database
    ApiService.prototype.RegisterNewJoinee = function (oRegister, value) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + '/ProjectDataBase/api/AddEmployee' + '?date=' + value;
        return this.httpclient.post(url, oRegister).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    //Function definition to implement post to upload Project Details in the Database
    ApiService.prototype.UploadProjectDetails = function (project) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + '/ProjectDataBase/api/AddProject';
        return this.httpclient.post(url, project).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    //Function definiton to implement get method to fetch all the Pending Leaves from Database 
    ApiService.prototype.GetPendingLeaves = function () {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + '/ProjectDataBase/api/AppliedLeaves';
        return this.httpclient.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.LeavesHandler));
    };
    //Function to Handle Errors sent by database server
    ApiService.prototype.LeavesHandler = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = "Error: " + error.error.message;
            // window.alert(errorMessage);
        }
        else {
            // server-side error
            if (error.status === 404) {
                errorMessage = "Error Code: " + error.status + "\nMessage: Data does not exist on database";
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    };
    //Function to save Project Team Members
    ApiService.prototype.saveProjectdata = function (data) {
        this.listEmail1 = data;
    };
    //Function to return Project Team Members
    ApiService.prototype.sendProjectTeamMembers = function () {
        return this.listEmail1;
    };
    //Function to implement Get method to Fetch Cleared Leaves from the Database 
    ApiService.prototype.GetClearedLeaves = function () {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + '/ProjectDataBase/api/ClearedLeaves';
        return this.httpclient.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.LeavesHandler));
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ApiService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ApiService */ "./src/app/services/ApiService.ts");








var AuthService = /** @class */ (function () {
    function AuthService(_freeApiService, afs, // Inject Firestore service
    afAuth, // Inject Firebase auth service
    router, authService, ngZone // NgZone service to remove outside scope warning
    ) {
        var _this = this;
        this._freeApiService = _freeApiService;
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.authService = authService;
        this.ngZone = ngZone;
        this.isLoggedInSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](false); //Behaviour Object to store whether user is logged in or not
        this.Employeedesignation = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](""); //Behaviour object to store the designation of Loggged in User
        this.LoggedInEmail = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](""); //Behaviour Object to store Logged in Email 
        /* Saving user data in localstorage when
        logged in and setting up null when logged out */
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.userData = user;
                localStorage.setItem('user', JSON.stringify(_this.userData));
                JSON.parse(localStorage.getItem('user'));
            }
            else {
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        });
    }
    AuthService.prototype.ngOnInit = function () {
    };
    // Sign in with email/password
    AuthService.prototype.SignIn = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (result) {
            _this.ngZone.run(function () {
                _this.router.navigate(['dashboard']);
            });
            _this.SetUserData(result.user);
        }).catch(function (error) {
            window.alert(error.message);
        });
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        // Returns true when user is looged in and email is verified
        get: function () {
            var user = JSON.parse(localStorage.getItem('user'));
            var flag = (user !== null && user.emailVerified !== false) ? true : false;
            this.isLoggedInSource.next(flag);
            return (user !== null && user.emailVerified !== false) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    // Sign in with Google
    AuthService.prototype.GoogleAuth = function () {
        return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider());
    };
    // Auth logic to run auth providers
    AuthService.prototype.AuthLogin = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (result) {
            _this.SetUserData(result.user);
            _this.ngZone.run(function () {
                _this.SetUserData(result.user);
                _this.email = localStorage.getItem('email');
                _this._freeApiService.getFullDetails(result.user.email).subscribe(function (data) {
                    localStorage.setItem('designation', data.Designation);
                    _this.UserDesignation = localStorage.getItem('designation');
                    if ((data.Designation) === "HR") {
                        localStorage.setItem('current-page', "home-hr");
                        _this.LoggedInEmail.next(result.user.email);
                        localStorage.setItem("email", result.user.email);
                        _this._freeApiService.progress.next(false);
                        _this.router.navigate(['home-hr']);
                    }
                    else {
                        localStorage.removeItem('email');
                        _this.LoggedInEmail.next("");
                        window.alert("You are  not previleged user to excess HR account . login as employee");
                        _this.SignOut;
                    }
                });
            });
        }).catch(function (error) { });
    }; //end Auth login
    /* Setting up user data when sign in with username/password,
      sign up with username/password and sign in with social auth
      provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
    AuthService.prototype.SetUserData = function (user) {
        var userRef = this.afs.doc("users/" + user.uid);
        var userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
        };
        return userRef.set(userData, {
            merge: true
        });
    };
    // Sign out function
    AuthService.prototype.SignOut = function () {
        var _this = this;
        return this.afAuth.auth.signOut().then(function () {
            localStorage.removeItem('user');
            localStorage.removeItem('designation');
            localStorage.removeItem('email');
            localStorage.removeItem('current-page');
            _this.isLoggedInSource.next(false);
            _this.LoggedInEmail.next("");
            _this.Employeedesignation.next("");
            _this._freeApiService.progress.next(false);
            _this.router.navigate(['sign-in']);
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ApiService__WEBPACK_IMPORTED_MODULE_7__["ApiService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            AuthService,
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] // NgZone service to remove outside scope warning
        ])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/guard/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/shared/guard/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isLoggedIn !== true) {
            this.router.navigate(['sign-in']);
        }
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/guard/secure-inner-pages.guard.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/guard/secure-inner-pages.guard.ts ***!
  \**********************************************************/
/*! exports provided: SecureInnerPagesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecureInnerPagesGuard", function() { return SecureInnerPagesGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");




var SecureInnerPagesGuard = /** @class */ (function () {
    function SecureInnerPagesGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SecureInnerPagesGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isLoggedIn) {
            window.alert('You are not allowed to access this URL!');
            this.router.navigate(['sign-in']);
        }
        return true;
    };
    SecureInnerPagesGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SecureInnerPagesGuard);
    return SecureInnerPagesGuard;
}());



/***/ }),

/***/ "./src/app/shared/messaging.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/messaging.service.ts ***!
  \*********************************************/
/*! exports provided: MessagingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingService", function() { return MessagingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/messaging */ "./node_modules/@angular/fire/messaging/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var MessagingService = /** @class */ (function () {
    function MessagingService(angularFireDB, angularFireAuth, angularFireMessaging) {
        this.angularFireDB = angularFireDB;
        this.angularFireAuth = angularFireAuth;
        this.angularFireMessaging = angularFireMessaging;
        this.currentMessage = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.angularFireMessaging.messaging.subscribe(function (_messaging) {
            _messaging.onMessage = _messaging.onMessage.bind(_messaging);
            _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
        });
    }
    /**
     * update token in firebase database
     *
     * @param userId userId as a key
     * @param token token as a value
     */
    MessagingService.prototype.updateToken = function (userId, token) {
        var _this = this;
        // we can change this function to request our backend service
        this.angularFireAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function () {
            var data = {};
            data[userId] = token;
            _this.angularFireDB.object('fcmTokens/').update(data);
        });
    };
    /**
     * request permission for notification from firebase cloud messaging
     *
     * @param userId userId
     */
    MessagingService.prototype.requestPermission = function (userId) {
        var _this = this;
        this.angularFireMessaging.requestToken.subscribe(function (token) {
            console.log(token);
            _this.updateToken(userId, token);
        }, function (err) {
            console.error('Unable to get permission to notify.', err);
        });
    };
    /**
     * hook method when new notification received in foreground
     */
    MessagingService.prototype.receiveMessage = function () {
        var _this = this;
        this.angularFireMessaging.messages.subscribe(function (payload) {
            console.log("new message received. ", payload);
            _this.currentMessage.next(payload);
        });
    };
    MessagingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_4__["AngularFireMessaging"]])
    ], MessagingService);
    return MessagingService;
}());



/***/ }),

/***/ "./src/app/shared/services/dialog.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/dialog.service.ts ***!
  \***************************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_mat_confirm_dialog_mat_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/mat-confirm-dialog/mat-confirm-dialog.component */ "./src/app/mat-confirm-dialog/mat-confirm-dialog.component.ts");




var DialogService = /** @class */ (function () {
    function DialogService(dialog) {
        this.dialog = dialog;
    }
    DialogService.prototype.openConfirmDialog = function (msg) {
        return this.dialog.open(src_app_mat_confirm_dialog_mat_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["MatConfirmDialogComponent"], {
            width: '390px',
            panelClass: 'confirm-dialog-container',
            disableClose: true,
            data: {
                message: msg
            }
        });
    };
    DialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], DialogService);
    return DialogService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true,
    apiBaseUrl: 'http://192.168.1.81',
    firebase: {
        apiKey: 'AIzaSyCjmDmnZg_G3YL_HpXEVy5l5TmCUW82z90',
        authDomain: 'my-project-1529611265393.firebaseapp.com',
        databaseURL: 'https://my-project-1529611265393.firebaseio.com',
        projectId: 'my-project-1529611265393',
        storageBucket: 'my-project-1529611265393.appspot.com',
        messagingSenderId: '375278697163'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nineleaps/Desktop/git/LapPortalProject/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
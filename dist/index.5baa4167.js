// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"d5kvp":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "138b6a135baa4167";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"igcvL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
var _lucide = require("lucide");
var _user = require("./user");
const users = [];
const addUserButton = document.getElementById('addUser');
const userBox = document.getElementById('users');
const addingBox = document.getElementById('adding-box');
getRandomUser();
getRandomUser();
getRandomUser();
addUserButton.addEventListener('click', ()=>getRandomUser()
);
document.body.addEventListener('click', function(e) {
    if (e.target.closest('.adding-box')) getRandomUser();
});
function getRandomUser() {
    _axiosDefault.default.get("https://randomuser.me/api").then((response)=>{
        let picture = response.data.results[0].picture.large;
        let firstName = response.data.results[0].name.first;
        let lastName = response.data.results[0].name.last;
        let age = response.data.results[0].dob.age;
        let streetNumber = response.data.results[0].location.street.number;
        let streetName = response.data.results[0].location.street.name;
        let postcode = response.data.results[0].location.postcode;
        let city = response.data.results[0].location.city;
        let email = response.data.results[0].email;
        let newUser = new _user.User(picture, firstName, lastName, age, streetNumber, streetName, postcode, city, email);
        users.push(newUser);
        displayTabOfUsers();
        _lucide.createIcons({
            icons: {
                Gift: _lucide.Gift,
                Building: _lucide.Building,
                Mail: _lucide.Mail,
                UserPlus: _lucide.UserPlus
            }
        });
    }).catch((error)=>{
        console.log(error);
    });
}
function displayTabOfUsers() {
    listOfUsers = "";
    for (var user of users)listOfUsers += `<div class="box"> 
                        <div class="box-picture"> 
                        <img  src= ${user.picture}  alt="profil picture"> 
                        </div> 
                        <div class="box-content"> 
                        <li class="box-title"> ${user.fullName} </li> 
                        <li class="content-items"> <i class ="icon" icon-name="gift"> </i> Age : ${user.age} </li> 
                        <div class="content-items">
                        <i class = "icon" icon-name="building"></i> 
                        <div class="adress">
                        <li> ${user.adressStreet} </li>
                        <li> ${user.adressCity} </li> 
                        </div>
                        </div>
                        <li class="content-items"> <i class = "icon" icon-name="mail"></i> ${user.email} </li> 
                        </div> 
                        </div>`;
    userBox.innerHTML = `${listOfUsers} <div class="adding-box">
    <i id = "userPlus" icon-name="user-plus"></i>
    </div>`;
}

},{"axios":"jo6P5","lucide":"iIzyy","./user":"ipSla","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jo6P5":[function(require,module,exports) {
module.exports = require('./lib/axios');

},{"./lib/axios":"63MyY"}],"63MyY":[function(require,module,exports) {
'use strict';
var utils = require('./utils');
var bind = require('./helpers/bind');
var Axios = require('./core/Axios');
var mergeConfig = require('./core/mergeConfig');
var defaults = require('./defaults');
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */ function createInstance(defaultConfig) {
    var context = new Axios(defaultConfig);
    var instance = bind(Axios.prototype.request, context);
    // Copy axios.prototype to instance
    utils.extend(instance, Axios.prototype, context);
    // Copy context to instance
    utils.extend(instance, context);
    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
        return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
}
// Create the default instance to be exported
var axios = createInstance(defaults);
// Expose Axios class to allow class inheritance
axios.Axios = Axios;
// Expose Cancel & CancelToken
axios.Cancel = require('./cancel/Cancel');
axios.CancelToken = require('./cancel/CancelToken');
axios.isCancel = require('./cancel/isCancel');
axios.VERSION = require('./env/data').version;
// Expose all/spread
axios.all = function all(promises) {
    return Promise.all(promises);
};
axios.spread = require('./helpers/spread');
// Expose isAxiosError
axios.isAxiosError = require('./helpers/isAxiosError');
module.exports = axios;
// Allow use of default import syntax in TypeScript
module.exports.default = axios;

},{"./utils":"5By4s","./helpers/bind":"haRQb","./core/Axios":"cpqD8","./core/mergeConfig":"b85oP","./defaults":"hXfHM","./cancel/Cancel":"kjMy2","./cancel/CancelToken":"45wzn","./cancel/isCancel":"a0VmF","./env/data":"h29L9","./helpers/spread":"dyQ8N","./helpers/isAxiosError":"eyiLq"}],"5By4s":[function(require,module,exports) {
'use strict';
var bind = require('./helpers/bind');
// utils is a library of generic helper functions non-specific to axios
var toString = Object.prototype.toString;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */ function isArray(val) {
    return Array.isArray(val);
}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */ function isUndefined(val) {
    return typeof val === 'undefined';
}
/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ function isArrayBuffer(val) {
    return toString.call(val) === '[object ArrayBuffer]';
}
/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */ function isFormData(val) {
    return toString.call(val) === '[object FormData]';
}
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function isArrayBufferView(val) {
    var result;
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) result = ArrayBuffer.isView(val);
    else result = val && val.buffer && isArrayBuffer(val.buffer);
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */ function isString(val) {
    return typeof val === 'string';
}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */ function isNumber(val) {
    return typeof val === 'number';
}
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */ function isObject(val) {
    return val !== null && typeof val === 'object';
}
/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */ function isPlainObject(val) {
    if (toString.call(val) !== '[object Object]') return false;
    var prototype = Object.getPrototypeOf(val);
    return prototype === null || prototype === Object.prototype;
}
/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */ function isDate(val) {
    return toString.call(val) === '[object Date]';
}
/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */ function isFile(val) {
    return toString.call(val) === '[object File]';
}
/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */ function isBlob(val) {
    return toString.call(val) === '[object Blob]';
}
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ function isFunction(val) {
    return toString.call(val) === '[object Function]';
}
/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */ function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
}
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ function isURLSearchParams(val) {
    return toString.call(val) === '[object URLSearchParams]';
}
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */ function trim(str) {
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */ function isStandardBrowserEnv() {
    if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) return false;
    return typeof window !== 'undefined' && typeof document !== 'undefined';
}
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */ function forEach(obj, fn) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') return;
    // Force an array if not already something iterable
    if (typeof obj !== 'object') /*eslint no-param-reassign:0*/ obj = [
        obj
    ];
    if (isArray(obj)) // Iterate over array values
    for(var i = 0, l = obj.length; i < l; i++)fn.call(null, obj[i], i, obj);
    else {
        // Iterate over object keys
        for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) fn.call(null, obj[key], key, obj);
    }
}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */ function merge() {
    var result = {};
    function assignValue(val, key) {
        if (isPlainObject(result[key]) && isPlainObject(val)) result[key] = merge(result[key], val);
        else if (isPlainObject(val)) result[key] = merge({}, val);
        else if (isArray(val)) result[key] = val.slice();
        else result[key] = val;
    }
    for(var i = 0, l = arguments.length; i < l; i++)forEach(arguments[i], assignValue);
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */ function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === 'function') a[key] = bind(val, thisArg);
        else a[key] = val;
    });
    return a;
}
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */ function stripBOM(content) {
    if (content.charCodeAt(0) === 65279) content = content.slice(1);
    return content;
}
module.exports = {
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isBuffer: isBuffer,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString,
    isNumber: isNumber,
    isObject: isObject,
    isPlainObject: isPlainObject,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isBlob: isBlob,
    isFunction: isFunction,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isStandardBrowserEnv: isStandardBrowserEnv,
    forEach: forEach,
    merge: merge,
    extend: extend,
    trim: trim,
    stripBOM: stripBOM
};

},{"./helpers/bind":"haRQb"}],"haRQb":[function(require,module,exports) {
'use strict';
module.exports = function bind(fn, thisArg) {
    return function wrap() {
        var args = new Array(arguments.length);
        for(var i = 0; i < args.length; i++)args[i] = arguments[i];
        return fn.apply(thisArg, args);
    };
};

},{}],"cpqD8":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
var buildURL = require('../helpers/buildURL');
var InterceptorManager = require('./InterceptorManager');
var dispatchRequest = require('./dispatchRequest');
var mergeConfig = require('./mergeConfig');
var validator = require('../helpers/validator');
var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */ function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
    };
}
/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */ Axios.prototype.request = function request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
        config = config || {};
        config.url = configOrUrl;
    } else config = configOrUrl || {};
    config = mergeConfig(this.defaults, config);
    // Set config.method
    if (config.method) config.method = config.method.toLowerCase();
    else if (this.defaults.method) config.method = this.defaults.method.toLowerCase();
    else config.method = 'get';
    var transitional = config.transitional;
    if (transitional !== undefined) validator.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
    // filter out skipped interceptors
    var requestInterceptorChain = [];
    var synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) return;
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    var responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    var promise;
    if (!synchronousRequestInterceptors) {
        var chain = [
            dispatchRequest,
            undefined
        ];
        Array.prototype.unshift.apply(chain, requestInterceptorChain);
        chain = chain.concat(responseInterceptorChain);
        promise = Promise.resolve(config);
        while(chain.length)promise = promise.then(chain.shift(), chain.shift());
        return promise;
    }
    var newConfig = config;
    while(requestInterceptorChain.length){
        var onFulfilled = requestInterceptorChain.shift();
        var onRejected = requestInterceptorChain.shift();
        try {
            newConfig = onFulfilled(newConfig);
        } catch (error) {
            onRejected(error);
            break;
        }
    }
    try {
        promise = dispatchRequest(newConfig);
    } catch (error) {
        return Promise.reject(error);
    }
    while(responseInterceptorChain.length)promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
    return promise;
};
Axios.prototype.getUri = function getUri(config) {
    config = mergeConfig(this.defaults, config);
    return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};
// Provide aliases for supported request methods
utils.forEach([
    'delete',
    'get',
    'head',
    'options'
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, config) {
        return this.request(mergeConfig(config || {}, {
            method: method,
            url: url,
            data: (config || {}).data
        }));
    };
});
utils.forEach([
    'post',
    'put',
    'patch'
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, data, config) {
        return this.request(mergeConfig(config || {}, {
            method: method,
            url: url,
            data: data
        }));
    };
});
module.exports = Axios;

},{"./../utils":"5By4s","../helpers/buildURL":"3bwC2","./InterceptorManager":"1VRIM","./dispatchRequest":"6sjJ6","./mergeConfig":"b85oP","../helpers/validator":"9vgkY"}],"3bwC2":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */ module.exports = function buildURL(url, params, paramsSerializer) {
    /*eslint no-param-reassign:0*/ if (!params) return url;
    var serializedParams;
    if (paramsSerializer) serializedParams = paramsSerializer(params);
    else if (utils.isURLSearchParams(params)) serializedParams = params.toString();
    else {
        var parts = [];
        utils.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === 'undefined') return;
            if (utils.isArray(val)) key = key + '[]';
            else val = [
                val
            ];
            utils.forEach(val, function parseValue(v) {
                if (utils.isDate(v)) v = v.toISOString();
                else if (utils.isObject(v)) v = JSON.stringify(v);
                parts.push(encode(key) + '=' + encode(v));
            });
        });
        serializedParams = parts.join('&');
    }
    if (serializedParams) {
        var hashmarkIndex = url.indexOf('#');
        if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
    return url;
};

},{"./../utils":"5By4s"}],"1VRIM":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
function InterceptorManager() {
    this.handlers = [];
}
/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */ InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
    this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
};
/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */ InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) this.handlers[id] = null;
};
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */ InterceptorManager.prototype.forEach = function forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) fn(h);
    });
};
module.exports = InterceptorManager;

},{"./../utils":"5By4s"}],"6sjJ6":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
var transformData = require('./transformData');
var isCancel = require('../cancel/isCancel');
var defaults = require('../defaults');
var Cancel = require('../cancel/Cancel');
/**
 * Throws a `Cancel` if cancellation has been requested.
 */ function throwIfCancellationRequested(config) {
    if (config.cancelToken) config.cancelToken.throwIfRequested();
    if (config.signal && config.signal.aborted) throw new Cancel('canceled');
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */ module.exports = function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    // Ensure headers exist
    config.headers = config.headers || {};
    // Transform request data
    config.data = transformData.call(config, config.data, config.headers, config.transformRequest);
    // Flatten headers
    config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
    utils.forEach([
        'delete',
        'get',
        'head',
        'post',
        'put',
        'patch',
        'common'
    ], function cleanHeaderConfig(method) {
        delete config.headers[method];
    });
    var adapter = config.adapter || defaults.adapter;
    return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        // Transform response data
        response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
        return response;
    }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
            throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
        }
        return Promise.reject(reason);
    });
};

},{"./../utils":"5By4s","./transformData":"eRqJY","../cancel/isCancel":"a0VmF","../defaults":"hXfHM","../cancel/Cancel":"kjMy2"}],"eRqJY":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
var defaults = require('../defaults');
/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */ module.exports = function transformData(data, headers, fns) {
    var context = this || defaults;
    /*eslint no-param-reassign:0*/ utils.forEach(fns, function transform(fn) {
        data = fn.call(context, data, headers);
    });
    return data;
};

},{"./../utils":"5By4s","../defaults":"hXfHM"}],"hXfHM":[function(require,module,exports) {
'use strict';
var process = require("process");
var utils = require('../utils');
var normalizeHeaderName = require('../helpers/normalizeHeaderName');
var enhanceError = require('../core/enhanceError');
var transitionalDefaults = require('./transitional');
var DEFAULT_CONTENT_TYPE = {
    'Content-Type': 'application/x-www-form-urlencoded'
};
function setContentTypeIfUnset(headers, value) {
    if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) headers['Content-Type'] = value;
}
function getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== 'undefined') // For browsers use XHR adapter
    adapter = require('../adapters/xhr');
    else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') // For node use HTTP adapter
    adapter = require('../adapters/http');
    return adapter;
}
function stringifySafely(rawValue, parser, encoder) {
    if (utils.isString(rawValue)) try {
        (parser || JSON.parse)(rawValue);
        return utils.trim(rawValue);
    } catch (e) {
        if (e.name !== 'SyntaxError') throw e;
    }
    return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
    transitional: transitionalDefaults,
    adapter: getDefaultAdapter(),
    transformRequest: [
        function transformRequest(data, headers) {
            normalizeHeaderName(headers, 'Accept');
            normalizeHeaderName(headers, 'Content-Type');
            if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) return data;
            if (utils.isArrayBufferView(data)) return data.buffer;
            if (utils.isURLSearchParams(data)) {
                setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
                return data.toString();
            }
            if (utils.isObject(data) || headers && headers['Content-Type'] === 'application/json') {
                setContentTypeIfUnset(headers, 'application/json');
                return stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            var transitional = this.transitional || defaults.transitional;
            var silentJSONParsing = transitional && transitional.silentJSONParsing;
            var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';
            if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) try {
                return JSON.parse(data);
            } catch (e) {
                if (strictJSONParsing) {
                    if (e.name === 'SyntaxError') throw enhanceError(e, this, 'E_JSON_PARSE');
                    throw e;
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    headers: {
        common: {
            'Accept': 'application/json, text/plain, */*'
        }
    }
};
utils.forEach([
    'delete',
    'get',
    'head'
], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
});
utils.forEach([
    'post',
    'put',
    'patch'
], function forEachMethodWithData(method) {
    defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
module.exports = defaults;

},{"process":"d5jf4","../utils":"5By4s","../helpers/normalizeHeaderName":"adBZo","../core/enhanceError":"itUQr","./transitional":"lM32f","../adapters/xhr":"ldm57","../adapters/http":"ldm57"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};

},{}],"adBZo":[function(require,module,exports) {
'use strict';
var utils = require('../utils');
module.exports = function normalizeHeaderName(headers, normalizedName) {
    utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = value;
            delete headers[name];
        }
    });
};

},{"../utils":"5By4s"}],"itUQr":[function(require,module,exports) {
'use strict';
/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */ module.exports = function enhanceError(error, config, code, request, response) {
    error.config = config;
    if (code) error.code = code;
    error.request = request;
    error.response = response;
    error.isAxiosError = true;
    error.toJSON = function toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: this.config,
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        };
    };
    return error;
};

},{}],"lM32f":[function(require,module,exports) {
'use strict';
module.exports = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
};

},{}],"ldm57":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
var settle = require('./../core/settle');
var cookies = require('./../helpers/cookies');
var buildURL = require('./../helpers/buildURL');
var buildFullPath = require('../core/buildFullPath');
var parseHeaders = require('./../helpers/parseHeaders');
var isURLSameOrigin = require('./../helpers/isURLSameOrigin');
var createError = require('../core/createError');
var transitionalDefaults = require('../defaults/transitional');
var Cancel = require('../cancel/Cancel');
module.exports = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        var responseType = config.responseType;
        var onCanceled;
        function done() {
            if (config.cancelToken) config.cancelToken.unsubscribe(onCanceled);
            if (config.signal) config.signal.removeEventListener('abort', onCanceled);
        }
        if (utils.isFormData(requestData)) delete requestHeaders['Content-Type']; // Let the browser set it
        var request = new XMLHttpRequest();
        // HTTP basic authentication
        if (config.auth) {
            var username = config.auth.username || '';
            var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
            requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
        }
        var fullPath = buildFullPath(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
        // Set the request timeout in MS
        request.timeout = config.timeout;
        function onloadend() {
            if (!request) return;
            // Prepare the response
            var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
            var responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
            var response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config: config,
                request: request
            };
            settle(function _resolve(value) {
                resolve(value);
                done();
            }, function _reject(err) {
                reject(err);
                done();
            }, response);
            // Clean up request
            request = null;
        }
        if ('onloadend' in request) // Use onloadend if available
        request.onloadend = onloadend;
        else // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) return;
            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) return;
            // readystate handler is calling before onerror or ontimeout handlers,
            // so we should call onloadend on the next 'tick'
            setTimeout(onloadend);
        };
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) return;
            reject(createError('Request aborted', config, 'ECONNABORTED', request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(createError('Network Error', config, null, request));
            // Clean up request
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
            var transitional = config.transitional || transitionalDefaults;
            if (config.timeoutErrorMessage) timeoutErrorMessage = config.timeoutErrorMessage;
            reject(createError(timeoutErrorMessage, config, transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED', request));
            // Clean up request
            request = null;
        };
        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if (utils.isStandardBrowserEnv()) {
            // Add xsrf header
            var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;
            if (xsrfValue) requestHeaders[config.xsrfHeaderName] = xsrfValue;
        }
        // Add headers to the request
        if ('setRequestHeader' in request) utils.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') // Remove Content-Type if data is undefined
            delete requestHeaders[key];
            else // Otherwise add header to the request
            request.setRequestHeader(key, val);
        });
        // Add withCredentials to request if needed
        if (!utils.isUndefined(config.withCredentials)) request.withCredentials = !!config.withCredentials;
        // Add responseType to request if needed
        if (responseType && responseType !== 'json') request.responseType = config.responseType;
        // Handle progress if needed
        if (typeof config.onDownloadProgress === 'function') request.addEventListener('progress', config.onDownloadProgress);
        // Not all browsers support upload events
        if (typeof config.onUploadProgress === 'function' && request.upload) request.upload.addEventListener('progress', config.onUploadProgress);
        if (config.cancelToken || config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = function(cancel) {
                if (!request) return;
                reject(!cancel || cancel && cancel.type ? new Cancel('canceled') : cancel);
                request.abort();
                request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
        }
        if (!requestData) requestData = null;
        // Send the request
        request.send(requestData);
    });
};

},{"./../utils":"5By4s","./../core/settle":"dD9aC","./../helpers/cookies":"4WJjt","./../helpers/buildURL":"3bwC2","../core/buildFullPath":"1I5TW","./../helpers/parseHeaders":"kqDd5","./../helpers/isURLSameOrigin":"lxXtv","../core/createError":"5nVS9","../defaults/transitional":"lM32f","../cancel/Cancel":"kjMy2"}],"dD9aC":[function(require,module,exports) {
'use strict';
var createError = require('./createError');
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */ module.exports = function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response);
    else reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
};

},{"./createError":"5nVS9"}],"5nVS9":[function(require,module,exports) {
'use strict';
var enhanceError = require('./enhanceError');
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */ module.exports = function createError(message, config, code, request, response) {
    var error = new Error(message);
    return enhanceError(error, config, code, request, response);
};

},{"./enhanceError":"itUQr"}],"4WJjt":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
    return {
        write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + '=' + encodeURIComponent(value));
            if (utils.isNumber(expires)) cookie.push('expires=' + new Date(expires).toGMTString());
            if (utils.isString(path)) cookie.push('path=' + path);
            if (utils.isString(domain)) cookie.push('domain=' + domain);
            if (secure === true) cookie.push('secure');
            document.cookie = cookie.join('; ');
        },
        read: function read(name) {
            var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
            return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
            this.write(name, '', Date.now() - 86400000);
        }
    };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return {
        write: function write() {},
        read: function read() {
            return null;
        },
        remove: function remove() {}
    };
}();

},{"./../utils":"5By4s"}],"1I5TW":[function(require,module,exports) {
'use strict';
var isAbsoluteURL = require('../helpers/isAbsoluteURL');
var combineURLs = require('../helpers/combineURLs');
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */ module.exports = function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) return combineURLs(baseURL, requestedURL);
    return requestedURL;
};

},{"../helpers/isAbsoluteURL":"jD6NM","../helpers/combineURLs":"brOWK"}],"jD6NM":[function(require,module,exports) {
'use strict';
/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */ module.exports = function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};

},{}],"brOWK":[function(require,module,exports) {
'use strict';
/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */ module.exports = function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

},{}],"kqDd5":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent'
];
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */ module.exports = function parseHeaders(headers) {
    var parsed = {};
    var key;
    var val;
    var i;
    if (!headers) return parsed;
    utils.forEach(headers.split('\n'), function parser(line) {
        i = line.indexOf(':');
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));
        if (key) {
            if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) return;
            if (key === 'set-cookie') parsed[key] = (parsed[key] ? parsed[key] : []).concat([
                val
            ]);
            else parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
        }
    });
    return parsed;
};

},{"./../utils":"5By4s"}],"lxXtv":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;
    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */ function resolveURL(url) {
        var href = url;
        if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute('href', href);
            href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute('href', href);
        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
        };
    }
    originURL = resolveURL(window.location.href);
    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */ return function isURLSameOrigin(requestURL) {
        var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
        return true;
    };
}();

},{"./../utils":"5By4s"}],"kjMy2":[function(require,module,exports) {
'use strict';
/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */ function Cancel(message) {
    this.message = message;
}
Cancel.prototype.toString = function toString() {
    return 'Cancel' + (this.message ? ': ' + this.message : '');
};
Cancel.prototype.__CANCEL__ = true;
module.exports = Cancel;

},{}],"a0VmF":[function(require,module,exports) {
'use strict';
module.exports = function isCancel(value) {
    return !!(value && value.__CANCEL__);
};

},{}],"b85oP":[function(require,module,exports) {
'use strict';
var utils = require('../utils');
/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */ module.exports = function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    var config = {};
    function getMergedValue(target, source) {
        if (utils.isPlainObject(target) && utils.isPlainObject(source)) return utils.merge(target, source);
        else if (utils.isPlainObject(source)) return utils.merge({}, source);
        else if (utils.isArray(source)) return source.slice();
        return source;
    }
    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(prop) {
        if (!utils.isUndefined(config2[prop])) return getMergedValue(config1[prop], config2[prop]);
        else if (!utils.isUndefined(config1[prop])) return getMergedValue(undefined, config1[prop]);
    }
    // eslint-disable-next-line consistent-return
    function valueFromConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) return getMergedValue(undefined, config2[prop]);
    }
    // eslint-disable-next-line consistent-return
    function defaultToConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) return getMergedValue(undefined, config2[prop]);
        else if (!utils.isUndefined(config1[prop])) return getMergedValue(undefined, config1[prop]);
    }
    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(prop) {
        if (prop in config2) return getMergedValue(config1[prop], config2[prop]);
        else if (prop in config1) return getMergedValue(undefined, config1[prop]);
    }
    var mergeMap = {
        'url': valueFromConfig2,
        'method': valueFromConfig2,
        'data': valueFromConfig2,
        'baseURL': defaultToConfig2,
        'transformRequest': defaultToConfig2,
        'transformResponse': defaultToConfig2,
        'paramsSerializer': defaultToConfig2,
        'timeout': defaultToConfig2,
        'timeoutMessage': defaultToConfig2,
        'withCredentials': defaultToConfig2,
        'adapter': defaultToConfig2,
        'responseType': defaultToConfig2,
        'xsrfCookieName': defaultToConfig2,
        'xsrfHeaderName': defaultToConfig2,
        'onUploadProgress': defaultToConfig2,
        'onDownloadProgress': defaultToConfig2,
        'decompress': defaultToConfig2,
        'maxContentLength': defaultToConfig2,
        'maxBodyLength': defaultToConfig2,
        'transport': defaultToConfig2,
        'httpAgent': defaultToConfig2,
        'httpsAgent': defaultToConfig2,
        'cancelToken': defaultToConfig2,
        'socketPath': defaultToConfig2,
        'responseEncoding': defaultToConfig2,
        'validateStatus': mergeDirectKeys
    };
    utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
        var merge = mergeMap[prop] || mergeDeepProperties;
        var configValue = merge(prop);
        utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
};

},{"../utils":"5By4s"}],"9vgkY":[function(require,module,exports) {
'use strict';
var VERSION = require('../env/data').version;
var validators = {};
// eslint-disable-next-line func-names
[
    'object',
    'boolean',
    'number',
    'function',
    'string',
    'symbol'
].forEach(function(type, i) {
    validators[type] = function validator(thing) {
        return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
    };
});
var deprecatedWarnings = {};
/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */ validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
        return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
    }
    // eslint-disable-next-line func-names
    return function(value, opt, opts) {
        if (validator === false) throw new Error(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')));
        if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */ function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== 'object') throw new TypeError('options must be an object');
    var keys = Object.keys(options);
    var i = keys.length;
    while(i-- > 0){
        var opt = keys[i];
        var validator = schema[opt];
        if (validator) {
            var value = options[opt];
            var result = value === undefined || validator(value, opt, options);
            if (result !== true) throw new TypeError('option ' + opt + ' must be ' + result);
            continue;
        }
        if (allowUnknown !== true) throw Error('Unknown option ' + opt);
    }
}
module.exports = {
    assertOptions: assertOptions,
    validators: validators
};

},{"../env/data":"h29L9"}],"h29L9":[function(require,module,exports) {
module.exports = {
    "version": "0.26.1"
};

},{}],"45wzn":[function(require,module,exports) {
'use strict';
var Cancel = require('./Cancel');
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */ function CancelToken(executor) {
    if (typeof executor !== 'function') throw new TypeError('executor must be a function.');
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
    });
    var token = this;
    // eslint-disable-next-line func-names
    this.promise.then(function(cancel) {
        if (!token._listeners) return;
        var i;
        var l = token._listeners.length;
        for(i = 0; i < l; i++)token._listeners[i](cancel);
        token._listeners = null;
    });
    // eslint-disable-next-line func-names
    this.promise.then = function(onfulfilled) {
        var _resolve;
        // eslint-disable-next-line func-names
        var promise = new Promise(function(resolve) {
            token.subscribe(resolve);
            _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
            token.unsubscribe(_resolve);
        };
        return promise;
    };
    executor(function cancel(message) {
        if (token.reason) // Cancellation has already been requested
        return;
        token.reason = new Cancel(message);
        resolvePromise(token.reason);
    });
}
/**
 * Throws a `Cancel` if cancellation has been requested.
 */ CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) throw this.reason;
};
/**
 * Subscribe to the cancel signal
 */ CancelToken.prototype.subscribe = function subscribe(listener) {
    if (this.reason) {
        listener(this.reason);
        return;
    }
    if (this._listeners) this._listeners.push(listener);
    else this._listeners = [
        listener
    ];
};
/**
 * Unsubscribe from the cancel signal
 */ CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
    if (!this._listeners) return;
    var index = this._listeners.indexOf(listener);
    if (index !== -1) this._listeners.splice(index, 1);
};
/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */ CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
        cancel = c;
    });
    return {
        token: token,
        cancel: cancel
    };
};
module.exports = CancelToken;

},{"./Cancel":"kjMy2"}],"dyQ8N":[function(require,module,exports) {
'use strict';
/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */ module.exports = function spread(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
};

},{}],"eyiLq":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */ module.exports = function isAxiosError(payload) {
    return utils.isObject(payload) && payload.isAxiosError === true;
};

},{"./../utils":"5By4s"}],"iIzyy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createIcons", ()=>createIcons
);
/*
  Create Element function export.
*/ parcelHelpers.export(exports, "createElement", ()=>_createElementDefault.default
);
/*
 Icons exports.
*/ parcelHelpers.export(exports, "icons", ()=>_icons
);
var _replaceElement = require("./replaceElement");
var _replaceElementDefault = parcelHelpers.interopDefault(_replaceElement);
var _icons = require("./icons");
var _createElement = require("./createElement");
var _createElementDefault = parcelHelpers.interopDefault(_createElement);
parcelHelpers.exportAll(_icons, exports);
/**
 * Replaces all elements with matching nameAttr with the defined icons
 * @param {{ icons?: object, nameAttr?: string, attrs?: object }} options
 */ var createIcons = function createIcons(_temp) {
    var _ref = _temp === void 0 ? {} : _temp, _ref$icons = _ref.icons, icons = _ref$icons === void 0 ? {} : _ref$icons, _ref$nameAttr = _ref.nameAttr, nameAttr = _ref$nameAttr === void 0 ? 'icon-name' : _ref$nameAttr, _ref$attrs = _ref.attrs, attrs = _ref$attrs === void 0 ? {} : _ref$attrs;
    if (!Object.values(icons).length) throw new Error("Please provide an icons object.\nIf you want to use all the icons you can import it like:\n `import { createIcons, icons } from 'lucide';\nlucide.createIcons({icons});`");
    if (typeof document === 'undefined') throw new Error('`createIcons()` only works in a browser environment.');
    var elementsToReplace = document.querySelectorAll("[" + nameAttr + "]");
    Array.from(elementsToReplace).forEach(function(element) {
        return _replaceElementDefault.default(element, {
            nameAttr: nameAttr,
            icons: icons,
            attrs: attrs
        });
    });
};

},{"./replaceElement":"j8qwb","./icons":"abFwl","./createElement":"aQL2J","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j8qwb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAttrs", ()=>getAttrs
);
parcelHelpers.export(exports, "getClassNames", ()=>getClassNames
);
parcelHelpers.export(exports, "combineClassNames", ()=>combineClassNames
);
var _createElement = require("./createElement");
var _createElementDefault = parcelHelpers.interopDefault(_createElement);
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
var getAttrs = function getAttrs(element) {
    return Array.from(element.attributes).reduce(function(attrs, attr) {
        attrs[attr.name] = attr.value;
        return attrs;
    }, {});
};
var getClassNames = function getClassNames(attrs) {
    if (typeof attrs === 'string') return attrs;
    if (!attrs || !attrs["class"]) return '';
    if (attrs["class"] && typeof attrs["class"] === 'string') return attrs["class"].split(' ');
    if (attrs["class"] && Array.isArray(attrs["class"])) return attrs["class"];
    return '';
};
var combineClassNames = function combineClassNames(arrayOfClassnames) {
    var classNameArray = arrayOfClassnames.flatMap(getClassNames);
    return classNameArray.map(function(classItem) {
        return classItem.trim();
    }).filter(Boolean).filter(function(value, index, self) {
        return self.indexOf(value) === index;
    }).join(' ');
};
var toPascalCase = function toPascalCase(string) {
    return string.replace(/(\w)(\w*)(_|-|\s*)/g, function(g0, g1, g2) {
        return g1.toUpperCase() + g2.toLowerCase();
    });
};
/**
 * ReplaceElement, replaces the given element with the created icon.
 * @param {HTMLElement} element
 * @param {{ nameAttr: string, icons: object, attrs: object }} options: { nameAttr, icons, attrs }
 * @returns {Function}
 */ exports.default = function(element, _ref) {
    var nameAttr = _ref.nameAttr, icons = _ref.icons, attrs = _ref.attrs;
    var iconName = element.getAttribute(nameAttr);
    var ComponentName = toPascalCase(iconName);
    var iconNode = icons[ComponentName];
    if (!iconNode) return console.warn(element.outerHTML + " icon name was not found in the provided icons object.");
    var elementAttrs = getAttrs(element);
    var tag = iconNode[0], iconAttributes = iconNode[1], children = iconNode[2];
    var iconAttrs = _extends({}, iconAttributes, {
        'icon-name': iconName
    }, attrs, elementAttrs);
    var classNames = combineClassNames([
        'lucide',
        "lucide-" + iconName,
        elementAttrs,
        attrs
    ]);
    if (classNames) iconAttrs["class"] = classNames;
    var svgElement = _createElementDefault.default([
        tag,
        iconAttrs,
        children
    ]);
    return element.parentNode.replaceChild(svgElement, element);
};

},{"./createElement":"aQL2J","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aQL2J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Creates a new HTMLElement from icon node
 * @param {string} tag
 * @param {object} attrs
 * @param {array} children
 * @returns {HTMLElement}
 */ var createElement = function createElement1(tag, attrs, children) {
    if (children === void 0) children = [];
    var element = document.createElementNS('http://www.w3.org/2000/svg', tag);
    Object.keys(attrs).forEach(function(name) {
        element.setAttribute(name, attrs[name]);
    });
    if (children.length) children = children.forEach(function(child) {
        var childElement = createElement1.apply(void 0, child);
        element.appendChild(childElement);
    });
    return element;
};
/**
 * Creates a new HTMLElement from icon node
 * @param {[tag: string, attrs: object, children: array]} iconNode
 * @returns {HTMLElement}
 */ exports.default = function(_ref) {
    var tag = _ref[0], attrs = _ref[1], children = _ref[2];
    return createElement(tag, attrs, children);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"abFwl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Activity", ()=>_activityDefault.default
);
parcelHelpers.export(exports, "Airplay", ()=>_airplayDefault.default
);
parcelHelpers.export(exports, "AlarmCheck", ()=>_alarmCheckDefault.default
);
parcelHelpers.export(exports, "AlarmClockOff", ()=>_alarmClockOffDefault.default
);
parcelHelpers.export(exports, "AlarmClock", ()=>_alarmClockDefault.default
);
parcelHelpers.export(exports, "AlarmMinus", ()=>_alarmMinusDefault.default
);
parcelHelpers.export(exports, "AlarmPlus", ()=>_alarmPlusDefault.default
);
parcelHelpers.export(exports, "Album", ()=>_albumDefault.default
);
parcelHelpers.export(exports, "AlertCircle", ()=>_alertCircleDefault.default
);
parcelHelpers.export(exports, "AlertOctagon", ()=>_alertOctagonDefault.default
);
parcelHelpers.export(exports, "AlertTriangle", ()=>_alertTriangleDefault.default
);
parcelHelpers.export(exports, "AlignCenterHorizontal", ()=>_alignCenterHorizontalDefault.default
);
parcelHelpers.export(exports, "AlignCenterVertical", ()=>_alignCenterVerticalDefault.default
);
parcelHelpers.export(exports, "AlignCenter", ()=>_alignCenterDefault.default
);
parcelHelpers.export(exports, "AlignEndHorizontal", ()=>_alignEndHorizontalDefault.default
);
parcelHelpers.export(exports, "AlignEndVertical", ()=>_alignEndVerticalDefault.default
);
parcelHelpers.export(exports, "AlignHorizontalDistributeCenter", ()=>_alignHorizontalDistributeCenterDefault.default
);
parcelHelpers.export(exports, "AlignHorizontalDistributeEnd", ()=>_alignHorizontalDistributeEndDefault.default
);
parcelHelpers.export(exports, "AlignHorizontalDistributeStart", ()=>_alignHorizontalDistributeStartDefault.default
);
parcelHelpers.export(exports, "AlignHorizontalJustifyCenter", ()=>_alignHorizontalJustifyCenterDefault.default
);
parcelHelpers.export(exports, "AlignHorizontalJustifyEnd", ()=>_alignHorizontalJustifyEndDefault.default
);
parcelHelpers.export(exports, "AlignHorizontalJustifyStart", ()=>_alignHorizontalJustifyStartDefault.default
);
parcelHelpers.export(exports, "AlignHorizontalSpaceAround", ()=>_alignHorizontalSpaceAroundDefault.default
);
parcelHelpers.export(exports, "AlignHorizontalSpaceBetween", ()=>_alignHorizontalSpaceBetweenDefault.default
);
parcelHelpers.export(exports, "AlignJustify", ()=>_alignJustifyDefault.default
);
parcelHelpers.export(exports, "AlignLeft", ()=>_alignLeftDefault.default
);
parcelHelpers.export(exports, "AlignRight", ()=>_alignRightDefault.default
);
parcelHelpers.export(exports, "AlignStartHorizontal", ()=>_alignStartHorizontalDefault.default
);
parcelHelpers.export(exports, "AlignStartVertical", ()=>_alignStartVerticalDefault.default
);
parcelHelpers.export(exports, "AlignVerticalDistributeCenter", ()=>_alignVerticalDistributeCenterDefault.default
);
parcelHelpers.export(exports, "AlignVerticalDistributeEnd", ()=>_alignVerticalDistributeEndDefault.default
);
parcelHelpers.export(exports, "AlignVerticalDistributeStart", ()=>_alignVerticalDistributeStartDefault.default
);
parcelHelpers.export(exports, "AlignVerticalJustifyCenter", ()=>_alignVerticalJustifyCenterDefault.default
);
parcelHelpers.export(exports, "AlignVerticalJustifyEnd", ()=>_alignVerticalJustifyEndDefault.default
);
parcelHelpers.export(exports, "AlignVerticalJustifyStart", ()=>_alignVerticalJustifyStartDefault.default
);
parcelHelpers.export(exports, "AlignVerticalSpaceAround", ()=>_alignVerticalSpaceAroundDefault.default
);
parcelHelpers.export(exports, "AlignVerticalSpaceBetween", ()=>_alignVerticalSpaceBetweenDefault.default
);
parcelHelpers.export(exports, "Anchor", ()=>_anchorDefault.default
);
parcelHelpers.export(exports, "Aperture", ()=>_apertureDefault.default
);
parcelHelpers.export(exports, "Archive", ()=>_archiveDefault.default
);
parcelHelpers.export(exports, "ArrowBigDown", ()=>_arrowBigDownDefault.default
);
parcelHelpers.export(exports, "ArrowBigLeft", ()=>_arrowBigLeftDefault.default
);
parcelHelpers.export(exports, "ArrowBigRight", ()=>_arrowBigRightDefault.default
);
parcelHelpers.export(exports, "ArrowBigUp", ()=>_arrowBigUpDefault.default
);
parcelHelpers.export(exports, "ArrowDownCircle", ()=>_arrowDownCircleDefault.default
);
parcelHelpers.export(exports, "ArrowDownLeft", ()=>_arrowDownLeftDefault.default
);
parcelHelpers.export(exports, "ArrowDownRight", ()=>_arrowDownRightDefault.default
);
parcelHelpers.export(exports, "ArrowDown", ()=>_arrowDownDefault.default
);
parcelHelpers.export(exports, "ArrowLeftCircle", ()=>_arrowLeftCircleDefault.default
);
parcelHelpers.export(exports, "ArrowLeftRight", ()=>_arrowLeftRightDefault.default
);
parcelHelpers.export(exports, "ArrowLeft", ()=>_arrowLeftDefault.default
);
parcelHelpers.export(exports, "ArrowRightCircle", ()=>_arrowRightCircleDefault.default
);
parcelHelpers.export(exports, "ArrowRight", ()=>_arrowRightDefault.default
);
parcelHelpers.export(exports, "ArrowUpCircle", ()=>_arrowUpCircleDefault.default
);
parcelHelpers.export(exports, "ArrowUpLeft", ()=>_arrowUpLeftDefault.default
);
parcelHelpers.export(exports, "ArrowUpRight", ()=>_arrowUpRightDefault.default
);
parcelHelpers.export(exports, "ArrowUp", ()=>_arrowUpDefault.default
);
parcelHelpers.export(exports, "Asterisk", ()=>_asteriskDefault.default
);
parcelHelpers.export(exports, "AtSign", ()=>_atSignDefault.default
);
parcelHelpers.export(exports, "Award", ()=>_awardDefault.default
);
parcelHelpers.export(exports, "Axe", ()=>_axeDefault.default
);
parcelHelpers.export(exports, "Banknote", ()=>_banknoteDefault.default
);
parcelHelpers.export(exports, "BarChart2", ()=>_barChart2Default.default
);
parcelHelpers.export(exports, "BarChart", ()=>_barChartDefault.default
);
parcelHelpers.export(exports, "Baseline", ()=>_baselineDefault.default
);
parcelHelpers.export(exports, "BatteryCharging", ()=>_batteryChargingDefault.default
);
parcelHelpers.export(exports, "BatteryFull", ()=>_batteryFullDefault.default
);
parcelHelpers.export(exports, "BatteryLow", ()=>_batteryLowDefault.default
);
parcelHelpers.export(exports, "BatteryMedium", ()=>_batteryMediumDefault.default
);
parcelHelpers.export(exports, "Battery", ()=>_batteryDefault.default
);
parcelHelpers.export(exports, "Beaker", ()=>_beakerDefault.default
);
parcelHelpers.export(exports, "BellMinus", ()=>_bellMinusDefault.default
);
parcelHelpers.export(exports, "BellOff", ()=>_bellOffDefault.default
);
parcelHelpers.export(exports, "BellPlus", ()=>_bellPlusDefault.default
);
parcelHelpers.export(exports, "BellRing", ()=>_bellRingDefault.default
);
parcelHelpers.export(exports, "Bell", ()=>_bellDefault.default
);
parcelHelpers.export(exports, "Bike", ()=>_bikeDefault.default
);
parcelHelpers.export(exports, "Binary", ()=>_binaryDefault.default
);
parcelHelpers.export(exports, "Bitcoin", ()=>_bitcoinDefault.default
);
parcelHelpers.export(exports, "BluetoothConnected", ()=>_bluetoothConnectedDefault.default
);
parcelHelpers.export(exports, "BluetoothOff", ()=>_bluetoothOffDefault.default
);
parcelHelpers.export(exports, "BluetoothSearching", ()=>_bluetoothSearchingDefault.default
);
parcelHelpers.export(exports, "Bluetooth", ()=>_bluetoothDefault.default
);
parcelHelpers.export(exports, "Bold", ()=>_boldDefault.default
);
parcelHelpers.export(exports, "BookOpen", ()=>_bookOpenDefault.default
);
parcelHelpers.export(exports, "Book", ()=>_bookDefault.default
);
parcelHelpers.export(exports, "BookmarkMinus", ()=>_bookmarkMinusDefault.default
);
parcelHelpers.export(exports, "BookmarkPlus", ()=>_bookmarkPlusDefault.default
);
parcelHelpers.export(exports, "Bookmark", ()=>_bookmarkDefault.default
);
parcelHelpers.export(exports, "Bot", ()=>_botDefault.default
);
parcelHelpers.export(exports, "BoxSelect", ()=>_boxSelectDefault.default
);
parcelHelpers.export(exports, "Box", ()=>_boxDefault.default
);
parcelHelpers.export(exports, "Briefcase", ()=>_briefcaseDefault.default
);
parcelHelpers.export(exports, "Brush", ()=>_brushDefault.default
);
parcelHelpers.export(exports, "Bug", ()=>_bugDefault.default
);
parcelHelpers.export(exports, "Building", ()=>_buildingDefault.default
);
parcelHelpers.export(exports, "Bus", ()=>_busDefault.default
);
parcelHelpers.export(exports, "Calculator", ()=>_calculatorDefault.default
);
parcelHelpers.export(exports, "Calendar", ()=>_calendarDefault.default
);
parcelHelpers.export(exports, "CameraOff", ()=>_cameraOffDefault.default
);
parcelHelpers.export(exports, "Camera", ()=>_cameraDefault.default
);
parcelHelpers.export(exports, "Car", ()=>_carDefault.default
);
parcelHelpers.export(exports, "Carrot", ()=>_carrotDefault.default
);
parcelHelpers.export(exports, "Cast", ()=>_castDefault.default
);
parcelHelpers.export(exports, "CheckCircle2", ()=>_checkCircle2Default.default
);
parcelHelpers.export(exports, "CheckCircle", ()=>_checkCircleDefault.default
);
parcelHelpers.export(exports, "CheckSquare", ()=>_checkSquareDefault.default
);
parcelHelpers.export(exports, "Check", ()=>_checkDefault.default
);
parcelHelpers.export(exports, "ChevronDown", ()=>_chevronDownDefault.default
);
parcelHelpers.export(exports, "ChevronFirst", ()=>_chevronFirstDefault.default
);
parcelHelpers.export(exports, "ChevronLast", ()=>_chevronLastDefault.default
);
parcelHelpers.export(exports, "ChevronLeft", ()=>_chevronLeftDefault.default
);
parcelHelpers.export(exports, "ChevronRight", ()=>_chevronRightDefault.default
);
parcelHelpers.export(exports, "ChevronUp", ()=>_chevronUpDefault.default
);
parcelHelpers.export(exports, "ChevronsDownUp", ()=>_chevronsDownUpDefault.default
);
parcelHelpers.export(exports, "ChevronsDown", ()=>_chevronsDownDefault.default
);
parcelHelpers.export(exports, "ChevronsLeft", ()=>_chevronsLeftDefault.default
);
parcelHelpers.export(exports, "ChevronsRight", ()=>_chevronsRightDefault.default
);
parcelHelpers.export(exports, "ChevronsUpDown", ()=>_chevronsUpDownDefault.default
);
parcelHelpers.export(exports, "ChevronsUp", ()=>_chevronsUpDefault.default
);
parcelHelpers.export(exports, "Chrome", ()=>_chromeDefault.default
);
parcelHelpers.export(exports, "CircleSlashed", ()=>_circleSlashedDefault.default
);
parcelHelpers.export(exports, "Circle", ()=>_circleDefault.default
);
parcelHelpers.export(exports, "ClipboardCheck", ()=>_clipboardCheckDefault.default
);
parcelHelpers.export(exports, "ClipboardCopy", ()=>_clipboardCopyDefault.default
);
parcelHelpers.export(exports, "ClipboardList", ()=>_clipboardListDefault.default
);
parcelHelpers.export(exports, "ClipboardX", ()=>_clipboardXDefault.default
);
parcelHelpers.export(exports, "Clipboard", ()=>_clipboardDefault.default
);
parcelHelpers.export(exports, "Clock1", ()=>_clock1Default.default
);
parcelHelpers.export(exports, "Clock10", ()=>_clock10Default.default
);
parcelHelpers.export(exports, "Clock11", ()=>_clock11Default.default
);
parcelHelpers.export(exports, "Clock12", ()=>_clock12Default.default
);
parcelHelpers.export(exports, "Clock2", ()=>_clock2Default.default
);
parcelHelpers.export(exports, "Clock3", ()=>_clock3Default.default
);
parcelHelpers.export(exports, "Clock4", ()=>_clock4Default.default
);
parcelHelpers.export(exports, "Clock5", ()=>_clock5Default.default
);
parcelHelpers.export(exports, "Clock6", ()=>_clock6Default.default
);
parcelHelpers.export(exports, "Clock7", ()=>_clock7Default.default
);
parcelHelpers.export(exports, "Clock8", ()=>_clock8Default.default
);
parcelHelpers.export(exports, "Clock9", ()=>_clock9Default.default
);
parcelHelpers.export(exports, "Clock", ()=>_clockDefault.default
);
parcelHelpers.export(exports, "CloudDrizzle", ()=>_cloudDrizzleDefault.default
);
parcelHelpers.export(exports, "CloudFog", ()=>_cloudFogDefault.default
);
parcelHelpers.export(exports, "CloudHail", ()=>_cloudHailDefault.default
);
parcelHelpers.export(exports, "CloudLightning", ()=>_cloudLightningDefault.default
);
parcelHelpers.export(exports, "CloudMoon", ()=>_cloudMoonDefault.default
);
parcelHelpers.export(exports, "CloudOff", ()=>_cloudOffDefault.default
);
parcelHelpers.export(exports, "CloudRainWind", ()=>_cloudRainWindDefault.default
);
parcelHelpers.export(exports, "CloudRain", ()=>_cloudRainDefault.default
);
parcelHelpers.export(exports, "CloudSnow", ()=>_cloudSnowDefault.default
);
parcelHelpers.export(exports, "CloudSun", ()=>_cloudSunDefault.default
);
parcelHelpers.export(exports, "Cloud", ()=>_cloudDefault.default
);
parcelHelpers.export(exports, "Cloudy", ()=>_cloudyDefault.default
);
parcelHelpers.export(exports, "Clover", ()=>_cloverDefault.default
);
parcelHelpers.export(exports, "Code2", ()=>_code2Default.default
);
parcelHelpers.export(exports, "Code", ()=>_codeDefault.default
);
parcelHelpers.export(exports, "Codepen", ()=>_codepenDefault.default
);
parcelHelpers.export(exports, "Codesandbox", ()=>_codesandboxDefault.default
);
parcelHelpers.export(exports, "Coffee", ()=>_coffeeDefault.default
);
parcelHelpers.export(exports, "Coins", ()=>_coinsDefault.default
);
parcelHelpers.export(exports, "Columns", ()=>_columnsDefault.default
);
parcelHelpers.export(exports, "Command", ()=>_commandDefault.default
);
parcelHelpers.export(exports, "Compass", ()=>_compassDefault.default
);
parcelHelpers.export(exports, "Contact", ()=>_contactDefault.default
);
parcelHelpers.export(exports, "Contrast", ()=>_contrastDefault.default
);
parcelHelpers.export(exports, "Cookie", ()=>_cookieDefault.default
);
parcelHelpers.export(exports, "Copy", ()=>_copyDefault.default
);
parcelHelpers.export(exports, "Copyleft", ()=>_copyleftDefault.default
);
parcelHelpers.export(exports, "Copyright", ()=>_copyrightDefault.default
);
parcelHelpers.export(exports, "CornerDownLeft", ()=>_cornerDownLeftDefault.default
);
parcelHelpers.export(exports, "CornerDownRight", ()=>_cornerDownRightDefault.default
);
parcelHelpers.export(exports, "CornerLeftDown", ()=>_cornerLeftDownDefault.default
);
parcelHelpers.export(exports, "CornerLeftUp", ()=>_cornerLeftUpDefault.default
);
parcelHelpers.export(exports, "CornerRightDown", ()=>_cornerRightDownDefault.default
);
parcelHelpers.export(exports, "CornerRightUp", ()=>_cornerRightUpDefault.default
);
parcelHelpers.export(exports, "CornerUpLeft", ()=>_cornerUpLeftDefault.default
);
parcelHelpers.export(exports, "CornerUpRight", ()=>_cornerUpRightDefault.default
);
parcelHelpers.export(exports, "Cpu", ()=>_cpuDefault.default
);
parcelHelpers.export(exports, "CreditCard", ()=>_creditCardDefault.default
);
parcelHelpers.export(exports, "Crop", ()=>_cropDefault.default
);
parcelHelpers.export(exports, "Cross", ()=>_crossDefault.default
);
parcelHelpers.export(exports, "Crosshair", ()=>_crosshairDefault.default
);
parcelHelpers.export(exports, "Crown", ()=>_crownDefault.default
);
parcelHelpers.export(exports, "Currency", ()=>_currencyDefault.default
);
parcelHelpers.export(exports, "Database", ()=>_databaseDefault.default
);
parcelHelpers.export(exports, "Delete", ()=>_deleteDefault.default
);
parcelHelpers.export(exports, "Dice1", ()=>_dice1Default.default
);
parcelHelpers.export(exports, "Dice2", ()=>_dice2Default.default
);
parcelHelpers.export(exports, "Dice3", ()=>_dice3Default.default
);
parcelHelpers.export(exports, "Dice4", ()=>_dice4Default.default
);
parcelHelpers.export(exports, "Dice5", ()=>_dice5Default.default
);
parcelHelpers.export(exports, "Dice6", ()=>_dice6Default.default
);
parcelHelpers.export(exports, "Disc", ()=>_discDefault.default
);
parcelHelpers.export(exports, "DivideCircle", ()=>_divideCircleDefault.default
);
parcelHelpers.export(exports, "DivideSquare", ()=>_divideSquareDefault.default
);
parcelHelpers.export(exports, "Divide", ()=>_divideDefault.default
);
parcelHelpers.export(exports, "DollarSign", ()=>_dollarSignDefault.default
);
parcelHelpers.export(exports, "DownloadCloud", ()=>_downloadCloudDefault.default
);
parcelHelpers.export(exports, "Download", ()=>_downloadDefault.default
);
parcelHelpers.export(exports, "Dribbble", ()=>_dribbbleDefault.default
);
parcelHelpers.export(exports, "Droplet", ()=>_dropletDefault.default
);
parcelHelpers.export(exports, "Droplets", ()=>_dropletsDefault.default
);
parcelHelpers.export(exports, "Drumstick", ()=>_drumstickDefault.default
);
parcelHelpers.export(exports, "Edit2", ()=>_edit2Default.default
);
parcelHelpers.export(exports, "Edit3", ()=>_edit3Default.default
);
parcelHelpers.export(exports, "Edit", ()=>_editDefault.default
);
parcelHelpers.export(exports, "Egg", ()=>_eggDefault.default
);
parcelHelpers.export(exports, "EqualNot", ()=>_equalNotDefault.default
);
parcelHelpers.export(exports, "Equal", ()=>_equalDefault.default
);
parcelHelpers.export(exports, "Euro", ()=>_euroDefault.default
);
parcelHelpers.export(exports, "Expand", ()=>_expandDefault.default
);
parcelHelpers.export(exports, "ExternalLink", ()=>_externalLinkDefault.default
);
parcelHelpers.export(exports, "EyeOff", ()=>_eyeOffDefault.default
);
parcelHelpers.export(exports, "Eye", ()=>_eyeDefault.default
);
parcelHelpers.export(exports, "Facebook", ()=>_facebookDefault.default
);
parcelHelpers.export(exports, "FastForward", ()=>_fastForwardDefault.default
);
parcelHelpers.export(exports, "Feather", ()=>_featherDefault.default
);
parcelHelpers.export(exports, "Figma", ()=>_figmaDefault.default
);
parcelHelpers.export(exports, "FileCheck2", ()=>_fileCheck2Default.default
);
parcelHelpers.export(exports, "FileCheck", ()=>_fileCheckDefault.default
);
parcelHelpers.export(exports, "FileCode", ()=>_fileCodeDefault.default
);
parcelHelpers.export(exports, "FileDigit", ()=>_fileDigitDefault.default
);
parcelHelpers.export(exports, "FileInput", ()=>_fileInputDefault.default
);
parcelHelpers.export(exports, "FileMinus2", ()=>_fileMinus2Default.default
);
parcelHelpers.export(exports, "FileMinus", ()=>_fileMinusDefault.default
);
parcelHelpers.export(exports, "FileOutput", ()=>_fileOutputDefault.default
);
parcelHelpers.export(exports, "FilePlus2", ()=>_filePlus2Default.default
);
parcelHelpers.export(exports, "FilePlus", ()=>_filePlusDefault.default
);
parcelHelpers.export(exports, "FileSearch", ()=>_fileSearchDefault.default
);
parcelHelpers.export(exports, "FileText", ()=>_fileTextDefault.default
);
parcelHelpers.export(exports, "FileX2", ()=>_fileX2Default.default
);
parcelHelpers.export(exports, "FileX", ()=>_fileXDefault.default
);
parcelHelpers.export(exports, "File", ()=>_fileDefault.default
);
parcelHelpers.export(exports, "Files", ()=>_filesDefault.default
);
parcelHelpers.export(exports, "Film", ()=>_filmDefault.default
);
parcelHelpers.export(exports, "Filter", ()=>_filterDefault.default
);
parcelHelpers.export(exports, "FlagTriangleLeft", ()=>_flagTriangleLeftDefault.default
);
parcelHelpers.export(exports, "FlagTriangleRight", ()=>_flagTriangleRightDefault.default
);
parcelHelpers.export(exports, "Flag", ()=>_flagDefault.default
);
parcelHelpers.export(exports, "Flame", ()=>_flameDefault.default
);
parcelHelpers.export(exports, "FlashlightOff", ()=>_flashlightOffDefault.default
);
parcelHelpers.export(exports, "Flashlight", ()=>_flashlightDefault.default
);
parcelHelpers.export(exports, "FlaskConical", ()=>_flaskConicalDefault.default
);
parcelHelpers.export(exports, "FlaskRound", ()=>_flaskRoundDefault.default
);
parcelHelpers.export(exports, "FolderMinus", ()=>_folderMinusDefault.default
);
parcelHelpers.export(exports, "FolderOpen", ()=>_folderOpenDefault.default
);
parcelHelpers.export(exports, "FolderPlus", ()=>_folderPlusDefault.default
);
parcelHelpers.export(exports, "Folder", ()=>_folderDefault.default
);
parcelHelpers.export(exports, "FormInput", ()=>_formInputDefault.default
);
parcelHelpers.export(exports, "Forward", ()=>_forwardDefault.default
);
parcelHelpers.export(exports, "Framer", ()=>_framerDefault.default
);
parcelHelpers.export(exports, "Frown", ()=>_frownDefault.default
);
parcelHelpers.export(exports, "FunctionSquare", ()=>_functionSquareDefault.default
);
parcelHelpers.export(exports, "Gamepad2", ()=>_gamepad2Default.default
);
parcelHelpers.export(exports, "Gamepad", ()=>_gamepadDefault.default
);
parcelHelpers.export(exports, "Gauge", ()=>_gaugeDefault.default
);
parcelHelpers.export(exports, "Gavel", ()=>_gavelDefault.default
);
parcelHelpers.export(exports, "Gem", ()=>_gemDefault.default
);
parcelHelpers.export(exports, "Ghost", ()=>_ghostDefault.default
);
parcelHelpers.export(exports, "Gift", ()=>_giftDefault.default
);
parcelHelpers.export(exports, "GitBranchPlus", ()=>_gitBranchPlusDefault.default
);
parcelHelpers.export(exports, "GitBranch", ()=>_gitBranchDefault.default
);
parcelHelpers.export(exports, "GitCommit", ()=>_gitCommitDefault.default
);
parcelHelpers.export(exports, "GitFork", ()=>_gitForkDefault.default
);
parcelHelpers.export(exports, "GitMerge", ()=>_gitMergeDefault.default
);
parcelHelpers.export(exports, "GitPullRequest", ()=>_gitPullRequestDefault.default
);
parcelHelpers.export(exports, "Github", ()=>_githubDefault.default
);
parcelHelpers.export(exports, "Gitlab", ()=>_gitlabDefault.default
);
parcelHelpers.export(exports, "Glasses", ()=>_glassesDefault.default
);
parcelHelpers.export(exports, "Globe2", ()=>_globe2Default.default
);
parcelHelpers.export(exports, "Globe", ()=>_globeDefault.default
);
parcelHelpers.export(exports, "Grab", ()=>_grabDefault.default
);
parcelHelpers.export(exports, "GraduationCap", ()=>_graduationCapDefault.default
);
parcelHelpers.export(exports, "Grid", ()=>_gridDefault.default
);
parcelHelpers.export(exports, "GripHorizontal", ()=>_gripHorizontalDefault.default
);
parcelHelpers.export(exports, "GripVertical", ()=>_gripVerticalDefault.default
);
parcelHelpers.export(exports, "Hammer", ()=>_hammerDefault.default
);
parcelHelpers.export(exports, "HandMetal", ()=>_handMetalDefault.default
);
parcelHelpers.export(exports, "Hand", ()=>_handDefault.default
);
parcelHelpers.export(exports, "HardDrive", ()=>_hardDriveDefault.default
);
parcelHelpers.export(exports, "HardHat", ()=>_hardHatDefault.default
);
parcelHelpers.export(exports, "Hash", ()=>_hashDefault.default
);
parcelHelpers.export(exports, "Haze", ()=>_hazeDefault.default
);
parcelHelpers.export(exports, "Headphones", ()=>_headphonesDefault.default
);
parcelHelpers.export(exports, "Heart", ()=>_heartDefault.default
);
parcelHelpers.export(exports, "HelpCircle", ()=>_helpCircleDefault.default
);
parcelHelpers.export(exports, "Hexagon", ()=>_hexagonDefault.default
);
parcelHelpers.export(exports, "Highlighter", ()=>_highlighterDefault.default
);
parcelHelpers.export(exports, "History", ()=>_historyDefault.default
);
parcelHelpers.export(exports, "Home", ()=>_homeDefault.default
);
parcelHelpers.export(exports, "ImageMinus", ()=>_imageMinusDefault.default
);
parcelHelpers.export(exports, "ImageOff", ()=>_imageOffDefault.default
);
parcelHelpers.export(exports, "ImagePlus", ()=>_imagePlusDefault.default
);
parcelHelpers.export(exports, "Image", ()=>_imageDefault.default
);
parcelHelpers.export(exports, "Import", ()=>_importDefault.default
);
parcelHelpers.export(exports, "Inbox", ()=>_inboxDefault.default
);
parcelHelpers.export(exports, "Indent", ()=>_indentDefault.default
);
parcelHelpers.export(exports, "IndianRupee", ()=>_indianRupeeDefault.default
);
parcelHelpers.export(exports, "Infinity", ()=>_infinityDefault.default
);
parcelHelpers.export(exports, "Info", ()=>_infoDefault.default
);
parcelHelpers.export(exports, "Inspect", ()=>_inspectDefault.default
);
parcelHelpers.export(exports, "Instagram", ()=>_instagramDefault.default
);
parcelHelpers.export(exports, "Italic", ()=>_italicDefault.default
);
parcelHelpers.export(exports, "JapaneseYen", ()=>_japaneseYenDefault.default
);
parcelHelpers.export(exports, "Key", ()=>_keyDefault.default
);
parcelHelpers.export(exports, "Keyboard", ()=>_keyboardDefault.default
);
parcelHelpers.export(exports, "Landmark", ()=>_landmarkDefault.default
);
parcelHelpers.export(exports, "Languages", ()=>_languagesDefault.default
);
parcelHelpers.export(exports, "Laptop2", ()=>_laptop2Default.default
);
parcelHelpers.export(exports, "Laptop", ()=>_laptopDefault.default
);
parcelHelpers.export(exports, "LassoSelect", ()=>_lassoSelectDefault.default
);
parcelHelpers.export(exports, "Lasso", ()=>_lassoDefault.default
);
parcelHelpers.export(exports, "Layers", ()=>_layersDefault.default
);
parcelHelpers.export(exports, "LayoutDashboard", ()=>_layoutDashboardDefault.default
);
parcelHelpers.export(exports, "LayoutGrid", ()=>_layoutGridDefault.default
);
parcelHelpers.export(exports, "LayoutList", ()=>_layoutListDefault.default
);
parcelHelpers.export(exports, "LayoutTemplate", ()=>_layoutTemplateDefault.default
);
parcelHelpers.export(exports, "Layout", ()=>_layoutDefault.default
);
parcelHelpers.export(exports, "Library", ()=>_libraryDefault.default
);
parcelHelpers.export(exports, "LifeBuoy", ()=>_lifeBuoyDefault.default
);
parcelHelpers.export(exports, "LightbulbOff", ()=>_lightbulbOffDefault.default
);
parcelHelpers.export(exports, "Lightbulb", ()=>_lightbulbDefault.default
);
parcelHelpers.export(exports, "Link2Off", ()=>_link2OffDefault.default
);
parcelHelpers.export(exports, "Link2", ()=>_link2Default.default
);
parcelHelpers.export(exports, "Link", ()=>_linkDefault.default
);
parcelHelpers.export(exports, "Linkedin", ()=>_linkedinDefault.default
);
parcelHelpers.export(exports, "ListChecks", ()=>_listChecksDefault.default
);
parcelHelpers.export(exports, "ListMinus", ()=>_listMinusDefault.default
);
parcelHelpers.export(exports, "ListOrdered", ()=>_listOrderedDefault.default
);
parcelHelpers.export(exports, "ListPlus", ()=>_listPlusDefault.default
);
parcelHelpers.export(exports, "ListX", ()=>_listXDefault.default
);
parcelHelpers.export(exports, "List", ()=>_listDefault.default
);
parcelHelpers.export(exports, "Loader2", ()=>_loader2Default.default
);
parcelHelpers.export(exports, "Loader", ()=>_loaderDefault.default
);
parcelHelpers.export(exports, "LocateFixed", ()=>_locateFixedDefault.default
);
parcelHelpers.export(exports, "LocateOff", ()=>_locateOffDefault.default
);
parcelHelpers.export(exports, "Locate", ()=>_locateDefault.default
);
parcelHelpers.export(exports, "Lock", ()=>_lockDefault.default
);
parcelHelpers.export(exports, "LogIn", ()=>_logInDefault.default
);
parcelHelpers.export(exports, "LogOut", ()=>_logOutDefault.default
);
parcelHelpers.export(exports, "Mail", ()=>_mailDefault.default
);
parcelHelpers.export(exports, "MapPin", ()=>_mapPinDefault.default
);
parcelHelpers.export(exports, "Map", ()=>_mapDefault.default
);
parcelHelpers.export(exports, "Maximize2", ()=>_maximize2Default.default
);
parcelHelpers.export(exports, "Maximize", ()=>_maximizeDefault.default
);
parcelHelpers.export(exports, "Megaphone", ()=>_megaphoneDefault.default
);
parcelHelpers.export(exports, "Meh", ()=>_mehDefault.default
);
parcelHelpers.export(exports, "Menu", ()=>_menuDefault.default
);
parcelHelpers.export(exports, "MessageCircle", ()=>_messageCircleDefault.default
);
parcelHelpers.export(exports, "MessageSquare", ()=>_messageSquareDefault.default
);
parcelHelpers.export(exports, "MicOff", ()=>_micOffDefault.default
);
parcelHelpers.export(exports, "Mic", ()=>_micDefault.default
);
parcelHelpers.export(exports, "Minimize2", ()=>_minimize2Default.default
);
parcelHelpers.export(exports, "Minimize", ()=>_minimizeDefault.default
);
parcelHelpers.export(exports, "MinusCircle", ()=>_minusCircleDefault.default
);
parcelHelpers.export(exports, "MinusSquare", ()=>_minusSquareDefault.default
);
parcelHelpers.export(exports, "Minus", ()=>_minusDefault.default
);
parcelHelpers.export(exports, "MonitorOff", ()=>_monitorOffDefault.default
);
parcelHelpers.export(exports, "MonitorSpeaker", ()=>_monitorSpeakerDefault.default
);
parcelHelpers.export(exports, "Monitor", ()=>_monitorDefault.default
);
parcelHelpers.export(exports, "Moon", ()=>_moonDefault.default
);
parcelHelpers.export(exports, "MoreHorizontal", ()=>_moreHorizontalDefault.default
);
parcelHelpers.export(exports, "MoreVertical", ()=>_moreVerticalDefault.default
);
parcelHelpers.export(exports, "MountainSnow", ()=>_mountainSnowDefault.default
);
parcelHelpers.export(exports, "Mountain", ()=>_mountainDefault.default
);
parcelHelpers.export(exports, "MousePointer2", ()=>_mousePointer2Default.default
);
parcelHelpers.export(exports, "MousePointerClick", ()=>_mousePointerClickDefault.default
);
parcelHelpers.export(exports, "MousePointer", ()=>_mousePointerDefault.default
);
parcelHelpers.export(exports, "MoveDiagonal2", ()=>_moveDiagonal2Default.default
);
parcelHelpers.export(exports, "MoveDiagonal", ()=>_moveDiagonalDefault.default
);
parcelHelpers.export(exports, "MoveHorizontal", ()=>_moveHorizontalDefault.default
);
parcelHelpers.export(exports, "MoveVertical", ()=>_moveVerticalDefault.default
);
parcelHelpers.export(exports, "Move", ()=>_moveDefault.default
);
parcelHelpers.export(exports, "Music", ()=>_musicDefault.default
);
parcelHelpers.export(exports, "Navigation2", ()=>_navigation2Default.default
);
parcelHelpers.export(exports, "Navigation", ()=>_navigationDefault.default
);
parcelHelpers.export(exports, "Network", ()=>_networkDefault.default
);
parcelHelpers.export(exports, "Octagon", ()=>_octagonDefault.default
);
parcelHelpers.export(exports, "Option", ()=>_optionDefault.default
);
parcelHelpers.export(exports, "Outdent", ()=>_outdentDefault.default
);
parcelHelpers.export(exports, "PackageCheck", ()=>_packageCheckDefault.default
);
parcelHelpers.export(exports, "PackageMinus", ()=>_packageMinusDefault.default
);
parcelHelpers.export(exports, "PackagePlus", ()=>_packagePlusDefault.default
);
parcelHelpers.export(exports, "PackageSearch", ()=>_packageSearchDefault.default
);
parcelHelpers.export(exports, "PackageX", ()=>_packageXDefault.default
);
parcelHelpers.export(exports, "Package", ()=>_packageDefault.default
);
parcelHelpers.export(exports, "Palette", ()=>_paletteDefault.default
);
parcelHelpers.export(exports, "Palmtree", ()=>_palmtreeDefault.default
);
parcelHelpers.export(exports, "Paperclip", ()=>_paperclipDefault.default
);
parcelHelpers.export(exports, "PauseCircle", ()=>_pauseCircleDefault.default
);
parcelHelpers.export(exports, "PauseOctagon", ()=>_pauseOctagonDefault.default
);
parcelHelpers.export(exports, "Pause", ()=>_pauseDefault.default
);
parcelHelpers.export(exports, "PenTool", ()=>_penToolDefault.default
);
parcelHelpers.export(exports, "Pencil", ()=>_pencilDefault.default
);
parcelHelpers.export(exports, "Percent", ()=>_percentDefault.default
);
parcelHelpers.export(exports, "PersonStanding", ()=>_personStandingDefault.default
);
parcelHelpers.export(exports, "PhoneCall", ()=>_phoneCallDefault.default
);
parcelHelpers.export(exports, "PhoneForwarded", ()=>_phoneForwardedDefault.default
);
parcelHelpers.export(exports, "PhoneIncoming", ()=>_phoneIncomingDefault.default
);
parcelHelpers.export(exports, "PhoneMissed", ()=>_phoneMissedDefault.default
);
parcelHelpers.export(exports, "PhoneOff", ()=>_phoneOffDefault.default
);
parcelHelpers.export(exports, "PhoneOutgoing", ()=>_phoneOutgoingDefault.default
);
parcelHelpers.export(exports, "Phone", ()=>_phoneDefault.default
);
parcelHelpers.export(exports, "PieChart", ()=>_pieChartDefault.default
);
parcelHelpers.export(exports, "PiggyBank", ()=>_piggyBankDefault.default
);
parcelHelpers.export(exports, "Pin", ()=>_pinDefault.default
);
parcelHelpers.export(exports, "Pipette", ()=>_pipetteDefault.default
);
parcelHelpers.export(exports, "Plane", ()=>_planeDefault.default
);
parcelHelpers.export(exports, "PlayCircle", ()=>_playCircleDefault.default
);
parcelHelpers.export(exports, "Play", ()=>_playDefault.default
);
parcelHelpers.export(exports, "PlugZap", ()=>_plugZapDefault.default
);
parcelHelpers.export(exports, "PlusCircle", ()=>_plusCircleDefault.default
);
parcelHelpers.export(exports, "PlusSquare", ()=>_plusSquareDefault.default
);
parcelHelpers.export(exports, "Plus", ()=>_plusDefault.default
);
parcelHelpers.export(exports, "Pocket", ()=>_pocketDefault.default
);
parcelHelpers.export(exports, "Podcast", ()=>_podcastDefault.default
);
parcelHelpers.export(exports, "Pointer", ()=>_pointerDefault.default
);
parcelHelpers.export(exports, "PoundSterling", ()=>_poundSterlingDefault.default
);
parcelHelpers.export(exports, "PowerOff", ()=>_powerOffDefault.default
);
parcelHelpers.export(exports, "Power", ()=>_powerDefault.default
);
parcelHelpers.export(exports, "Printer", ()=>_printerDefault.default
);
parcelHelpers.export(exports, "QrCode", ()=>_qrCodeDefault.default
);
parcelHelpers.export(exports, "Quote", ()=>_quoteDefault.default
);
parcelHelpers.export(exports, "RadioReceiver", ()=>_radioReceiverDefault.default
);
parcelHelpers.export(exports, "Radio", ()=>_radioDefault.default
);
parcelHelpers.export(exports, "Redo", ()=>_redoDefault.default
);
parcelHelpers.export(exports, "RefreshCcw", ()=>_refreshCcwDefault.default
);
parcelHelpers.export(exports, "RefreshCw", ()=>_refreshCwDefault.default
);
parcelHelpers.export(exports, "Regex", ()=>_regexDefault.default
);
parcelHelpers.export(exports, "Repeat1", ()=>_repeat1Default.default
);
parcelHelpers.export(exports, "Repeat", ()=>_repeatDefault.default
);
parcelHelpers.export(exports, "ReplyAll", ()=>_replyAllDefault.default
);
parcelHelpers.export(exports, "Reply", ()=>_replyDefault.default
);
parcelHelpers.export(exports, "Rewind", ()=>_rewindDefault.default
);
parcelHelpers.export(exports, "Rocket", ()=>_rocketDefault.default
);
parcelHelpers.export(exports, "RockingChair", ()=>_rockingChairDefault.default
);
parcelHelpers.export(exports, "RotateCcw", ()=>_rotateCcwDefault.default
);
parcelHelpers.export(exports, "RotateCw", ()=>_rotateCwDefault.default
);
parcelHelpers.export(exports, "Rss", ()=>_rssDefault.default
);
parcelHelpers.export(exports, "Ruler", ()=>_rulerDefault.default
);
parcelHelpers.export(exports, "RussianRuble", ()=>_russianRubleDefault.default
);
parcelHelpers.export(exports, "Save", ()=>_saveDefault.default
);
parcelHelpers.export(exports, "Scale", ()=>_scaleDefault.default
);
parcelHelpers.export(exports, "ScanLine", ()=>_scanLineDefault.default
);
parcelHelpers.export(exports, "Scan", ()=>_scanDefault.default
);
parcelHelpers.export(exports, "Scissors", ()=>_scissorsDefault.default
);
parcelHelpers.export(exports, "ScreenShareOff", ()=>_screenShareOffDefault.default
);
parcelHelpers.export(exports, "ScreenShare", ()=>_screenShareDefault.default
);
parcelHelpers.export(exports, "Search", ()=>_searchDefault.default
);
parcelHelpers.export(exports, "Send", ()=>_sendDefault.default
);
parcelHelpers.export(exports, "SeparatorHorizontal", ()=>_separatorHorizontalDefault.default
);
parcelHelpers.export(exports, "SeparatorVertical", ()=>_separatorVerticalDefault.default
);
parcelHelpers.export(exports, "ServerCrash", ()=>_serverCrashDefault.default
);
parcelHelpers.export(exports, "ServerOff", ()=>_serverOffDefault.default
);
parcelHelpers.export(exports, "Server", ()=>_serverDefault.default
);
parcelHelpers.export(exports, "Settings2", ()=>_settings2Default.default
);
parcelHelpers.export(exports, "Settings", ()=>_settingsDefault.default
);
parcelHelpers.export(exports, "Share2", ()=>_share2Default.default
);
parcelHelpers.export(exports, "Share", ()=>_shareDefault.default
);
parcelHelpers.export(exports, "Sheet", ()=>_sheetDefault.default
);
parcelHelpers.export(exports, "ShieldAlert", ()=>_shieldAlertDefault.default
);
parcelHelpers.export(exports, "ShieldCheck", ()=>_shieldCheckDefault.default
);
parcelHelpers.export(exports, "ShieldClose", ()=>_shieldCloseDefault.default
);
parcelHelpers.export(exports, "ShieldOff", ()=>_shieldOffDefault.default
);
parcelHelpers.export(exports, "Shield", ()=>_shieldDefault.default
);
parcelHelpers.export(exports, "Shirt", ()=>_shirtDefault.default
);
parcelHelpers.export(exports, "ShoppingBag", ()=>_shoppingBagDefault.default
);
parcelHelpers.export(exports, "ShoppingCart", ()=>_shoppingCartDefault.default
);
parcelHelpers.export(exports, "Shovel", ()=>_shovelDefault.default
);
parcelHelpers.export(exports, "Shrink", ()=>_shrinkDefault.default
);
parcelHelpers.export(exports, "Shuffle", ()=>_shuffleDefault.default
);
parcelHelpers.export(exports, "SidebarClose", ()=>_sidebarCloseDefault.default
);
parcelHelpers.export(exports, "SidebarOpen", ()=>_sidebarOpenDefault.default
);
parcelHelpers.export(exports, "Sidebar", ()=>_sidebarDefault.default
);
parcelHelpers.export(exports, "Sigma", ()=>_sigmaDefault.default
);
parcelHelpers.export(exports, "SignalHigh", ()=>_signalHighDefault.default
);
parcelHelpers.export(exports, "SignalLow", ()=>_signalLowDefault.default
);
parcelHelpers.export(exports, "SignalMedium", ()=>_signalMediumDefault.default
);
parcelHelpers.export(exports, "SignalZero", ()=>_signalZeroDefault.default
);
parcelHelpers.export(exports, "Signal", ()=>_signalDefault.default
);
parcelHelpers.export(exports, "SkipBack", ()=>_skipBackDefault.default
);
parcelHelpers.export(exports, "SkipForward", ()=>_skipForwardDefault.default
);
parcelHelpers.export(exports, "Skull", ()=>_skullDefault.default
);
parcelHelpers.export(exports, "Slack", ()=>_slackDefault.default
);
parcelHelpers.export(exports, "Slash", ()=>_slashDefault.default
);
parcelHelpers.export(exports, "Sliders", ()=>_slidersDefault.default
);
parcelHelpers.export(exports, "SmartphoneCharging", ()=>_smartphoneChargingDefault.default
);
parcelHelpers.export(exports, "Smartphone", ()=>_smartphoneDefault.default
);
parcelHelpers.export(exports, "Smile", ()=>_smileDefault.default
);
parcelHelpers.export(exports, "Snowflake", ()=>_snowflakeDefault.default
);
parcelHelpers.export(exports, "SortAsc", ()=>_sortAscDefault.default
);
parcelHelpers.export(exports, "SortDesc", ()=>_sortDescDefault.default
);
parcelHelpers.export(exports, "Speaker", ()=>_speakerDefault.default
);
parcelHelpers.export(exports, "Sprout", ()=>_sproutDefault.default
);
parcelHelpers.export(exports, "Square", ()=>_squareDefault.default
);
parcelHelpers.export(exports, "StarHalf", ()=>_starHalfDefault.default
);
parcelHelpers.export(exports, "Star", ()=>_starDefault.default
);
parcelHelpers.export(exports, "StopCircle", ()=>_stopCircleDefault.default
);
parcelHelpers.export(exports, "StretchHorizontal", ()=>_stretchHorizontalDefault.default
);
parcelHelpers.export(exports, "StretchVertical", ()=>_stretchVerticalDefault.default
);
parcelHelpers.export(exports, "Strikethrough", ()=>_strikethroughDefault.default
);
parcelHelpers.export(exports, "Subscript", ()=>_subscriptDefault.default
);
parcelHelpers.export(exports, "Sun", ()=>_sunDefault.default
);
parcelHelpers.export(exports, "Sunrise", ()=>_sunriseDefault.default
);
parcelHelpers.export(exports, "Sunset", ()=>_sunsetDefault.default
);
parcelHelpers.export(exports, "Superscript", ()=>_superscriptDefault.default
);
parcelHelpers.export(exports, "SwissFranc", ()=>_swissFrancDefault.default
);
parcelHelpers.export(exports, "SwitchCamera", ()=>_switchCameraDefault.default
);
parcelHelpers.export(exports, "Table", ()=>_tableDefault.default
);
parcelHelpers.export(exports, "Tablet", ()=>_tabletDefault.default
);
parcelHelpers.export(exports, "Tag", ()=>_tagDefault.default
);
parcelHelpers.export(exports, "Target", ()=>_targetDefault.default
);
parcelHelpers.export(exports, "Tent", ()=>_tentDefault.default
);
parcelHelpers.export(exports, "TerminalSquare", ()=>_terminalSquareDefault.default
);
parcelHelpers.export(exports, "Terminal", ()=>_terminalDefault.default
);
parcelHelpers.export(exports, "TextCursorInput", ()=>_textCursorInputDefault.default
);
parcelHelpers.export(exports, "TextCursor", ()=>_textCursorDefault.default
);
parcelHelpers.export(exports, "ThermometerSnowflake", ()=>_thermometerSnowflakeDefault.default
);
parcelHelpers.export(exports, "ThermometerSun", ()=>_thermometerSunDefault.default
);
parcelHelpers.export(exports, "Thermometer", ()=>_thermometerDefault.default
);
parcelHelpers.export(exports, "ThumbsDown", ()=>_thumbsDownDefault.default
);
parcelHelpers.export(exports, "ThumbsUp", ()=>_thumbsUpDefault.default
);
parcelHelpers.export(exports, "Ticket", ()=>_ticketDefault.default
);
parcelHelpers.export(exports, "TimerOff", ()=>_timerOffDefault.default
);
parcelHelpers.export(exports, "TimerReset", ()=>_timerResetDefault.default
);
parcelHelpers.export(exports, "Timer", ()=>_timerDefault.default
);
parcelHelpers.export(exports, "ToggleLeft", ()=>_toggleLeftDefault.default
);
parcelHelpers.export(exports, "ToggleRight", ()=>_toggleRightDefault.default
);
parcelHelpers.export(exports, "Tornado", ()=>_tornadoDefault.default
);
parcelHelpers.export(exports, "Trash2", ()=>_trash2Default.default
);
parcelHelpers.export(exports, "Trash", ()=>_trashDefault.default
);
parcelHelpers.export(exports, "Trello", ()=>_trelloDefault.default
);
parcelHelpers.export(exports, "TrendingDown", ()=>_trendingDownDefault.default
);
parcelHelpers.export(exports, "TrendingUp", ()=>_trendingUpDefault.default
);
parcelHelpers.export(exports, "Triangle", ()=>_triangleDefault.default
);
parcelHelpers.export(exports, "Truck", ()=>_truckDefault.default
);
parcelHelpers.export(exports, "Tv2", ()=>_tv2Default.default
);
parcelHelpers.export(exports, "Tv", ()=>_tvDefault.default
);
parcelHelpers.export(exports, "Twitch", ()=>_twitchDefault.default
);
parcelHelpers.export(exports, "Twitter", ()=>_twitterDefault.default
);
parcelHelpers.export(exports, "Type", ()=>_typeDefault.default
);
parcelHelpers.export(exports, "Umbrella", ()=>_umbrellaDefault.default
);
parcelHelpers.export(exports, "Underline", ()=>_underlineDefault.default
);
parcelHelpers.export(exports, "Undo", ()=>_undoDefault.default
);
parcelHelpers.export(exports, "Unlink2", ()=>_unlink2Default.default
);
parcelHelpers.export(exports, "Unlink", ()=>_unlinkDefault.default
);
parcelHelpers.export(exports, "Unlock", ()=>_unlockDefault.default
);
parcelHelpers.export(exports, "UploadCloud", ()=>_uploadCloudDefault.default
);
parcelHelpers.export(exports, "Upload", ()=>_uploadDefault.default
);
parcelHelpers.export(exports, "UserCheck", ()=>_userCheckDefault.default
);
parcelHelpers.export(exports, "UserMinus", ()=>_userMinusDefault.default
);
parcelHelpers.export(exports, "UserPlus", ()=>_userPlusDefault.default
);
parcelHelpers.export(exports, "UserX", ()=>_userXDefault.default
);
parcelHelpers.export(exports, "User", ()=>_userDefault.default
);
parcelHelpers.export(exports, "Users", ()=>_usersDefault.default
);
parcelHelpers.export(exports, "Verified", ()=>_verifiedDefault.default
);
parcelHelpers.export(exports, "Vibrate", ()=>_vibrateDefault.default
);
parcelHelpers.export(exports, "VideoOff", ()=>_videoOffDefault.default
);
parcelHelpers.export(exports, "Video", ()=>_videoDefault.default
);
parcelHelpers.export(exports, "View", ()=>_viewDefault.default
);
parcelHelpers.export(exports, "Voicemail", ()=>_voicemailDefault.default
);
parcelHelpers.export(exports, "Volume1", ()=>_volume1Default.default
);
parcelHelpers.export(exports, "Volume2", ()=>_volume2Default.default
);
parcelHelpers.export(exports, "VolumeX", ()=>_volumeXDefault.default
);
parcelHelpers.export(exports, "Volume", ()=>_volumeDefault.default
);
parcelHelpers.export(exports, "Wallet", ()=>_walletDefault.default
);
parcelHelpers.export(exports, "Wand", ()=>_wandDefault.default
);
parcelHelpers.export(exports, "Watch", ()=>_watchDefault.default
);
parcelHelpers.export(exports, "Waves", ()=>_wavesDefault.default
);
parcelHelpers.export(exports, "Webcam", ()=>_webcamDefault.default
);
parcelHelpers.export(exports, "WifiOff", ()=>_wifiOffDefault.default
);
parcelHelpers.export(exports, "Wifi", ()=>_wifiDefault.default
);
parcelHelpers.export(exports, "Wind", ()=>_windDefault.default
);
parcelHelpers.export(exports, "WrapText", ()=>_wrapTextDefault.default
);
parcelHelpers.export(exports, "Wrench", ()=>_wrenchDefault.default
);
parcelHelpers.export(exports, "XCircle", ()=>_xCircleDefault.default
);
parcelHelpers.export(exports, "XOctagon", ()=>_xOctagonDefault.default
);
parcelHelpers.export(exports, "XSquare", ()=>_xSquareDefault.default
);
parcelHelpers.export(exports, "X", ()=>_xDefault.default
);
parcelHelpers.export(exports, "Youtube", ()=>_youtubeDefault.default
);
parcelHelpers.export(exports, "ZapOff", ()=>_zapOffDefault.default
);
parcelHelpers.export(exports, "Zap", ()=>_zapDefault.default
);
parcelHelpers.export(exports, "ZoomIn", ()=>_zoomInDefault.default
);
parcelHelpers.export(exports, "ZoomOut", ()=>_zoomOutDefault.default
);
var _activity = require("./activity");
var _activityDefault = parcelHelpers.interopDefault(_activity);
var _airplay = require("./airplay");
var _airplayDefault = parcelHelpers.interopDefault(_airplay);
var _alarmCheck = require("./alarm-check");
var _alarmCheckDefault = parcelHelpers.interopDefault(_alarmCheck);
var _alarmClockOff = require("./alarm-clock-off");
var _alarmClockOffDefault = parcelHelpers.interopDefault(_alarmClockOff);
var _alarmClock = require("./alarm-clock");
var _alarmClockDefault = parcelHelpers.interopDefault(_alarmClock);
var _alarmMinus = require("./alarm-minus");
var _alarmMinusDefault = parcelHelpers.interopDefault(_alarmMinus);
var _alarmPlus = require("./alarm-plus");
var _alarmPlusDefault = parcelHelpers.interopDefault(_alarmPlus);
var _album = require("./album");
var _albumDefault = parcelHelpers.interopDefault(_album);
var _alertCircle = require("./alert-circle");
var _alertCircleDefault = parcelHelpers.interopDefault(_alertCircle);
var _alertOctagon = require("./alert-octagon");
var _alertOctagonDefault = parcelHelpers.interopDefault(_alertOctagon);
var _alertTriangle = require("./alert-triangle");
var _alertTriangleDefault = parcelHelpers.interopDefault(_alertTriangle);
var _alignCenterHorizontal = require("./align-center-horizontal");
var _alignCenterHorizontalDefault = parcelHelpers.interopDefault(_alignCenterHorizontal);
var _alignCenterVertical = require("./align-center-vertical");
var _alignCenterVerticalDefault = parcelHelpers.interopDefault(_alignCenterVertical);
var _alignCenter = require("./align-center");
var _alignCenterDefault = parcelHelpers.interopDefault(_alignCenter);
var _alignEndHorizontal = require("./align-end-horizontal");
var _alignEndHorizontalDefault = parcelHelpers.interopDefault(_alignEndHorizontal);
var _alignEndVertical = require("./align-end-vertical");
var _alignEndVerticalDefault = parcelHelpers.interopDefault(_alignEndVertical);
var _alignHorizontalDistributeCenter = require("./align-horizontal-distribute-center");
var _alignHorizontalDistributeCenterDefault = parcelHelpers.interopDefault(_alignHorizontalDistributeCenter);
var _alignHorizontalDistributeEnd = require("./align-horizontal-distribute-end");
var _alignHorizontalDistributeEndDefault = parcelHelpers.interopDefault(_alignHorizontalDistributeEnd);
var _alignHorizontalDistributeStart = require("./align-horizontal-distribute-start");
var _alignHorizontalDistributeStartDefault = parcelHelpers.interopDefault(_alignHorizontalDistributeStart);
var _alignHorizontalJustifyCenter = require("./align-horizontal-justify-center");
var _alignHorizontalJustifyCenterDefault = parcelHelpers.interopDefault(_alignHorizontalJustifyCenter);
var _alignHorizontalJustifyEnd = require("./align-horizontal-justify-end");
var _alignHorizontalJustifyEndDefault = parcelHelpers.interopDefault(_alignHorizontalJustifyEnd);
var _alignHorizontalJustifyStart = require("./align-horizontal-justify-start");
var _alignHorizontalJustifyStartDefault = parcelHelpers.interopDefault(_alignHorizontalJustifyStart);
var _alignHorizontalSpaceAround = require("./align-horizontal-space-around");
var _alignHorizontalSpaceAroundDefault = parcelHelpers.interopDefault(_alignHorizontalSpaceAround);
var _alignHorizontalSpaceBetween = require("./align-horizontal-space-between");
var _alignHorizontalSpaceBetweenDefault = parcelHelpers.interopDefault(_alignHorizontalSpaceBetween);
var _alignJustify = require("./align-justify");
var _alignJustifyDefault = parcelHelpers.interopDefault(_alignJustify);
var _alignLeft = require("./align-left");
var _alignLeftDefault = parcelHelpers.interopDefault(_alignLeft);
var _alignRight = require("./align-right");
var _alignRightDefault = parcelHelpers.interopDefault(_alignRight);
var _alignStartHorizontal = require("./align-start-horizontal");
var _alignStartHorizontalDefault = parcelHelpers.interopDefault(_alignStartHorizontal);
var _alignStartVertical = require("./align-start-vertical");
var _alignStartVerticalDefault = parcelHelpers.interopDefault(_alignStartVertical);
var _alignVerticalDistributeCenter = require("./align-vertical-distribute-center");
var _alignVerticalDistributeCenterDefault = parcelHelpers.interopDefault(_alignVerticalDistributeCenter);
var _alignVerticalDistributeEnd = require("./align-vertical-distribute-end");
var _alignVerticalDistributeEndDefault = parcelHelpers.interopDefault(_alignVerticalDistributeEnd);
var _alignVerticalDistributeStart = require("./align-vertical-distribute-start");
var _alignVerticalDistributeStartDefault = parcelHelpers.interopDefault(_alignVerticalDistributeStart);
var _alignVerticalJustifyCenter = require("./align-vertical-justify-center");
var _alignVerticalJustifyCenterDefault = parcelHelpers.interopDefault(_alignVerticalJustifyCenter);
var _alignVerticalJustifyEnd = require("./align-vertical-justify-end");
var _alignVerticalJustifyEndDefault = parcelHelpers.interopDefault(_alignVerticalJustifyEnd);
var _alignVerticalJustifyStart = require("./align-vertical-justify-start");
var _alignVerticalJustifyStartDefault = parcelHelpers.interopDefault(_alignVerticalJustifyStart);
var _alignVerticalSpaceAround = require("./align-vertical-space-around");
var _alignVerticalSpaceAroundDefault = parcelHelpers.interopDefault(_alignVerticalSpaceAround);
var _alignVerticalSpaceBetween = require("./align-vertical-space-between");
var _alignVerticalSpaceBetweenDefault = parcelHelpers.interopDefault(_alignVerticalSpaceBetween);
var _anchor = require("./anchor");
var _anchorDefault = parcelHelpers.interopDefault(_anchor);
var _aperture = require("./aperture");
var _apertureDefault = parcelHelpers.interopDefault(_aperture);
var _archive = require("./archive");
var _archiveDefault = parcelHelpers.interopDefault(_archive);
var _arrowBigDown = require("./arrow-big-down");
var _arrowBigDownDefault = parcelHelpers.interopDefault(_arrowBigDown);
var _arrowBigLeft = require("./arrow-big-left");
var _arrowBigLeftDefault = parcelHelpers.interopDefault(_arrowBigLeft);
var _arrowBigRight = require("./arrow-big-right");
var _arrowBigRightDefault = parcelHelpers.interopDefault(_arrowBigRight);
var _arrowBigUp = require("./arrow-big-up");
var _arrowBigUpDefault = parcelHelpers.interopDefault(_arrowBigUp);
var _arrowDownCircle = require("./arrow-down-circle");
var _arrowDownCircleDefault = parcelHelpers.interopDefault(_arrowDownCircle);
var _arrowDownLeft = require("./arrow-down-left");
var _arrowDownLeftDefault = parcelHelpers.interopDefault(_arrowDownLeft);
var _arrowDownRight = require("./arrow-down-right");
var _arrowDownRightDefault = parcelHelpers.interopDefault(_arrowDownRight);
var _arrowDown = require("./arrow-down");
var _arrowDownDefault = parcelHelpers.interopDefault(_arrowDown);
var _arrowLeftCircle = require("./arrow-left-circle");
var _arrowLeftCircleDefault = parcelHelpers.interopDefault(_arrowLeftCircle);
var _arrowLeftRight = require("./arrow-left-right");
var _arrowLeftRightDefault = parcelHelpers.interopDefault(_arrowLeftRight);
var _arrowLeft = require("./arrow-left");
var _arrowLeftDefault = parcelHelpers.interopDefault(_arrowLeft);
var _arrowRightCircle = require("./arrow-right-circle");
var _arrowRightCircleDefault = parcelHelpers.interopDefault(_arrowRightCircle);
var _arrowRight = require("./arrow-right");
var _arrowRightDefault = parcelHelpers.interopDefault(_arrowRight);
var _arrowUpCircle = require("./arrow-up-circle");
var _arrowUpCircleDefault = parcelHelpers.interopDefault(_arrowUpCircle);
var _arrowUpLeft = require("./arrow-up-left");
var _arrowUpLeftDefault = parcelHelpers.interopDefault(_arrowUpLeft);
var _arrowUpRight = require("./arrow-up-right");
var _arrowUpRightDefault = parcelHelpers.interopDefault(_arrowUpRight);
var _arrowUp = require("./arrow-up");
var _arrowUpDefault = parcelHelpers.interopDefault(_arrowUp);
var _asterisk = require("./asterisk");
var _asteriskDefault = parcelHelpers.interopDefault(_asterisk);
var _atSign = require("./at-sign");
var _atSignDefault = parcelHelpers.interopDefault(_atSign);
var _award = require("./award");
var _awardDefault = parcelHelpers.interopDefault(_award);
var _axe = require("./axe");
var _axeDefault = parcelHelpers.interopDefault(_axe);
var _banknote = require("./banknote");
var _banknoteDefault = parcelHelpers.interopDefault(_banknote);
var _barChart2 = require("./bar-chart-2");
var _barChart2Default = parcelHelpers.interopDefault(_barChart2);
var _barChart = require("./bar-chart");
var _barChartDefault = parcelHelpers.interopDefault(_barChart);
var _baseline = require("./baseline");
var _baselineDefault = parcelHelpers.interopDefault(_baseline);
var _batteryCharging = require("./battery-charging");
var _batteryChargingDefault = parcelHelpers.interopDefault(_batteryCharging);
var _batteryFull = require("./battery-full");
var _batteryFullDefault = parcelHelpers.interopDefault(_batteryFull);
var _batteryLow = require("./battery-low");
var _batteryLowDefault = parcelHelpers.interopDefault(_batteryLow);
var _batteryMedium = require("./battery-medium");
var _batteryMediumDefault = parcelHelpers.interopDefault(_batteryMedium);
var _battery = require("./battery");
var _batteryDefault = parcelHelpers.interopDefault(_battery);
var _beaker = require("./beaker");
var _beakerDefault = parcelHelpers.interopDefault(_beaker);
var _bellMinus = require("./bell-minus");
var _bellMinusDefault = parcelHelpers.interopDefault(_bellMinus);
var _bellOff = require("./bell-off");
var _bellOffDefault = parcelHelpers.interopDefault(_bellOff);
var _bellPlus = require("./bell-plus");
var _bellPlusDefault = parcelHelpers.interopDefault(_bellPlus);
var _bellRing = require("./bell-ring");
var _bellRingDefault = parcelHelpers.interopDefault(_bellRing);
var _bell = require("./bell");
var _bellDefault = parcelHelpers.interopDefault(_bell);
var _bike = require("./bike");
var _bikeDefault = parcelHelpers.interopDefault(_bike);
var _binary = require("./binary");
var _binaryDefault = parcelHelpers.interopDefault(_binary);
var _bitcoin = require("./bitcoin");
var _bitcoinDefault = parcelHelpers.interopDefault(_bitcoin);
var _bluetoothConnected = require("./bluetooth-connected");
var _bluetoothConnectedDefault = parcelHelpers.interopDefault(_bluetoothConnected);
var _bluetoothOff = require("./bluetooth-off");
var _bluetoothOffDefault = parcelHelpers.interopDefault(_bluetoothOff);
var _bluetoothSearching = require("./bluetooth-searching");
var _bluetoothSearchingDefault = parcelHelpers.interopDefault(_bluetoothSearching);
var _bluetooth = require("./bluetooth");
var _bluetoothDefault = parcelHelpers.interopDefault(_bluetooth);
var _bold = require("./bold");
var _boldDefault = parcelHelpers.interopDefault(_bold);
var _bookOpen = require("./book-open");
var _bookOpenDefault = parcelHelpers.interopDefault(_bookOpen);
var _book = require("./book");
var _bookDefault = parcelHelpers.interopDefault(_book);
var _bookmarkMinus = require("./bookmark-minus");
var _bookmarkMinusDefault = parcelHelpers.interopDefault(_bookmarkMinus);
var _bookmarkPlus = require("./bookmark-plus");
var _bookmarkPlusDefault = parcelHelpers.interopDefault(_bookmarkPlus);
var _bookmark = require("./bookmark");
var _bookmarkDefault = parcelHelpers.interopDefault(_bookmark);
var _bot = require("./bot");
var _botDefault = parcelHelpers.interopDefault(_bot);
var _boxSelect = require("./box-select");
var _boxSelectDefault = parcelHelpers.interopDefault(_boxSelect);
var _box = require("./box");
var _boxDefault = parcelHelpers.interopDefault(_box);
var _briefcase = require("./briefcase");
var _briefcaseDefault = parcelHelpers.interopDefault(_briefcase);
var _brush = require("./brush");
var _brushDefault = parcelHelpers.interopDefault(_brush);
var _bug = require("./bug");
var _bugDefault = parcelHelpers.interopDefault(_bug);
var _building = require("./building");
var _buildingDefault = parcelHelpers.interopDefault(_building);
var _bus = require("./bus");
var _busDefault = parcelHelpers.interopDefault(_bus);
var _calculator = require("./calculator");
var _calculatorDefault = parcelHelpers.interopDefault(_calculator);
var _calendar = require("./calendar");
var _calendarDefault = parcelHelpers.interopDefault(_calendar);
var _cameraOff = require("./camera-off");
var _cameraOffDefault = parcelHelpers.interopDefault(_cameraOff);
var _camera = require("./camera");
var _cameraDefault = parcelHelpers.interopDefault(_camera);
var _car = require("./car");
var _carDefault = parcelHelpers.interopDefault(_car);
var _carrot = require("./carrot");
var _carrotDefault = parcelHelpers.interopDefault(_carrot);
var _cast = require("./cast");
var _castDefault = parcelHelpers.interopDefault(_cast);
var _checkCircle2 = require("./check-circle-2");
var _checkCircle2Default = parcelHelpers.interopDefault(_checkCircle2);
var _checkCircle = require("./check-circle");
var _checkCircleDefault = parcelHelpers.interopDefault(_checkCircle);
var _checkSquare = require("./check-square");
var _checkSquareDefault = parcelHelpers.interopDefault(_checkSquare);
var _check = require("./check");
var _checkDefault = parcelHelpers.interopDefault(_check);
var _chevronDown = require("./chevron-down");
var _chevronDownDefault = parcelHelpers.interopDefault(_chevronDown);
var _chevronFirst = require("./chevron-first");
var _chevronFirstDefault = parcelHelpers.interopDefault(_chevronFirst);
var _chevronLast = require("./chevron-last");
var _chevronLastDefault = parcelHelpers.interopDefault(_chevronLast);
var _chevronLeft = require("./chevron-left");
var _chevronLeftDefault = parcelHelpers.interopDefault(_chevronLeft);
var _chevronRight = require("./chevron-right");
var _chevronRightDefault = parcelHelpers.interopDefault(_chevronRight);
var _chevronUp = require("./chevron-up");
var _chevronUpDefault = parcelHelpers.interopDefault(_chevronUp);
var _chevronsDownUp = require("./chevrons-down-up");
var _chevronsDownUpDefault = parcelHelpers.interopDefault(_chevronsDownUp);
var _chevronsDown = require("./chevrons-down");
var _chevronsDownDefault = parcelHelpers.interopDefault(_chevronsDown);
var _chevronsLeft = require("./chevrons-left");
var _chevronsLeftDefault = parcelHelpers.interopDefault(_chevronsLeft);
var _chevronsRight = require("./chevrons-right");
var _chevronsRightDefault = parcelHelpers.interopDefault(_chevronsRight);
var _chevronsUpDown = require("./chevrons-up-down");
var _chevronsUpDownDefault = parcelHelpers.interopDefault(_chevronsUpDown);
var _chevronsUp = require("./chevrons-up");
var _chevronsUpDefault = parcelHelpers.interopDefault(_chevronsUp);
var _chrome = require("./chrome");
var _chromeDefault = parcelHelpers.interopDefault(_chrome);
var _circleSlashed = require("./circle-slashed");
var _circleSlashedDefault = parcelHelpers.interopDefault(_circleSlashed);
var _circle = require("./circle");
var _circleDefault = parcelHelpers.interopDefault(_circle);
var _clipboardCheck = require("./clipboard-check");
var _clipboardCheckDefault = parcelHelpers.interopDefault(_clipboardCheck);
var _clipboardCopy = require("./clipboard-copy");
var _clipboardCopyDefault = parcelHelpers.interopDefault(_clipboardCopy);
var _clipboardList = require("./clipboard-list");
var _clipboardListDefault = parcelHelpers.interopDefault(_clipboardList);
var _clipboardX = require("./clipboard-x");
var _clipboardXDefault = parcelHelpers.interopDefault(_clipboardX);
var _clipboard = require("./clipboard");
var _clipboardDefault = parcelHelpers.interopDefault(_clipboard);
var _clock1 = require("./clock-1");
var _clock1Default = parcelHelpers.interopDefault(_clock1);
var _clock10 = require("./clock-10");
var _clock10Default = parcelHelpers.interopDefault(_clock10);
var _clock11 = require("./clock-11");
var _clock11Default = parcelHelpers.interopDefault(_clock11);
var _clock12 = require("./clock-12");
var _clock12Default = parcelHelpers.interopDefault(_clock12);
var _clock2 = require("./clock-2");
var _clock2Default = parcelHelpers.interopDefault(_clock2);
var _clock3 = require("./clock-3");
var _clock3Default = parcelHelpers.interopDefault(_clock3);
var _clock4 = require("./clock-4");
var _clock4Default = parcelHelpers.interopDefault(_clock4);
var _clock5 = require("./clock-5");
var _clock5Default = parcelHelpers.interopDefault(_clock5);
var _clock6 = require("./clock-6");
var _clock6Default = parcelHelpers.interopDefault(_clock6);
var _clock7 = require("./clock-7");
var _clock7Default = parcelHelpers.interopDefault(_clock7);
var _clock8 = require("./clock-8");
var _clock8Default = parcelHelpers.interopDefault(_clock8);
var _clock9 = require("./clock-9");
var _clock9Default = parcelHelpers.interopDefault(_clock9);
var _clock = require("./clock");
var _clockDefault = parcelHelpers.interopDefault(_clock);
var _cloudDrizzle = require("./cloud-drizzle");
var _cloudDrizzleDefault = parcelHelpers.interopDefault(_cloudDrizzle);
var _cloudFog = require("./cloud-fog");
var _cloudFogDefault = parcelHelpers.interopDefault(_cloudFog);
var _cloudHail = require("./cloud-hail");
var _cloudHailDefault = parcelHelpers.interopDefault(_cloudHail);
var _cloudLightning = require("./cloud-lightning");
var _cloudLightningDefault = parcelHelpers.interopDefault(_cloudLightning);
var _cloudMoon = require("./cloud-moon");
var _cloudMoonDefault = parcelHelpers.interopDefault(_cloudMoon);
var _cloudOff = require("./cloud-off");
var _cloudOffDefault = parcelHelpers.interopDefault(_cloudOff);
var _cloudRainWind = require("./cloud-rain-wind");
var _cloudRainWindDefault = parcelHelpers.interopDefault(_cloudRainWind);
var _cloudRain = require("./cloud-rain");
var _cloudRainDefault = parcelHelpers.interopDefault(_cloudRain);
var _cloudSnow = require("./cloud-snow");
var _cloudSnowDefault = parcelHelpers.interopDefault(_cloudSnow);
var _cloudSun = require("./cloud-sun");
var _cloudSunDefault = parcelHelpers.interopDefault(_cloudSun);
var _cloud = require("./cloud");
var _cloudDefault = parcelHelpers.interopDefault(_cloud);
var _cloudy = require("./cloudy");
var _cloudyDefault = parcelHelpers.interopDefault(_cloudy);
var _clover = require("./clover");
var _cloverDefault = parcelHelpers.interopDefault(_clover);
var _code2 = require("./code-2");
var _code2Default = parcelHelpers.interopDefault(_code2);
var _code = require("./code");
var _codeDefault = parcelHelpers.interopDefault(_code);
var _codepen = require("./codepen");
var _codepenDefault = parcelHelpers.interopDefault(_codepen);
var _codesandbox = require("./codesandbox");
var _codesandboxDefault = parcelHelpers.interopDefault(_codesandbox);
var _coffee = require("./coffee");
var _coffeeDefault = parcelHelpers.interopDefault(_coffee);
var _coins = require("./coins");
var _coinsDefault = parcelHelpers.interopDefault(_coins);
var _columns = require("./columns");
var _columnsDefault = parcelHelpers.interopDefault(_columns);
var _command = require("./command");
var _commandDefault = parcelHelpers.interopDefault(_command);
var _compass = require("./compass");
var _compassDefault = parcelHelpers.interopDefault(_compass);
var _contact = require("./contact");
var _contactDefault = parcelHelpers.interopDefault(_contact);
var _contrast = require("./contrast");
var _contrastDefault = parcelHelpers.interopDefault(_contrast);
var _cookie = require("./cookie");
var _cookieDefault = parcelHelpers.interopDefault(_cookie);
var _copy = require("./copy");
var _copyDefault = parcelHelpers.interopDefault(_copy);
var _copyleft = require("./copyleft");
var _copyleftDefault = parcelHelpers.interopDefault(_copyleft);
var _copyright = require("./copyright");
var _copyrightDefault = parcelHelpers.interopDefault(_copyright);
var _cornerDownLeft = require("./corner-down-left");
var _cornerDownLeftDefault = parcelHelpers.interopDefault(_cornerDownLeft);
var _cornerDownRight = require("./corner-down-right");
var _cornerDownRightDefault = parcelHelpers.interopDefault(_cornerDownRight);
var _cornerLeftDown = require("./corner-left-down");
var _cornerLeftDownDefault = parcelHelpers.interopDefault(_cornerLeftDown);
var _cornerLeftUp = require("./corner-left-up");
var _cornerLeftUpDefault = parcelHelpers.interopDefault(_cornerLeftUp);
var _cornerRightDown = require("./corner-right-down");
var _cornerRightDownDefault = parcelHelpers.interopDefault(_cornerRightDown);
var _cornerRightUp = require("./corner-right-up");
var _cornerRightUpDefault = parcelHelpers.interopDefault(_cornerRightUp);
var _cornerUpLeft = require("./corner-up-left");
var _cornerUpLeftDefault = parcelHelpers.interopDefault(_cornerUpLeft);
var _cornerUpRight = require("./corner-up-right");
var _cornerUpRightDefault = parcelHelpers.interopDefault(_cornerUpRight);
var _cpu = require("./cpu");
var _cpuDefault = parcelHelpers.interopDefault(_cpu);
var _creditCard = require("./credit-card");
var _creditCardDefault = parcelHelpers.interopDefault(_creditCard);
var _crop = require("./crop");
var _cropDefault = parcelHelpers.interopDefault(_crop);
var _cross = require("./cross");
var _crossDefault = parcelHelpers.interopDefault(_cross);
var _crosshair = require("./crosshair");
var _crosshairDefault = parcelHelpers.interopDefault(_crosshair);
var _crown = require("./crown");
var _crownDefault = parcelHelpers.interopDefault(_crown);
var _currency = require("./currency");
var _currencyDefault = parcelHelpers.interopDefault(_currency);
var _database = require("./database");
var _databaseDefault = parcelHelpers.interopDefault(_database);
var _delete = require("./delete");
var _deleteDefault = parcelHelpers.interopDefault(_delete);
var _dice1 = require("./dice-1");
var _dice1Default = parcelHelpers.interopDefault(_dice1);
var _dice2 = require("./dice-2");
var _dice2Default = parcelHelpers.interopDefault(_dice2);
var _dice3 = require("./dice-3");
var _dice3Default = parcelHelpers.interopDefault(_dice3);
var _dice4 = require("./dice-4");
var _dice4Default = parcelHelpers.interopDefault(_dice4);
var _dice5 = require("./dice-5");
var _dice5Default = parcelHelpers.interopDefault(_dice5);
var _dice6 = require("./dice-6");
var _dice6Default = parcelHelpers.interopDefault(_dice6);
var _disc = require("./disc");
var _discDefault = parcelHelpers.interopDefault(_disc);
var _divideCircle = require("./divide-circle");
var _divideCircleDefault = parcelHelpers.interopDefault(_divideCircle);
var _divideSquare = require("./divide-square");
var _divideSquareDefault = parcelHelpers.interopDefault(_divideSquare);
var _divide = require("./divide");
var _divideDefault = parcelHelpers.interopDefault(_divide);
var _dollarSign = require("./dollar-sign");
var _dollarSignDefault = parcelHelpers.interopDefault(_dollarSign);
var _downloadCloud = require("./download-cloud");
var _downloadCloudDefault = parcelHelpers.interopDefault(_downloadCloud);
var _download = require("./download");
var _downloadDefault = parcelHelpers.interopDefault(_download);
var _dribbble = require("./dribbble");
var _dribbbleDefault = parcelHelpers.interopDefault(_dribbble);
var _droplet = require("./droplet");
var _dropletDefault = parcelHelpers.interopDefault(_droplet);
var _droplets = require("./droplets");
var _dropletsDefault = parcelHelpers.interopDefault(_droplets);
var _drumstick = require("./drumstick");
var _drumstickDefault = parcelHelpers.interopDefault(_drumstick);
var _edit2 = require("./edit-2");
var _edit2Default = parcelHelpers.interopDefault(_edit2);
var _edit3 = require("./edit-3");
var _edit3Default = parcelHelpers.interopDefault(_edit3);
var _edit = require("./edit");
var _editDefault = parcelHelpers.interopDefault(_edit);
var _egg = require("./egg");
var _eggDefault = parcelHelpers.interopDefault(_egg);
var _equalNot = require("./equal-not");
var _equalNotDefault = parcelHelpers.interopDefault(_equalNot);
var _equal = require("./equal");
var _equalDefault = parcelHelpers.interopDefault(_equal);
var _euro = require("./euro");
var _euroDefault = parcelHelpers.interopDefault(_euro);
var _expand = require("./expand");
var _expandDefault = parcelHelpers.interopDefault(_expand);
var _externalLink = require("./external-link");
var _externalLinkDefault = parcelHelpers.interopDefault(_externalLink);
var _eyeOff = require("./eye-off");
var _eyeOffDefault = parcelHelpers.interopDefault(_eyeOff);
var _eye = require("./eye");
var _eyeDefault = parcelHelpers.interopDefault(_eye);
var _facebook = require("./facebook");
var _facebookDefault = parcelHelpers.interopDefault(_facebook);
var _fastForward = require("./fast-forward");
var _fastForwardDefault = parcelHelpers.interopDefault(_fastForward);
var _feather = require("./feather");
var _featherDefault = parcelHelpers.interopDefault(_feather);
var _figma = require("./figma");
var _figmaDefault = parcelHelpers.interopDefault(_figma);
var _fileCheck2 = require("./file-check-2");
var _fileCheck2Default = parcelHelpers.interopDefault(_fileCheck2);
var _fileCheck = require("./file-check");
var _fileCheckDefault = parcelHelpers.interopDefault(_fileCheck);
var _fileCode = require("./file-code");
var _fileCodeDefault = parcelHelpers.interopDefault(_fileCode);
var _fileDigit = require("./file-digit");
var _fileDigitDefault = parcelHelpers.interopDefault(_fileDigit);
var _fileInput = require("./file-input");
var _fileInputDefault = parcelHelpers.interopDefault(_fileInput);
var _fileMinus2 = require("./file-minus-2");
var _fileMinus2Default = parcelHelpers.interopDefault(_fileMinus2);
var _fileMinus = require("./file-minus");
var _fileMinusDefault = parcelHelpers.interopDefault(_fileMinus);
var _fileOutput = require("./file-output");
var _fileOutputDefault = parcelHelpers.interopDefault(_fileOutput);
var _filePlus2 = require("./file-plus-2");
var _filePlus2Default = parcelHelpers.interopDefault(_filePlus2);
var _filePlus = require("./file-plus");
var _filePlusDefault = parcelHelpers.interopDefault(_filePlus);
var _fileSearch = require("./file-search");
var _fileSearchDefault = parcelHelpers.interopDefault(_fileSearch);
var _fileText = require("./file-text");
var _fileTextDefault = parcelHelpers.interopDefault(_fileText);
var _fileX2 = require("./file-x-2");
var _fileX2Default = parcelHelpers.interopDefault(_fileX2);
var _fileX = require("./file-x");
var _fileXDefault = parcelHelpers.interopDefault(_fileX);
var _file = require("./file");
var _fileDefault = parcelHelpers.interopDefault(_file);
var _files = require("./files");
var _filesDefault = parcelHelpers.interopDefault(_files);
var _film = require("./film");
var _filmDefault = parcelHelpers.interopDefault(_film);
var _filter = require("./filter");
var _filterDefault = parcelHelpers.interopDefault(_filter);
var _flagTriangleLeft = require("./flag-triangle-left");
var _flagTriangleLeftDefault = parcelHelpers.interopDefault(_flagTriangleLeft);
var _flagTriangleRight = require("./flag-triangle-right");
var _flagTriangleRightDefault = parcelHelpers.interopDefault(_flagTriangleRight);
var _flag = require("./flag");
var _flagDefault = parcelHelpers.interopDefault(_flag);
var _flame = require("./flame");
var _flameDefault = parcelHelpers.interopDefault(_flame);
var _flashlightOff = require("./flashlight-off");
var _flashlightOffDefault = parcelHelpers.interopDefault(_flashlightOff);
var _flashlight = require("./flashlight");
var _flashlightDefault = parcelHelpers.interopDefault(_flashlight);
var _flaskConical = require("./flask-conical");
var _flaskConicalDefault = parcelHelpers.interopDefault(_flaskConical);
var _flaskRound = require("./flask-round");
var _flaskRoundDefault = parcelHelpers.interopDefault(_flaskRound);
var _folderMinus = require("./folder-minus");
var _folderMinusDefault = parcelHelpers.interopDefault(_folderMinus);
var _folderOpen = require("./folder-open");
var _folderOpenDefault = parcelHelpers.interopDefault(_folderOpen);
var _folderPlus = require("./folder-plus");
var _folderPlusDefault = parcelHelpers.interopDefault(_folderPlus);
var _folder = require("./folder");
var _folderDefault = parcelHelpers.interopDefault(_folder);
var _formInput = require("./form-input");
var _formInputDefault = parcelHelpers.interopDefault(_formInput);
var _forward = require("./forward");
var _forwardDefault = parcelHelpers.interopDefault(_forward);
var _framer = require("./framer");
var _framerDefault = parcelHelpers.interopDefault(_framer);
var _frown = require("./frown");
var _frownDefault = parcelHelpers.interopDefault(_frown);
var _functionSquare = require("./function-square");
var _functionSquareDefault = parcelHelpers.interopDefault(_functionSquare);
var _gamepad2 = require("./gamepad-2");
var _gamepad2Default = parcelHelpers.interopDefault(_gamepad2);
var _gamepad = require("./gamepad");
var _gamepadDefault = parcelHelpers.interopDefault(_gamepad);
var _gauge = require("./gauge");
var _gaugeDefault = parcelHelpers.interopDefault(_gauge);
var _gavel = require("./gavel");
var _gavelDefault = parcelHelpers.interopDefault(_gavel);
var _gem = require("./gem");
var _gemDefault = parcelHelpers.interopDefault(_gem);
var _ghost = require("./ghost");
var _ghostDefault = parcelHelpers.interopDefault(_ghost);
var _gift = require("./gift");
var _giftDefault = parcelHelpers.interopDefault(_gift);
var _gitBranchPlus = require("./git-branch-plus");
var _gitBranchPlusDefault = parcelHelpers.interopDefault(_gitBranchPlus);
var _gitBranch = require("./git-branch");
var _gitBranchDefault = parcelHelpers.interopDefault(_gitBranch);
var _gitCommit = require("./git-commit");
var _gitCommitDefault = parcelHelpers.interopDefault(_gitCommit);
var _gitFork = require("./git-fork");
var _gitForkDefault = parcelHelpers.interopDefault(_gitFork);
var _gitMerge = require("./git-merge");
var _gitMergeDefault = parcelHelpers.interopDefault(_gitMerge);
var _gitPullRequest = require("./git-pull-request");
var _gitPullRequestDefault = parcelHelpers.interopDefault(_gitPullRequest);
var _github = require("./github");
var _githubDefault = parcelHelpers.interopDefault(_github);
var _gitlab = require("./gitlab");
var _gitlabDefault = parcelHelpers.interopDefault(_gitlab);
var _glasses = require("./glasses");
var _glassesDefault = parcelHelpers.interopDefault(_glasses);
var _globe2 = require("./globe-2");
var _globe2Default = parcelHelpers.interopDefault(_globe2);
var _globe = require("./globe");
var _globeDefault = parcelHelpers.interopDefault(_globe);
var _grab = require("./grab");
var _grabDefault = parcelHelpers.interopDefault(_grab);
var _graduationCap = require("./graduation-cap");
var _graduationCapDefault = parcelHelpers.interopDefault(_graduationCap);
var _grid = require("./grid");
var _gridDefault = parcelHelpers.interopDefault(_grid);
var _gripHorizontal = require("./grip-horizontal");
var _gripHorizontalDefault = parcelHelpers.interopDefault(_gripHorizontal);
var _gripVertical = require("./grip-vertical");
var _gripVerticalDefault = parcelHelpers.interopDefault(_gripVertical);
var _hammer = require("./hammer");
var _hammerDefault = parcelHelpers.interopDefault(_hammer);
var _handMetal = require("./hand-metal");
var _handMetalDefault = parcelHelpers.interopDefault(_handMetal);
var _hand = require("./hand");
var _handDefault = parcelHelpers.interopDefault(_hand);
var _hardDrive = require("./hard-drive");
var _hardDriveDefault = parcelHelpers.interopDefault(_hardDrive);
var _hardHat = require("./hard-hat");
var _hardHatDefault = parcelHelpers.interopDefault(_hardHat);
var _hash = require("./hash");
var _hashDefault = parcelHelpers.interopDefault(_hash);
var _haze = require("./haze");
var _hazeDefault = parcelHelpers.interopDefault(_haze);
var _headphones = require("./headphones");
var _headphonesDefault = parcelHelpers.interopDefault(_headphones);
var _heart = require("./heart");
var _heartDefault = parcelHelpers.interopDefault(_heart);
var _helpCircle = require("./help-circle");
var _helpCircleDefault = parcelHelpers.interopDefault(_helpCircle);
var _hexagon = require("./hexagon");
var _hexagonDefault = parcelHelpers.interopDefault(_hexagon);
var _highlighter = require("./highlighter");
var _highlighterDefault = parcelHelpers.interopDefault(_highlighter);
var _history = require("./history");
var _historyDefault = parcelHelpers.interopDefault(_history);
var _home = require("./home");
var _homeDefault = parcelHelpers.interopDefault(_home);
var _imageMinus = require("./image-minus");
var _imageMinusDefault = parcelHelpers.interopDefault(_imageMinus);
var _imageOff = require("./image-off");
var _imageOffDefault = parcelHelpers.interopDefault(_imageOff);
var _imagePlus = require("./image-plus");
var _imagePlusDefault = parcelHelpers.interopDefault(_imagePlus);
var _image = require("./image");
var _imageDefault = parcelHelpers.interopDefault(_image);
var _import = require("./import");
var _importDefault = parcelHelpers.interopDefault(_import);
var _inbox = require("./inbox");
var _inboxDefault = parcelHelpers.interopDefault(_inbox);
var _indent = require("./indent");
var _indentDefault = parcelHelpers.interopDefault(_indent);
var _indianRupee = require("./indian-rupee");
var _indianRupeeDefault = parcelHelpers.interopDefault(_indianRupee);
var _infinity = require("./infinity");
var _infinityDefault = parcelHelpers.interopDefault(_infinity);
var _info = require("./info");
var _infoDefault = parcelHelpers.interopDefault(_info);
var _inspect = require("./inspect");
var _inspectDefault = parcelHelpers.interopDefault(_inspect);
var _instagram = require("./instagram");
var _instagramDefault = parcelHelpers.interopDefault(_instagram);
var _italic = require("./italic");
var _italicDefault = parcelHelpers.interopDefault(_italic);
var _japaneseYen = require("./japanese-yen");
var _japaneseYenDefault = parcelHelpers.interopDefault(_japaneseYen);
var _key = require("./key");
var _keyDefault = parcelHelpers.interopDefault(_key);
var _keyboard = require("./keyboard");
var _keyboardDefault = parcelHelpers.interopDefault(_keyboard);
var _landmark = require("./landmark");
var _landmarkDefault = parcelHelpers.interopDefault(_landmark);
var _languages = require("./languages");
var _languagesDefault = parcelHelpers.interopDefault(_languages);
var _laptop2 = require("./laptop-2");
var _laptop2Default = parcelHelpers.interopDefault(_laptop2);
var _laptop = require("./laptop");
var _laptopDefault = parcelHelpers.interopDefault(_laptop);
var _lassoSelect = require("./lasso-select");
var _lassoSelectDefault = parcelHelpers.interopDefault(_lassoSelect);
var _lasso = require("./lasso");
var _lassoDefault = parcelHelpers.interopDefault(_lasso);
var _layers = require("./layers");
var _layersDefault = parcelHelpers.interopDefault(_layers);
var _layoutDashboard = require("./layout-dashboard");
var _layoutDashboardDefault = parcelHelpers.interopDefault(_layoutDashboard);
var _layoutGrid = require("./layout-grid");
var _layoutGridDefault = parcelHelpers.interopDefault(_layoutGrid);
var _layoutList = require("./layout-list");
var _layoutListDefault = parcelHelpers.interopDefault(_layoutList);
var _layoutTemplate = require("./layout-template");
var _layoutTemplateDefault = parcelHelpers.interopDefault(_layoutTemplate);
var _layout = require("./layout");
var _layoutDefault = parcelHelpers.interopDefault(_layout);
var _library = require("./library");
var _libraryDefault = parcelHelpers.interopDefault(_library);
var _lifeBuoy = require("./life-buoy");
var _lifeBuoyDefault = parcelHelpers.interopDefault(_lifeBuoy);
var _lightbulbOff = require("./lightbulb-off");
var _lightbulbOffDefault = parcelHelpers.interopDefault(_lightbulbOff);
var _lightbulb = require("./lightbulb");
var _lightbulbDefault = parcelHelpers.interopDefault(_lightbulb);
var _link2Off = require("./link-2-off");
var _link2OffDefault = parcelHelpers.interopDefault(_link2Off);
var _link2 = require("./link-2");
var _link2Default = parcelHelpers.interopDefault(_link2);
var _link = require("./link");
var _linkDefault = parcelHelpers.interopDefault(_link);
var _linkedin = require("./linkedin");
var _linkedinDefault = parcelHelpers.interopDefault(_linkedin);
var _listChecks = require("./list-checks");
var _listChecksDefault = parcelHelpers.interopDefault(_listChecks);
var _listMinus = require("./list-minus");
var _listMinusDefault = parcelHelpers.interopDefault(_listMinus);
var _listOrdered = require("./list-ordered");
var _listOrderedDefault = parcelHelpers.interopDefault(_listOrdered);
var _listPlus = require("./list-plus");
var _listPlusDefault = parcelHelpers.interopDefault(_listPlus);
var _listX = require("./list-x");
var _listXDefault = parcelHelpers.interopDefault(_listX);
var _list = require("./list");
var _listDefault = parcelHelpers.interopDefault(_list);
var _loader2 = require("./loader-2");
var _loader2Default = parcelHelpers.interopDefault(_loader2);
var _loader = require("./loader");
var _loaderDefault = parcelHelpers.interopDefault(_loader);
var _locateFixed = require("./locate-fixed");
var _locateFixedDefault = parcelHelpers.interopDefault(_locateFixed);
var _locateOff = require("./locate-off");
var _locateOffDefault = parcelHelpers.interopDefault(_locateOff);
var _locate = require("./locate");
var _locateDefault = parcelHelpers.interopDefault(_locate);
var _lock = require("./lock");
var _lockDefault = parcelHelpers.interopDefault(_lock);
var _logIn = require("./log-in");
var _logInDefault = parcelHelpers.interopDefault(_logIn);
var _logOut = require("./log-out");
var _logOutDefault = parcelHelpers.interopDefault(_logOut);
var _mail = require("./mail");
var _mailDefault = parcelHelpers.interopDefault(_mail);
var _mapPin = require("./map-pin");
var _mapPinDefault = parcelHelpers.interopDefault(_mapPin);
var _map = require("./map");
var _mapDefault = parcelHelpers.interopDefault(_map);
var _maximize2 = require("./maximize-2");
var _maximize2Default = parcelHelpers.interopDefault(_maximize2);
var _maximize = require("./maximize");
var _maximizeDefault = parcelHelpers.interopDefault(_maximize);
var _megaphone = require("./megaphone");
var _megaphoneDefault = parcelHelpers.interopDefault(_megaphone);
var _meh = require("./meh");
var _mehDefault = parcelHelpers.interopDefault(_meh);
var _menu = require("./menu");
var _menuDefault = parcelHelpers.interopDefault(_menu);
var _messageCircle = require("./message-circle");
var _messageCircleDefault = parcelHelpers.interopDefault(_messageCircle);
var _messageSquare = require("./message-square");
var _messageSquareDefault = parcelHelpers.interopDefault(_messageSquare);
var _micOff = require("./mic-off");
var _micOffDefault = parcelHelpers.interopDefault(_micOff);
var _mic = require("./mic");
var _micDefault = parcelHelpers.interopDefault(_mic);
var _minimize2 = require("./minimize-2");
var _minimize2Default = parcelHelpers.interopDefault(_minimize2);
var _minimize = require("./minimize");
var _minimizeDefault = parcelHelpers.interopDefault(_minimize);
var _minusCircle = require("./minus-circle");
var _minusCircleDefault = parcelHelpers.interopDefault(_minusCircle);
var _minusSquare = require("./minus-square");
var _minusSquareDefault = parcelHelpers.interopDefault(_minusSquare);
var _minus = require("./minus");
var _minusDefault = parcelHelpers.interopDefault(_minus);
var _monitorOff = require("./monitor-off");
var _monitorOffDefault = parcelHelpers.interopDefault(_monitorOff);
var _monitorSpeaker = require("./monitor-speaker");
var _monitorSpeakerDefault = parcelHelpers.interopDefault(_monitorSpeaker);
var _monitor = require("./monitor");
var _monitorDefault = parcelHelpers.interopDefault(_monitor);
var _moon = require("./moon");
var _moonDefault = parcelHelpers.interopDefault(_moon);
var _moreHorizontal = require("./more-horizontal");
var _moreHorizontalDefault = parcelHelpers.interopDefault(_moreHorizontal);
var _moreVertical = require("./more-vertical");
var _moreVerticalDefault = parcelHelpers.interopDefault(_moreVertical);
var _mountainSnow = require("./mountain-snow");
var _mountainSnowDefault = parcelHelpers.interopDefault(_mountainSnow);
var _mountain = require("./mountain");
var _mountainDefault = parcelHelpers.interopDefault(_mountain);
var _mousePointer2 = require("./mouse-pointer-2");
var _mousePointer2Default = parcelHelpers.interopDefault(_mousePointer2);
var _mousePointerClick = require("./mouse-pointer-click");
var _mousePointerClickDefault = parcelHelpers.interopDefault(_mousePointerClick);
var _mousePointer = require("./mouse-pointer");
var _mousePointerDefault = parcelHelpers.interopDefault(_mousePointer);
var _moveDiagonal2 = require("./move-diagonal-2");
var _moveDiagonal2Default = parcelHelpers.interopDefault(_moveDiagonal2);
var _moveDiagonal = require("./move-diagonal");
var _moveDiagonalDefault = parcelHelpers.interopDefault(_moveDiagonal);
var _moveHorizontal = require("./move-horizontal");
var _moveHorizontalDefault = parcelHelpers.interopDefault(_moveHorizontal);
var _moveVertical = require("./move-vertical");
var _moveVerticalDefault = parcelHelpers.interopDefault(_moveVertical);
var _move = require("./move");
var _moveDefault = parcelHelpers.interopDefault(_move);
var _music = require("./music");
var _musicDefault = parcelHelpers.interopDefault(_music);
var _navigation2 = require("./navigation-2");
var _navigation2Default = parcelHelpers.interopDefault(_navigation2);
var _navigation = require("./navigation");
var _navigationDefault = parcelHelpers.interopDefault(_navigation);
var _network = require("./network");
var _networkDefault = parcelHelpers.interopDefault(_network);
var _octagon = require("./octagon");
var _octagonDefault = parcelHelpers.interopDefault(_octagon);
var _option = require("./option");
var _optionDefault = parcelHelpers.interopDefault(_option);
var _outdent = require("./outdent");
var _outdentDefault = parcelHelpers.interopDefault(_outdent);
var _packageCheck = require("./package-check");
var _packageCheckDefault = parcelHelpers.interopDefault(_packageCheck);
var _packageMinus = require("./package-minus");
var _packageMinusDefault = parcelHelpers.interopDefault(_packageMinus);
var _packagePlus = require("./package-plus");
var _packagePlusDefault = parcelHelpers.interopDefault(_packagePlus);
var _packageSearch = require("./package-search");
var _packageSearchDefault = parcelHelpers.interopDefault(_packageSearch);
var _packageX = require("./package-x");
var _packageXDefault = parcelHelpers.interopDefault(_packageX);
var _package = require("./package");
var _packageDefault = parcelHelpers.interopDefault(_package);
var _palette = require("./palette");
var _paletteDefault = parcelHelpers.interopDefault(_palette);
var _palmtree = require("./palmtree");
var _palmtreeDefault = parcelHelpers.interopDefault(_palmtree);
var _paperclip = require("./paperclip");
var _paperclipDefault = parcelHelpers.interopDefault(_paperclip);
var _pauseCircle = require("./pause-circle");
var _pauseCircleDefault = parcelHelpers.interopDefault(_pauseCircle);
var _pauseOctagon = require("./pause-octagon");
var _pauseOctagonDefault = parcelHelpers.interopDefault(_pauseOctagon);
var _pause = require("./pause");
var _pauseDefault = parcelHelpers.interopDefault(_pause);
var _penTool = require("./pen-tool");
var _penToolDefault = parcelHelpers.interopDefault(_penTool);
var _pencil = require("./pencil");
var _pencilDefault = parcelHelpers.interopDefault(_pencil);
var _percent = require("./percent");
var _percentDefault = parcelHelpers.interopDefault(_percent);
var _personStanding = require("./person-standing");
var _personStandingDefault = parcelHelpers.interopDefault(_personStanding);
var _phoneCall = require("./phone-call");
var _phoneCallDefault = parcelHelpers.interopDefault(_phoneCall);
var _phoneForwarded = require("./phone-forwarded");
var _phoneForwardedDefault = parcelHelpers.interopDefault(_phoneForwarded);
var _phoneIncoming = require("./phone-incoming");
var _phoneIncomingDefault = parcelHelpers.interopDefault(_phoneIncoming);
var _phoneMissed = require("./phone-missed");
var _phoneMissedDefault = parcelHelpers.interopDefault(_phoneMissed);
var _phoneOff = require("./phone-off");
var _phoneOffDefault = parcelHelpers.interopDefault(_phoneOff);
var _phoneOutgoing = require("./phone-outgoing");
var _phoneOutgoingDefault = parcelHelpers.interopDefault(_phoneOutgoing);
var _phone = require("./phone");
var _phoneDefault = parcelHelpers.interopDefault(_phone);
var _pieChart = require("./pie-chart");
var _pieChartDefault = parcelHelpers.interopDefault(_pieChart);
var _piggyBank = require("./piggy-bank");
var _piggyBankDefault = parcelHelpers.interopDefault(_piggyBank);
var _pin = require("./pin");
var _pinDefault = parcelHelpers.interopDefault(_pin);
var _pipette = require("./pipette");
var _pipetteDefault = parcelHelpers.interopDefault(_pipette);
var _plane = require("./plane");
var _planeDefault = parcelHelpers.interopDefault(_plane);
var _playCircle = require("./play-circle");
var _playCircleDefault = parcelHelpers.interopDefault(_playCircle);
var _play = require("./play");
var _playDefault = parcelHelpers.interopDefault(_play);
var _plugZap = require("./plug-zap");
var _plugZapDefault = parcelHelpers.interopDefault(_plugZap);
var _plusCircle = require("./plus-circle");
var _plusCircleDefault = parcelHelpers.interopDefault(_plusCircle);
var _plusSquare = require("./plus-square");
var _plusSquareDefault = parcelHelpers.interopDefault(_plusSquare);
var _plus = require("./plus");
var _plusDefault = parcelHelpers.interopDefault(_plus);
var _pocket = require("./pocket");
var _pocketDefault = parcelHelpers.interopDefault(_pocket);
var _podcast = require("./podcast");
var _podcastDefault = parcelHelpers.interopDefault(_podcast);
var _pointer = require("./pointer");
var _pointerDefault = parcelHelpers.interopDefault(_pointer);
var _poundSterling = require("./pound-sterling");
var _poundSterlingDefault = parcelHelpers.interopDefault(_poundSterling);
var _powerOff = require("./power-off");
var _powerOffDefault = parcelHelpers.interopDefault(_powerOff);
var _power = require("./power");
var _powerDefault = parcelHelpers.interopDefault(_power);
var _printer = require("./printer");
var _printerDefault = parcelHelpers.interopDefault(_printer);
var _qrCode = require("./qr-code");
var _qrCodeDefault = parcelHelpers.interopDefault(_qrCode);
var _quote = require("./quote");
var _quoteDefault = parcelHelpers.interopDefault(_quote);
var _radioReceiver = require("./radio-receiver");
var _radioReceiverDefault = parcelHelpers.interopDefault(_radioReceiver);
var _radio = require("./radio");
var _radioDefault = parcelHelpers.interopDefault(_radio);
var _redo = require("./redo");
var _redoDefault = parcelHelpers.interopDefault(_redo);
var _refreshCcw = require("./refresh-ccw");
var _refreshCcwDefault = parcelHelpers.interopDefault(_refreshCcw);
var _refreshCw = require("./refresh-cw");
var _refreshCwDefault = parcelHelpers.interopDefault(_refreshCw);
var _regex = require("./regex");
var _regexDefault = parcelHelpers.interopDefault(_regex);
var _repeat1 = require("./repeat-1");
var _repeat1Default = parcelHelpers.interopDefault(_repeat1);
var _repeat = require("./repeat");
var _repeatDefault = parcelHelpers.interopDefault(_repeat);
var _replyAll = require("./reply-all");
var _replyAllDefault = parcelHelpers.interopDefault(_replyAll);
var _reply = require("./reply");
var _replyDefault = parcelHelpers.interopDefault(_reply);
var _rewind = require("./rewind");
var _rewindDefault = parcelHelpers.interopDefault(_rewind);
var _rocket = require("./rocket");
var _rocketDefault = parcelHelpers.interopDefault(_rocket);
var _rockingChair = require("./rocking-chair");
var _rockingChairDefault = parcelHelpers.interopDefault(_rockingChair);
var _rotateCcw = require("./rotate-ccw");
var _rotateCcwDefault = parcelHelpers.interopDefault(_rotateCcw);
var _rotateCw = require("./rotate-cw");
var _rotateCwDefault = parcelHelpers.interopDefault(_rotateCw);
var _rss = require("./rss");
var _rssDefault = parcelHelpers.interopDefault(_rss);
var _ruler = require("./ruler");
var _rulerDefault = parcelHelpers.interopDefault(_ruler);
var _russianRuble = require("./russian-ruble");
var _russianRubleDefault = parcelHelpers.interopDefault(_russianRuble);
var _save = require("./save");
var _saveDefault = parcelHelpers.interopDefault(_save);
var _scale = require("./scale");
var _scaleDefault = parcelHelpers.interopDefault(_scale);
var _scanLine = require("./scan-line");
var _scanLineDefault = parcelHelpers.interopDefault(_scanLine);
var _scan = require("./scan");
var _scanDefault = parcelHelpers.interopDefault(_scan);
var _scissors = require("./scissors");
var _scissorsDefault = parcelHelpers.interopDefault(_scissors);
var _screenShareOff = require("./screen-share-off");
var _screenShareOffDefault = parcelHelpers.interopDefault(_screenShareOff);
var _screenShare = require("./screen-share");
var _screenShareDefault = parcelHelpers.interopDefault(_screenShare);
var _search = require("./search");
var _searchDefault = parcelHelpers.interopDefault(_search);
var _send = require("./send");
var _sendDefault = parcelHelpers.interopDefault(_send);
var _separatorHorizontal = require("./separator-horizontal");
var _separatorHorizontalDefault = parcelHelpers.interopDefault(_separatorHorizontal);
var _separatorVertical = require("./separator-vertical");
var _separatorVerticalDefault = parcelHelpers.interopDefault(_separatorVertical);
var _serverCrash = require("./server-crash");
var _serverCrashDefault = parcelHelpers.interopDefault(_serverCrash);
var _serverOff = require("./server-off");
var _serverOffDefault = parcelHelpers.interopDefault(_serverOff);
var _server = require("./server");
var _serverDefault = parcelHelpers.interopDefault(_server);
var _settings2 = require("./settings-2");
var _settings2Default = parcelHelpers.interopDefault(_settings2);
var _settings = require("./settings");
var _settingsDefault = parcelHelpers.interopDefault(_settings);
var _share2 = require("./share-2");
var _share2Default = parcelHelpers.interopDefault(_share2);
var _share = require("./share");
var _shareDefault = parcelHelpers.interopDefault(_share);
var _sheet = require("./sheet");
var _sheetDefault = parcelHelpers.interopDefault(_sheet);
var _shieldAlert = require("./shield-alert");
var _shieldAlertDefault = parcelHelpers.interopDefault(_shieldAlert);
var _shieldCheck = require("./shield-check");
var _shieldCheckDefault = parcelHelpers.interopDefault(_shieldCheck);
var _shieldClose = require("./shield-close");
var _shieldCloseDefault = parcelHelpers.interopDefault(_shieldClose);
var _shieldOff = require("./shield-off");
var _shieldOffDefault = parcelHelpers.interopDefault(_shieldOff);
var _shield = require("./shield");
var _shieldDefault = parcelHelpers.interopDefault(_shield);
var _shirt = require("./shirt");
var _shirtDefault = parcelHelpers.interopDefault(_shirt);
var _shoppingBag = require("./shopping-bag");
var _shoppingBagDefault = parcelHelpers.interopDefault(_shoppingBag);
var _shoppingCart = require("./shopping-cart");
var _shoppingCartDefault = parcelHelpers.interopDefault(_shoppingCart);
var _shovel = require("./shovel");
var _shovelDefault = parcelHelpers.interopDefault(_shovel);
var _shrink = require("./shrink");
var _shrinkDefault = parcelHelpers.interopDefault(_shrink);
var _shuffle = require("./shuffle");
var _shuffleDefault = parcelHelpers.interopDefault(_shuffle);
var _sidebarClose = require("./sidebar-close");
var _sidebarCloseDefault = parcelHelpers.interopDefault(_sidebarClose);
var _sidebarOpen = require("./sidebar-open");
var _sidebarOpenDefault = parcelHelpers.interopDefault(_sidebarOpen);
var _sidebar = require("./sidebar");
var _sidebarDefault = parcelHelpers.interopDefault(_sidebar);
var _sigma = require("./sigma");
var _sigmaDefault = parcelHelpers.interopDefault(_sigma);
var _signalHigh = require("./signal-high");
var _signalHighDefault = parcelHelpers.interopDefault(_signalHigh);
var _signalLow = require("./signal-low");
var _signalLowDefault = parcelHelpers.interopDefault(_signalLow);
var _signalMedium = require("./signal-medium");
var _signalMediumDefault = parcelHelpers.interopDefault(_signalMedium);
var _signalZero = require("./signal-zero");
var _signalZeroDefault = parcelHelpers.interopDefault(_signalZero);
var _signal = require("./signal");
var _signalDefault = parcelHelpers.interopDefault(_signal);
var _skipBack = require("./skip-back");
var _skipBackDefault = parcelHelpers.interopDefault(_skipBack);
var _skipForward = require("./skip-forward");
var _skipForwardDefault = parcelHelpers.interopDefault(_skipForward);
var _skull = require("./skull");
var _skullDefault = parcelHelpers.interopDefault(_skull);
var _slack = require("./slack");
var _slackDefault = parcelHelpers.interopDefault(_slack);
var _slash = require("./slash");
var _slashDefault = parcelHelpers.interopDefault(_slash);
var _sliders = require("./sliders");
var _slidersDefault = parcelHelpers.interopDefault(_sliders);
var _smartphoneCharging = require("./smartphone-charging");
var _smartphoneChargingDefault = parcelHelpers.interopDefault(_smartphoneCharging);
var _smartphone = require("./smartphone");
var _smartphoneDefault = parcelHelpers.interopDefault(_smartphone);
var _smile = require("./smile");
var _smileDefault = parcelHelpers.interopDefault(_smile);
var _snowflake = require("./snowflake");
var _snowflakeDefault = parcelHelpers.interopDefault(_snowflake);
var _sortAsc = require("./sort-asc");
var _sortAscDefault = parcelHelpers.interopDefault(_sortAsc);
var _sortDesc = require("./sort-desc");
var _sortDescDefault = parcelHelpers.interopDefault(_sortDesc);
var _speaker = require("./speaker");
var _speakerDefault = parcelHelpers.interopDefault(_speaker);
var _sprout = require("./sprout");
var _sproutDefault = parcelHelpers.interopDefault(_sprout);
var _square = require("./square");
var _squareDefault = parcelHelpers.interopDefault(_square);
var _starHalf = require("./star-half");
var _starHalfDefault = parcelHelpers.interopDefault(_starHalf);
var _star = require("./star");
var _starDefault = parcelHelpers.interopDefault(_star);
var _stopCircle = require("./stop-circle");
var _stopCircleDefault = parcelHelpers.interopDefault(_stopCircle);
var _stretchHorizontal = require("./stretch-horizontal");
var _stretchHorizontalDefault = parcelHelpers.interopDefault(_stretchHorizontal);
var _stretchVertical = require("./stretch-vertical");
var _stretchVerticalDefault = parcelHelpers.interopDefault(_stretchVertical);
var _strikethrough = require("./strikethrough");
var _strikethroughDefault = parcelHelpers.interopDefault(_strikethrough);
var _subscript = require("./subscript");
var _subscriptDefault = parcelHelpers.interopDefault(_subscript);
var _sun = require("./sun");
var _sunDefault = parcelHelpers.interopDefault(_sun);
var _sunrise = require("./sunrise");
var _sunriseDefault = parcelHelpers.interopDefault(_sunrise);
var _sunset = require("./sunset");
var _sunsetDefault = parcelHelpers.interopDefault(_sunset);
var _superscript = require("./superscript");
var _superscriptDefault = parcelHelpers.interopDefault(_superscript);
var _swissFranc = require("./swiss-franc");
var _swissFrancDefault = parcelHelpers.interopDefault(_swissFranc);
var _switchCamera = require("./switch-camera");
var _switchCameraDefault = parcelHelpers.interopDefault(_switchCamera);
var _table = require("./table");
var _tableDefault = parcelHelpers.interopDefault(_table);
var _tablet = require("./tablet");
var _tabletDefault = parcelHelpers.interopDefault(_tablet);
var _tag = require("./tag");
var _tagDefault = parcelHelpers.interopDefault(_tag);
var _target = require("./target");
var _targetDefault = parcelHelpers.interopDefault(_target);
var _tent = require("./tent");
var _tentDefault = parcelHelpers.interopDefault(_tent);
var _terminalSquare = require("./terminal-square");
var _terminalSquareDefault = parcelHelpers.interopDefault(_terminalSquare);
var _terminal = require("./terminal");
var _terminalDefault = parcelHelpers.interopDefault(_terminal);
var _textCursorInput = require("./text-cursor-input");
var _textCursorInputDefault = parcelHelpers.interopDefault(_textCursorInput);
var _textCursor = require("./text-cursor");
var _textCursorDefault = parcelHelpers.interopDefault(_textCursor);
var _thermometerSnowflake = require("./thermometer-snowflake");
var _thermometerSnowflakeDefault = parcelHelpers.interopDefault(_thermometerSnowflake);
var _thermometerSun = require("./thermometer-sun");
var _thermometerSunDefault = parcelHelpers.interopDefault(_thermometerSun);
var _thermometer = require("./thermometer");
var _thermometerDefault = parcelHelpers.interopDefault(_thermometer);
var _thumbsDown = require("./thumbs-down");
var _thumbsDownDefault = parcelHelpers.interopDefault(_thumbsDown);
var _thumbsUp = require("./thumbs-up");
var _thumbsUpDefault = parcelHelpers.interopDefault(_thumbsUp);
var _ticket = require("./ticket");
var _ticketDefault = parcelHelpers.interopDefault(_ticket);
var _timerOff = require("./timer-off");
var _timerOffDefault = parcelHelpers.interopDefault(_timerOff);
var _timerReset = require("./timer-reset");
var _timerResetDefault = parcelHelpers.interopDefault(_timerReset);
var _timer = require("./timer");
var _timerDefault = parcelHelpers.interopDefault(_timer);
var _toggleLeft = require("./toggle-left");
var _toggleLeftDefault = parcelHelpers.interopDefault(_toggleLeft);
var _toggleRight = require("./toggle-right");
var _toggleRightDefault = parcelHelpers.interopDefault(_toggleRight);
var _tornado = require("./tornado");
var _tornadoDefault = parcelHelpers.interopDefault(_tornado);
var _trash2 = require("./trash-2");
var _trash2Default = parcelHelpers.interopDefault(_trash2);
var _trash = require("./trash");
var _trashDefault = parcelHelpers.interopDefault(_trash);
var _trello = require("./trello");
var _trelloDefault = parcelHelpers.interopDefault(_trello);
var _trendingDown = require("./trending-down");
var _trendingDownDefault = parcelHelpers.interopDefault(_trendingDown);
var _trendingUp = require("./trending-up");
var _trendingUpDefault = parcelHelpers.interopDefault(_trendingUp);
var _triangle = require("./triangle");
var _triangleDefault = parcelHelpers.interopDefault(_triangle);
var _truck = require("./truck");
var _truckDefault = parcelHelpers.interopDefault(_truck);
var _tv2 = require("./tv-2");
var _tv2Default = parcelHelpers.interopDefault(_tv2);
var _tv = require("./tv");
var _tvDefault = parcelHelpers.interopDefault(_tv);
var _twitch = require("./twitch");
var _twitchDefault = parcelHelpers.interopDefault(_twitch);
var _twitter = require("./twitter");
var _twitterDefault = parcelHelpers.interopDefault(_twitter);
var _type = require("./type");
var _typeDefault = parcelHelpers.interopDefault(_type);
var _umbrella = require("./umbrella");
var _umbrellaDefault = parcelHelpers.interopDefault(_umbrella);
var _underline = require("./underline");
var _underlineDefault = parcelHelpers.interopDefault(_underline);
var _undo = require("./undo");
var _undoDefault = parcelHelpers.interopDefault(_undo);
var _unlink2 = require("./unlink-2");
var _unlink2Default = parcelHelpers.interopDefault(_unlink2);
var _unlink = require("./unlink");
var _unlinkDefault = parcelHelpers.interopDefault(_unlink);
var _unlock = require("./unlock");
var _unlockDefault = parcelHelpers.interopDefault(_unlock);
var _uploadCloud = require("./upload-cloud");
var _uploadCloudDefault = parcelHelpers.interopDefault(_uploadCloud);
var _upload = require("./upload");
var _uploadDefault = parcelHelpers.interopDefault(_upload);
var _userCheck = require("./user-check");
var _userCheckDefault = parcelHelpers.interopDefault(_userCheck);
var _userMinus = require("./user-minus");
var _userMinusDefault = parcelHelpers.interopDefault(_userMinus);
var _userPlus = require("./user-plus");
var _userPlusDefault = parcelHelpers.interopDefault(_userPlus);
var _userX = require("./user-x");
var _userXDefault = parcelHelpers.interopDefault(_userX);
var _user = require("./user");
var _userDefault = parcelHelpers.interopDefault(_user);
var _users = require("./users");
var _usersDefault = parcelHelpers.interopDefault(_users);
var _verified = require("./verified");
var _verifiedDefault = parcelHelpers.interopDefault(_verified);
var _vibrate = require("./vibrate");
var _vibrateDefault = parcelHelpers.interopDefault(_vibrate);
var _videoOff = require("./video-off");
var _videoOffDefault = parcelHelpers.interopDefault(_videoOff);
var _video = require("./video");
var _videoDefault = parcelHelpers.interopDefault(_video);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _voicemail = require("./voicemail");
var _voicemailDefault = parcelHelpers.interopDefault(_voicemail);
var _volume1 = require("./volume-1");
var _volume1Default = parcelHelpers.interopDefault(_volume1);
var _volume2 = require("./volume-2");
var _volume2Default = parcelHelpers.interopDefault(_volume2);
var _volumeX = require("./volume-x");
var _volumeXDefault = parcelHelpers.interopDefault(_volumeX);
var _volume = require("./volume");
var _volumeDefault = parcelHelpers.interopDefault(_volume);
var _wallet = require("./wallet");
var _walletDefault = parcelHelpers.interopDefault(_wallet);
var _wand = require("./wand");
var _wandDefault = parcelHelpers.interopDefault(_wand);
var _watch = require("./watch");
var _watchDefault = parcelHelpers.interopDefault(_watch);
var _waves = require("./waves");
var _wavesDefault = parcelHelpers.interopDefault(_waves);
var _webcam = require("./webcam");
var _webcamDefault = parcelHelpers.interopDefault(_webcam);
var _wifiOff = require("./wifi-off");
var _wifiOffDefault = parcelHelpers.interopDefault(_wifiOff);
var _wifi = require("./wifi");
var _wifiDefault = parcelHelpers.interopDefault(_wifi);
var _wind = require("./wind");
var _windDefault = parcelHelpers.interopDefault(_wind);
var _wrapText = require("./wrap-text");
var _wrapTextDefault = parcelHelpers.interopDefault(_wrapText);
var _wrench = require("./wrench");
var _wrenchDefault = parcelHelpers.interopDefault(_wrench);
var _xCircle = require("./x-circle");
var _xCircleDefault = parcelHelpers.interopDefault(_xCircle);
var _xOctagon = require("./x-octagon");
var _xOctagonDefault = parcelHelpers.interopDefault(_xOctagon);
var _xSquare = require("./x-square");
var _xSquareDefault = parcelHelpers.interopDefault(_xSquare);
var _x = require("./x");
var _xDefault = parcelHelpers.interopDefault(_x);
var _youtube = require("./youtube");
var _youtubeDefault = parcelHelpers.interopDefault(_youtube);
var _zapOff = require("./zap-off");
var _zapOffDefault = parcelHelpers.interopDefault(_zapOff);
var _zap = require("./zap");
var _zapDefault = parcelHelpers.interopDefault(_zap);
var _zoomIn = require("./zoom-in");
var _zoomInDefault = parcelHelpers.interopDefault(_zoomIn);
var _zoomOut = require("./zoom-out");
var _zoomOutDefault = parcelHelpers.interopDefault(_zoomOut);

},{"./activity":"gNVk2","./airplay":"hN0Kk","./alarm-check":"cYzsi","./alarm-clock-off":"5FTzN","./alarm-clock":"5eSXD","./alarm-minus":"bJ8xC","./alarm-plus":"1sXLN","./album":"eESEg","./alert-circle":"gXuOa","./alert-octagon":"jUZnV","./alert-triangle":"bmOAt","./align-center-horizontal":"alDc5","./align-center-vertical":"SooCx","./align-center":"dA58d","./align-end-horizontal":"9i1zF","./align-end-vertical":"chBKU","./align-horizontal-distribute-center":"8jhgf","./align-horizontal-distribute-end":"8Qapb","./align-horizontal-distribute-start":"adjCU","./align-horizontal-justify-center":"cfqxh","./align-horizontal-justify-end":"3xyGr","./align-horizontal-justify-start":"7tlwQ","./align-horizontal-space-around":"aT6E3","./align-horizontal-space-between":"1Kyog","./align-justify":"383iU","./align-left":"aOZI6","./align-right":"gs7js","./align-start-horizontal":"4AIKN","./align-start-vertical":"1aFM7","./align-vertical-distribute-center":"6OpTK","./align-vertical-distribute-end":"3fENz","./align-vertical-distribute-start":"04yAc","./align-vertical-justify-center":"5gOZS","./align-vertical-justify-end":"dwxIy","./align-vertical-justify-start":"4Fh4M","./align-vertical-space-around":"6U7Qa","./align-vertical-space-between":"5Nthh","./anchor":"2Z3Kl","./aperture":"jvThZ","./archive":"cFuty","./arrow-big-down":"6q3IA","./arrow-big-left":"4iw1B","./arrow-big-right":"afqPB","./arrow-big-up":"57STT","./arrow-down-circle":"jSlMs","./arrow-down-left":"GL3K5","./arrow-down-right":"i3LQu","./arrow-down":"Myx7y","./arrow-left-circle":"3Lxfv","./arrow-left-right":"gQ69K","./arrow-left":"6VDiE","./arrow-right-circle":"39uyV","./arrow-right":"lQVP6","./arrow-up-circle":"9vMLa","./arrow-up-left":"5CqQe","./arrow-up-right":"jMV9i","./arrow-up":"iaUh8","./asterisk":"kHEES","./at-sign":"cDfbL","./award":"j4j0f","./axe":"4jdhh","./banknote":"bGqMt","./bar-chart-2":"9bGMs","./bar-chart":"jhhTF","./baseline":"knYFy","./battery-charging":"2qR7J","./battery-full":"1JeR9","./battery-low":"4uGKA","./battery-medium":"aBIs8","./battery":"d6Qnf","./beaker":"6B9J6","./bell-minus":"4ORSi","./bell-off":"8GM6J","./bell-plus":"jSZWr","./bell-ring":"hkGMF","./bell":"VXSuW","./bike":"6DFgw","./binary":"hhGVx","./bitcoin":"d1vJ8","./bluetooth-connected":"eYgp2","./bluetooth-off":"3Nker","./bluetooth-searching":"bWspU","./bluetooth":"6WYAl","./bold":"7BFbS","./book-open":"aMhjL","./book":"l4hMD","./bookmark-minus":"9B50O","./bookmark-plus":"cHRmd","./bookmark":"6z1HZ","./bot":"eXGcj","./box-select":"58tY4","./box":"7T2lH","./briefcase":"1kN9d","./brush":"2Gf4C","./bug":"jcRFE","./building":"7G4ZU","./bus":"4MIyp","./calculator":"gzeZk","./calendar":"IQ514","./camera-off":"lr2UC","./camera":"5MVcQ","./car":"djjUn","./carrot":"f3lyH","./cast":"gyexc","./check-circle-2":"bDa3Q","./check-circle":"eRWZA","./check-square":"kDKLI","./check":"2Vcmp","./chevron-down":"8twXJ","./chevron-first":"6UGGq","./chevron-last":"aTWqi","./chevron-left":"lG0NT","./chevron-right":"cNdOq","./chevron-up":"3ftfv","./chevrons-down-up":"6U4hH","./chevrons-down":"hY6wA","./chevrons-left":"k1i47","./chevrons-right":"7S4O2","./chevrons-up-down":"9RWgA","./chevrons-up":"7M4Di","./chrome":"7bthl","./circle-slashed":"3dSzl","./circle":"evIOZ","./clipboard-check":"1vFff","./clipboard-copy":"2bIVc","./clipboard-list":"6Jejg","./clipboard-x":"2RF7q","./clipboard":"9Rk5Q","./clock-1":"iTPJd","./clock-10":"5mUOC","./clock-11":"kchL4","./clock-12":"5gtD2","./clock-2":"dxsI3","./clock-3":"18Lvc","./clock-4":"cXYHt","./clock-5":"bz07C","./clock-6":"dE90Q","./clock-7":"57F0U","./clock-8":"5jFIR","./clock-9":"Tvj4p","./clock":"fzw7w","./cloud-drizzle":"7S9Rc","./cloud-fog":"dwGCe","./cloud-hail":"1hJnS","./cloud-lightning":"2Myye","./cloud-moon":"8Qwvl","./cloud-off":"cK3DG","./cloud-rain-wind":"gnr31","./cloud-rain":"cBWWG","./cloud-snow":"9xSe5","./cloud-sun":"2w014","./cloud":"5t6on","./cloudy":"2rIeJ","./clover":"jDVEy","./code-2":"7YXJY","./code":"bXaMx","./codepen":"jC8WN","./codesandbox":"aHBDw","./coffee":"jptCK","./coins":"hul1u","./columns":"j4xmz","./command":"6BO8T","./compass":"hzFiA","./contact":"hfkaU","./contrast":"bQWlF","./cookie":"dS2wB","./copy":"4PdZ5","./copyleft":"9dmVo","./copyright":"4c6jQ","./corner-down-left":"6fMfu","./corner-down-right":"5rxcR","./corner-left-down":"ayqxp","./corner-left-up":"c61BD","./corner-right-down":"NqtSu","./corner-right-up":"7ZWdX","./corner-up-left":"ePR5l","./corner-up-right":"fbsBF","./cpu":"8Xrpb","./credit-card":"gx91c","./crop":"fnS8L","./cross":"g4Nxs","./crosshair":"aGa5J","./crown":"e1N2Q","./currency":"aodaY","./database":"jm3XW","./delete":"5OgY2","./dice-1":"4THV8","./dice-2":"cz9DV","./dice-3":"Yp5BE","./dice-4":"clnyS","./dice-5":"1y65u","./dice-6":"330zy","./disc":"ji9DO","./divide-circle":"exRJc","./divide-square":"g6z8p","./divide":"8iOQd","./dollar-sign":"c8FnZ","./download-cloud":"fiJes","./download":"1BbVl","./dribbble":"bsKfs","./droplet":"jDBna","./droplets":"3JXFx","./drumstick":"dM5pL","./edit-2":"bavYY","./edit-3":"jSoVf","./edit":"6VvPd","./egg":"f3Edg","./equal-not":"jktdN","./equal":"5wQh6","./euro":"cSTv2","./expand":"5lqNL","./external-link":"bv0ss","./eye-off":"7Sed1","./eye":"dXo9g","./facebook":"kpr5o","./fast-forward":"lbaL7","./feather":"1ZCle","./figma":"fG72k","./file-check-2":"31sXC","./file-check":"62GUG","./file-code":"eRpte","./file-digit":"37kXi","./file-input":"l5fpR","./file-minus-2":"dIauH","./file-minus":"itBUJ","./file-output":"babBX","./file-plus-2":"ii8c1","./file-plus":"7ImM0","./file-search":"8pwLQ","./file-text":"jjUqY","./file-x-2":"7acW7","./file-x":"8M8cs","./file":"fS8yX","./files":"4gVLP","./film":"4t1Fo","./filter":"kJGU2","./flag-triangle-left":"jqUYR","./flag-triangle-right":"fRmRL","./flag":"jLro0","./flame":"oICf9","./flashlight-off":"40lnE","./flashlight":"j5Cy0","./flask-conical":"5tDpL","./flask-round":"hGyuy","./folder-minus":"cOkHS","./folder-open":"i25C8","./folder-plus":"jzVFH","./folder":"9wI4J","./form-input":"5A259","./forward":"7rPCA","./framer":"ho6cy","./frown":"2aRjX","./function-square":"7qBOx","./gamepad-2":"5xmBa","./gamepad":"2KGkH","./gauge":"8DYno","./gavel":"l9sol","./gem":"iXqmm","./ghost":"2My7r","./gift":"350cH","./git-branch-plus":"ifznb","./git-branch":"6F41o","./git-commit":"ecBEW","./git-fork":"8ECya","./git-merge":"hU97q","./git-pull-request":"fHOV8","./github":"7UPmy","./gitlab":"l7SAn","./glasses":"8T15c","./globe-2":"b8y6L","./globe":"3Qc32","./grab":"4gwHF","./graduation-cap":"lc6Qk","./grid":"dSPCt","./grip-horizontal":"27JR9","./grip-vertical":"1VA2i","./hammer":"e8Jcb","./hand-metal":"3DjF7","./hand":"cjCb3","./hard-drive":"gwcFC","./hard-hat":"2qwZz","./hash":"cpi6E","./haze":"6azQN","./headphones":"kokQK","./heart":"cEjBr","./help-circle":"lXYjp","./hexagon":"cDJ3x","./highlighter":"dCEOg","./history":"2gyWe","./home":"kWXdS","./image-minus":"d6Oww","./image-off":"bXB4K","./image-plus":"1FkR1","./image":"iM2K8","./import":"ju4CJ","./inbox":"b4ozu","./indent":"5uU9S","./indian-rupee":"3Ynu1","./infinity":"JucDh","./info":"hA69c","./inspect":"eK2sn","./instagram":"cW7Tg","./italic":"fKz5U","./japanese-yen":"mnYBY","./key":"1ULTs","./keyboard":"9FLLa","./landmark":"4qgOc","./languages":"fMcSf","./laptop-2":"lu2xQ","./laptop":"1l3i7","./lasso-select":"1VjXt","./lasso":"j92oF","./layers":"kIX6g","./layout-dashboard":"7oDSD","./layout-grid":"ksAue","./layout-list":"549lW","./layout-template":"hbV9G","./layout":"aDcTL","./library":"21dNn","./life-buoy":"3oBcI","./lightbulb-off":"j7ReP","./lightbulb":"6Ulf9","./link-2-off":"5JJxD","./link-2":"5tNP3","./link":"ijV11","./linkedin":"5flf5","./list-checks":"9hEB9","./list-minus":"jedJl","./list-ordered":"hS6fz","./list-plus":"aXf00","./list-x":"j2JXR","./list":"2KW06","./loader-2":"8MD0o","./loader":"kbMQ8","./locate-fixed":"ewd0f","./locate-off":"9tw5J","./locate":"8fYt1","./lock":"brnIL","./log-in":"1mRg1","./log-out":"buv0z","./mail":"9O6by","./map-pin":"dEcjK","./map":"kfIGr","./maximize-2":"6oZGW","./maximize":"0hZQ9","./megaphone":"6aCFG","./meh":"eq3D8","./menu":"2h0Ss","./message-circle":"kOQiJ","./message-square":"hru9D","./mic-off":"gah5K","./mic":"7kFvg","./minimize-2":"fIO0i","./minimize":"ae6ix","./minus-circle":"2s41G","./minus-square":"lsDYX","./minus":"9dT67","./monitor-off":"gg4qL","./monitor-speaker":"gsw22","./monitor":"bs2wo","./moon":"2H4M0","./more-horizontal":"9QGaT","./more-vertical":"k61mh","./mountain-snow":"2eSOn","./mountain":"bNwNY","./mouse-pointer-2":"1C8Ks","./mouse-pointer-click":"2tbZe","./mouse-pointer":"24Vsr","./move-diagonal-2":"kKDPa","./move-diagonal":"d1XDN","./move-horizontal":"13Uaa","./move-vertical":"30bqI","./move":"kXPmb","./music":"d17PO","./navigation-2":"1nTjL","./navigation":"eXkY5","./network":"gg2cp","./octagon":"d3Ywo","./option":"7h2Sr","./outdent":"9w5r5","./package-check":"3OFk3","./package-minus":"5qgk6","./package-plus":"lHGK6","./package-search":"9e2Yv","./package-x":"lW0hN","./package":"2UseJ","./palette":"1tDVd","./palmtree":"2KheW","./paperclip":"hJGyv","./pause-circle":"gEvP1","./pause-octagon":"fggH6","./pause":"7m2i6","./pen-tool":"9sHg1","./pencil":"hMwDO","./percent":"jAAip","./person-standing":"4H7zJ","./phone-call":"b9Dgr","./phone-forwarded":"8VqWh","./phone-incoming":"6u3Kg","./phone-missed":"bGbEU","./phone-off":"1DJ8r","./phone-outgoing":"ff8q8","./phone":"lSfwc","./pie-chart":"esxvC","./piggy-bank":"9HUws","./pin":"b6Xst","./pipette":"fX3M8","./plane":"8lXky","./play-circle":"kBEwa","./play":"lPk8B","./plug-zap":"l4b9h","./plus-circle":"l48sy","./plus-square":"o7QiI","./plus":"biQVO","./pocket":"ftmdf","./podcast":"58WeM","./pointer":"eE0yj","./pound-sterling":"lyaze","./power-off":"5uP2Z","./power":"fdKlp","./printer":"gRwGn","./qr-code":"2bwjX","./quote":"gESEq","./radio-receiver":"eZWjs","./radio":"kmrGr","./redo":"ioWTX","./refresh-ccw":"6jWcW","./refresh-cw":"RqSBN","./regex":"6hIDU","./repeat-1":"2TWvu","./repeat":"caJaE","./reply-all":"6fU6c","./reply":"habN6","./rewind":"9vAiw","./rocket":"7ipzq","./rocking-chair":"d4GGk","./rotate-ccw":"3gXeY","./rotate-cw":"6JOMW","./rss":"eXfB3","./ruler":"bqs8z","./russian-ruble":"hwljc","./save":"65VqB","./scale":"c2yEn","./scan-line":"dvF1c","./scan":"b3phQ","./scissors":"hmlsR","./screen-share-off":"lqfWs","./screen-share":"kRFxY","./search":"sFgi8","./send":"hUO3z","./separator-horizontal":"3aHBX","./separator-vertical":"2WA2H","./server-crash":"8jgEu","./server-off":"cMVkr","./server":"aR5oA","./settings-2":"74xD8","./settings":"a3aRb","./share-2":"4Bptl","./share":"1JFzm","./sheet":"6tFxz","./shield-alert":"934cN","./shield-check":"1feXJ","./shield-close":"132z7","./shield-off":"kYd7i","./shield":"gzqzM","./shirt":"j0WXb","./shopping-bag":"gVxqX","./shopping-cart":"42QFo","./shovel":"8LDZR","./shrink":"jZkl7","./shuffle":"1iYkE","./sidebar-close":"5UIGd","./sidebar-open":"2N0zC","./sidebar":"aR5U5","./sigma":"5SFv3","./signal-high":"eoObg","./signal-low":"cS6im","./signal-medium":"j3esH","./signal-zero":"5qn5Y","./signal":"kXFV4","./skip-back":"1HKaK","./skip-forward":"fUpT5","./skull":"bxoUz","./slack":"7RYJm","./slash":"g4JAA","./sliders":"lpATG","./smartphone-charging":"hGtRi","./smartphone":"6ucT4","./smile":"2t6m8","./snowflake":"yu1Cm","./sort-asc":"cF9cu","./sort-desc":"5wEqW","./speaker":"e1PzC","./sprout":"20j3m","./square":"fnk25","./star-half":"9oZQI","./star":"6HEl5","./stop-circle":"3HcJH","./stretch-horizontal":"eCfjG","./stretch-vertical":"1TJiz","./strikethrough":"hqJ8A","./subscript":"igmm7","./sun":"jdy6I","./sunrise":"b5kCa","./sunset":"eo6Q4","./superscript":"lgWYW","./swiss-franc":"enR4J","./switch-camera":"clmWk","./table":"9OEkl","./tablet":"ji6vc","./tag":"io6vM","./target":"7bm8c","./tent":"5W3rh","./terminal-square":"atO1A","./terminal":"5EnmJ","./text-cursor-input":"arWnp","./text-cursor":"k42Rf","./thermometer-snowflake":"1gfMV","./thermometer-sun":"apUEq","./thermometer":"3H99l","./thumbs-down":"brr2y","./thumbs-up":"bdbAc","./ticket":"jzJLh","./timer-off":"i3Ttf","./timer-reset":"fqTJ3","./timer":"gHKcO","./toggle-left":"67hyC","./toggle-right":"ckJzo","./tornado":"1jzzP","./trash-2":"htxYw","./trash":"ccPkT","./trello":"jTa8t","./trending-down":"eh94r","./trending-up":"l6HdL","./triangle":"lW04E","./truck":"3eOMC","./tv-2":"ds8gK","./tv":"bbyDg","./twitch":"asEHZ","./twitter":"4a48k","./type":"1zwpz","./umbrella":"9eF8n","./underline":"6I0vz","./undo":"9ZJOG","./unlink-2":"7CKnu","./unlink":"lz4qi","./unlock":"c18FV","./upload-cloud":"gnWQv","./upload":"iz34q","./user-check":"eGcXp","./user-minus":"lsVOU","./user-plus":"77rGq","./user-x":"8SXtr","./user":"mdXCb","./users":"dk2UQ","./verified":"f1oao","./vibrate":"45ezd","./video-off":"1B8vn","./video":"cFrck","./view":"eR2fC","./voicemail":"8CS1d","./volume-1":"eDeIg","./volume-2":"BvLro","./volume-x":"2xuGw","./volume":"8hx7Z","./wallet":"e2JYP","./wand":"3btSq","./watch":"khtt7","./waves":"kACXo","./webcam":"01qSn","./wifi-off":"jYDS0","./wifi":"kHOSS","./wind":"UgSc1","./wrap-text":"9SY5b","./wrench":"g2cbT","./x-circle":"4z6ZS","./x-octagon":"395jh","./x-square":"dLjz8","./x":"eKQ4I","./youtube":"543FQ","./zap-off":"jZGQR","./zap":"9XphR","./zoom-in":"jTWDE","./zoom-out":"aut50","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gNVk2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Activity = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '22 12 18 12 15 21 9 3 6 12 2 12'
            }
        ]
    ]
];
exports.default = Activity;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7NOpc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': 2,
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hN0Kk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Airplay = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1'
            }
        ],
        [
            'polygon',
            {
                points: '12 15 17 21 7 21 12 15'
            }
        ]
    ]
];
exports.default = Airplay;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cYzsi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var AlarmCheck = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M12 21a8 8 0 100-16 8 8 0 000 16z'
            }
        ],
        [
            'path',
            {
                d: 'M5 3L2 6'
            }
        ],
        [
            'path',
            {
                d: 'M22 6l-3-3'
            }
        ],
        [
            'path',
            {
                d: 'M6 19l-2 2'
            }
        ],
        [
            'path',
            {
                d: 'M18 19l2 2'
            }
        ],
        [
            'path',
            {
                d: 'M9 13l2 2 4-4'
            }
        ]
    ]
];
exports.default = AlarmCheck;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5FTzN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var AlarmClockOff = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M19.94 14A8 8 0 0010 5.25m8.13 12.89A8 8 0 116.87 6.86'
            }
        ],
        [
            'path',
            {
                d: 'M22 6l-3-3'
            }
        ],
        [
            'path',
            {
                d: 'M6 19l-2 2'
            }
        ],
        [
            'path',
            {
                d: 'M2 2l20 20'
            }
        ],
        [
            'path',
            {
                d: 'M4 4L2 6'
            }
        ]
    ]
];
exports.default = AlarmClockOff;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5eSXD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var AlarmClock = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '13',
                r: '8'
            }
        ],
        [
            'path',
            {
                d: 'M12 9v4l2 2'
            }
        ],
        [
            'path',
            {
                d: 'M5 3L2 6'
            }
        ],
        [
            'path',
            {
                d: 'M22 6l-3-3'
            }
        ],
        [
            'path',
            {
                d: 'M6 19l-2 2'
            }
        ],
        [
            'path',
            {
                d: 'M18 19l2 2'
            }
        ]
    ]
];
exports.default = AlarmClock;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bJ8xC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var AlarmMinus = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M12 21a8 8 0 100-16 8 8 0 000 16z'
            }
        ],
        [
            'path',
            {
                d: 'M5 3L2 6'
            }
        ],
        [
            'path',
            {
                d: 'M22 6l-3-3'
            }
        ],
        [
            'path',
            {
                d: 'M6 19l-2 2'
            }
        ],
        [
            'path',
            {
                d: 'M18 19l2 2'
            }
        ],
        [
            'path',
            {
                d: 'M9 13h6'
            }
        ]
    ]
];
exports.default = AlarmMinus;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1sXLN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var AlarmPlus = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M12 21a8 8 0 100-16 8 8 0 000 16z'
            }
        ],
        [
            'path',
            {
                d: 'M5 3L2 6'
            }
        ],
        [
            'path',
            {
                d: 'M22 6l-3-3'
            }
        ],
        [
            'path',
            {
                d: 'M6 19l-2 2'
            }
        ],
        [
            'path',
            {
                d: 'M18 19l2 2'
            }
        ],
        [
            'path',
            {
                d: 'M12 10v6'
            }
        ],
        [
            'path',
            {
                d: 'M9 13h6'
            }
        ]
    ]
];
exports.default = AlarmPlus;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eESEg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Album = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '3',
                y: '3',
                width: '18',
                height: '18',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'polyline',
            {
                points: '11 3 11 11 14 8 17 11 17 3'
            }
        ]
    ]
];
exports.default = Album;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gXuOa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var AlertCircle = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '8',
                x2: '12',
                y2: '12'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '16',
                x2: '12.01',
                y2: '16'
            }
        ]
    ]
];
exports.default = AlertCircle;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jUZnV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var AlertOctagon = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polygon',
            {
                points: '7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '8',
                x2: '12',
                y2: '12'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '16',
                x2: '12.01',
                y2: '16'
            }
        ]
    ]
];
exports.default = AlertOctagon;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bmOAt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var AlertTriangle = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '9',
                x2: '12',
                y2: '13'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '17',
                x2: '12.01',
                y2: '17'
            }
        ]
    ]
];
exports.default = AlertTriangle;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"alDc5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var AlignCenterHorizontal = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M2 12h20'
            }
        ],
        [
            'path',
            {
                d: 'M10 16v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4'
            }
        ],
        [
            'path',
            {
                d: 'M10 8V4a2 2 0 00-2-2H6a2 2 0 00-2 2v4'
            }
        ],
        [
            'path',
            {
                d: 'M20 16v1a2 2 0 01-2 2h-2a2 2 0 01-2-2v-1'
            }
        ],
        [
            'path',
            {
                d: 'M14 8V7c0-1.1.9-2 2-2h2a2 2 0 012 2v1'
            }
        ]
    ]
];
exports.default = AlignCenterHorizontal;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"SooCx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var AlignCenterVertical = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M12 2v20'
            }
        ],
        [
            'path',
            {
                d: 'M8 10H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2h4'
            }
        ],
        [
            'path',
            {
                d: 'M16 10h4a2 2 0 002-2V6a2 2 0 00-2-2h-4'
            }
        ],
        [
            'path',
            {
                d: 'M8 20H7a2 2 0 01-2-2v-2c0-1.1.9-2 2-2h1'
            }
        ],
        [
            'path',
            {
                d: 'M16 14h1a2 2 0 012 2v2a2 2 0 01-2 2h-1'
            }
        ]
    ]
];
exports.default = AlignCenterVertical;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dA58d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var AlignCenter = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '21',
                y1: '6',
                x2: '3',
                y2: '6'
            }
        ],
        [
            'line',
            {
                x1: '17',
                y1: '12',
                x2: '7',
                y2: '12'
            }
        ],
        [
            'line',
            {
                x1: '19',
                y1: '18',
                x2: '5',
                y2: '18'
            }
        ]
    ]
];
exports.default = AlignCenter;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9i1zF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var AlignEndHorizontal = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '4',
                y: '2',
                width: '6',
                height: '16',
                rx: '2'
            }
        ],
        [
            'rect',
            {
                x: '14',
                y: '9',
                width: '6',
                height: '9',
                rx: '2'
            }
        ],
        [
            'path',
            {
                d: 'M22 22H2'
            }
        ]
    ]
];
exports.default = AlignEndHorizontal;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"chBKU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var AlignEndVertical = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '2',
                y: '4',
                width: '16',
                height: '6',
                rx: '2'
            }
        ],
        [
            'rect',
            {
                x: '9',
                y: '14',
                width: '9',
                height: '6',
                rx: '2'
            }
        ],
        [
            'path',
            {
                d: 'M22 22V2'
            }
        ]
    ]
];
exports.default = AlignEndVertical;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8jhgf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var AlignHorizontalDistributeCenter = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '4',
                y: '5',
                width: '6',
                height: '14',
                rx: '2'
            }
        ],
        [
            'rect',
            {
                x: '14',
                y: '7',
                width: '6',
                height: '10',
                rx: '2'
            }
        ],
        [
            'path',
            {
                d: 'M17 22v-5'
            }
        ],
        [
            'path',
            {
                d: 'M17 7V2'
            }
        ],
        [
            'path',
            {
                d: 'M7 22v-3'
            }
        ],
        [
            'path',
            {
                d: 'M7 5V2'
            }
        ]
    ]
];
exports.default = AlignHorizontalDistributeCenter;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Qapb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var AlignHorizontalDistributeEnd = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '4',
                y: '5',
                width: '6',
                height: '14',
                rx: '2'
            }
        ],
        [
            'rect',
            {
                x: '14',
                y: '7',
                width: '6',
                height: '10',
                rx: '2'
            }
        ],
        [
            'path',
            {
                d: 'M10 2v20'
            }
        ],
        [
            'path',
            {
                d: 'M20 2v20'
            }
        ]
    ]
];
exports.default = AlignHorizontalDistributeEnd;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"adjCU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var AlignHorizontalDistributeStart = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '4',
                y: '5',
                width: '6',
                height: '14',
                rx: '2'
            }
        ],
        [
            'rect',
            {
                x: '14',
                y: '7',
                width: '6',
                height: '10',
                rx: '2'
            }
        ],
        [
            'path',
            {
                d: 'M4 2v20'
            }
        ],
        [
            'path',
            {
                d: 'M14 2v20'
            }
        ]
    ]
];
exports.default = AlignHorizontalDistributeStart;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cfqxh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var AlignHorizontalJustifyCenter = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '2',
                y: '5',
                width: '6',
                height: '14',
                rx: '2'
            }
        ],
        [
            'rect',
            {
                x: '16',
                y: '7',
                width: '6',
                height: '10',
                rx: '2'
            }
        ],
        [
            'path',
            {
                d: 'M12 2v20'
            }
        ]
    ]
];
exports.default = AlignHorizontalJustifyCenter;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3xyGr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var AlignHorizontalJustifyEnd = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '2',
                y: '5',
                width: '6',
                height: '14',
                rx: '2'
            }
        ],
        [
            'rect',
            {
                x: '12',
                y: '7',
                width: '6',
                height: '10',
                rx: '2'
            }
        ],
        [
            'path',
            {
                d: 'M22 2v20'
            }
        ]
    ]
];
exports.default = AlignHorizontalJustifyEnd;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7tlwQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var AlignHorizontalJustifyStart = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '6',
                y: '5',
                width: '6',
                height: '14',
                rx: '2'
            }
        ],
        [
            'rect',
            {
                x: '16',
                y: '7',
                width: '6',
                height: '10',
                rx: '2'
            }
        ],
        [
            'path',
            {
                d: 'M2 2v20'
            }
        ]
    ]
];
exports.default = AlignHorizontalJustifyStart;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aT6E3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var AlignHorizontalSpaceAround = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '9',
                y: '7',
                width: '6',
                height: '10',
                rx: '2'
            }
        ],
        [
            'path',
            {
                d: 'M4 22V2'
            }
        ],
        [
            'path',
            {
                d: 'M20 22V2'
            }
        ]
    ]
];
exports.default = AlignHorizontalSpaceAround;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Kyog":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var AlignHorizontalSpaceBetween = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '3',
                y: '5',
                width: '6',
                height: '14',
                rx: '2'
            }
        ],
        [
            'rect',
            {
                x: '15',
                y: '7',
                width: '6',
                height: '10',
                rx: '2'
            }
        ],
        [
            'path',
            {
                d: 'M3 2v20'
            }
        ],
        [
            'path',
            {
                d: 'M21 2v20'
            }
        ]
    ]
];
exports.default = AlignHorizontalSpaceBetween;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"383iU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var AlignJustify = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '3',
                y1: '6',
                x2: '21',
                y2: '6'
            }
        ],
        [
            'line',
            {
                x1: '3',
                y1: '12',
                x2: '21',
                y2: '12'
            }
        ],
        [
            'line',
            {
                x1: '3',
                y1: '18',
                x2: '21',
                y2: '18'
            }
        ]
    ]
];
exports.default = AlignJustify;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aOZI6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var AlignLeft = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '21',
                y1: '6',
                x2: '3',
                y2: '6'
            }
        ],
        [
            'line',
            {
                x1: '15',
                y1: '12',
                x2: '3',
                y2: '12'
            }
        ],
        [
            'line',
            {
                x1: '17',
                y1: '18',
                x2: '3',
                y2: '18'
            }
        ]
    ]
];
exports.default = AlignLeft;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gs7js":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var AlignRight = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '21',
                y1: '6',
                x2: '3',
                y2: '6'
            }
        ],
        [
            'line',
            {
                x1: '21',
                y1: '12',
                x2: '9',
                y2: '12'
            }
        ],
        [
            'line',
            {
                x1: '21',
                y1: '18',
                x2: '7',
                y2: '18'
            }
        ]
    ]
];
exports.default = AlignRight;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4AIKN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var AlignStartHorizontal = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '4',
                y: '6',
                width: '6',
                height: '16',
                rx: '2'
            }
        ],
        [
            'rect',
            {
                x: '14',
                y: '6',
                width: '6',
                height: '9',
                rx: '2'
            }
        ],
        [
            'path',
            {
                d: 'M22 2H2'
            }
        ]
    ]
];
exports.default = AlignStartHorizontal;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1aFM7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var AlignStartVertical = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '6',
                y: '14',
                width: '9',
                height: '6',
                rx: '2'
            }
        ],
        [
            'rect',
            {
                x: '6',
                y: '4',
                width: '16',
                height: '6',
                rx: '2'
            }
        ],
        [
            'path',
            {
                d: 'M2 2v20'
            }
        ]
    ]
];
exports.default = AlignStartVertical;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6OpTK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var AlignVerticalDistributeCenter = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '5',
                y: '14',
                width: '14',
                height: '6',
                rx: '2'
            }
        ],
        [
            'rect',
            {
                x: '7',
                y: '4',
                width: '10',
                height: '6',
                rx: '2'
            }
        ],
        [
            'path',
            {
                d: 'M22 7h-5'
            }
        ],
        [
            'path',
            {
                d: 'M7 7H1'
            }
        ],
        [
            'path',
            {
                d: 'M22 17h-3'
            }
        ],
        [
            'path',
            {
                d: 'M5 17H2'
            }
        ]
    ]
];
exports.default = AlignVerticalDistributeCenter;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3fENz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var AlignVerticalDistributeEnd = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '5',
                y: '14',
                width: '14',
                height: '6',
                rx: '2'
            }
        ],
        [
            'rect',
            {
                x: '7',
                y: '4',
                width: '10',
                height: '6',
                rx: '2'
            }
        ],
        [
            'path',
            {
                d: 'M2 20h20'
            }
        ],
        [
            'path',
            {
                d: 'M2 10h20'
            }
        ]
    ]
];
exports.default = AlignVerticalDistributeEnd;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"04yAc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var AlignVerticalDistributeStart = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '5',
                y: '14',
                width: '14',
                height: '6',
                rx: '2'
            }
        ],
        [
            'rect',
            {
                x: '7',
                y: '4',
                width: '10',
                height: '6',
                rx: '2'
            }
        ],
        [
            'path',
            {
                d: 'M2 14h20'
            }
        ],
        [
            'path',
            {
                d: 'M2 4h20'
            }
        ]
    ]
];
exports.default = AlignVerticalDistributeStart;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5gOZS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var AlignVerticalJustifyCenter = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '5',
                y: '16',
                width: '14',
                height: '6',
                rx: '2'
            }
        ],
        [
            'rect',
            {
                x: '7',
                y: '2',
                width: '10',
                height: '6',
                rx: '2'
            }
        ],
        [
            'path',
            {
                d: 'M2 12h20'
            }
        ]
    ]
];
exports.default = AlignVerticalJustifyCenter;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dwxIy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var AlignVerticalJustifyEnd = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '5',
                y: '12',
                width: '14',
                height: '6',
                rx: '2'
            }
        ],
        [
            'rect',
            {
                x: '7',
                y: '2',
                width: '10',
                height: '6',
                rx: '2'
            }
        ],
        [
            'path',
            {
                d: 'M2 22h20'
            }
        ]
    ]
];
exports.default = AlignVerticalJustifyEnd;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Fh4M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var AlignVerticalJustifyStart = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '5',
                y: '16',
                width: '14',
                height: '6',
                rx: '2'
            }
        ],
        [
            'rect',
            {
                x: '7',
                y: '6',
                width: '10',
                height: '6',
                rx: '2'
            }
        ],
        [
            'path',
            {
                d: 'M2 2h20'
            }
        ]
    ]
];
exports.default = AlignVerticalJustifyStart;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6U7Qa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var AlignVerticalSpaceAround = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '7',
                y: '9',
                width: '10',
                height: '6',
                rx: '2'
            }
        ],
        [
            'path',
            {
                d: 'M22 20H2'
            }
        ],
        [
            'path',
            {
                d: 'M22 4H2'
            }
        ]
    ]
];
exports.default = AlignVerticalSpaceAround;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Nthh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var AlignVerticalSpaceBetween = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '5',
                y: '15',
                width: '14',
                height: '6',
                rx: '2'
            }
        ],
        [
            'rect',
            {
                x: '7',
                y: '3',
                width: '10',
                height: '6',
                rx: '2'
            }
        ],
        [
            'path',
            {
                d: 'M2 21h20'
            }
        ],
        [
            'path',
            {
                d: 'M2 3h20'
            }
        ]
    ]
];
exports.default = AlignVerticalSpaceBetween;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Z3Kl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Anchor = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '5',
                r: '3'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '22',
                x2: '12',
                y2: '8'
            }
        ],
        [
            'path',
            {
                d: 'M5 12H2a10 10 0 0020 0h-3'
            }
        ]
    ]
];
exports.default = Anchor;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jvThZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Aperture = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'line',
            {
                x1: '14.31',
                y1: '8',
                x2: '20.05',
                y2: '17.94'
            }
        ],
        [
            'line',
            {
                x1: '9.69',
                y1: '8',
                x2: '21.17',
                y2: '8'
            }
        ],
        [
            'line',
            {
                x1: '7.38',
                y1: '12',
                x2: '13.12',
                y2: '2.06'
            }
        ],
        [
            'line',
            {
                x1: '9.69',
                y1: '16',
                x2: '3.95',
                y2: '6.06'
            }
        ],
        [
            'line',
            {
                x1: '14.31',
                y1: '16',
                x2: '2.83',
                y2: '16'
            }
        ],
        [
            'line',
            {
                x1: '16.62',
                y1: '12',
                x2: '10.88',
                y2: '21.94'
            }
        ]
    ]
];
exports.default = Aperture;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cFuty":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Archive = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M20 9v9a2 2 0 01-2 2H6a2 2 0 01-2-2V9m16-5H4a2 2 0 00-2 2v1a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-10 9h4'
            }
        ]
    ]
];
exports.default = Archive;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6q3IA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ArrowBigDown = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M9 3h6v11h4l-7 7-7-7h4z'
            }
        ]
    ]
];
exports.default = ArrowBigDown;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4iw1B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ArrowBigLeft = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M3 12l7-7v4h11v6H10v4z'
            }
        ]
    ]
];
exports.default = ArrowBigLeft;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"afqPB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ArrowBigRight = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M21 12l-7-7v4H3v6h11v4z'
            }
        ]
    ]
];
exports.default = ArrowBigRight;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"57STT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ArrowBigUp = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M9 21V10H5l7-7 7 7h-4v11z'
            }
        ]
    ]
];
exports.default = ArrowBigUp;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jSlMs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ArrowDownCircle = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'polyline',
            {
                points: '8 12 12 16 16 12'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '8',
                x2: '12',
                y2: '16'
            }
        ]
    ]
];
exports.default = ArrowDownCircle;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"GL3K5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ArrowDownLeft = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '17',
                y1: '7',
                x2: '7',
                y2: '17'
            }
        ],
        [
            'polyline',
            {
                points: '17 17 7 17 7 7'
            }
        ]
    ]
];
exports.default = ArrowDownLeft;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i3LQu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ArrowDownRight = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '7',
                y1: '7',
                x2: '17',
                y2: '17'
            }
        ],
        [
            'polyline',
            {
                points: '17 7 17 17 7 17'
            }
        ]
    ]
];
exports.default = ArrowDownRight;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Myx7y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ArrowDown = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '12',
                y1: '5',
                x2: '12',
                y2: '19'
            }
        ],
        [
            'polyline',
            {
                points: '19 12 12 19 5 12'
            }
        ]
    ]
];
exports.default = ArrowDown;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Lxfv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ArrowLeftCircle = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'polyline',
            {
                points: '12 8 8 12 12 16'
            }
        ],
        [
            'line',
            {
                x1: '16',
                y1: '12',
                x2: '8',
                y2: '12'
            }
        ]
    ]
];
exports.default = ArrowLeftCircle;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gQ69K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ArrowLeftRight = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '17 11 21 7 17 3'
            }
        ],
        [
            'line',
            {
                x1: '21',
                y1: '7',
                x2: '9',
                y2: '7'
            }
        ],
        [
            'polyline',
            {
                points: '7 21 3 17 7 13'
            }
        ],
        [
            'line',
            {
                x1: '15',
                y1: '17',
                x2: '3',
                y2: '17'
            }
        ]
    ]
];
exports.default = ArrowLeftRight;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6VDiE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ArrowLeft = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '19',
                y1: '12',
                x2: '5',
                y2: '12'
            }
        ],
        [
            'polyline',
            {
                points: '12 19 5 12 12 5'
            }
        ]
    ]
];
exports.default = ArrowLeft;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"39uyV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ArrowRightCircle = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'polyline',
            {
                points: '12 16 16 12 12 8'
            }
        ],
        [
            'line',
            {
                x1: '8',
                y1: '12',
                x2: '16',
                y2: '12'
            }
        ]
    ]
];
exports.default = ArrowRightCircle;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lQVP6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ArrowRight = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '5',
                y1: '12',
                x2: '19',
                y2: '12'
            }
        ],
        [
            'polyline',
            {
                points: '12 5 19 12 12 19'
            }
        ]
    ]
];
exports.default = ArrowRight;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9vMLa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ArrowUpCircle = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'polyline',
            {
                points: '16 12 12 8 8 12'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '16',
                x2: '12',
                y2: '8'
            }
        ]
    ]
];
exports.default = ArrowUpCircle;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5CqQe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ArrowUpLeft = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '17',
                y1: '17',
                x2: '7',
                y2: '7'
            }
        ],
        [
            'polyline',
            {
                points: '7 17 7 7 17 7'
            }
        ]
    ]
];
exports.default = ArrowUpLeft;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jMV9i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ArrowUpRight = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '7',
                y1: '17',
                x2: '17',
                y2: '7'
            }
        ],
        [
            'polyline',
            {
                points: '7 7 17 7 17 17'
            }
        ]
    ]
];
exports.default = ArrowUpRight;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iaUh8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ArrowUp = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '12',
                y1: '19',
                x2: '12',
                y2: '5'
            }
        ],
        [
            'polyline',
            {
                points: '5 12 12 5 19 12'
            }
        ]
    ]
];
exports.default = ArrowUp;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kHEES":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Asterisk = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M12 6v12'
            }
        ],
        [
            'path',
            {
                d: 'M17.196 9L6.804 15'
            }
        ],
        [
            'path',
            {
                d: 'M6.804 9l10.392 6'
            }
        ]
    ]
];
exports.default = Asterisk;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cDfbL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var AtSign = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '4'
            }
        ],
        [
            'path',
            {
                d: 'M16 8v5a3 3 0 006 0v-1a10 10 0 10-3.92 7.94'
            }
        ]
    ]
];
exports.default = AtSign;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j4j0f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Award = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '8',
                r: '7'
            }
        ],
        [
            'polyline',
            {
                points: '8.21 13.89 7 23 12 20 17 23 15.79 13.88'
            }
        ]
    ]
];
exports.default = Award;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4jdhh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Axe = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M14 12l-8.501 8.501a2.12 2.12 0 01-2.998 0h-.002a2.12 2.12 0 010-2.998L11 9.002'
            }
        ],
        [
            'path',
            {
                d: 'M9 7l4-4 6 6h3l-.13.648a7.648 7.648 0 01-5.081 5.756L15 16v-3z'
            }
        ]
    ]
];
exports.default = Axe;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bGqMt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Banknote = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '2',
                y: '6',
                width: '20',
                height: '12',
                rx: '2'
            }
        ],
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '2'
            }
        ],
        [
            'path',
            {
                d: 'M6 12h.01M18 12h.01'
            }
        ]
    ]
];
exports.default = Banknote;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9bGMs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var BarChart2 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '18',
                y1: '20',
                x2: '18',
                y2: '10'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '20',
                x2: '12',
                y2: '4'
            }
        ],
        [
            'line',
            {
                x1: '6',
                y1: '20',
                x2: '6',
                y2: '14'
            }
        ]
    ]
];
exports.default = BarChart2;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jhhTF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var BarChart = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '12',
                y1: '20',
                x2: '12',
                y2: '10'
            }
        ],
        [
            'line',
            {
                x1: '18',
                y1: '20',
                x2: '18',
                y2: '4'
            }
        ],
        [
            'line',
            {
                x1: '6',
                y1: '20',
                x2: '6',
                y2: '16'
            }
        ]
    ]
];
exports.default = BarChart;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"knYFy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Baseline = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M4 20h16'
            }
        ],
        [
            'path',
            {
                d: 'M6 16l6-12 6 12'
            }
        ],
        [
            'path',
            {
                d: 'M8 12h8'
            }
        ]
    ]
];
exports.default = Baseline;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2qR7J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var BatteryCharging = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M14 7h2a2 2 0 012 2v6a2 2 0 01-2 2h-3'
            }
        ],
        [
            'path',
            {
                d: 'M7 7H4a2 2 0 00-2 2v6a2 2 0 002 2h2'
            }
        ],
        [
            'polyline',
            {
                points: '11 7 8 12 12 12 9 17'
            }
        ],
        [
            'line',
            {
                x1: '22',
                x2: '22',
                y1: '11',
                y2: '13'
            }
        ]
    ]
];
exports.default = BatteryCharging;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1JeR9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var BatteryFull = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '2',
                y: '7',
                width: '16',
                height: '10',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'line',
            {
                x1: '22',
                x2: '22',
                y1: '11',
                y2: '13'
            }
        ],
        [
            'line',
            {
                x1: '6',
                x2: '6',
                y1: '10',
                y2: '14'
            }
        ],
        [
            'line',
            {
                x1: '10',
                x2: '10',
                y1: '10',
                y2: '14'
            }
        ],
        [
            'line',
            {
                x1: '14',
                x2: '14',
                y1: '10',
                y2: '14'
            }
        ]
    ]
];
exports.default = BatteryFull;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4uGKA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var BatteryLow = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '2',
                y: '7',
                width: '16',
                height: '10',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'line',
            {
                x1: '22',
                x2: '22',
                y1: '11',
                y2: '13'
            }
        ],
        [
            'line',
            {
                x1: '6',
                x2: '6',
                y1: '10',
                y2: '14'
            }
        ]
    ]
];
exports.default = BatteryLow;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aBIs8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var BatteryMedium = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '2',
                y: '7',
                width: '16',
                height: '10',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'line',
            {
                x1: '22',
                x2: '22',
                y1: '11',
                y2: '13'
            }
        ],
        [
            'line',
            {
                x1: '6',
                x2: '6',
                y1: '10',
                y2: '14'
            }
        ],
        [
            'line',
            {
                x1: '10',
                x2: '10',
                y1: '10',
                y2: '14'
            }
        ]
    ]
];
exports.default = BatteryMedium;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d6Qnf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Battery = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '2',
                y: '7',
                width: '16',
                height: '10',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'line',
            {
                x1: '22',
                x2: '22',
                y1: '11',
                y2: '13'
            }
        ]
    ]
];
exports.default = Battery;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6B9J6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Beaker = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M4.5 3h15'
            }
        ],
        [
            'path',
            {
                d: 'M6 3v16a2 2 0 002 2h8a2 2 0 002-2V3'
            }
        ],
        [
            'path',
            {
                d: 'M6 14h12'
            }
        ]
    ]
];
exports.default = Beaker;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4ORSi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var BellMinus = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M13.73 21a2 2 0 01-3.46 0'
            }
        ],
        [
            'path',
            {
                d: 'M21 5h-6'
            }
        ],
        [
            'path',
            {
                d: 'M18.021 9C18.29 15.193 21 17 21 17H3s3-2 3-9a6 6 0 017-5.916'
            }
        ]
    ]
];
exports.default = BellMinus;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8GM6J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var BellOff = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M13.73 21a2 2 0 01-3.46 0'
            }
        ],
        [
            'path',
            {
                d: 'M18.63 13A17.888 17.888 0 0118 8'
            }
        ],
        [
            'path',
            {
                d: 'M6.26 6.26A5.86 5.86 0 006 8c0 7-3 9-3 9h14'
            }
        ],
        [
            'path',
            {
                d: 'M18 8a6 6 0 00-9.33-5'
            }
        ],
        [
            'path',
            {
                d: 'M2 2l20 20'
            }
        ]
    ]
];
exports.default = BellOff;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jSZWr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var BellPlus = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M18.387 12C19.198 15.799 21 17 21 17H3s3-2 3-9a6 6 0 017-5.916'
            }
        ],
        [
            'path',
            {
                d: 'M13.73 21a2 2 0 01-3.46 0'
            }
        ],
        [
            'path',
            {
                d: 'M18 2v6'
            }
        ],
        [
            'path',
            {
                d: 'M21 5h-6'
            }
        ]
    ]
];
exports.default = BellPlus;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hkGMF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var BellRing = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9'
            }
        ],
        [
            'path',
            {
                d: 'M13.73 21a2 2 0 01-3.46 0'
            }
        ],
        [
            'path',
            {
                d: 'M2 8c0-2.2.7-4.3 2-6'
            }
        ],
        [
            'path',
            {
                d: 'M22 8a10 10 0 00-2-6'
            }
        ]
    ]
];
exports.default = BellRing;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"VXSuW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Bell = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9'
            }
        ],
        [
            'path',
            {
                d: 'M13.73 21a2 2 0 01-3.46 0'
            }
        ]
    ]
];
exports.default = Bell;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6DFgw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Bike = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '5.5',
                cy: '17.5',
                r: '3.5'
            }
        ],
        [
            'circle',
            {
                cx: '18.5',
                cy: '17.5',
                r: '3.5'
            }
        ],
        [
            'path',
            {
                d: 'M15 6a1 1 0 100-2 1 1 0 000 2zm-3 11.5V14l-3-3 4-3 2 3h2'
            }
        ]
    ]
];
exports.default = Bike;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hhGVx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Binary = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M10 4H6v6h4V4z'
            }
        ],
        [
            'path',
            {
                d: 'M18 14h-4v6h4v-6z'
            }
        ],
        [
            'path',
            {
                d: 'M14 4h2v6m-2 0h4'
            }
        ],
        [
            'path',
            {
                d: 'M6 14h2v6m-2 0h4'
            }
        ]
    ]
];
exports.default = Binary;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d1vJ8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Bitcoin = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042l-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893l-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042l.348-1.97M7.48 20.364l3.126-17.727'
            }
        ]
    ]
];
exports.default = Bitcoin;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eYgp2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var BluetoothConnected = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M7 7l10 10-5 5V2l5 5L7 17'
            }
        ],
        [
            'line',
            {
                x1: '18',
                y1: '12',
                y2: '12',
                x2: '21'
            }
        ],
        [
            'line',
            {
                x1: '3',
                y1: '12',
                y2: '12',
                x2: '6'
            }
        ]
    ]
];
exports.default = BluetoothConnected;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Nker":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var BluetoothOff = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M17 17l-5 5V12l-5 5'
            }
        ],
        [
            'path',
            {
                d: 'M2 2l20 20'
            }
        ],
        [
            'path',
            {
                d: 'M14.5 9.5L17 7l-5-5v4.5'
            }
        ]
    ]
];
exports.default = BluetoothOff;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bWspU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var BluetoothSearching = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M7 7l10 10-5 5V2l5 5L7 17'
            }
        ],
        [
            'path',
            {
                d: 'M20.83 14.83a4 4 0 000-5.66'
            }
        ],
        [
            'path',
            {
                d: 'M18 12h.01'
            }
        ]
    ]
];
exports.default = BluetoothSearching;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6WYAl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Bluetooth = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M7 7l10 10-5 5V2l5 5L7 17'
            }
        ]
    ]
];
exports.default = Bluetooth;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7BFbS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Bold = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6z'
            }
        ],
        [
            'path',
            {
                d: 'M6 12h9a4 4 0 014 4 4 4 0 01-4 4H6z'
            }
        ]
    ]
];
exports.default = Bold;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aMhjL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var BookOpen = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z'
            }
        ],
        [
            'path',
            {
                d: 'M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z'
            }
        ]
    ]
];
exports.default = BookOpen;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l4hMD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Book = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M4 19.5A2.5 2.5 0 016.5 17H20'
            }
        ],
        [
            'path',
            {
                d: 'M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z'
            }
        ]
    ]
];
exports.default = Book;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9B50O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var BookmarkMinus = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M19 21l-7-4-7 4V5a2 2 0 012-2h10a2 2 0 012 2v16z'
            }
        ],
        [
            'line',
            {
                x1: '15',
                x2: '9',
                y1: '10',
                y2: '10'
            }
        ]
    ]
];
exports.default = BookmarkMinus;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cHRmd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var BookmarkPlus = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M19 21l-7-4-7 4V5a2 2 0 012-2h10a2 2 0 012 2v16z'
            }
        ],
        [
            'line',
            {
                x1: '12',
                x2: '12',
                y1: '7',
                y2: '13'
            }
        ],
        [
            'line',
            {
                x1: '15',
                x2: '9',
                y1: '10',
                y2: '10'
            }
        ]
    ]
];
exports.default = BookmarkPlus;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6z1HZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Bookmark = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M19 21l-7-4-7 4V5a2 2 0 012-2h10a2 2 0 012 2v16z'
            }
        ]
    ]
];
exports.default = Bookmark;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eXGcj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Bot = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '3',
                y: '11',
                width: '18',
                height: '10',
                rx: '2'
            }
        ],
        [
            'circle',
            {
                cx: '12',
                cy: '5',
                r: '2'
            }
        ],
        [
            'path',
            {
                d: 'M12 7v4'
            }
        ],
        [
            'line',
            {
                x1: '8',
                y1: '16',
                x2: '8',
                y2: '16'
            }
        ],
        [
            'line',
            {
                x1: '16',
                y1: '16',
                x2: '16',
                y2: '16'
            }
        ]
    ]
];
exports.default = Bot;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"58tY4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var BoxSelect = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M4 2a2 2 0 00-2 2'
            }
        ],
        [
            'line',
            {
                x1: '8',
                y1: '2',
                x2: '10',
                y2: '2'
            }
        ],
        [
            'line',
            {
                x1: '14',
                y1: '2',
                x2: '16',
                y2: '2'
            }
        ],
        [
            'path',
            {
                d: 'M4 22a2 2 0 01-2-2'
            }
        ],
        [
            'line',
            {
                x1: '22',
                y1: '8',
                x2: '22',
                y2: '10'
            }
        ],
        [
            'line',
            {
                x1: '22',
                y1: '14',
                x2: '22',
                y2: '16'
            }
        ],
        [
            'path',
            {
                d: 'M22 20a2 2 0 01-2 2'
            }
        ],
        [
            'line',
            {
                x1: '14',
                y1: '22',
                x2: '16',
                y2: '22'
            }
        ],
        [
            'line',
            {
                x1: '8',
                y1: '22',
                x2: '10',
                y2: '22'
            }
        ],
        [
            'path',
            {
                d: 'M20 2a2 2 0 012 2'
            }
        ],
        [
            'line',
            {
                x1: '2',
                y1: '14',
                x2: '2',
                y2: '16'
            }
        ],
        [
            'line',
            {
                x1: '2',
                y1: '8',
                x2: '2',
                y2: '10'
            }
        ]
    ]
];
exports.default = BoxSelect;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7T2lH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Box = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z'
            }
        ],
        [
            'polyline',
            {
                points: '3.27 6.96 12 12.01 20.73 6.96'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '22.08',
                x2: '12',
                y2: '12'
            }
        ]
    ]
];
exports.default = Box;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1kN9d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Briefcase = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '2',
                y: '7',
                width: '20',
                height: '14',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'path',
            {
                d: 'M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16'
            }
        ]
    ]
];
exports.default = Briefcase;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Gf4C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Brush = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M9.06 11.9l8.07-8.06a2.85 2.85 0 114.03 4.03l-8.06 8.08'
            }
        ],
        [
            'path',
            {
                d: 'M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 00-3-3.02z'
            }
        ]
    ]
];
exports.default = Brush;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jcRFE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Bug = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                width: '8',
                height: '14',
                x: '8',
                y: '6',
                rx: '4'
            }
        ],
        [
            'path',
            {
                d: 'M19 7l-3 2'
            }
        ],
        [
            'path',
            {
                d: 'M5 7l3 2'
            }
        ],
        [
            'path',
            {
                d: 'M19 19l-3-2'
            }
        ],
        [
            'path',
            {
                d: 'M5 19l3-2'
            }
        ],
        [
            'path',
            {
                d: 'M20 13h-4'
            }
        ],
        [
            'path',
            {
                d: 'M4 13h4'
            }
        ],
        [
            'path',
            {
                d: 'M10 4l1 2'
            }
        ],
        [
            'path',
            {
                d: 'M14 4l-1 2'
            }
        ]
    ]
];
exports.default = Bug;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7G4ZU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Building = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '4',
                y: '2',
                width: '16',
                height: '20',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'path',
            {
                d: 'M9 22v-4h6v4'
            }
        ],
        [
            'path',
            {
                d: 'M8 6h.01'
            }
        ],
        [
            'path',
            {
                d: 'M16 6h.01'
            }
        ],
        [
            'path',
            {
                d: 'M12 6h.01'
            }
        ],
        [
            'path',
            {
                d: 'M12 10h.01'
            }
        ],
        [
            'path',
            {
                d: 'M12 14h.01'
            }
        ],
        [
            'path',
            {
                d: 'M16 10h.01'
            }
        ],
        [
            'path',
            {
                d: 'M16 14h.01'
            }
        ],
        [
            'path',
            {
                d: 'M8 10h.01'
            }
        ],
        [
            'path',
            {
                d: 'M8 14h.01'
            }
        ]
    ]
];
exports.default = Building;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4MIyp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Bus = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M19 17h2l.64-2.54a6 6 0 000-2.92l-1.07-4.27A3 3 0 0017.66 5H4a2 2 0 00-2 2v10h2m10 0h-4'
            }
        ],
        [
            'circle',
            {
                cx: '6.5',
                cy: '17.5',
                r: '2.5'
            }
        ],
        [
            'circle',
            {
                cx: '16.5',
                cy: '17.5',
                r: '2.5'
            }
        ]
    ]
];
exports.default = Bus;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gzeZk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Calculator = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '4',
                y: '2',
                width: '16',
                height: '20',
                rx: '2'
            }
        ],
        [
            'line',
            {
                x1: '8',
                x2: '16',
                y1: '6',
                y2: '6'
            }
        ],
        [
            'line',
            {
                x1: '16',
                x2: '16',
                y1: '14',
                y2: '18'
            }
        ],
        [
            'path',
            {
                d: 'M16 10h.01'
            }
        ],
        [
            'path',
            {
                d: 'M12 10h.01'
            }
        ],
        [
            'path',
            {
                d: 'M8 10h.01'
            }
        ],
        [
            'path',
            {
                d: 'M12 14h.01'
            }
        ],
        [
            'path',
            {
                d: 'M8 14h.01'
            }
        ],
        [
            'path',
            {
                d: 'M12 18h.01'
            }
        ],
        [
            'path',
            {
                d: 'M8 18h.01'
            }
        ]
    ]
];
exports.default = Calculator;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"IQ514":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Calendar = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '3',
                y: '4',
                width: '18',
                height: '18',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'line',
            {
                x1: '16',
                y1: '2',
                x2: '16',
                y2: '6'
            }
        ],
        [
            'line',
            {
                x1: '8',
                y1: '2',
                x2: '8',
                y2: '6'
            }
        ],
        [
            'line',
            {
                x1: '3',
                y1: '10',
                x2: '21',
                y2: '10'
            }
        ]
    ]
];
exports.default = Calendar;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lr2UC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var CameraOff = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '2',
                y1: '2',
                x2: '22',
                y2: '22'
            }
        ],
        [
            'path',
            {
                d: 'M9.5 4h5L17 7h3a2 2 0 012 2v7.5M7 7H4a2 2 0 00-2 2v9a2 2 0 002 2h16'
            }
        ],
        [
            'path',
            {
                d: 'M14.121 15.121A3 3 0 119.88 10.88'
            }
        ]
    ]
];
exports.default = CameraOff;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5MVcQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Camera = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M14.5 4h-5L7 7H4a2 2 0 00-2 2v9a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2h-3l-2.5-3z'
            }
        ],
        [
            'circle',
            {
                cx: '12',
                cy: '13',
                r: '3'
            }
        ]
    ]
];
exports.default = Camera;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"djjUn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Car = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M14 16H9m10 0h3v-3.15a1 1 0 00-.84-.99L16 11l-2.7-3.6a1 1 0 00-.8-.4H5.24a2 2 0 00-1.8 1.1l-.8 1.63A6 6 0 002 12.42V16h2'
            }
        ],
        [
            'circle',
            {
                cx: '6.5',
                cy: '16.5',
                r: '2.5'
            }
        ],
        [
            'circle',
            {
                cx: '16.5',
                cy: '16.5',
                r: '2.5'
            }
        ]
    ]
];
exports.default = Car;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f3lyH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Carrot = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 00-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46'
            }
        ],
        [
            'path',
            {
                d: 'M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z'
            }
        ],
        [
            'path',
            {
                d: 'M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z'
            }
        ]
    ]
];
exports.default = Carrot;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gyexc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Cast = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M2 16.1A5 5 0 015.9 20M2 12.05A9 9 0 019.95 20M2 8V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2h-6'
            }
        ],
        [
            'line',
            {
                x1: '2',
                y1: '20',
                x2: '2.01',
                y2: '20'
            }
        ]
    ]
];
exports.default = Cast;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bDa3Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var CheckCircle2 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z'
            }
        ],
        [
            'path',
            {
                d: 'M9 12l2 2 4-4'
            }
        ]
    ]
];
exports.default = CheckCircle2;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eRWZA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var CheckCircle = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M22 11.08V12a10 10 0 11-5.93-9.14'
            }
        ],
        [
            'polyline',
            {
                points: '22 4 12 14.01 9 11.01'
            }
        ]
    ]
];
exports.default = CheckCircle;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kDKLI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var CheckSquare = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '9 11 12 14 22 4'
            }
        ],
        [
            'path',
            {
                d: 'M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11'
            }
        ]
    ]
];
exports.default = CheckSquare;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Vcmp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Check = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '20 6 9 17 4 12'
            }
        ]
    ]
];
exports.default = Check;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8twXJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ChevronDown = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '6 9 12 15 18 9'
            }
        ]
    ]
];
exports.default = ChevronDown;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6UGGq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ChevronFirst = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '17 18 11 12 17 6'
            }
        ],
        [
            'path',
            {
                d: 'M7 6v12'
            }
        ]
    ]
];
exports.default = ChevronFirst;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aTWqi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ChevronLast = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '7 18 13 12 7 6'
            }
        ],
        [
            'path',
            {
                d: 'M17 6v12'
            }
        ]
    ]
];
exports.default = ChevronLast;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lG0NT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ChevronLeft = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '15 18 9 12 15 6'
            }
        ]
    ]
];
exports.default = ChevronLeft;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cNdOq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ChevronRight = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '9 18 15 12 9 6'
            }
        ]
    ]
];
exports.default = ChevronRight;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ftfv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ChevronUp = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '18 15 12 9 6 15'
            }
        ]
    ]
];
exports.default = ChevronUp;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6U4hH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ChevronsDownUp = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M7 20l5-5 5 5'
            }
        ],
        [
            'path',
            {
                d: 'M7 4l5 5 5-5'
            }
        ]
    ]
];
exports.default = ChevronsDownUp;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hY6wA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ChevronsDown = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '7 13 12 18 17 13'
            }
        ],
        [
            'polyline',
            {
                points: '7 6 12 11 17 6'
            }
        ]
    ]
];
exports.default = ChevronsDown;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k1i47":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ChevronsLeft = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '11 17 6 12 11 7'
            }
        ],
        [
            'polyline',
            {
                points: '18 17 13 12 18 7'
            }
        ]
    ]
];
exports.default = ChevronsLeft;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7S4O2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ChevronsRight = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '13 17 18 12 13 7'
            }
        ],
        [
            'polyline',
            {
                points: '6 17 11 12 6 7'
            }
        ]
    ]
];
exports.default = ChevronsRight;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9RWgA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ChevronsUpDown = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M7 15l5 5 5-5'
            }
        ],
        [
            'path',
            {
                d: 'M7 9l5-5 5 5'
            }
        ]
    ]
];
exports.default = ChevronsUpDown;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7M4Di":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ChevronsUp = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '17 11 12 6 7 11'
            }
        ],
        [
            'polyline',
            {
                points: '17 18 12 13 7 18'
            }
        ]
    ]
];
exports.default = ChevronsUp;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7bthl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Chrome = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '4'
            }
        ],
        [
            'line',
            {
                x1: '21.17',
                y1: '8',
                x2: '12',
                y2: '8'
            }
        ],
        [
            'line',
            {
                x1: '3.95',
                y1: '6.06',
                x2: '8.54',
                y2: '14'
            }
        ],
        [
            'line',
            {
                x1: '10.88',
                y1: '21.94',
                x2: '15.46',
                y2: '14'
            }
        ]
    ]
];
exports.default = Chrome;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3dSzl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var CircleSlashed = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'path',
            {
                d: 'M22 2L2 22'
            }
        ]
    ]
];
exports.default = CircleSlashed;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"evIOZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Circle = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ]
    ]
];
exports.default = Circle;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1vFff":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ClipboardCheck = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2'
            }
        ],
        [
            'path',
            {
                d: 'M15 2H9a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1z'
            }
        ],
        [
            'path',
            {
                d: 'M9 13l2 2 4-4'
            }
        ]
    ]
];
exports.default = ClipboardCheck;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2bIVc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ClipboardCopy = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M16 4h2a2 2 0 012 2v4M8 4H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2v-2'
            }
        ],
        [
            'rect',
            {
                x: '8',
                y: '2',
                width: '8',
                height: '4',
                rx: '1',
                ry: '1'
            }
        ],
        [
            'path',
            {
                d: 'M21 14H11'
            }
        ],
        [
            'path',
            {
                d: 'M15 10l-4 4 4 4'
            }
        ]
    ]
];
exports.default = ClipboardCopy;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Jejg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ClipboardList = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2'
            }
        ],
        [
            'path',
            {
                d: 'M15 2H9a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1z'
            }
        ],
        [
            'path',
            {
                d: 'M12 11h4'
            }
        ],
        [
            'path',
            {
                d: 'M12 16h4'
            }
        ],
        [
            'path',
            {
                d: 'M8 11h.01'
            }
        ],
        [
            'path',
            {
                d: 'M8 16h.01'
            }
        ]
    ]
];
exports.default = ClipboardList;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2RF7q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ClipboardX = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2'
            }
        ],
        [
            'path',
            {
                d: 'M15 2H9a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1z'
            }
        ],
        [
            'path',
            {
                d: 'M15 11l-6 6'
            }
        ],
        [
            'path',
            {
                d: 'M9 11l6 6'
            }
        ]
    ]
];
exports.default = ClipboardX;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Rk5Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Clipboard = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2'
            }
        ],
        [
            'rect',
            {
                x: '8',
                y: '2',
                width: '8',
                height: '4',
                rx: '1',
                ry: '1'
            }
        ]
    ]
];
exports.default = Clipboard;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iTPJd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Clock1 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'polyline',
            {
                points: '12 6 12 12 14.5 8'
            }
        ]
    ]
];
exports.default = Clock1;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5mUOC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Clock10 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'polyline',
            {
                points: '12 6 12 12 8 10'
            }
        ]
    ]
];
exports.default = Clock10;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kchL4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Clock11 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'polyline',
            {
                points: '12 6 12 12 9.5 8'
            }
        ]
    ]
];
exports.default = Clock11;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5gtD2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Clock12 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'polyline',
            {
                points: '12 6 12 12'
            }
        ]
    ]
];
exports.default = Clock12;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dxsI3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Clock2 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'polyline',
            {
                points: '12 6 12 12 16 10'
            }
        ]
    ]
];
exports.default = Clock2;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"18Lvc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Clock3 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'polyline',
            {
                points: '12 6 12 12 16.5 12'
            }
        ]
    ]
];
exports.default = Clock3;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cXYHt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Clock4 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'polyline',
            {
                points: '12 6 12 12 16 14'
            }
        ]
    ]
];
exports.default = Clock4;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bz07C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Clock5 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'polyline',
            {
                points: '12 6 12 12 14.5 16'
            }
        ]
    ]
];
exports.default = Clock5;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dE90Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Clock6 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'polyline',
            {
                points: '12 6 12 12 12 16.5'
            }
        ]
    ]
];
exports.default = Clock6;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"57F0U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Clock7 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'polyline',
            {
                points: '12 6 12 12 9.5 16'
            }
        ]
    ]
];
exports.default = Clock7;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5jFIR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Clock8 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'polyline',
            {
                points: '12 6 12 12 8 14'
            }
        ]
    ]
];
exports.default = Clock8;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Tvj4p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Clock9 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'polyline',
            {
                points: '12 6 12 12 7.5 12'
            }
        ]
    ]
];
exports.default = Clock9;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fzw7w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Clock = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'polyline',
            {
                points: '12 6 12 12 16 14'
            }
        ]
    ]
];
exports.default = Clock;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7S9Rc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var CloudDrizzle = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M20 16.2A4.5 4.5 0 0017.5 8h-1.8A7 7 0 104 14.9'
            }
        ],
        [
            'path',
            {
                d: 'M8 19v1'
            }
        ],
        [
            'path',
            {
                d: 'M8 14v1'
            }
        ],
        [
            'path',
            {
                d: 'M16 19v1'
            }
        ],
        [
            'path',
            {
                d: 'M16 14v1'
            }
        ],
        [
            'path',
            {
                d: 'M12 21v1'
            }
        ],
        [
            'path',
            {
                d: 'M12 16v1'
            }
        ]
    ]
];
exports.default = CloudDrizzle;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dwGCe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var CloudFog = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M20 16.2A4.5 4.5 0 0017.5 8h-1.8A7 7 0 104 14.9'
            }
        ],
        [
            'path',
            {
                d: 'M16 17H7'
            }
        ],
        [
            'path',
            {
                d: 'M17 21H9'
            }
        ]
    ]
];
exports.default = CloudFog;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1hJnS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var CloudHail = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M20 16.2A4.5 4.5 0 0017.5 8h-1.8A7 7 0 104 14.9'
            }
        ],
        [
            'path',
            {
                d: 'M16 14v2'
            }
        ],
        [
            'path',
            {
                d: 'M8 14v2'
            }
        ],
        [
            'path',
            {
                d: 'M16 20h0'
            }
        ],
        [
            'path',
            {
                d: 'M8 20h0'
            }
        ],
        [
            'path',
            {
                d: 'M12 16v2'
            }
        ],
        [
            'path',
            {
                d: 'M12 22h0'
            }
        ]
    ]
];
exports.default = CloudHail;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Myye":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var CloudLightning = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M17.5 17a4.5 4.5 0 100-9h-1.8a7 7 0 10-10.3 8'
            }
        ],
        [
            'path',
            {
                d: 'M12 12l-3 5h5l-3 5'
            }
        ]
    ]
];
exports.default = CloudLightning;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Qwvl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var CloudMoon = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M13.63 22A3.3 3.3 0 0017 18.79a3.3 3.3 0 00-3.38-3.22h-1.34A5.23 5.23 0 007.25 12 5.13 5.13 0 002 17c0 2.76 2.35 5 5.25 5h6.38z'
            }
        ],
        [
            'path',
            {
                d: 'M9.95 9a6.13 6.13 0 015.5-5.18 4.77 4.77 0 006.67 6.67A6.13 6.13 0 0119.46 15'
            }
        ]
    ]
];
exports.default = CloudMoon;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cK3DG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var CloudOff = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M2 2l20 20'
            }
        ],
        [
            'path',
            {
                d: 'M10 5a7 7 0 015.7 5h1.8a4.5 4.5 0 014 6.5'
            }
        ],
        [
            'path',
            {
                d: 'M18.8 18.8c-.4.2-.8.2-1.3.2H9A7 7 0 015.8 5.8'
            }
        ]
    ]
];
exports.default = CloudOff;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gnr31":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var CloudRainWind = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M20 16.2A4.5 4.5 0 0017.5 8h-1.8A7 7 0 104 14.9'
            }
        ],
        [
            'path',
            {
                d: 'M9.2 22l3-7'
            }
        ],
        [
            'path',
            {
                d: 'M9 13l-3 7'
            }
        ],
        [
            'path',
            {
                d: 'M17 13l-3 7'
            }
        ]
    ]
];
exports.default = CloudRainWind;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cBWWG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var CloudRain = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M20 16.2A4.5 4.5 0 0017.5 8h-1.8A7 7 0 104 14.9'
            }
        ],
        [
            'path',
            {
                d: 'M16 14v6'
            }
        ],
        [
            'path',
            {
                d: 'M8 14v6'
            }
        ],
        [
            'path',
            {
                d: 'M12 16v6'
            }
        ]
    ]
];
exports.default = CloudRain;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9xSe5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var CloudSnow = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M20 16.2A4.5 4.5 0 0017.5 8h-1.8A7 7 0 104 14.9'
            }
        ],
        [
            'path',
            {
                d: 'M8 15h0'
            }
        ],
        [
            'path',
            {
                d: 'M8 19h0'
            }
        ],
        [
            'path',
            {
                d: 'M12 17h0'
            }
        ],
        [
            'path',
            {
                d: 'M12 21h0'
            }
        ],
        [
            'path',
            {
                d: 'M16 15h0'
            }
        ],
        [
            'path',
            {
                d: 'M16 19h0'
            }
        ]
    ]
];
exports.default = CloudSnow;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2w014":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var CloudSun = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M12 2v2'
            }
        ],
        [
            'path',
            {
                d: 'M5.22 5.22l1.42 1.42'
            }
        ],
        [
            'path',
            {
                d: 'M20 12h2'
            }
        ],
        [
            'path',
            {
                d: 'M15.97 12.5A4 4 0 009.5 8.88'
            }
        ],
        [
            'path',
            {
                d: 'M13.63 22A3.3 3.3 0 0017 18.79a3.3 3.3 0 00-3.38-3.22h-1.34A5.23 5.23 0 007.25 12 5.13 5.13 0 002 17c0 2.76 2.35 5 5.25 5h6.38z'
            }
        ],
        [
            'path',
            {
                d: 'M17.36 6.64l1.42-1.42'
            }
        ]
    ]
];
exports.default = CloudSun;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5t6on":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Cloud = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M17.5 19a4.5 4.5 0 100-9h-1.8A7 7 0 109 19h8.5z'
            }
        ]
    ]
];
exports.default = Cloud;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2rIeJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Cloudy = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M17.5 21a4.5 4.5 0 100-9h-1.8A7 7 0 109 21h8.5z'
            }
        ],
        [
            'path',
            {
                d: 'M22 10c0-1.5-1.5-3-3.5-3H17c-.7-2.3-2.9-4-5.4-4-2.7 0-5 2-5.5 4.5'
            }
        ]
    ]
];
exports.default = Cloudy;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jDVEy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Clover = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M16.2 3.8a2.7 2.7 0 00-3.81 0l-.4.38-.4-.4a2.7 2.7 0 00-3.82 0C6.73 4.85 6.67 6.64 8 8l4 4 4-4c1.33-1.36 1.27-3.15.2-4.2z'
            }
        ],
        [
            'path',
            {
                d: 'M8 8c-1.36-1.33-3.15-1.27-4.2-.2a2.7 2.7 0 000 3.81l.38.4-.4.4a2.7 2.7 0 000 3.82C4.85 17.27 6.64 17.33 8 16'
            }
        ],
        [
            'path',
            {
                d: 'M16 16c1.36 1.33 3.15 1.27 4.2.2a2.7 2.7 0 000-3.81l-.38-.4.4-.4a2.7 2.7 0 000-3.82C19.15 6.73 17.36 6.67 16 8'
            }
        ],
        [
            'path',
            {
                d: 'M7.8 20.2a2.7 2.7 0 003.81 0l.4-.38.4.4a2.7 2.7 0 003.82 0c1.06-1.06 1.12-2.85-.21-4.21l-4-4-4 4c-1.33 1.36-1.27 3.15-.2 4.2z'
            }
        ],
        [
            'path',
            {
                d: 'M7 17l-5 5'
            }
        ]
    ]
];
exports.default = Clover;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7YXJY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Code2 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M18 16l4-4-4-4'
            }
        ],
        [
            'path',
            {
                d: 'M6 8l-4 4 4 4'
            }
        ],
        [
            'path',
            {
                d: 'M14.5 4l-5 16'
            }
        ]
    ]
];
exports.default = Code2;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bXaMx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Code = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '16 18 22 12 16 6'
            }
        ],
        [
            'polyline',
            {
                points: '8 6 2 12 8 18'
            }
        ]
    ]
];
exports.default = Code;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jC8WN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Codepen = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polygon',
            {
                points: '12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '22',
                x2: '12',
                y2: '15.5'
            }
        ],
        [
            'polyline',
            {
                points: '22 8.5 12 15.5 2 8.5'
            }
        ],
        [
            'polyline',
            {
                points: '2 15.5 12 8.5 22 15.5'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '2',
                x2: '12',
                y2: '8.5'
            }
        ]
    ]
];
exports.default = Codepen;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aHBDw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Codesandbox = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z'
            }
        ],
        [
            'polyline',
            {
                points: '7.5 4.21 12 6.81 16.5 4.21'
            }
        ],
        [
            'polyline',
            {
                points: '7.5 19.79 7.5 14.6 3 12'
            }
        ],
        [
            'polyline',
            {
                points: '21 12 16.5 14.6 16.5 19.79'
            }
        ],
        [
            'polyline',
            {
                points: '3.27 6.96 12 12.01 20.73 6.96'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '22.08',
                x2: '12',
                y2: '12'
            }
        ]
    ]
];
exports.default = Codesandbox;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jptCK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Coffee = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M18 8h1a4 4 0 010 8h-1'
            }
        ],
        [
            'path',
            {
                d: 'M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z'
            }
        ],
        [
            'line',
            {
                x1: '6',
                y1: '1',
                x2: '6',
                y2: '4'
            }
        ],
        [
            'line',
            {
                x1: '10',
                y1: '1',
                x2: '10',
                y2: '4'
            }
        ],
        [
            'line',
            {
                x1: '14',
                y1: '1',
                x2: '14',
                y2: '4'
            }
        ]
    ]
];
exports.default = Coffee;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hul1u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Coins = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '8',
                cy: '8',
                r: '7'
            }
        ],
        [
            'path',
            {
                d: 'M19.5 9.94a7 7 0 11-9.56 9.56'
            }
        ],
        [
            'path',
            {
                d: 'M7 6h1v4'
            }
        ],
        [
            'path',
            {
                d: 'M17.3 14.3l.7.7-2.8 2.8'
            }
        ]
    ]
];
exports.default = Coins;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j4xmz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Columns = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '3',
                y: '3',
                width: '18',
                height: '18',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '3',
                x2: '12',
                y2: '21'
            }
        ]
    ]
];
exports.default = Columns;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6BO8T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Command = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M18 3a3 3 0 00-3 3v12a3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3H6a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3V6a3 3 0 00-3-3 3 3 0 00-3 3 3 3 0 003 3h12a3 3 0 003-3 3 3 0 00-3-3z'
            }
        ]
    ]
];
exports.default = Command;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hzFiA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Compass = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'polygon',
            {
                points: '16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76'
            }
        ]
    ]
];
exports.default = Compass;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hfkaU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Contact = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M19 22H5c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2z'
            }
        ],
        [
            'line',
            {
                x1: '16',
                y1: '2',
                x2: '16',
                y2: '4'
            }
        ],
        [
            'line',
            {
                x1: '8',
                y1: '2',
                x2: '8',
                y2: '4'
            }
        ],
        [
            'circle',
            {
                cx: '12',
                cy: '11',
                r: '3'
            }
        ],
        [
            'path',
            {
                d: 'M17 18.5c-1.4-1-3.1-1.5-5-1.5s-3.6.6-5 1.5'
            }
        ]
    ]
];
exports.default = Contact;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bQWlF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Contrast = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'path',
            {
                d: 'M12 18a6 6 0 000-12v12z'
            }
        ]
    ]
];
exports.default = Contrast;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dS2wB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Cookie = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M12 2a10 10 0 1010 10 4 4 0 01-5-5 4 4 0 01-5-5'
            }
        ],
        [
            'path',
            {
                d: 'M8.5 8.5v.01'
            }
        ],
        [
            'path',
            {
                d: 'M16 15.5v.01'
            }
        ],
        [
            'path',
            {
                d: 'M12 12v.01'
            }
        ],
        [
            'path',
            {
                d: 'M11 17v.01'
            }
        ],
        [
            'path',
            {
                d: 'M7 14v.01'
            }
        ]
    ]
];
exports.default = Cookie;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4PdZ5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Copy = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '9',
                y: '9',
                width: '13',
                height: '13',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'path',
            {
                d: 'M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1'
            }
        ]
    ]
];
exports.default = Copy;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9dmVo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Copyleft = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'path',
            {
                d: 'M9 9.35a4 4 0 110 5.3'
            }
        ]
    ]
];
exports.default = Copyleft;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4c6jQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Copyright = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'path',
            {
                d: 'M15 9.354a4 4 0 100 5.292'
            }
        ]
    ]
];
exports.default = Copyright;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6fMfu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var CornerDownLeft = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '9 10 4 15 9 20'
            }
        ],
        [
            'path',
            {
                d: 'M20 4v7a4 4 0 01-4 4H4'
            }
        ]
    ]
];
exports.default = CornerDownLeft;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5rxcR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var CornerDownRight = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '15 10 20 15 15 20'
            }
        ],
        [
            'path',
            {
                d: 'M4 4v7a4 4 0 004 4h12'
            }
        ]
    ]
];
exports.default = CornerDownRight;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ayqxp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var CornerLeftDown = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '14 15 9 20 4 15'
            }
        ],
        [
            'path',
            {
                d: 'M20 4h-7a4 4 0 00-4 4v12'
            }
        ]
    ]
];
exports.default = CornerLeftDown;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c61BD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var CornerLeftUp = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '14 9 9 4 4 9'
            }
        ],
        [
            'path',
            {
                d: 'M20 20h-7a4 4 0 01-4-4V4'
            }
        ]
    ]
];
exports.default = CornerLeftUp;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"NqtSu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var CornerRightDown = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '10 15 15 20 20 15'
            }
        ],
        [
            'path',
            {
                d: 'M4 4h7a4 4 0 014 4v12'
            }
        ]
    ]
];
exports.default = CornerRightDown;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ZWdX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var CornerRightUp = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '10 9 15 4 20 9'
            }
        ],
        [
            'path',
            {
                d: 'M4 20h7a4 4 0 004-4V4'
            }
        ]
    ]
];
exports.default = CornerRightUp;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ePR5l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var CornerUpLeft = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '9 14 4 9 9 4'
            }
        ],
        [
            'path',
            {
                d: 'M20 20v-7a4 4 0 00-4-4H4'
            }
        ]
    ]
];
exports.default = CornerUpLeft;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fbsBF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var CornerUpRight = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '15 14 20 9 15 4'
            }
        ],
        [
            'path',
            {
                d: 'M4 20v-7a4 4 0 014-4h12'
            }
        ]
    ]
];
exports.default = CornerUpRight;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Xrpb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Cpu = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '4',
                y: '4',
                width: '16',
                height: '16',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'rect',
            {
                x: '9',
                y: '9',
                width: '6',
                height: '6'
            }
        ],
        [
            'line',
            {
                x1: '9',
                y1: '1',
                x2: '9',
                y2: '4'
            }
        ],
        [
            'line',
            {
                x1: '15',
                y1: '1',
                x2: '15',
                y2: '4'
            }
        ],
        [
            'line',
            {
                x1: '9',
                y1: '20',
                x2: '9',
                y2: '23'
            }
        ],
        [
            'line',
            {
                x1: '15',
                y1: '20',
                x2: '15',
                y2: '23'
            }
        ],
        [
            'line',
            {
                x1: '20',
                y1: '9',
                x2: '23',
                y2: '9'
            }
        ],
        [
            'line',
            {
                x1: '20',
                y1: '14',
                x2: '23',
                y2: '14'
            }
        ],
        [
            'line',
            {
                x1: '1',
                y1: '9',
                x2: '4',
                y2: '9'
            }
        ],
        [
            'line',
            {
                x1: '1',
                y1: '14',
                x2: '4',
                y2: '14'
            }
        ]
    ]
];
exports.default = Cpu;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gx91c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var CreditCard = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '1',
                y: '4',
                width: '22',
                height: '16',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'line',
            {
                x1: '1',
                y1: '10',
                x2: '23',
                y2: '10'
            }
        ]
    ]
];
exports.default = CreditCard;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fnS8L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Crop = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M6.13 1L6 16a2 2 0 002 2h15'
            }
        ],
        [
            'path',
            {
                d: 'M1 6.13L16 6a2 2 0 012 2v15'
            }
        ]
    ]
];
exports.default = Crop;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g4Nxs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Cross = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M11 2a2 2 0 00-2 2v5H4a2 2 0 00-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 002-2v-5h5a2 2 0 002-2v-2a2 2 0 00-2-2h-5V4a2 2 0 00-2-2h-2z'
            }
        ]
    ]
];
exports.default = Cross;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aGa5J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Crosshair = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'line',
            {
                x1: '22',
                y1: '12',
                x2: '18',
                y2: '12'
            }
        ],
        [
            'line',
            {
                x1: '6',
                y1: '12',
                x2: '2',
                y2: '12'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '6',
                x2: '12',
                y2: '2'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '22',
                x2: '12',
                y2: '18'
            }
        ]
    ]
];
exports.default = Crosshair;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e1N2Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Crown = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14'
            }
        ]
    ]
];
exports.default = Crown;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aodaY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Currency = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '8'
            }
        ],
        [
            'line',
            {
                x1: '3',
                y1: '3',
                x2: '6',
                y2: '6'
            }
        ],
        [
            'line',
            {
                x1: '21',
                y1: '3',
                x2: '18',
                y2: '6'
            }
        ],
        [
            'line',
            {
                x1: '3',
                y1: '21',
                x2: '6',
                y2: '18'
            }
        ],
        [
            'line',
            {
                x1: '21',
                y1: '21',
                x2: '18',
                y2: '18'
            }
        ]
    ]
];
exports.default = Currency;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jm3XW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Database = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'ellipse',
            {
                cx: '12',
                cy: '5',
                rx: '9',
                ry: '3'
            }
        ],
        [
            'path',
            {
                d: 'M21 12c0 1.66-4 3-9 3s-9-1.34-9-3'
            }
        ],
        [
            'path',
            {
                d: 'M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5'
            }
        ]
    ]
];
exports.default = Database;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5OgY2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Delete = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M21 4H8l-7 8 7 8h13a2 2 0 002-2V6a2 2 0 00-2-2z'
            }
        ],
        [
            'line',
            {
                x1: '18',
                y1: '9',
                x2: '12',
                y2: '15'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '9',
                x2: '18',
                y2: '15'
            }
        ]
    ]
];
exports.default = Delete;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4THV8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Dice1 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '3',
                y: '3',
                width: '18',
                height: '18',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'path',
            {
                d: 'M12 12h.01'
            }
        ]
    ]
];
exports.default = Dice1;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cz9DV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Dice2 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '3',
                y: '3',
                width: '18',
                height: '18',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'path',
            {
                d: 'M15 9h.01'
            }
        ],
        [
            'path',
            {
                d: 'M9 15h.01'
            }
        ]
    ]
];
exports.default = Dice2;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Yp5BE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Dice3 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '3',
                y: '3',
                width: '18',
                height: '18',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'path',
            {
                d: 'M16 8h.01'
            }
        ],
        [
            'path',
            {
                d: 'M12 12h.01'
            }
        ],
        [
            'path',
            {
                d: 'M8 16h.01'
            }
        ]
    ]
];
exports.default = Dice3;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"clnyS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Dice4 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '3',
                y: '3',
                width: '18',
                height: '18',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'path',
            {
                d: 'M16 8h.01'
            }
        ],
        [
            'path',
            {
                d: 'M8 8h.01'
            }
        ],
        [
            'path',
            {
                d: 'M8 16h.01'
            }
        ],
        [
            'path',
            {
                d: 'M16 16h.01'
            }
        ]
    ]
];
exports.default = Dice4;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1y65u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Dice5 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '3',
                y: '3',
                width: '18',
                height: '18',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'path',
            {
                d: 'M16 8h.01'
            }
        ],
        [
            'path',
            {
                d: 'M8 8h.01'
            }
        ],
        [
            'path',
            {
                d: 'M8 16h.01'
            }
        ],
        [
            'path',
            {
                d: 'M16 16h.01'
            }
        ],
        [
            'path',
            {
                d: 'M12 12h.01'
            }
        ]
    ]
];
exports.default = Dice5;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"330zy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Dice6 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '3',
                y: '3',
                width: '18',
                height: '18',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'path',
            {
                d: 'M16 8h.01'
            }
        ],
        [
            'path',
            {
                d: 'M16 12h.01'
            }
        ],
        [
            'path',
            {
                d: 'M16 16h.01'
            }
        ],
        [
            'path',
            {
                d: 'M8 8h.01'
            }
        ],
        [
            'path',
            {
                d: 'M8 12h.01'
            }
        ],
        [
            'path',
            {
                d: 'M8 16h.01'
            }
        ]
    ]
];
exports.default = Dice6;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ji9DO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Disc = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '3'
            }
        ]
    ]
];
exports.default = Disc;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"exRJc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var DivideCircle = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '8',
                y1: '12',
                x2: '16',
                y2: '12'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '16',
                x2: '12',
                y2: '16'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '8',
                x2: '12',
                y2: '8'
            }
        ],
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ]
    ]
];
exports.default = DivideCircle;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g6z8p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var DivideSquare = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '3',
                y: '3',
                width: '18',
                height: '18',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'line',
            {
                x1: '8',
                y1: '12',
                x2: '16',
                y2: '12'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '16',
                x2: '12',
                y2: '16'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '8',
                x2: '12',
                y2: '8'
            }
        ]
    ]
];
exports.default = DivideSquare;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8iOQd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Divide = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '6',
                r: '1'
            }
        ],
        [
            'line',
            {
                x1: '5',
                y1: '12',
                x2: '19',
                y2: '12'
            }
        ],
        [
            'circle',
            {
                cx: '12',
                cy: '18',
                r: '1'
            }
        ]
    ]
];
exports.default = Divide;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c8FnZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var DollarSign = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '12',
                y1: '1',
                x2: '12',
                y2: '23'
            }
        ],
        [
            'path',
            {
                d: 'M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6'
            }
        ]
    ]
];
exports.default = DollarSign;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fiJes":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var DownloadCloud = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M20 16.2A4.5 4.5 0 0017.5 8h-1.8A7 7 0 104 14.9'
            }
        ],
        [
            'path',
            {
                d: 'M12 12v9'
            }
        ],
        [
            'path',
            {
                d: 'M8 17l4 4 4-4'
            }
        ]
    ]
];
exports.default = DownloadCloud;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1BbVl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Download = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4'
            }
        ],
        [
            'polyline',
            {
                points: '7 10 12 15 17 10'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '15',
                x2: '12',
                y2: '3'
            }
        ]
    ]
];
exports.default = Download;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bsKfs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Dribbble = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'path',
            {
                d: 'M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32'
            }
        ]
    ]
];
exports.default = Dribbble;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jDBna":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Droplet = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M12 22a7 7 0 007-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 007 7z'
            }
        ]
    ]
];
exports.default = Droplet;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3JXFx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Droplets = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z'
            }
        ],
        [
            'path',
            {
                d: 'M12.56 6.6A10.97 10.97 0 0014 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 01-11.91 4.97'
            }
        ]
    ]
];
exports.default = Droplets;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dM5pL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Drumstick = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M15.45 15.4c-2.13.65-4.3.32-5.7-1.1-2.29-2.27-1.76-6.5 1.17-9.42 2.93-2.93 7.15-3.46 9.43-1.18 1.41 1.41 1.74 3.57 1.1 5.71-1.4-.51-3.26-.02-4.64 1.36-1.38 1.38-1.87 3.23-1.36 4.63z'
            }
        ],
        [
            'path',
            {
                d: 'M11.25 15.6l-2.16 2.16a2.5 2.5 0 11-4.56 1.73 2.49 2.49 0 01-1.41-4.24 2.5 2.5 0 013.14-.32l2.16-2.16'
            }
        ]
    ]
];
exports.default = Drumstick;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bavYY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Edit2 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z'
            }
        ]
    ]
];
exports.default = Edit2;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jSoVf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Edit3 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M12 20h9'
            }
        ],
        [
            'path',
            {
                d: 'M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z'
            }
        ]
    ]
];
exports.default = Edit3;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6VvPd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Edit = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7'
            }
        ],
        [
            'path',
            {
                d: 'M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z'
            }
        ]
    ]
];
exports.default = Edit;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f3Edg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Egg = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z'
            }
        ]
    ]
];
exports.default = Egg;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jktdN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var EqualNot = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '5',
                y1: '9',
                x2: '19',
                y2: '9'
            }
        ],
        [
            'line',
            {
                x1: '5',
                y1: '15',
                x2: '19',
                y2: '15'
            }
        ],
        [
            'line',
            {
                x1: '19',
                y1: '5',
                x2: '5',
                y2: '19'
            }
        ]
    ]
];
exports.default = EqualNot;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5wQh6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Equal = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '5',
                y1: '9',
                x2: '19',
                y2: '9'
            }
        ],
        [
            'line',
            {
                x1: '5',
                y1: '15',
                x2: '19',
                y2: '15'
            }
        ]
    ]
];
exports.default = Equal;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cSTv2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Euro = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M4 10h12'
            }
        ],
        [
            'path',
            {
                d: 'M4 14h9'
            }
        ],
        [
            'path',
            {
                d: 'M19 6a7.7 7.7 0 00-5.2-2A7.9 7.9 0 006 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2'
            }
        ]
    ]
];
exports.default = Euro;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5lqNL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Expand = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M21 21l-6-6m6 6v-4.8m0 4.8h-4.8'
            }
        ],
        [
            'path',
            {
                d: 'M3 16.2V21m0 0h4.8M3 21l6-6'
            }
        ],
        [
            'path',
            {
                d: 'M21 7.8V3m0 0h-4.8M21 3l-6 6'
            }
        ],
        [
            'path',
            {
                d: 'M3 7.8V3m0 0h4.8M3 3l6 6'
            }
        ]
    ]
];
exports.default = Expand;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bv0ss":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ExternalLink = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6'
            }
        ],
        [
            'polyline',
            {
                points: '15 3 21 3 21 9'
            }
        ],
        [
            'line',
            {
                x1: '10',
                y1: '14',
                x2: '21',
                y2: '3'
            }
        ]
    ]
];
exports.default = ExternalLink;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Sed1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var EyeOff = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24'
            }
        ],
        [
            'line',
            {
                x1: '1',
                y1: '1',
                x2: '23',
                y2: '23'
            }
        ]
    ]
];
exports.default = EyeOff;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dXo9g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Eye = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'
            }
        ],
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '3'
            }
        ]
    ]
];
exports.default = Eye;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kpr5o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Facebook = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'
            }
        ]
    ]
];
exports.default = Facebook;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lbaL7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var FastForward = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polygon',
            {
                points: '13 19 22 12 13 5 13 19'
            }
        ],
        [
            'polygon',
            {
                points: '2 19 11 12 2 5 2 19'
            }
        ]
    ]
];
exports.default = FastForward;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1ZCle":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Feather = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M20.24 12.24a6 6 0 00-8.49-8.49L5 10.5V19h8.5z'
            }
        ],
        [
            'line',
            {
                x1: '16',
                y1: '8',
                x2: '2',
                y2: '22'
            }
        ],
        [
            'line',
            {
                x1: '17.5',
                y1: '15',
                x2: '9',
                y2: '15'
            }
        ]
    ]
];
exports.default = Feather;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fG72k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Figma = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M5 5.5A3.5 3.5 0 018.5 2H12v7H8.5A3.5 3.5 0 015 5.5z'
            }
        ],
        [
            'path',
            {
                d: 'M12 2h3.5a3.5 3.5 0 110 7H12V2z'
            }
        ],
        [
            'path',
            {
                d: 'M12 12.5a3.5 3.5 0 117 0 3.5 3.5 0 11-7 0z'
            }
        ],
        [
            'path',
            {
                d: 'M5 19.5A3.5 3.5 0 018.5 16H12v3.5a3.5 3.5 0 11-7 0z'
            }
        ],
        [
            'path',
            {
                d: 'M5 12.5A3.5 3.5 0 018.5 9H12v7H8.5A3.5 3.5 0 015 12.5z'
            }
        ]
    ]
];
exports.default = Figma;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"31sXC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var FileCheck2 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M4 22h14a2 2 0 002-2V7.5L14.5 2H6a2 2 0 00-2 2v4'
            }
        ],
        [
            'path',
            {
                d: 'M14 2v6h6'
            }
        ],
        [
            'path',
            {
                d: 'M3 15l2 2 4-4'
            }
        ]
    ]
];
exports.default = FileCheck2;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"62GUG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var FileCheck = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z'
            }
        ],
        [
            'polyline',
            {
                points: '14 2 14 8 20 8'
            }
        ],
        [
            'path',
            {
                d: 'M9 15l2 2 4-4'
            }
        ]
    ]
];
exports.default = FileCheck;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eRpte":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var FileCode = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M4 22h14a2 2 0 002-2V7.5L14.5 2H6a2 2 0 00-2 2v4'
            }
        ],
        [
            'path',
            {
                d: 'M14 2v6h6'
            }
        ],
        [
            'path',
            {
                d: 'M9 18l3-3-3-3'
            }
        ],
        [
            'path',
            {
                d: 'M5 12l-3 3 3 3'
            }
        ]
    ]
];
exports.default = FileCode;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"37kXi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var FileDigit = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M4 22h14a2 2 0 002-2V7.5L14.5 2H6a2 2 0 00-2 2v4'
            }
        ],
        [
            'path',
            {
                d: 'M14 2v6h6'
            }
        ],
        [
            'path',
            {
                d: 'M10 12h2v6'
            }
        ],
        [
            'rect',
            {
                x: '2',
                y: '12',
                width: '4',
                height: '6'
            }
        ],
        [
            'path',
            {
                d: 'M10 18h4'
            }
        ]
    ]
];
exports.default = FileDigit;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l5fpR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var FileInput = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M4 22h14a2 2 0 002-2V7.5L14.5 2H6a2 2 0 00-2 2v4'
            }
        ],
        [
            'path',
            {
                d: 'M14 2v6h6'
            }
        ],
        [
            'path',
            {
                d: 'M2 15h10'
            }
        ],
        [
            'path',
            {
                d: 'M9 18l3-3-3-3'
            }
        ]
    ]
];
exports.default = FileInput;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dIauH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var FileMinus2 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M4 22h14a2 2 0 002-2V7.5L14.5 2H6a2 2 0 00-2 2v4'
            }
        ],
        [
            'path',
            {
                d: 'M14 2v6h6'
            }
        ],
        [
            'path',
            {
                d: 'M3 15h6'
            }
        ]
    ]
];
exports.default = FileMinus2;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"itBUJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var FileMinus = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z'
            }
        ],
        [
            'polyline',
            {
                points: '14 2 14 8 20 8'
            }
        ],
        [
            'line',
            {
                x1: '9',
                y1: '15',
                x2: '15',
                y2: '15'
            }
        ]
    ]
];
exports.default = FileMinus;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"babBX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var FileOutput = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M4 22h14a2 2 0 002-2V7.5L14.5 2H6a2 2 0 00-2 2v4'
            }
        ],
        [
            'path',
            {
                d: 'M14 2v6h6'
            }
        ],
        [
            'path',
            {
                d: 'M2 15h10'
            }
        ],
        [
            'path',
            {
                d: 'M5 12l-3 3 3 3'
            }
        ]
    ]
];
exports.default = FileOutput;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ii8c1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var FilePlus2 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M4 22h14a2 2 0 002-2V7.5L14.5 2H6a2 2 0 00-2 2v4'
            }
        ],
        [
            'path',
            {
                d: 'M14 2v6h6'
            }
        ],
        [
            'path',
            {
                d: 'M3 15h6'
            }
        ],
        [
            'path',
            {
                d: 'M6 12v6'
            }
        ]
    ]
];
exports.default = FilePlus2;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ImM0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var FilePlus = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z'
            }
        ],
        [
            'polyline',
            {
                points: '14 2 14 8 20 8'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '18',
                x2: '12',
                y2: '12'
            }
        ],
        [
            'line',
            {
                x1: '9',
                y1: '15',
                x2: '15',
                y2: '15'
            }
        ]
    ]
];
exports.default = FilePlus;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8pwLQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var FileSearch = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M4 22h14a2 2 0 002-2V7.5L14.5 2H6a2 2 0 00-2 2v3'
            }
        ],
        [
            'path',
            {
                d: 'M14 2v6h6'
            }
        ],
        [
            'path',
            {
                d: 'M5 17a3 3 0 100-6 3 3 0 000 6z'
            }
        ],
        [
            'path',
            {
                d: 'M9 18l-1.5-1.5'
            }
        ]
    ]
];
exports.default = FileSearch;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jjUqY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var FileText = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z'
            }
        ],
        [
            'polyline',
            {
                points: '14 2 14 8 20 8'
            }
        ],
        [
            'line',
            {
                x1: '16',
                y1: '13',
                x2: '8',
                y2: '13'
            }
        ],
        [
            'line',
            {
                x1: '16',
                y1: '17',
                x2: '8',
                y2: '17'
            }
        ],
        [
            'line',
            {
                x1: '10',
                y1: '9',
                x2: '8',
                y2: '9'
            }
        ]
    ]
];
exports.default = FileText;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7acW7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var FileX2 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M4 22h14a2 2 0 002-2V7.5L14.5 2H6a2 2 0 00-2 2v4'
            }
        ],
        [
            'path',
            {
                d: 'M14 2v6h6'
            }
        ],
        [
            'path',
            {
                d: 'M3 12.5l5 5'
            }
        ],
        [
            'path',
            {
                d: 'M8 12.5l-5 5'
            }
        ]
    ]
];
exports.default = FileX2;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8M8cs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var FileX = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z'
            }
        ],
        [
            'polyline',
            {
                points: '14 2 14 8 20 8'
            }
        ],
        [
            'line',
            {
                x1: '9.5',
                y1: '12.5',
                x2: '14.5',
                y2: '17.5'
            }
        ],
        [
            'line',
            {
                x1: '14.5',
                y1: '12.5',
                x2: '9.5',
                y2: '17.5'
            }
        ]
    ]
];
exports.default = FileX;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fS8yX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var File = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z'
            }
        ],
        [
            'polyline',
            {
                points: '14 2 14 8 20 8'
            }
        ]
    ]
];
exports.default = File;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4gVLP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Files = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z'
            }
        ],
        [
            'path',
            {
                d: 'M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8'
            }
        ],
        [
            'path',
            {
                d: 'M15 2v5h5'
            }
        ]
    ]
];
exports.default = Files;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4t1Fo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Film = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '2',
                y: '2',
                width: '20',
                height: '20',
                rx: '2.18',
                ry: '2.18'
            }
        ],
        [
            'line',
            {
                x1: '7',
                y1: '2',
                x2: '7',
                y2: '22'
            }
        ],
        [
            'line',
            {
                x1: '17',
                y1: '2',
                x2: '17',
                y2: '22'
            }
        ],
        [
            'line',
            {
                x1: '2',
                y1: '12',
                x2: '22',
                y2: '12'
            }
        ],
        [
            'line',
            {
                x1: '2',
                y1: '7',
                x2: '7',
                y2: '7'
            }
        ],
        [
            'line',
            {
                x1: '2',
                y1: '17',
                x2: '7',
                y2: '17'
            }
        ],
        [
            'line',
            {
                x1: '17',
                y1: '17',
                x2: '22',
                y2: '17'
            }
        ],
        [
            'line',
            {
                x1: '17',
                y1: '7',
                x2: '22',
                y2: '7'
            }
        ]
    ]
];
exports.default = Film;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kJGU2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Filter = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polygon',
            {
                points: '22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3'
            }
        ]
    ]
];
exports.default = Filter;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jqUYR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var FlagTriangleLeft = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M17 22V2L7 7l10 5'
            }
        ]
    ]
];
exports.default = FlagTriangleLeft;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fRmRL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var FlagTriangleRight = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M7 22V2l10 5-10 5'
            }
        ]
    ]
];
exports.default = FlagTriangleRight;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jLro0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Flag = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z'
            }
        ],
        [
            'line',
            {
                x1: '4',
                y1: '22',
                x2: '4',
                y2: '15'
            }
        ]
    ]
];
exports.default = Flag;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"oICf9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Flame = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z'
            }
        ]
    ]
];
exports.default = Flame;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"40lnE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var FlashlightOff = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M16 16v4a2 2 0 01-2 2h-4a2 2 0 01-2-2V10c0-2-2-2-2-4'
            }
        ],
        [
            'path',
            {
                d: 'M7 2h11v4c0 2-2 2-2 4v1'
            }
        ],
        [
            'line',
            {
                x1: '11',
                y1: '6',
                x2: '18',
                y2: '6'
            }
        ],
        [
            'line',
            {
                x1: '2',
                y1: '2',
                x2: '22',
                y2: '22'
            }
        ]
    ]
];
exports.default = FlashlightOff;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j5Cy0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Flashlight = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M18 6c0 2-2 2-2 4v10a2 2 0 01-2 2h-4a2 2 0 01-2-2V10c0-2-2-2-2-4V2h12z'
            }
        ],
        [
            'line',
            {
                x1: '6',
                y1: '6',
                x2: '18',
                y2: '6'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '12',
                x2: '12',
                y2: '12'
            }
        ]
    ]
];
exports.default = Flashlight;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5tDpL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var FlaskConical = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M10 2v8L4.72 20.55a1 1 0 00.9 1.45h12.76a1 1 0 00.9-1.45L14 10V2'
            }
        ],
        [
            'path',
            {
                d: 'M8.5 2h7'
            }
        ],
        [
            'path',
            {
                d: 'M7 16h10'
            }
        ]
    ]
];
exports.default = FlaskConical;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hGyuy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var FlaskRound = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M10 2v7.31'
            }
        ],
        [
            'path',
            {
                d: 'M14 9.3V1.99'
            }
        ],
        [
            'path',
            {
                d: 'M8.5 2h7'
            }
        ],
        [
            'path',
            {
                d: 'M14 9.3a6.5 6.5 0 11-4 0'
            }
        ],
        [
            'path',
            {
                d: 'M5.58 16.5h12.85'
            }
        ]
    ]
];
exports.default = FlaskRound;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cOkHS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var FolderMinus = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z'
            }
        ],
        [
            'line',
            {
                x1: '9',
                y1: '14',
                x2: '15',
                y2: '14'
            }
        ]
    ]
];
exports.default = FolderMinus;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i25C8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var FolderOpen = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M6 17l2-5h14l-3 8a2 2 0 01-2 1H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h7a2 2 0 012 2v4'
            }
        ]
    ]
];
exports.default = FolderOpen;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jzVFH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var FolderPlus = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '11',
                x2: '12',
                y2: '17'
            }
        ],
        [
            'line',
            {
                x1: '9',
                y1: '14',
                x2: '15',
                y2: '14'
            }
        ]
    ]
];
exports.default = FolderPlus;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9wI4J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Folder = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z'
            }
        ]
    ]
];
exports.default = Folder;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5A259":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var FormInput = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '2',
                y: '6',
                width: '20',
                height: '12',
                rx: '2'
            }
        ],
        [
            'path',
            {
                d: 'M12 12h.01'
            }
        ],
        [
            'path',
            {
                d: 'M17 12h.01'
            }
        ],
        [
            'path',
            {
                d: 'M7 12h.01'
            }
        ]
    ]
];
exports.default = FormInput;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7rPCA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Forward = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '15 17 20 12 15 7'
            }
        ],
        [
            'path',
            {
                d: 'M4 18v-2a4 4 0 014-4h12'
            }
        ]
    ]
];
exports.default = Forward;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ho6cy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Framer = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7'
            }
        ]
    ]
];
exports.default = Framer;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2aRjX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Frown = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'path',
            {
                d: 'M16 16s-1.5-2-4-2-4 2-4 2'
            }
        ],
        [
            'line',
            {
                x1: '9',
                y1: '9',
                x2: '9.01',
                y2: '9'
            }
        ],
        [
            'line',
            {
                x1: '15',
                y1: '9',
                x2: '15.01',
                y2: '9'
            }
        ]
    ]
];
exports.default = Frown;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7qBOx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var FunctionSquare = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '3',
                y: '3',
                width: '18',
                height: '18',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'path',
            {
                d: 'M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3'
            }
        ],
        [
            'path',
            {
                d: 'M9 11.2h5.7'
            }
        ]
    ]
];
exports.default = FunctionSquare;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5xmBa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Gamepad2 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '6',
                y1: '11',
                x2: '10',
                y2: '11'
            }
        ],
        [
            'line',
            {
                x1: '8',
                y1: '9',
                x2: '8',
                y2: '13'
            }
        ],
        [
            'line',
            {
                x1: '15',
                y1: '12',
                x2: '15.01',
                y2: '12'
            }
        ],
        [
            'line',
            {
                x1: '18',
                y1: '10',
                x2: '18.01',
                y2: '10'
            }
        ],
        [
            'path',
            {
                d: 'M17.32 5H6.68a4 4 0 00-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 003 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 019.828 16h4.344a2 2 0 011.414.586L17 18c.5.5 1 1 2 1a3 3 0 003-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0017.32 5z'
            }
        ]
    ]
];
exports.default = Gamepad2;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2KGkH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Gamepad = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '6',
                y1: '12',
                x2: '10',
                y2: '12'
            }
        ],
        [
            'line',
            {
                x1: '8',
                y1: '10',
                x2: '8',
                y2: '14'
            }
        ],
        [
            'line',
            {
                x1: '15',
                y1: '13',
                x2: '15.01',
                y2: '13'
            }
        ],
        [
            'line',
            {
                x1: '18',
                y1: '11',
                x2: '18.01',
                y2: '11'
            }
        ],
        [
            'rect',
            {
                x: '2',
                y: '6',
                width: '20',
                height: '12',
                rx: '2'
            }
        ]
    ]
];
exports.default = Gamepad;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8DYno":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Gauge = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M12 15l3.5-3.5'
            }
        ],
        [
            'path',
            {
                d: 'M20.3 18c.4-1 .7-2.2.7-3.4C21 9.8 17 6 12 6s-9 3.8-9 8.6c0 1.2.3 2.4.7 3.4'
            }
        ]
    ]
];
exports.default = Gauge;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l9sol":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Gavel = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M14 13l-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 010-3L11 10'
            }
        ],
        [
            'path',
            {
                d: 'M16 16l6-6'
            }
        ],
        [
            'path',
            {
                d: 'M8 8l6-6'
            }
        ],
        [
            'path',
            {
                d: 'M9 7l8 8'
            }
        ],
        [
            'path',
            {
                d: 'M21 11l-8-8'
            }
        ]
    ]
];
exports.default = Gavel;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iXqmm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Gem = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polygon',
            {
                points: '6 3 18 3 22 9 12 22 2 9'
            }
        ],
        [
            'path',
            {
                d: 'M12 22l4-13-3-6'
            }
        ],
        [
            'path',
            {
                d: 'M12 22L8 9l3-6'
            }
        ],
        [
            'path',
            {
                d: 'M2 9h20'
            }
        ]
    ]
];
exports.default = Gem;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2My7r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Ghost = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M9 10h.01'
            }
        ],
        [
            'path',
            {
                d: 'M15 10h.01'
            }
        ],
        [
            'path',
            {
                d: 'M12 2a8 8 0 00-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 00-8-8z'
            }
        ]
    ]
];
exports.default = Ghost;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"350cH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Gift = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '20 12 20 22 4 22 4 12'
            }
        ],
        [
            'rect',
            {
                x: '2',
                y: '7',
                width: '20',
                height: '5'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '22',
                x2: '12',
                y2: '7'
            }
        ],
        [
            'path',
            {
                d: 'M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z'
            }
        ],
        [
            'path',
            {
                d: 'M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z'
            }
        ]
    ]
];
exports.default = Gift;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ifznb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var GitBranchPlus = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M6 3v12'
            }
        ],
        [
            'path',
            {
                d: 'M18 9a3 3 0 100-6 3 3 0 000 6z'
            }
        ],
        [
            'path',
            {
                d: 'M6 21a3 3 0 100-6 3 3 0 000 6z'
            }
        ],
        [
            'path',
            {
                d: 'M15 6a9 9 0 00-9 9'
            }
        ],
        [
            'path',
            {
                d: 'M18 15v6'
            }
        ],
        [
            'path',
            {
                d: 'M21 18h-6'
            }
        ]
    ]
];
exports.default = GitBranchPlus;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6F41o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var GitBranch = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '6',
                y1: '3',
                x2: '6',
                y2: '15'
            }
        ],
        [
            'circle',
            {
                cx: '18',
                cy: '6',
                r: '3'
            }
        ],
        [
            'circle',
            {
                cx: '6',
                cy: '18',
                r: '3'
            }
        ],
        [
            'path',
            {
                d: 'M18 9a9 9 0 01-9 9'
            }
        ]
    ]
];
exports.default = GitBranch;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ecBEW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var GitCommit = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '3'
            }
        ],
        [
            'line',
            {
                x1: '3',
                y1: '12',
                x2: '9',
                y2: '12'
            }
        ],
        [
            'line',
            {
                x1: '15',
                y1: '12',
                x2: '21',
                y2: '12'
            }
        ]
    ]
];
exports.default = GitCommit;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8ECya":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var GitFork = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '18',
                r: '3'
            }
        ],
        [
            'circle',
            {
                cx: '6',
                cy: '6',
                r: '3'
            }
        ],
        [
            'circle',
            {
                cx: '18',
                cy: '6',
                r: '3'
            }
        ],
        [
            'path',
            {
                d: 'M18 9v1a2 2 0 01-2 2H8a2 2 0 01-2-2V9'
            }
        ],
        [
            'path',
            {
                d: 'M12 12v3'
            }
        ]
    ]
];
exports.default = GitFork;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hU97q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var GitMerge = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '18',
                cy: '18',
                r: '3'
            }
        ],
        [
            'circle',
            {
                cx: '6',
                cy: '6',
                r: '3'
            }
        ],
        [
            'path',
            {
                d: 'M6 21V9a9 9 0 009 9'
            }
        ]
    ]
];
exports.default = GitMerge;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fHOV8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var GitPullRequest = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '18',
                cy: '18',
                r: '3'
            }
        ],
        [
            'circle',
            {
                cx: '6',
                cy: '6',
                r: '3'
            }
        ],
        [
            'path',
            {
                d: 'M13 6h3a2 2 0 012 2v7'
            }
        ],
        [
            'line',
            {
                x1: '6',
                y1: '9',
                x2: '6',
                y2: '21'
            }
        ]
    ]
];
exports.default = GitPullRequest;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7UPmy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Github = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22'
            }
        ]
    ]
];
exports.default = Github;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l7SAn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Gitlab = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 014.82 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0118.6 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.51L23 13.45a.84.84 0 01-.35.94z'
            }
        ]
    ]
];
exports.default = Gitlab;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8T15c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Glasses = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '6',
                cy: '15',
                r: '4'
            }
        ],
        [
            'circle',
            {
                cx: '18',
                cy: '15',
                r: '4'
            }
        ],
        [
            'path',
            {
                d: 'M14 15a2 2 0 00-2-2 2 2 0 00-2 2'
            }
        ],
        [
            'path',
            {
                d: 'M2.5 13L5 7c.7-1.3 1.4-2 3-2'
            }
        ],
        [
            'path',
            {
                d: 'M21.5 13L19 7c-.7-1.3-1.5-2-3-2'
            }
        ]
    ]
];
exports.default = Glasses;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b8y6L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Globe2 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M15 21v-4a2 2 0 012-2h4'
            }
        ],
        [
            'path',
            {
                d: 'M7 4v2a3 3 0 003 2h0a2 2 0 012 2 2 2 0 004 0 2 2 0 012-2h3'
            }
        ],
        [
            'path',
            {
                d: 'M3 11h2a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v4'
            }
        ],
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ]
    ]
];
exports.default = Globe2;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Qc32":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Globe = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'line',
            {
                x1: '2',
                y1: '12',
                x2: '22',
                y2: '12'
            }
        ],
        [
            'path',
            {
                d: 'M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z'
            }
        ]
    ]
];
exports.default = Globe;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4gwHF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Grab = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M18 11.5V9a2 2 0 00-2-2v0a2 2 0 00-2 2v1.4'
            }
        ],
        [
            'path',
            {
                d: 'M14 10V8a2 2 0 00-2-2v0a2 2 0 00-2 2v2'
            }
        ],
        [
            'path',
            {
                d: 'M10 9.9V9a2 2 0 00-2-2v0a2 2 0 00-2 2v5'
            }
        ],
        [
            'path',
            {
                d: 'M6 14v0a2 2 0 00-2-2v0a2 2 0 00-2 2v0'
            }
        ],
        [
            'path',
            {
                d: 'M18 11v0a2 2 0 114 0v3a8 8 0 01-8 8h-4a8 8 0 01-8-8 2 2 0 114 0'
            }
        ]
    ]
];
exports.default = Grab;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lc6Qk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var GraduationCap = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M22 10v6M2 10l10-5 10 5-10 5z'
            }
        ],
        [
            'path',
            {
                d: 'M6 12v5c3 3 9 3 12 0v-5'
            }
        ]
    ]
];
exports.default = GraduationCap;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dSPCt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Grid = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '3',
                y: '3',
                width: '18',
                height: '18',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'line',
            {
                x1: '3',
                y1: '9',
                x2: '21',
                y2: '9'
            }
        ],
        [
            'line',
            {
                x1: '3',
                y1: '15',
                x2: '21',
                y2: '15'
            }
        ],
        [
            'line',
            {
                x1: '9',
                y1: '3',
                x2: '9',
                y2: '21'
            }
        ],
        [
            'line',
            {
                x1: '15',
                y1: '3',
                x2: '15',
                y2: '21'
            }
        ]
    ]
];
exports.default = Grid;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"27JR9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var GripHorizontal = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '9',
                r: '1'
            }
        ],
        [
            'circle',
            {
                cx: '19',
                cy: '9',
                r: '1'
            }
        ],
        [
            'circle',
            {
                cx: '5',
                cy: '9',
                r: '1'
            }
        ],
        [
            'circle',
            {
                cx: '12',
                cy: '15',
                r: '1'
            }
        ],
        [
            'circle',
            {
                cx: '19',
                cy: '15',
                r: '1'
            }
        ],
        [
            'circle',
            {
                cx: '5',
                cy: '15',
                r: '1'
            }
        ]
    ]
];
exports.default = GripHorizontal;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1VA2i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var GripVertical = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '9',
                cy: '12',
                r: '1'
            }
        ],
        [
            'circle',
            {
                cx: '9',
                cy: '5',
                r: '1'
            }
        ],
        [
            'circle',
            {
                cx: '9',
                cy: '19',
                r: '1'
            }
        ],
        [
            'circle',
            {
                cx: '15',
                cy: '12',
                r: '1'
            }
        ],
        [
            'circle',
            {
                cx: '15',
                cy: '5',
                r: '1'
            }
        ],
        [
            'circle',
            {
                cx: '15',
                cy: '19',
                r: '1'
            }
        ]
    ]
];
exports.default = GripVertical;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e8Jcb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Hammer = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M15 12l-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 010-3L12 9'
            }
        ],
        [
            'path',
            {
                d: 'M17.64 15L22 10.64'
            }
        ],
        [
            'path',
            {
                d: 'M20.91 11.7l-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 00-3.94-1.64H9l.92.82A6.18 6.18 0 0112 8.4v1.56l2 2h2.47l2.26 1.91'
            }
        ]
    ]
];
exports.default = Hammer;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3DjF7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var HandMetal = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M18 12.5V10a2 2 0 00-2-2v0a2 2 0 00-2 2v1.4'
            }
        ],
        [
            'path',
            {
                d: 'M14 11V9a2 2 0 10-4 0v2'
            }
        ],
        [
            'path',
            {
                d: 'M10 10.5V5a2 2 0 10-4 0v9'
            }
        ],
        [
            'path',
            {
                d: 'M7 15l-1.76-1.76a2 2 0 00-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 008-8V7a2 2 0 10-4 0v5'
            }
        ]
    ]
];
exports.default = HandMetal;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cjCb3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Hand = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M18 11V6a2 2 0 00-2-2v0a2 2 0 00-2 2v0'
            }
        ],
        [
            'path',
            {
                d: 'M14 10V4a2 2 0 00-2-2v0a2 2 0 00-2 2v2'
            }
        ],
        [
            'path',
            {
                d: 'M10 10.5V6a2 2 0 00-2-2v0a2 2 0 00-2 2v8'
            }
        ],
        [
            'path',
            {
                d: 'M18 8a2 2 0 114 0v6a8 8 0 01-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 012.83-2.82L7 15'
            }
        ]
    ]
];
exports.default = Hand;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gwcFC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var HardDrive = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '22',
                y1: '12',
                x2: '2',
                y2: '12'
            }
        ],
        [
            'path',
            {
                d: 'M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z'
            }
        ],
        [
            'line',
            {
                x1: '6',
                y1: '16',
                x2: '6.01',
                y2: '16'
            }
        ],
        [
            'line',
            {
                x1: '10',
                y1: '16',
                x2: '10.01',
                y2: '16'
            }
        ]
    ]
];
exports.default = HardDrive;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2qwZz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var HardHat = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M2 18a1 1 0 001 1h18a1 1 0 001-1v-2a1 1 0 00-1-1H3a1 1 0 00-1 1v2z'
            }
        ],
        [
            'path',
            {
                d: 'M10 10V5a1 1 0 011-1h2a1 1 0 011 1v5'
            }
        ],
        [
            'path',
            {
                d: 'M4 15v-3a6 6 0 016-6h0'
            }
        ],
        [
            'path',
            {
                d: 'M14 6h0a6 6 0 016 6v3'
            }
        ]
    ]
];
exports.default = HardHat;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cpi6E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Hash = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '4',
                y1: '9',
                x2: '20',
                y2: '9'
            }
        ],
        [
            'line',
            {
                x1: '4',
                y1: '15',
                x2: '20',
                y2: '15'
            }
        ],
        [
            'line',
            {
                x1: '10',
                y1: '3',
                x2: '8',
                y2: '21'
            }
        ],
        [
            'line',
            {
                x1: '16',
                y1: '3',
                x2: '14',
                y2: '21'
            }
        ]
    ]
];
exports.default = Hash;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6azQN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Haze = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M5.2 6.2l1.4 1.4'
            }
        ],
        [
            'path',
            {
                d: 'M2 13h2'
            }
        ],
        [
            'path',
            {
                d: 'M20 13h2'
            }
        ],
        [
            'path',
            {
                d: 'M17.4 7.6l1.4-1.4'
            }
        ],
        [
            'path',
            {
                d: 'M22 17H2'
            }
        ],
        [
            'path',
            {
                d: 'M22 21H2'
            }
        ],
        [
            'path',
            {
                d: 'M16 13a4 4 0 00-8 0'
            }
        ],
        [
            'path',
            {
                d: 'M12 5V2.5'
            }
        ]
    ]
];
exports.default = Haze;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kokQK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Headphones = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M3 18v-6a9 9 0 0118 0v6'
            }
        ],
        [
            'path',
            {
                d: 'M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z'
            }
        ]
    ]
];
exports.default = Headphones;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cEjBr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Heart = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z'
            }
        ]
    ]
];
exports.default = Heart;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lXYjp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var HelpCircle = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'path',
            {
                d: 'M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '17',
                x2: '12.01',
                y2: '17'
            }
        ]
    ]
];
exports.default = HelpCircle;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cDJ3x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Hexagon = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z'
            }
        ]
    ]
];
exports.default = Hexagon;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dCEOg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Highlighter = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M9 11l-6 6v3h9l3-3'
            }
        ],
        [
            'path',
            {
                d: 'M22 12l-4.6 4.6a2 2 0 01-2.8 0l-5.2-5.2a2 2 0 010-2.8L14 4'
            }
        ]
    ]
];
exports.default = Highlighter;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2gyWe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var History = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M3 3v5h5'
            }
        ],
        [
            'path',
            {
                d: 'M3.05 13A9 9 0 106 5.3L3 8'
            }
        ],
        [
            'path',
            {
                d: 'M12 7v5l4 2'
            }
        ]
    ]
];
exports.default = History;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kWXdS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Home = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z'
            }
        ],
        [
            'polyline',
            {
                points: '9 22 9 12 15 12 15 22'
            }
        ]
    ]
];
exports.default = Home;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d6Oww":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ImageMinus = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M21 11v8a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h8'
            }
        ],
        [
            'path',
            {
                d: 'M8.5 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'
            }
        ],
        [
            'path',
            {
                d: 'M21 15l-5-5L5 21'
            }
        ],
        [
            'path',
            {
                d: 'M22 5h-6'
            }
        ]
    ]
];
exports.default = ImageMinus;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bXB4K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ImageOff = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M2 2l20 20'
            }
        ],
        [
            'path',
            {
                d: 'M9 3h10a2 2 0 012 2v10M3.59 3.59A2 2 0 003 5v14c0 1.1.9 2 2 2h14a2 2 0 001.41-.59'
            }
        ],
        [
            'path',
            {
                d: 'M9.56 9.56a1.5 1.5 0 01-2.12-2.12'
            }
        ],
        [
            'path',
            {
                d: 'M21 15l-5-5M5 21l8-8'
            }
        ]
    ]
];
exports.default = ImageOff;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1FkR1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ImagePlus = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M21 11v8a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h8'
            }
        ],
        [
            'path',
            {
                d: 'M8.5 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'
            }
        ],
        [
            'path',
            {
                d: 'M21 15l-5-5L5 21'
            }
        ],
        [
            'path',
            {
                d: 'M19 2v6'
            }
        ],
        [
            'path',
            {
                d: 'M22 5h-6'
            }
        ]
    ]
];
exports.default = ImagePlus;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iM2K8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Image = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '3',
                y: '3',
                width: '18',
                height: '18',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'circle',
            {
                cx: '8.5',
                cy: '8.5',
                r: '1.5'
            }
        ],
        [
            'polyline',
            {
                points: '21 15 16 10 5 21'
            }
        ]
    ]
];
exports.default = Image;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ju4CJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Import = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M12 3v12'
            }
        ],
        [
            'path',
            {
                d: 'M8 11l4 4 4-4'
            }
        ],
        [
            'path',
            {
                d: 'M8 5H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2h-4'
            }
        ]
    ]
];
exports.default = Import;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b4ozu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Inbox = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '22 12 16 12 14 15 10 15 8 12 2 12'
            }
        ],
        [
            'path',
            {
                d: 'M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z'
            }
        ]
    ]
];
exports.default = Inbox;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5uU9S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Indent = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '3 8 7 12 3 16'
            }
        ],
        [
            'line',
            {
                x1: '21',
                y1: '12',
                x2: '11',
                y2: '12'
            }
        ],
        [
            'line',
            {
                x1: '21',
                y1: '6',
                x2: '11',
                y2: '6'
            }
        ],
        [
            'line',
            {
                x1: '21',
                y1: '18',
                x2: '11',
                y2: '18'
            }
        ]
    ]
];
exports.default = Indent;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Ynu1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var IndianRupee = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M6 3h12'
            }
        ],
        [
            'path',
            {
                d: 'M6 8h12'
            }
        ],
        [
            'path',
            {
                d: 'M6 13l8.5 8'
            }
        ],
        [
            'path',
            {
                d: 'M6 13h3'
            }
        ],
        [
            'path',
            {
                d: 'M9 13c6.667 0 6.667-10 0-10'
            }
        ]
    ]
];
exports.default = IndianRupee;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"JucDh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Infinity = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.585 8 0 8 5.606 0 7.644-8 12.74-8z'
            }
        ]
    ]
];
exports.default = Infinity;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hA69c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Info = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '16',
                x2: '12',
                y2: '12'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '8',
                x2: '12.01',
                y2: '8'
            }
        ]
    ]
];
exports.default = Info;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eK2sn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Inspect = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M19 11V4a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2h7'
            }
        ],
        [
            'path',
            {
                d: 'M12 12l4.166 10 1.48-4.355L22 16.166 12 12z'
            }
        ],
        [
            'path',
            {
                d: 'M18 18l3 3'
            }
        ]
    ]
];
exports.default = Inspect;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cW7Tg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Instagram = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '2',
                y: '2',
                width: '20',
                height: '20',
                rx: '5',
                ry: '5'
            }
        ],
        [
            'path',
            {
                d: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z'
            }
        ],
        [
            'line',
            {
                x1: '17.5',
                y1: '6.5',
                x2: '17.51',
                y2: '6.5'
            }
        ]
    ]
];
exports.default = Instagram;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fKz5U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Italic = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '19',
                y1: '4',
                x2: '10',
                y2: '4'
            }
        ],
        [
            'line',
            {
                x1: '14',
                y1: '20',
                x2: '5',
                y2: '20'
            }
        ],
        [
            'line',
            {
                x1: '15',
                y1: '4',
                x2: '9',
                y2: '20'
            }
        ]
    ]
];
exports.default = Italic;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"mnYBY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var JapaneseYen = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M12 9.5V21m0-11.5L6 3m6 6.5L18 3'
            }
        ],
        [
            'path',
            {
                d: 'M6 15h12'
            }
        ],
        [
            'path',
            {
                d: 'M6 11h12'
            }
        ]
    ]
];
exports.default = JapaneseYen;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1ULTs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Key = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4'
            }
        ]
    ]
];
exports.default = Key;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9FLLa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Keyboard = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '2',
                y: '4',
                width: '20',
                height: '16',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'path',
            {
                d: 'M6 8h.001'
            }
        ],
        [
            'path',
            {
                d: 'M10 8h.001'
            }
        ],
        [
            'path',
            {
                d: 'M14 8h.001'
            }
        ],
        [
            'path',
            {
                d: 'M18 8h.001'
            }
        ],
        [
            'path',
            {
                d: 'M8 12h.001'
            }
        ],
        [
            'path',
            {
                d: 'M12 12h.001'
            }
        ],
        [
            'path',
            {
                d: 'M16 12h.001'
            }
        ],
        [
            'path',
            {
                d: 'M7 16h10'
            }
        ]
    ]
];
exports.default = Keyboard;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4qgOc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Landmark = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '3',
                y1: '22',
                x2: '21',
                y2: '22'
            }
        ],
        [
            'line',
            {
                x1: '6',
                y1: '18',
                x2: '6',
                y2: '11'
            }
        ],
        [
            'line',
            {
                x1: '10',
                y1: '18',
                x2: '10',
                y2: '11'
            }
        ],
        [
            'line',
            {
                x1: '14',
                y1: '18',
                x2: '14',
                y2: '11'
            }
        ],
        [
            'line',
            {
                x1: '18',
                y1: '18',
                x2: '18',
                y2: '11'
            }
        ],
        [
            'polygon',
            {
                points: '12 2 20 7 4 7'
            }
        ]
    ]
];
exports.default = Landmark;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fMcSf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Languages = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M5 8l6 6'
            }
        ],
        [
            'path',
            {
                d: 'M4 14l6-6 2-3'
            }
        ],
        [
            'path',
            {
                d: 'M2 5h12'
            }
        ],
        [
            'path',
            {
                d: 'M7 2h1'
            }
        ],
        [
            'path',
            {
                d: 'M22 22l-5-10-5 10'
            }
        ],
        [
            'path',
            {
                d: 'M14 18h6'
            }
        ]
    ]
];
exports.default = Languages;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lu2xQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Laptop2 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '3',
                y: '4',
                width: '18',
                height: '12',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'line',
            {
                x1: '2',
                y1: '20',
                x2: '22',
                y2: '20'
            }
        ]
    ]
];
exports.default = Laptop2;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1l3i7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Laptop = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M20 16V7a2 2 0 00-2-2H6a2 2 0 00-2 2v9m16 0H4m16 0l1.28 2.55a1 1 0 01-.9 1.45H3.62a1 1 0 01-.9-1.45L4 16'
            }
        ]
    ]
];
exports.default = Laptop;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1VjXt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var LassoSelect = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M7 22a5 5 0 01-2-4'
            }
        ],
        [
            'path',
            {
                d: 'M7 16.93c.96.43 1.96.74 2.99.91'
            }
        ],
        [
            'path',
            {
                d: 'M3.34 14A6.8 6.8 0 012 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 01-.33 2'
            }
        ],
        [
            'path',
            {
                d: 'M5 18a2 2 0 100-4 2 2 0 000 4z'
            }
        ],
        [
            'path',
            {
                d: 'M14.33 22h-.09a.35.35 0 01-.24-.32v-10a.34.34 0 01.33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 01-.21.59h-4.49l-2.57 3.85a.35.35 0 01-.28.14v0z'
            }
        ]
    ]
];
exports.default = LassoSelect;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j92oF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Lasso = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M7 22a5 5 0 01-2-4'
            }
        ],
        [
            'path',
            {
                d: 'M3.3 14A6.8 6.8 0 012 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 01-5-1'
            }
        ],
        [
            'path',
            {
                d: 'M5 18a2 2 0 100-4 2 2 0 000 4z'
            }
        ]
    ]
];
exports.default = Lasso;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kIX6g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Layers = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polygon',
            {
                points: '12 2 2 7 12 12 22 7 12 2'
            }
        ],
        [
            'polyline',
            {
                points: '2 17 12 22 22 17'
            }
        ],
        [
            'polyline',
            {
                points: '2 12 12 17 22 12'
            }
        ]
    ]
];
exports.default = Layers;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7oDSD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var LayoutDashboard = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '3',
                y: '3',
                width: '7',
                height: '9'
            }
        ],
        [
            'rect',
            {
                x: '14',
                y: '3',
                width: '7',
                height: '5'
            }
        ],
        [
            'rect',
            {
                x: '14',
                y: '12',
                width: '7',
                height: '9'
            }
        ],
        [
            'rect',
            {
                x: '3',
                y: '16',
                width: '7',
                height: '5'
            }
        ]
    ]
];
exports.default = LayoutDashboard;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ksAue":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var LayoutGrid = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '3',
                y: '3',
                width: '7',
                height: '7'
            }
        ],
        [
            'rect',
            {
                x: '14',
                y: '3',
                width: '7',
                height: '7'
            }
        ],
        [
            'rect',
            {
                x: '14',
                y: '14',
                width: '7',
                height: '7'
            }
        ],
        [
            'rect',
            {
                x: '3',
                y: '14',
                width: '7',
                height: '7'
            }
        ]
    ]
];
exports.default = LayoutGrid;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"549lW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var LayoutList = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '3',
                y: '14',
                width: '7',
                height: '7'
            }
        ],
        [
            'rect',
            {
                x: '3',
                y: '3',
                width: '7',
                height: '7'
            }
        ],
        [
            'line',
            {
                x1: '14',
                y1: '4',
                x2: '21',
                y2: '4'
            }
        ],
        [
            'line',
            {
                x1: '14',
                y1: '9',
                x2: '21',
                y2: '9'
            }
        ],
        [
            'line',
            {
                x1: '14',
                y1: '15',
                x2: '21',
                y2: '15'
            }
        ],
        [
            'line',
            {
                x1: '14',
                y1: '20',
                x2: '21',
                y2: '20'
            }
        ]
    ]
];
exports.default = LayoutList;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hbV9G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var LayoutTemplate = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M21 3H3v7h18V3z'
            }
        ],
        [
            'path',
            {
                d: 'M21 14h-5v7h5v-7z'
            }
        ],
        [
            'path',
            {
                d: 'M12 14H3v7h9v-7z'
            }
        ]
    ]
];
exports.default = LayoutTemplate;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aDcTL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Layout = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '3',
                y: '3',
                width: '18',
                height: '18',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'line',
            {
                x1: '3',
                y1: '9',
                x2: '21',
                y2: '9'
            }
        ],
        [
            'line',
            {
                x1: '9',
                y1: '21',
                x2: '9',
                y2: '9'
            }
        ]
    ]
];
exports.default = Layout;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"21dNn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Library = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M16 6l4 14'
            }
        ],
        [
            'path',
            {
                d: 'M12 6v14'
            }
        ],
        [
            'path',
            {
                d: 'M8 8v12'
            }
        ],
        [
            'path',
            {
                d: 'M4 4v16'
            }
        ]
    ]
];
exports.default = Library;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3oBcI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var LifeBuoy = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '4'
            }
        ],
        [
            'line',
            {
                x1: '4.93',
                y1: '4.93',
                x2: '9.17',
                y2: '9.17'
            }
        ],
        [
            'line',
            {
                x1: '14.83',
                y1: '14.83',
                x2: '19.07',
                y2: '19.07'
            }
        ],
        [
            'line',
            {
                x1: '14.83',
                y1: '9.17',
                x2: '19.07',
                y2: '4.93'
            }
        ],
        [
            'line',
            {
                x1: '14.83',
                y1: '9.17',
                x2: '18.36',
                y2: '5.64'
            }
        ],
        [
            'line',
            {
                x1: '4.93',
                y1: '19.07',
                x2: '9.17',
                y2: '14.83'
            }
        ]
    ]
];
exports.default = LifeBuoy;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j7ReP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var LightbulbOff = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M9 18h6'
            }
        ],
        [
            'path',
            {
                d: 'M10 22h4'
            }
        ],
        [
            'path',
            {
                d: 'M2 2l20 20'
            }
        ],
        [
            'path',
            {
                d: 'M8.91 14a4.61 4.61 0 00-1.41-2.5C6.23 10.23 6 9 6 8a6 6 0 01.084-1M9 2.804A6 6 0 0118 8a4.651 4.651 0 01-1.031 3'
            }
        ]
    ]
];
exports.default = LightbulbOff;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Ulf9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Lightbulb = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '9',
                y1: '18',
                x2: '15',
                y2: '18'
            }
        ],
        [
            'line',
            {
                x1: '10',
                y1: '22',
                x2: '14',
                y2: '22'
            }
        ],
        [
            'path',
            {
                d: 'M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14'
            }
        ]
    ]
];
exports.default = Lightbulb;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5JJxD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Link2Off = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M15 7h2a5 5 0 014 8M9 17H7A5 5 0 017 7'
            }
        ],
        [
            'line',
            {
                x1: '8',
                y1: '12',
                x2: '12',
                y2: '12'
            }
        ],
        [
            'line',
            {
                x1: '2',
                y1: '2',
                x2: '22',
                y2: '22'
            }
        ]
    ]
];
exports.default = Link2Off;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5tNP3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Link2 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M15 7h2a5 5 0 010 10h-2m-6 0H7A5 5 0 017 7h2'
            }
        ],
        [
            'line',
            {
                x1: '8',
                y1: '12',
                x2: '16',
                y2: '12'
            }
        ]
    ]
];
exports.default = Link2;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ijV11":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Link = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71'
            }
        ],
        [
            'path',
            {
                d: 'M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71'
            }
        ]
    ]
];
exports.default = Link;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5flf5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Linkedin = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z'
            }
        ],
        [
            'rect',
            {
                x: '2',
                y: '9',
                width: '4',
                height: '12'
            }
        ],
        [
            'circle',
            {
                cx: '4',
                cy: '4',
                r: '2'
            }
        ]
    ]
];
exports.default = Linkedin;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9hEB9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ListChecks = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '10',
                y1: '6',
                x2: '21',
                y2: '6'
            }
        ],
        [
            'line',
            {
                x1: '10',
                y1: '12',
                x2: '21',
                y2: '12'
            }
        ],
        [
            'line',
            {
                x1: '10',
                y1: '18',
                x2: '21',
                y2: '18'
            }
        ],
        [
            'polyline',
            {
                points: '3 6 4 7 6 5'
            }
        ],
        [
            'polyline',
            {
                points: '3 12 4 13 6 11'
            }
        ],
        [
            'polyline',
            {
                points: '3 18 4 19 6 17'
            }
        ]
    ]
];
exports.default = ListChecks;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jedJl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ListMinus = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M11 12H3'
            }
        ],
        [
            'path',
            {
                d: 'M16 6H3'
            }
        ],
        [
            'path',
            {
                d: 'M16 18H3'
            }
        ],
        [
            'path',
            {
                d: 'M21 12h-6'
            }
        ]
    ]
];
exports.default = ListMinus;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hS6fz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ListOrdered = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '10',
                y1: '6',
                x2: '21',
                y2: '6'
            }
        ],
        [
            'line',
            {
                x1: '10',
                y1: '12',
                x2: '21',
                y2: '12'
            }
        ],
        [
            'line',
            {
                x1: '10',
                y1: '18',
                x2: '21',
                y2: '18'
            }
        ],
        [
            'path',
            {
                d: 'M4 6h1v4'
            }
        ],
        [
            'path',
            {
                d: 'M4 10h2'
            }
        ],
        [
            'path',
            {
                d: 'M6 18H4c0-1 2-2 2-3s-1-1.5-2-1'
            }
        ]
    ]
];
exports.default = ListOrdered;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aXf00":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ListPlus = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M11 12H3'
            }
        ],
        [
            'path',
            {
                d: 'M16 6H3'
            }
        ],
        [
            'path',
            {
                d: 'M16 18H3'
            }
        ],
        [
            'path',
            {
                d: 'M18 9v6'
            }
        ],
        [
            'path',
            {
                d: 'M21 12h-6'
            }
        ]
    ]
];
exports.default = ListPlus;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j2JXR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ListX = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M11 12H3'
            }
        ],
        [
            'path',
            {
                d: 'M16 6H3'
            }
        ],
        [
            'path',
            {
                d: 'M16 18H3'
            }
        ],
        [
            'path',
            {
                d: 'M19 10l-4 4'
            }
        ],
        [
            'path',
            {
                d: 'M15 10l4 4'
            }
        ]
    ]
];
exports.default = ListX;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2KW06":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var List = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '8',
                y1: '6',
                x2: '21',
                y2: '6'
            }
        ],
        [
            'line',
            {
                x1: '8',
                y1: '12',
                x2: '21',
                y2: '12'
            }
        ],
        [
            'line',
            {
                x1: '8',
                y1: '18',
                x2: '21',
                y2: '18'
            }
        ],
        [
            'line',
            {
                x1: '3',
                y1: '6',
                x2: '3.01',
                y2: '6'
            }
        ],
        [
            'line',
            {
                x1: '3',
                y1: '12',
                x2: '3.01',
                y2: '12'
            }
        ],
        [
            'line',
            {
                x1: '3',
                y1: '18',
                x2: '3.01',
                y2: '18'
            }
        ]
    ]
];
exports.default = List;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8MD0o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Loader2 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M21 12a9 9 0 11-6.219-8.56'
            }
        ]
    ]
];
exports.default = Loader2;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kbMQ8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Loader = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '12',
                y1: '2',
                x2: '12',
                y2: '6'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '18',
                x2: '12',
                y2: '22'
            }
        ],
        [
            'line',
            {
                x1: '4.93',
                y1: '4.93',
                x2: '7.76',
                y2: '7.76'
            }
        ],
        [
            'line',
            {
                x1: '16.24',
                y1: '16.24',
                x2: '19.07',
                y2: '19.07'
            }
        ],
        [
            'line',
            {
                x1: '2',
                y1: '12',
                x2: '6',
                y2: '12'
            }
        ],
        [
            'line',
            {
                x1: '18',
                y1: '12',
                x2: '22',
                y2: '12'
            }
        ],
        [
            'line',
            {
                x1: '4.93',
                y1: '19.07',
                x2: '7.76',
                y2: '16.24'
            }
        ],
        [
            'line',
            {
                x1: '16.24',
                y1: '7.76',
                x2: '19.07',
                y2: '4.93'
            }
        ]
    ]
];
exports.default = Loader;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ewd0f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var LocateFixed = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '2',
                x2: '5',
                y1: '12',
                y2: '12'
            }
        ],
        [
            'line',
            {
                x1: '19',
                x2: '22',
                y1: '12',
                y2: '12'
            }
        ],
        [
            'line',
            {
                x1: '12',
                x2: '12',
                y1: '2',
                y2: '5'
            }
        ],
        [
            'line',
            {
                x1: '12',
                x2: '12',
                y1: '19',
                y2: '22'
            }
        ],
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '7'
            }
        ],
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '3'
            }
        ]
    ]
];
exports.default = LocateFixed;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9tw5J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var LocateOff = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '2',
                x2: '5',
                y1: '12',
                y2: '12'
            }
        ],
        [
            'line',
            {
                x1: '19',
                x2: '22',
                y1: '12',
                y2: '12'
            }
        ],
        [
            'line',
            {
                x1: '12',
                x2: '12',
                y1: '2',
                y2: '5'
            }
        ],
        [
            'line',
            {
                x1: '12',
                x2: '12',
                y1: '19',
                y2: '22'
            }
        ],
        [
            'path',
            {
                d: 'M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11'
            }
        ],
        [
            'path',
            {
                d: 'M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29'
            }
        ],
        [
            'line',
            {
                x1: '2',
                x2: '22',
                y1: '2',
                y2: '22'
            }
        ]
    ]
];
exports.default = LocateOff;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8fYt1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Locate = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '2',
                x2: '5',
                y1: '12',
                y2: '12'
            }
        ],
        [
            'line',
            {
                x1: '19',
                x2: '22',
                y1: '12',
                y2: '12'
            }
        ],
        [
            'line',
            {
                x1: '12',
                x2: '12',
                y1: '2',
                y2: '5'
            }
        ],
        [
            'line',
            {
                x1: '12',
                x2: '12',
                y1: '19',
                y2: '22'
            }
        ],
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '7'
            }
        ]
    ]
];
exports.default = Locate;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"brnIL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Lock = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '3',
                y: '11',
                width: '18',
                height: '11',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'path',
            {
                d: 'M7 11V7a5 5 0 0110 0v4'
            }
        ]
    ]
];
exports.default = Lock;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1mRg1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var LogIn = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4'
            }
        ],
        [
            'polyline',
            {
                points: '10 17 15 12 10 7'
            }
        ],
        [
            'line',
            {
                x1: '15',
                y1: '12',
                x2: '3',
                y2: '12'
            }
        ]
    ]
];
exports.default = LogIn;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"buv0z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var LogOut = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4'
            }
        ],
        [
            'polyline',
            {
                points: '16 17 21 12 16 7'
            }
        ],
        [
            'line',
            {
                x1: '21',
                y1: '12',
                x2: '9',
                y2: '12'
            }
        ]
    ]
];
exports.default = LogOut;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9O6by":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Mail = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'
            }
        ],
        [
            'polyline',
            {
                points: '22,6 12,13 2,6'
            }
        ]
    ]
];
exports.default = Mail;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dEcjK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var MapPin = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z'
            }
        ],
        [
            'circle',
            {
                cx: '12',
                cy: '10',
                r: '3'
            }
        ]
    ]
];
exports.default = MapPin;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kfIGr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Map = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polygon',
            {
                points: '1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6'
            }
        ],
        [
            'line',
            {
                x1: '8',
                y1: '2',
                x2: '8',
                y2: '18'
            }
        ],
        [
            'line',
            {
                x1: '16',
                y1: '6',
                x2: '16',
                y2: '22'
            }
        ]
    ]
];
exports.default = Map;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6oZGW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Maximize2 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '15 3 21 3 21 9'
            }
        ],
        [
            'polyline',
            {
                points: '9 21 3 21 3 15'
            }
        ],
        [
            'line',
            {
                x1: '21',
                y1: '3',
                x2: '14',
                y2: '10'
            }
        ],
        [
            'line',
            {
                x1: '3',
                y1: '21',
                x2: '10',
                y2: '14'
            }
        ]
    ]
];
exports.default = Maximize2;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"0hZQ9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Maximize = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3'
            }
        ]
    ]
];
exports.default = Maximize;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6aCFG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Megaphone = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M3 11l18-5v12L3 14v-3z'
            }
        ],
        [
            'path',
            {
                d: 'M11.6 16.8a3 3 0 11-5.8-1.6'
            }
        ]
    ]
];
exports.default = Megaphone;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eq3D8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Meh = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'line',
            {
                x1: '8',
                y1: '15',
                x2: '16',
                y2: '15'
            }
        ],
        [
            'line',
            {
                x1: '9',
                y1: '9',
                x2: '9.01',
                y2: '9'
            }
        ],
        [
            'line',
            {
                x1: '15',
                y1: '9',
                x2: '15.01',
                y2: '9'
            }
        ]
    ]
];
exports.default = Meh;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2h0Ss":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Menu = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '4',
                y1: '12',
                x2: '20',
                y2: '12'
            }
        ],
        [
            'line',
            {
                x1: '4',
                y1: '6',
                x2: '20',
                y2: '6'
            }
        ],
        [
            'line',
            {
                x1: '4',
                y1: '18',
                x2: '20',
                y2: '18'
            }
        ]
    ]
];
exports.default = Menu;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kOQiJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var MessageCircle = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'
            }
        ]
    ]
];
exports.default = MessageCircle;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hru9D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var MessageSquare = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z'
            }
        ]
    ]
];
exports.default = MessageSquare;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gah5K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var MicOff = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '1',
                y1: '1',
                x2: '23',
                y2: '23'
            }
        ],
        [
            'path',
            {
                d: 'M9 9v3a3 3 0 005.12 2.12M15 9.34V4a3 3 0 00-5.94-.6'
            }
        ],
        [
            'path',
            {
                d: 'M17 16.95A7 7 0 015 12v-2m14 0v2a7 7 0 01-.11 1.23'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '19',
                x2: '12',
                y2: '23'
            }
        ],
        [
            'line',
            {
                x1: '8',
                y1: '23',
                x2: '16',
                y2: '23'
            }
        ]
    ]
];
exports.default = MicOff;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7kFvg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Mic = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z'
            }
        ],
        [
            'path',
            {
                d: 'M19 10v2a7 7 0 01-14 0v-2'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '19',
                x2: '12',
                y2: '23'
            }
        ],
        [
            'line',
            {
                x1: '8',
                y1: '23',
                x2: '16',
                y2: '23'
            }
        ]
    ]
];
exports.default = Mic;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fIO0i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Minimize2 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '4 14 10 14 10 20'
            }
        ],
        [
            'polyline',
            {
                points: '20 10 14 10 14 4'
            }
        ],
        [
            'line',
            {
                x1: '14',
                y1: '10',
                x2: '21',
                y2: '3'
            }
        ],
        [
            'line',
            {
                x1: '3',
                y1: '21',
                x2: '10',
                y2: '14'
            }
        ]
    ]
];
exports.default = Minimize2;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ae6ix":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Minimize = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3m0 18v-3a2 2 0 012-2h3M3 16h3a2 2 0 012 2v3'
            }
        ]
    ]
];
exports.default = Minimize;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2s41G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var MinusCircle = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'line',
            {
                x1: '8',
                y1: '12',
                x2: '16',
                y2: '12'
            }
        ]
    ]
];
exports.default = MinusCircle;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lsDYX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var MinusSquare = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '3',
                y: '3',
                width: '18',
                height: '18',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'line',
            {
                x1: '8',
                y1: '12',
                x2: '16',
                y2: '12'
            }
        ]
    ]
];
exports.default = MinusSquare;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9dT67":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Minus = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '5',
                y1: '12',
                x2: '19',
                y2: '12'
            }
        ]
    ]
];
exports.default = Minus;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gg4qL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var MonitorOff = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M17 17H4a2 2 0 01-2-2V5c0-1.5 1-2 1-2'
            }
        ],
        [
            'path',
            {
                d: 'M22 15V5a2 2 0 00-2-2H9'
            }
        ],
        [
            'path',
            {
                d: 'M8 21h8'
            }
        ],
        [
            'path',
            {
                d: 'M12 17v4'
            }
        ],
        [
            'path',
            {
                d: 'M2 2l20 20'
            }
        ]
    ]
];
exports.default = MonitorOff;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gsw22":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var MonitorSpeaker = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M5.5 20H8'
            }
        ],
        [
            'path',
            {
                d: 'M17 9h.01'
            }
        ],
        [
            'rect',
            {
                x: '12',
                y: '4',
                width: '10',
                height: '16',
                rx: '2'
            }
        ],
        [
            'path',
            {
                d: 'M8 6H4a2 2 0 00-2 2v6a2 2 0 002 2h4'
            }
        ],
        [
            'circle',
            {
                cx: '17',
                cy: '15',
                r: '1'
            }
        ]
    ]
];
exports.default = MonitorSpeaker;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bs2wo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Monitor = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '2',
                y: '3',
                width: '20',
                height: '14',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'line',
            {
                x1: '8',
                y1: '21',
                x2: '16',
                y2: '21'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '17',
                x2: '12',
                y2: '21'
            }
        ]
    ]
];
exports.default = Monitor;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2H4M0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Moon = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z'
            }
        ]
    ]
];
exports.default = Moon;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9QGaT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var MoreHorizontal = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '1'
            }
        ],
        [
            'circle',
            {
                cx: '19',
                cy: '12',
                r: '1'
            }
        ],
        [
            'circle',
            {
                cx: '5',
                cy: '12',
                r: '1'
            }
        ]
    ]
];
exports.default = MoreHorizontal;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k61mh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var MoreVertical = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '1'
            }
        ],
        [
            'circle',
            {
                cx: '12',
                cy: '5',
                r: '1'
            }
        ],
        [
            'circle',
            {
                cx: '12',
                cy: '19',
                r: '1'
            }
        ]
    ]
];
exports.default = MoreVertical;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2eSOn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var MountainSnow = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M8 3l4 8 5-5 5 15H2L8 3z'
            }
        ],
        [
            'path',
            {
                d: 'M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19'
            }
        ]
    ]
];
exports.default = MountainSnow;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bNwNY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Mountain = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M8 3l4 8 5-5 5 15H2L8 3z'
            }
        ]
    ]
];
exports.default = Mountain;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1C8Ks":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var MousePointer2 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M4 4l7.07 17 2.51-7.39L21 11.07z'
            }
        ]
    ]
];
exports.default = MousePointer2;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2tbZe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var MousePointerClick = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M9 9l5 12 1.774-5.226L21 14 9 9z'
            }
        ],
        [
            'path',
            {
                d: 'M16.071 16.071l4.243 4.243'
            }
        ],
        [
            'path',
            {
                d: 'M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122'
            }
        ]
    ]
];
exports.default = MousePointerClick;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"24Vsr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var MousePointer = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z'
            }
        ],
        [
            'path',
            {
                d: 'M13 13l6 6'
            }
        ]
    ]
];
exports.default = MousePointer;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kKDPa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var MoveDiagonal2 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '5 11 5 5 11 5'
            }
        ],
        [
            'polyline',
            {
                points: '19 13 19 19 13 19'
            }
        ],
        [
            'line',
            {
                x1: '5',
                y1: '5',
                x2: '19',
                y2: '19'
            }
        ]
    ]
];
exports.default = MoveDiagonal2;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d1XDN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var MoveDiagonal = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '13 5 19 5 19 11'
            }
        ],
        [
            'polyline',
            {
                points: '11 19 5 19 5 13'
            }
        ],
        [
            'line',
            {
                x1: '19',
                y1: '5',
                x2: '5',
                y2: '19'
            }
        ]
    ]
];
exports.default = MoveDiagonal;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"13Uaa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var MoveHorizontal = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '18 8 22 12 18 16'
            }
        ],
        [
            'polyline',
            {
                points: '6 8 2 12 6 16'
            }
        ],
        [
            'line',
            {
                x1: '2',
                y1: '12',
                x2: '22',
                y2: '12'
            }
        ]
    ]
];
exports.default = MoveHorizontal;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"30bqI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var MoveVertical = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '8 18 12 22 16 18'
            }
        ],
        [
            'polyline',
            {
                points: '8 6 12 2 16 6'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '2',
                x2: '12',
                y2: '22'
            }
        ]
    ]
];
exports.default = MoveVertical;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kXPmb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Move = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '5 9 2 12 5 15'
            }
        ],
        [
            'polyline',
            {
                points: '9 5 12 2 15 5'
            }
        ],
        [
            'polyline',
            {
                points: '15 19 12 22 9 19'
            }
        ],
        [
            'polyline',
            {
                points: '19 9 22 12 19 15'
            }
        ],
        [
            'line',
            {
                x1: '2',
                y1: '12',
                x2: '22',
                y2: '12'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '2',
                x2: '12',
                y2: '22'
            }
        ]
    ]
];
exports.default = Move;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d17PO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Music = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M9 18V5l12-2v13'
            }
        ],
        [
            'circle',
            {
                cx: '6',
                cy: '18',
                r: '3'
            }
        ],
        [
            'circle',
            {
                cx: '18',
                cy: '16',
                r: '3'
            }
        ]
    ]
];
exports.default = Music;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1nTjL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Navigation2 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polygon',
            {
                points: '12 2 19 21 12 17 5 21 12 2'
            }
        ]
    ]
];
exports.default = Navigation2;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eXkY5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Navigation = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polygon',
            {
                points: '3 11 22 2 13 21 11 13 3 11'
            }
        ]
    ]
];
exports.default = Navigation;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gg2cp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Network = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '9',
                y: '2',
                width: '6',
                height: '6'
            }
        ],
        [
            'rect',
            {
                x: '16',
                y: '16',
                width: '6',
                height: '6'
            }
        ],
        [
            'rect',
            {
                x: '2',
                y: '16',
                width: '6',
                height: '6'
            }
        ],
        [
            'path',
            {
                d: 'M12 8v4m0 0H5v4m7-4h7v4'
            }
        ]
    ]
];
exports.default = Network;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d3Ywo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Octagon = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polygon',
            {
                points: '7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2'
            }
        ]
    ]
];
exports.default = Octagon;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7h2Sr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Option = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M3 3h6l6 18h6'
            }
        ],
        [
            'path',
            {
                d: 'M14 3h7'
            }
        ]
    ]
];
exports.default = Option;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9w5r5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Outdent = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '7 8 3 12 7 16'
            }
        ],
        [
            'line',
            {
                x1: '21',
                y1: '12',
                x2: '11',
                y2: '12'
            }
        ],
        [
            'line',
            {
                x1: '21',
                y1: '6',
                x2: '11',
                y2: '6'
            }
        ],
        [
            'line',
            {
                x1: '21',
                y1: '18',
                x2: '11',
                y2: '18'
            }
        ]
    ]
];
exports.default = Outdent;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3OFk3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var PackageCheck = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M16 16l2 2 4-4'
            }
        ],
        [
            'path',
            {
                d: 'M21 10V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l2-1.14'
            }
        ],
        [
            'path',
            {
                d: 'M16.5 9.4L7.55 4.24'
            }
        ],
        [
            'path',
            {
                d: 'M3.29 7L12 12m0 0l8.71-5M12 12v10'
            }
        ]
    ]
];
exports.default = PackageCheck;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5qgk6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var PackageMinus = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M16 16h6'
            }
        ],
        [
            'path',
            {
                d: 'M21 10V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l2-1.14'
            }
        ],
        [
            'path',
            {
                d: 'M16.5 9.4L7.55 4.24'
            }
        ],
        [
            'path',
            {
                d: 'M3.29 7L12 12m0 0l8.71-5M12 12v10'
            }
        ]
    ]
];
exports.default = PackageMinus;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lHGK6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var PackagePlus = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M16 16h6'
            }
        ],
        [
            'path',
            {
                d: 'M19 13v6'
            }
        ],
        [
            'path',
            {
                d: 'M21 10V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l2-1.14'
            }
        ],
        [
            'path',
            {
                d: 'M16.5 9.4L7.55 4.24'
            }
        ],
        [
            'path',
            {
                d: 'M3.29 7L12 12m0 0l8.71-5M12 12v10'
            }
        ]
    ]
];
exports.default = PackagePlus;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9e2Yv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var PackageSearch = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M21 10V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l2-1.14'
            }
        ],
        [
            'path',
            {
                d: 'M16.5 9.4L7.55 4.24'
            }
        ],
        [
            'path',
            {
                d: 'M12 12v10M3.29 7L12 12 3.29 7zM12 12l8.71-5L12 12z'
            }
        ],
        [
            'circle',
            {
                cx: '18.5',
                cy: '15.5',
                r: '2.5'
            }
        ],
        [
            'path',
            {
                d: 'M20.27 17.27L22 19'
            }
        ]
    ]
];
exports.default = PackageSearch;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lW0hN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var PackageX = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M21 10V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l2-1.14'
            }
        ],
        [
            'path',
            {
                d: 'M16.5 9.4L7.55 4.24'
            }
        ],
        [
            'path',
            {
                d: 'M3.29 7L12 12m0 0l8.71-5M12 12v10'
            }
        ],
        [
            'path',
            {
                d: 'M17 13l5 5m-5 0l5-5'
            }
        ]
    ]
];
exports.default = PackageX;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2UseJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Package = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '16.5',
                y1: '9.4',
                x2: '7.5',
                y2: '4.21'
            }
        ],
        [
            'path',
            {
                d: 'M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z'
            }
        ],
        [
            'polyline',
            {
                points: '3.27 6.96 12 12.01 20.73 6.96'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '22.08',
                x2: '12',
                y2: '12'
            }
        ]
    ]
];
exports.default = Package;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1tDVd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Palette = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '13.5',
                cy: '6.5',
                r: '.5'
            }
        ],
        [
            'circle',
            {
                cx: '17.5',
                cy: '10.5',
                r: '.5'
            }
        ],
        [
            'circle',
            {
                cx: '8.5',
                cy: '7.5',
                r: '.5'
            }
        ],
        [
            'circle',
            {
                cx: '6.5',
                cy: '12.5',
                r: '.5'
            }
        ],
        [
            'path',
            {
                d: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z'
            }
        ]
    ]
];
exports.default = Palette;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2KheW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Palmtree = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4'
            }
        ],
        [
            'path',
            {
                d: 'M13 7.14A5.82 5.82 0 0116.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3'
            }
        ],
        [
            'path',
            {
                d: 'M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35z'
            }
        ],
        [
            'path',
            {
                d: 'M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14'
            }
        ]
    ]
];
exports.default = Palmtree;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hJGyv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Paperclip = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48'
            }
        ]
    ]
];
exports.default = Paperclip;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gEvP1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var PauseCircle = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'line',
            {
                x1: '10',
                y1: '15',
                x2: '10',
                y2: '9'
            }
        ],
        [
            'line',
            {
                x1: '14',
                y1: '15',
                x2: '14',
                y2: '9'
            }
        ]
    ]
];
exports.default = PauseCircle;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fggH6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var PauseOctagon = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M10 15V9'
            }
        ],
        [
            'path',
            {
                d: 'M14 15V9'
            }
        ],
        [
            'path',
            {
                d: 'M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714L7.714 2z'
            }
        ]
    ]
];
exports.default = PauseOctagon;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7m2i6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Pause = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '6',
                y: '4',
                width: '4',
                height: '16'
            }
        ],
        [
            'rect',
            {
                x: '14',
                y: '4',
                width: '4',
                height: '16'
            }
        ]
    ]
];
exports.default = Pause;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9sHg1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var PenTool = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M12 19l7-7 3 3-7 7-3-3z'
            }
        ],
        [
            'path',
            {
                d: 'M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z'
            }
        ],
        [
            'path',
            {
                d: 'M2 2l7.586 7.586'
            }
        ],
        [
            'circle',
            {
                cx: '11',
                cy: '11',
                r: '2'
            }
        ]
    ]
];
exports.default = PenTool;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hMwDO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Pencil = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '18',
                y1: '2',
                x2: '22',
                y2: '6'
            }
        ],
        [
            'path',
            {
                d: 'M7.5 20.5L19 9l-4-4L3.5 16.5 2 22z'
            }
        ]
    ]
];
exports.default = Pencil;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jAAip":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Percent = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '19',
                y1: '5',
                x2: '5',
                y2: '19'
            }
        ],
        [
            'circle',
            {
                cx: '6.5',
                cy: '6.5',
                r: '2.5'
            }
        ],
        [
            'circle',
            {
                cx: '17.5',
                cy: '17.5',
                r: '2.5'
            }
        ]
    ]
];
exports.default = Percent;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4H7zJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var PersonStanding = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '5',
                r: '1'
            }
        ],
        [
            'path',
            {
                d: 'M9 20l3-6 3 6'
            }
        ],
        [
            'path',
            {
                d: 'M6 8l6 2 6-2'
            }
        ],
        [
            'path',
            {
                d: 'M12 10v4'
            }
        ]
    ]
];
exports.default = PersonStanding;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b9Dgr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var PhoneCall = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M14.05 6A5 5 0 0118 10m-3.95-8a9 9 0 018 7.94m0 7v3a2 2 0 01-2 2h-.19a19.79 19.79 0 01-8.63-3.07 19.52 19.52 0 01-6-6 19.82 19.82 0 01-3.11-8.69A2 2 0 013.93 2h3.18a2 2 0 012 1.72 13 13 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 13 13 0 002.81.7A2 2 0 0122 16.92z'
            }
        ]
    ]
];
exports.default = PhoneCall;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8VqWh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var PhoneForwarded = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '18 2 22 6 18 10'
            }
        ],
        [
            'line',
            {
                x1: '14',
                y1: '6',
                x2: '22',
                y2: '6'
            }
        ],
        [
            'path',
            {
                d: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z'
            }
        ]
    ]
];
exports.default = PhoneForwarded;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6u3Kg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var PhoneIncoming = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '16 2 16 8 22 8'
            }
        ],
        [
            'line',
            {
                x1: '22',
                y1: '2',
                x2: '16',
                y2: '8'
            }
        ],
        [
            'path',
            {
                d: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z'
            }
        ]
    ]
];
exports.default = PhoneIncoming;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bGbEU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var PhoneMissed = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '22',
                y1: '2',
                x2: '16',
                y2: '8'
            }
        ],
        [
            'line',
            {
                x1: '16',
                y1: '2',
                x2: '22',
                y2: '8'
            }
        ],
        [
            'path',
            {
                d: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z'
            }
        ]
    ]
];
exports.default = PhoneMissed;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1DJ8r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var PhoneOff = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M10.68 13.31a16 16 0 003.41 2.6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7 2 2 0 011.72 2v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.42 19.42 0 01-3.33-2.67m-2.67-3.34a19.79 19.79 0 01-3.07-8.63A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91'
            }
        ],
        [
            'line',
            {
                x1: '22',
                y1: '2',
                x2: '2',
                y2: '22'
            }
        ]
    ]
];
exports.default = PhoneOff;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ff8q8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var PhoneOutgoing = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '22 8 22 2 16 2'
            }
        ],
        [
            'line',
            {
                x1: '16',
                y1: '8',
                x2: '22',
                y2: '2'
            }
        ],
        [
            'path',
            {
                d: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z'
            }
        ]
    ]
];
exports.default = PhoneOutgoing;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lSfwc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Phone = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z'
            }
        ]
    ]
];
exports.default = Phone;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"esxvC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var PieChart = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M21.21 15.89A10 10 0 118 2.83'
            }
        ],
        [
            'path',
            {
                d: 'M22 12A10 10 0 0012 2v10z'
            }
        ]
    ]
];
exports.default = PieChart;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9HUws":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var PiggyBank = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z'
            }
        ],
        [
            'path',
            {
                d: 'M2 9v1c0 1.1.9 2 2 2h1'
            }
        ],
        [
            'path',
            {
                d: 'M16 11h0'
            }
        ]
    ]
];
exports.default = PiggyBank;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b6Xst":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Pin = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M12 21v-7'
            }
        ],
        [
            'path',
            {
                d: 'M9 3v5l-2 4v2h10m0 0h-5m5 0v-2l-2-4V3'
            }
        ],
        [
            'path',
            {
                d: 'M7 3h10'
            }
        ]
    ]
];
exports.default = Pin;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fX3M8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Pipette = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M2 22l2-2h3l7-7'
            }
        ],
        [
            'path',
            {
                d: 'M4 20v-3l7-7'
            }
        ],
        [
            'path',
            {
                d: 'M14.29 13.3a1 1 0 001.41 0l.8-.8c.27-.27.27-.72 0-1s-.28-.72 0-1l4.08-4.08a2 2 0 000-2.83l-.17-.17a2 2 0 00-2.83 0L13.5 7.51c-.28.27-.73.27-1 0s-.73-.28-1 0l-.8.79a1 1 0 000 1.41l3.59 3.59z'
            }
        ]
    ]
];
exports.default = Pipette;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8lXky":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Plane = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z'
            }
        ]
    ]
];
exports.default = Plane;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kBEwa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var PlayCircle = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'polygon',
            {
                points: '10 8 16 12 10 16 10 8'
            }
        ]
    ]
];
exports.default = PlayCircle;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lPk8B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Play = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polygon',
            {
                points: '5 3 19 12 5 21 5 3'
            }
        ]
    ]
];
exports.default = Play;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l4b9h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var PlugZap = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M13 2l-2 2.5h3L12 7'
            }
        ],
        [
            'path',
            {
                d: 'M12 22v-3'
            }
        ],
        [
            'path',
            {
                d: 'M10 13v-2.5'
            }
        ],
        [
            'path',
            {
                d: 'M10 12.5v-2'
            }
        ],
        [
            'path',
            {
                d: 'M14 12.5v-2'
            }
        ],
        [
            'path',
            {
                d: 'M16 15a2 2 0 00-2-2h-4a2 2 0 00-2 2v2a2 2 0 002 2h4a2 2 0 002-2v-2z'
            }
        ]
    ]
];
exports.default = PlugZap;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l48sy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var PlusCircle = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '8',
                x2: '12',
                y2: '16'
            }
        ],
        [
            'line',
            {
                x1: '8',
                y1: '12',
                x2: '16',
                y2: '12'
            }
        ]
    ]
];
exports.default = PlusCircle;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"o7QiI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var PlusSquare = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '3',
                y: '3',
                width: '18',
                height: '18',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '8',
                x2: '12',
                y2: '16'
            }
        ],
        [
            'line',
            {
                x1: '8',
                y1: '12',
                x2: '16',
                y2: '12'
            }
        ]
    ]
];
exports.default = PlusSquare;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"biQVO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Plus = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '12',
                y1: '5',
                x2: '12',
                y2: '19'
            }
        ],
        [
            'line',
            {
                x1: '5',
                y1: '12',
                x2: '19',
                y2: '12'
            }
        ]
    ]
];
exports.default = Plus;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ftmdf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Pocket = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M4 3h16a2 2 0 012 2v6a10 10 0 01-10 10A10 10 0 012 11V5a2 2 0 012-2z'
            }
        ],
        [
            'polyline',
            {
                points: '8 10 12 14 16 10'
            }
        ]
    ]
];
exports.default = Pocket;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"58WeM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Podcast = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '11',
                r: '1'
            }
        ],
        [
            'path',
            {
                d: 'M17.03 18.46a9 9 0 10-10.02.03'
            }
        ],
        [
            'path',
            {
                d: 'M16.06 13.91a5 5 0 10-7.97.2'
            }
        ],
        [
            'path',
            {
                d: 'M11.11 17a.9.9 0 111.78 0l-.52 4.67a.37.37 0 01-.74 0l-.52-4.68z'
            }
        ]
    ]
];
exports.default = Podcast;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eE0yj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Pointer = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M22 14a8 8 0 01-8 8'
            }
        ],
        [
            'path',
            {
                d: 'M18 11v-1a2 2 0 00-2-2v0a2 2 0 00-2 2v0'
            }
        ],
        [
            'path',
            {
                d: 'M14 10V9a2 2 0 00-2-2v0a2 2 0 00-2 2v1'
            }
        ],
        [
            'path',
            {
                d: 'M10 9.5V4a2 2 0 00-2-2v0a2 2 0 00-2 2v10'
            }
        ],
        [
            'path',
            {
                d: 'M18 11a2 2 0 114 0v3a8 8 0 01-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 012.83-2.82L7 15'
            }
        ]
    ]
];
exports.default = Pointer;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lyaze":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var PoundSterling = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M18 7c0-5.333-8-5.333-8 0'
            }
        ],
        [
            'path',
            {
                d: 'M10 7v14'
            }
        ],
        [
            'path',
            {
                d: 'M6 21h12'
            }
        ],
        [
            'path',
            {
                d: 'M6 13h10'
            }
        ]
    ]
];
exports.default = PoundSterling;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5uP2Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var PowerOff = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M18.36 6.64A9 9 0 0120.77 15M5.63 6.64A9 9 0 1018.706 19'
            }
        ],
        [
            'path',
            {
                d: 'M12 2v4'
            }
        ],
        [
            'path',
            {
                d: 'M2 2l20 20'
            }
        ]
    ]
];
exports.default = PowerOff;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fdKlp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Power = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M18.36 6.64a9 9 0 11-12.73 0'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '2',
                x2: '12',
                y2: '12'
            }
        ]
    ]
];
exports.default = Power;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gRwGn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Printer = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '6 9 6 2 18 2 18 9'
            }
        ],
        [
            'path',
            {
                d: 'M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2'
            }
        ],
        [
            'rect',
            {
                x: '6',
                y: '14',
                width: '12',
                height: '8'
            }
        ]
    ]
];
exports.default = Printer;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2bwjX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var QrCode = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '2',
                y: '2',
                width: '8',
                height: '8'
            }
        ],
        [
            'path',
            {
                d: 'M6 6h.01'
            }
        ],
        [
            'rect',
            {
                x: '14',
                y: '2',
                width: '8',
                height: '8'
            }
        ],
        [
            'path',
            {
                d: 'M18 6h.01'
            }
        ],
        [
            'rect',
            {
                x: '2',
                y: '14',
                width: '8',
                height: '8'
            }
        ],
        [
            'path',
            {
                d: 'M6 18h.01'
            }
        ],
        [
            'path',
            {
                d: 'M14 14h.01'
            }
        ],
        [
            'path',
            {
                d: 'M18 18h.01'
            }
        ],
        [
            'path',
            {
                d: 'M18 22h4v-4'
            }
        ],
        [
            'path',
            {
                d: 'M14 18v4'
            }
        ],
        [
            'path',
            {
                d: 'M22 14h-4'
            }
        ]
    ]
];
exports.default = QrCode;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gESEq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Quote = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z'
            }
        ],
        [
            'path',
            {
                d: 'M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z'
            }
        ]
    ]
];
exports.default = Quote;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eZWjs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var RadioReceiver = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M5 16v2'
            }
        ],
        [
            'path',
            {
                d: 'M19 16v2'
            }
        ],
        [
            'rect',
            {
                x: '2',
                y: '8',
                width: '20',
                height: '8',
                rx: '2'
            }
        ],
        [
            'path',
            {
                d: 'M18 12h0'
            }
        ]
    ]
];
exports.default = RadioReceiver;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kmrGr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Radio = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '2'
            }
        ],
        [
            'path',
            {
                d: 'M16.24 7.76a6 6 0 010 8.49m-8.48-.01a6 6 0 010-8.49m11.31-2.82a10 10 0 010 14.14m-14.14 0a10 10 0 010-14.14'
            }
        ]
    ]
];
exports.default = Radio;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ioWTX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Redo = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M21 7v6h-6'
            }
        ],
        [
            'path',
            {
                d: 'M3 17a9 9 0 019-9 9 9 0 016 2.3l3 2.7'
            }
        ]
    ]
];
exports.default = Redo;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6jWcW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var RefreshCcw = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M3 2v6h6'
            }
        ],
        [
            'path',
            {
                d: 'M21 12A9 9 0 006 5.3L3 8'
            }
        ],
        [
            'path',
            {
                d: 'M21 22v-6h-6'
            }
        ],
        [
            'path',
            {
                d: 'M3 12a9 9 0 0015 6.7l3-2.7'
            }
        ]
    ]
];
exports.default = RefreshCcw;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"RqSBN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var RefreshCw = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M21 2v6h-6'
            }
        ],
        [
            'path',
            {
                d: 'M3 12a9 9 0 0115-6.7L21 8'
            }
        ],
        [
            'path',
            {
                d: 'M3 22v-6h6'
            }
        ],
        [
            'path',
            {
                d: 'M21 12a9 9 0 01-15 6.7L3 16'
            }
        ]
    ]
];
exports.default = RefreshCw;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6hIDU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Regex = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M17 3v10'
            }
        ],
        [
            'path',
            {
                d: 'M12.67 5.5l8.66 5'
            }
        ],
        [
            'path',
            {
                d: 'M12.67 10.5l8.66-5'
            }
        ],
        [
            'path',
            {
                d: 'M9 17a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2z'
            }
        ]
    ]
];
exports.default = Regex;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2TWvu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Repeat1 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M17 2l4 4-4 4'
            }
        ],
        [
            'path',
            {
                d: 'M3 11v-1a4 4 0 014-4h14'
            }
        ],
        [
            'path',
            {
                d: 'M7 22l-4-4 4-4'
            }
        ],
        [
            'path',
            {
                d: 'M21 13v1a4 4 0 01-4 4H3'
            }
        ],
        [
            'path',
            {
                d: 'M11 10h1v4'
            }
        ]
    ]
];
exports.default = Repeat1;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"caJaE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Repeat = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M17 2l4 4-4 4'
            }
        ],
        [
            'path',
            {
                d: 'M3 11v-1a4 4 0 014-4h14'
            }
        ],
        [
            'path',
            {
                d: 'M7 22l-4-4 4-4'
            }
        ],
        [
            'path',
            {
                d: 'M21 13v1a4 4 0 01-4 4H3'
            }
        ]
    ]
];
exports.default = Repeat;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6fU6c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ReplyAll = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '7 17 2 12 7 7'
            }
        ],
        [
            'polyline',
            {
                points: '12 17 7 12 12 7'
            }
        ],
        [
            'path',
            {
                d: 'M22 18v-2a4 4 0 00-4-4H7'
            }
        ]
    ]
];
exports.default = ReplyAll;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"habN6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Reply = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '9 17 4 12 9 7'
            }
        ],
        [
            'path',
            {
                d: 'M20 18v-2a4 4 0 00-4-4H4'
            }
        ]
    ]
];
exports.default = Reply;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9vAiw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Rewind = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polygon',
            {
                points: '11 19 2 12 11 5 11 19'
            }
        ],
        [
            'polygon',
            {
                points: '22 19 13 12 22 5 22 19'
            }
        ]
    ]
];
exports.default = Rewind;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ipzq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Rocket = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z'
            }
        ],
        [
            'path',
            {
                d: 'M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z'
            }
        ],
        [
            'path',
            {
                d: 'M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0'
            }
        ],
        [
            'path',
            {
                d: 'M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5'
            }
        ]
    ]
];
exports.default = Rocket;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d4GGk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var RockingChair = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '3.5 2 6.5 12.5 18 12.5'
            }
        ],
        [
            'line',
            {
                x1: '9.5',
                y1: '12.5',
                x2: '5.5',
                y2: '20'
            }
        ],
        [
            'line',
            {
                x1: '15',
                y1: '12.5',
                x2: '18.5',
                y2: '20'
            }
        ],
        [
            'path',
            {
                d: 'M2.75 18a13 13 0 0018.5 0'
            }
        ]
    ]
];
exports.default = RockingChair;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3gXeY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var RotateCcw = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M3 2v6h6'
            }
        ],
        [
            'path',
            {
                d: 'M3 13a9 9 0 103-7.7L3 8'
            }
        ]
    ]
];
exports.default = RotateCcw;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6JOMW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var RotateCw = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M21 2v6h-6'
            }
        ],
        [
            'path',
            {
                d: 'M21 13a9 9 0 11-3-7.7L21 8'
            }
        ]
    ]
];
exports.default = RotateCw;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eXfB3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Rss = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M4 11a9 9 0 019 9'
            }
        ],
        [
            'path',
            {
                d: 'M4 4a16 16 0 0116 16'
            }
        ],
        [
            'circle',
            {
                cx: '5',
                cy: '19',
                r: '1'
            }
        ]
    ]
];
exports.default = Rss;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bqs8z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Ruler = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M16 2l6 6L8 22l-6-6L16 2'
            }
        ],
        [
            'path',
            {
                d: 'M7.5 10.5l2 2'
            }
        ],
        [
            'path',
            {
                d: 'M10.5 7.5l2 2'
            }
        ],
        [
            'path',
            {
                d: 'M13.5 4.5l2 2'
            }
        ],
        [
            'path',
            {
                d: 'M4.5 13.5l2 2'
            }
        ]
    ]
];
exports.default = Ruler;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hwljc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var RussianRuble = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M14 11c5.333 0 5.333-8 0-8'
            }
        ],
        [
            'path',
            {
                d: 'M6 11h8'
            }
        ],
        [
            'path',
            {
                d: 'M6 15h8'
            }
        ],
        [
            'path',
            {
                d: 'M9 21V3'
            }
        ],
        [
            'path',
            {
                d: 'M9 3h5'
            }
        ]
    ]
];
exports.default = RussianRuble;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"65VqB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Save = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z'
            }
        ],
        [
            'polyline',
            {
                points: '17 21 17 13 7 13 7 21'
            }
        ],
        [
            'polyline',
            {
                points: '7 3 7 8 15 8'
            }
        ]
    ]
];
exports.default = Save;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c2yEn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Scale = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M16 16l3-8 3.001 8A5.002 5.002 0 0116 16z'
            }
        ],
        [
            'path',
            {
                d: 'M2 16l3-8 3.001 8A5.002 5.002 0 012 16z'
            }
        ],
        [
            'path',
            {
                d: 'M7 21h10'
            }
        ],
        [
            'path',
            {
                d: 'M12 3v18'
            }
        ],
        [
            'path',
            {
                d: 'M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2'
            }
        ]
    ]
];
exports.default = Scale;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dvF1c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ScanLine = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M3 7V5a2 2 0 012-2h2'
            }
        ],
        [
            'path',
            {
                d: 'M17 3h2a2 2 0 012 2v2'
            }
        ],
        [
            'path',
            {
                d: 'M21 17v2a2 2 0 01-2 2h-2'
            }
        ],
        [
            'path',
            {
                d: 'M7 21H5a2 2 0 01-2-2v-2'
            }
        ],
        [
            'line',
            {
                x1: '7',
                y1: '12',
                x2: '17',
                y2: '12'
            }
        ]
    ]
];
exports.default = ScanLine;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b3phQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Scan = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M3 7V5a2 2 0 012-2h2'
            }
        ],
        [
            'path',
            {
                d: 'M17 3h2a2 2 0 012 2v2'
            }
        ],
        [
            'path',
            {
                d: 'M21 17v2a2 2 0 01-2 2h-2'
            }
        ],
        [
            'path',
            {
                d: 'M7 21H5a2 2 0 01-2-2v-2'
            }
        ]
    ]
];
exports.default = Scan;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hmlsR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Scissors = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '6',
                cy: '6',
                r: '3'
            }
        ],
        [
            'circle',
            {
                cx: '6',
                cy: '18',
                r: '3'
            }
        ],
        [
            'line',
            {
                x1: '20',
                y1: '4',
                x2: '8.12',
                y2: '15.88'
            }
        ],
        [
            'line',
            {
                x1: '14.47',
                y1: '14.48',
                x2: '20',
                y2: '20'
            }
        ],
        [
            'line',
            {
                x1: '8.12',
                y1: '8.12',
                x2: '12',
                y2: '12'
            }
        ]
    ]
];
exports.default = Scissors;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lqfWs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ScreenShareOff = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M13 3H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2v-3'
            }
        ],
        [
            'path',
            {
                d: 'M8 21h8'
            }
        ],
        [
            'path',
            {
                d: 'M12 17v4'
            }
        ],
        [
            'path',
            {
                d: 'M22 3l-5 5'
            }
        ],
        [
            'path',
            {
                d: 'M17 3l5 5'
            }
        ]
    ]
];
exports.default = ScreenShareOff;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kRFxY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ScreenShare = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M13 3H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2v-3'
            }
        ],
        [
            'path',
            {
                d: 'M8 21h8'
            }
        ],
        [
            'path',
            {
                d: 'M12 17v4'
            }
        ],
        [
            'path',
            {
                d: 'M17 8l5-5'
            }
        ],
        [
            'path',
            {
                d: 'M17 3h5v5'
            }
        ]
    ]
];
exports.default = ScreenShare;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"sFgi8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Search = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '11',
                cy: '11',
                r: '8'
            }
        ],
        [
            'line',
            {
                x1: '21',
                y1: '21',
                x2: '16.65',
                y2: '16.65'
            }
        ]
    ]
];
exports.default = Search;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hUO3z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Send = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '22',
                y1: '2',
                x2: '11',
                y2: '13'
            }
        ],
        [
            'polygon',
            {
                points: '22 2 15 22 11 13 2 9 22 2'
            }
        ]
    ]
];
exports.default = Send;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3aHBX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var SeparatorHorizontal = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '3',
                y1: '12',
                x2: '21',
                y2: '12'
            }
        ],
        [
            'polyline',
            {
                points: '8 8 12 4 16 8'
            }
        ],
        [
            'polyline',
            {
                points: '16 16 12 20 8 16'
            }
        ]
    ]
];
exports.default = SeparatorHorizontal;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2WA2H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var SeparatorVertical = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '12',
                y1: '3',
                x2: '12',
                y2: '21'
            }
        ],
        [
            'polyline',
            {
                points: '8 8 4 12 8 16'
            }
        ],
        [
            'polyline',
            {
                points: '16 16 20 12 16 8'
            }
        ]
    ]
];
exports.default = SeparatorVertical;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8jgEu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ServerCrash = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M6 10H4a2 2 0 01-2-2V4a2 2 0 012-2h16a2 2 0 012 2v4a2 2 0 01-2 2h-2'
            }
        ],
        [
            'path',
            {
                d: 'M6 14H4a2 2 0 00-2 2v4a2 2 0 002 2h16a2 2 0 002-2v-4a2 2 0 00-2-2h-2'
            }
        ],
        [
            'path',
            {
                d: 'M6 6h.01'
            }
        ],
        [
            'path',
            {
                d: 'M6 18h.01'
            }
        ],
        [
            'path',
            {
                d: 'M13 6l-4 6h6l-4 6'
            }
        ]
    ]
];
exports.default = ServerCrash;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cMVkr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ServerOff = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M7 2h13a2 2 0 012 2v4a2 2 0 01-2 2h-5'
            }
        ],
        [
            'path',
            {
                d: 'M10 10L2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 002 2h6z'
            }
        ],
        [
            'path',
            {
                d: 'M22 17v-1a2 2 0 00-2-2h-1'
            }
        ],
        [
            'path',
            {
                d: 'M4 14a2 2 0 00-2 2v4a2 2 0 002 2h16.5l1-.5.5.5-8-8H4z'
            }
        ],
        [
            'path',
            {
                d: 'M6 18h.01'
            }
        ],
        [
            'path',
            {
                d: 'M2 2l20 20'
            }
        ]
    ]
];
exports.default = ServerOff;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aR5oA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Server = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '2',
                y: '2',
                width: '20',
                height: '8',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'rect',
            {
                x: '2',
                y: '14',
                width: '20',
                height: '8',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'line',
            {
                x1: '6',
                y1: '6',
                x2: '6.01',
                y2: '6'
            }
        ],
        [
            'line',
            {
                x1: '6',
                y1: '18',
                x2: '6.01',
                y2: '18'
            }
        ]
    ]
];
exports.default = Server;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"74xD8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Settings2 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M20 7h-9'
            }
        ],
        [
            'path',
            {
                d: 'M14 17H5'
            }
        ],
        [
            'circle',
            {
                cx: '17',
                cy: '17',
                r: '3'
            }
        ],
        [
            'circle',
            {
                cx: '7',
                cy: '7',
                r: '3'
            }
        ]
    ]
];
exports.default = Settings2;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a3aRb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Settings = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M12.22 2h-.44a2 2 0 00-2 2v.18a2 2 0 01-1 1.73l-.43.25a2 2 0 01-2 0l-.15-.08a2 2 0 00-2.73.73l-.22.38a2 2 0 00.73 2.73l.15.1a2 2 0 011 1.72v.51a2 2 0 01-1 1.74l-.15.09a2 2 0 00-.73 2.73l.22.38a2 2 0 002.73.73l.15-.08a2 2 0 012 0l.43.25a2 2 0 011 1.73V20a2 2 0 002 2h.44a2 2 0 002-2v-.18a2 2 0 011-1.73l.43-.25a2 2 0 012 0l.15.08a2 2 0 002.73-.73l.22-.39a2 2 0 00-.73-2.73l-.15-.08a2 2 0 01-1-1.74v-.5a2 2 0 011-1.74l.15-.09a2 2 0 00.73-2.73l-.22-.38a2 2 0 00-2.73-.73l-.15.08a2 2 0 01-2 0l-.43-.25a2 2 0 01-1-1.73V4a2 2 0 00-2-2z'
            }
        ],
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '3'
            }
        ]
    ]
];
exports.default = Settings;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Bptl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Share2 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '18',
                cy: '5',
                r: '3'
            }
        ],
        [
            'circle',
            {
                cx: '6',
                cy: '12',
                r: '3'
            }
        ],
        [
            'circle',
            {
                cx: '18',
                cy: '19',
                r: '3'
            }
        ],
        [
            'line',
            {
                x1: '8.59',
                y1: '13.51',
                x2: '15.42',
                y2: '17.49'
            }
        ],
        [
            'line',
            {
                x1: '15.41',
                y1: '6.51',
                x2: '8.59',
                y2: '10.49'
            }
        ]
    ]
];
exports.default = Share2;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1JFzm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Share = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8'
            }
        ],
        [
            'polyline',
            {
                points: '16 6 12 2 8 6'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '2',
                x2: '12',
                y2: '15'
            }
        ]
    ]
];
exports.default = Share;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6tFxz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Sheet = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '3',
                y: '3',
                width: '18',
                height: '18',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'line',
            {
                x1: '3',
                y1: '9',
                x2: '21',
                y2: '9'
            }
        ],
        [
            'line',
            {
                x1: '3',
                y1: '15',
                x2: '21',
                y2: '15'
            }
        ],
        [
            'line',
            {
                x1: '9',
                y1: '9',
                x2: '9',
                y2: '21'
            }
        ],
        [
            'line',
            {
                x1: '15',
                y1: '9',
                x2: '15',
                y2: '21'
            }
        ]
    ]
];
exports.default = Sheet;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"934cN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ShieldAlert = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
            }
        ],
        [
            'path',
            {
                d: 'M12 8v4'
            }
        ],
        [
            'path',
            {
                d: 'M12 16h.01'
            }
        ]
    ]
];
exports.default = ShieldAlert;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1feXJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ShieldCheck = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
            }
        ],
        [
            'path',
            {
                d: 'M9 12l2 2 4-4'
            }
        ]
    ]
];
exports.default = ShieldCheck;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"132z7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ShieldClose = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
            }
        ],
        [
            'line',
            {
                x1: '9.5',
                y1: '9',
                x2: '14.5',
                y2: '14'
            }
        ],
        [
            'line',
            {
                x1: '14.5',
                y1: '9',
                x2: '9.5',
                y2: '14'
            }
        ]
    ]
];
exports.default = ShieldClose;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kYd7i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ShieldOff = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M19.69 14a6.9 6.9 0 00.31-2V5l-8-3-3.16 1.18'
            }
        ],
        [
            'path',
            {
                d: 'M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 005.62-4.38'
            }
        ],
        [
            'line',
            {
                x1: '1',
                y1: '1',
                x2: '23',
                y2: '23'
            }
        ]
    ]
];
exports.default = ShieldOff;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gzqzM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Shield = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
            }
        ]
    ]
];
exports.default = Shield;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j0WXb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Shirt = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z'
            }
        ]
    ]
];
exports.default = Shirt;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gVxqX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ShoppingBag = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z'
            }
        ],
        [
            'line',
            {
                x1: '3',
                y1: '6',
                x2: '21',
                y2: '6'
            }
        ],
        [
            'path',
            {
                d: 'M16 10a4 4 0 01-8 0'
            }
        ]
    ]
];
exports.default = ShoppingBag;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"42QFo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ShoppingCart = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '9',
                cy: '21',
                r: '1'
            }
        ],
        [
            'circle',
            {
                cx: '20',
                cy: '21',
                r: '1'
            }
        ],
        [
            'path',
            {
                d: 'M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6'
            }
        ]
    ]
];
exports.default = ShoppingCart;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8LDZR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Shovel = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M2 22v-5l5-5 5 5-5 5z'
            }
        ],
        [
            'path',
            {
                d: 'M9.5 14.5L16 8'
            }
        ],
        [
            'path',
            {
                d: 'M17 2l5 5-.5.5a3.53 3.53 0 01-5 0s0 0 0 0a3.53 3.53 0 010-5L17 2'
            }
        ]
    ]
];
exports.default = Shovel;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jZkl7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Shrink = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M15 15l6 6m-6-6v4.8m0-4.8h4.8'
            }
        ],
        [
            'path',
            {
                d: 'M9 19.8V15m0 0H4.2M9 15l-6 6'
            }
        ],
        [
            'path',
            {
                d: 'M15 4.2V9m0 0h4.8M15 9l6-6'
            }
        ],
        [
            'path',
            {
                d: 'M9 4.2V9m0 0H4.2M9 9L3 3'
            }
        ]
    ]
];
exports.default = Shrink;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1iYkE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Shuffle = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '16 3 21 3 21 8'
            }
        ],
        [
            'line',
            {
                x1: '4',
                y1: '20',
                x2: '21',
                y2: '3'
            }
        ],
        [
            'polyline',
            {
                points: '21 16 21 21 16 21'
            }
        ],
        [
            'line',
            {
                x1: '15',
                y1: '15',
                x2: '21',
                y2: '21'
            }
        ],
        [
            'line',
            {
                x1: '4',
                y1: '4',
                x2: '9',
                y2: '9'
            }
        ]
    ]
];
exports.default = Shuffle;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5UIGd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var SidebarClose = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '3',
                y: '3',
                width: '18',
                height: '18',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'line',
            {
                x1: '9',
                y1: '3',
                x2: '9',
                y2: '21'
            }
        ],
        [
            'path',
            {
                d: 'M17 16l-4-4 4-4'
            }
        ]
    ]
];
exports.default = SidebarClose;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2N0zC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var SidebarOpen = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '3',
                y: '3',
                width: '18',
                height: '18',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'line',
            {
                x1: '9',
                y1: '3',
                x2: '9',
                y2: '21'
            }
        ],
        [
            'path',
            {
                d: 'M13 8l4 4-4 4'
            }
        ]
    ]
];
exports.default = SidebarOpen;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aR5U5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Sidebar = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '3',
                y: '3',
                width: '18',
                height: '18',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'line',
            {
                x1: '9',
                y1: '3',
                x2: '9',
                y2: '21'
            }
        ]
    ]
];
exports.default = Sidebar;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5SFv3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Sigma = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M18 7V4H6l6 8-6 8h12v-3'
            }
        ]
    ]
];
exports.default = Sigma;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eoObg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var SignalHigh = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M2 20h.01'
            }
        ],
        [
            'path',
            {
                d: 'M7 20v-4'
            }
        ],
        [
            'path',
            {
                d: 'M12 20v-8'
            }
        ],
        [
            'path',
            {
                d: 'M17 20V8'
            }
        ]
    ]
];
exports.default = SignalHigh;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cS6im":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var SignalLow = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M2 20h.01'
            }
        ],
        [
            'path',
            {
                d: 'M7 20v-4'
            }
        ]
    ]
];
exports.default = SignalLow;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j3esH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var SignalMedium = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M2 20h.01'
            }
        ],
        [
            'path',
            {
                d: 'M7 20v-4'
            }
        ],
        [
            'path',
            {
                d: 'M12 20v-8'
            }
        ]
    ]
];
exports.default = SignalMedium;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5qn5Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var SignalZero = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M2 20h.01'
            }
        ],
        [
            'path',
            {
                d: 'M7 20v-4'
            }
        ]
    ]
];
exports.default = SignalZero;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kXFV4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Signal = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M2 20h.01'
            }
        ],
        [
            'path',
            {
                d: 'M7 20v-4'
            }
        ],
        [
            'path',
            {
                d: 'M12 20v-8'
            }
        ],
        [
            'path',
            {
                d: 'M17 20V8'
            }
        ],
        [
            'path',
            {
                d: 'M22 4v16'
            }
        ]
    ]
];
exports.default = Signal;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1HKaK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var SkipBack = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polygon',
            {
                points: '19 20 9 12 19 4 19 20'
            }
        ],
        [
            'line',
            {
                x1: '5',
                y1: '19',
                x2: '5',
                y2: '5'
            }
        ]
    ]
];
exports.default = SkipBack;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fUpT5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var SkipForward = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polygon',
            {
                points: '5 4 15 12 5 20 5 4'
            }
        ],
        [
            'line',
            {
                x1: '19',
                y1: '5',
                x2: '19',
                y2: '19'
            }
        ]
    ]
];
exports.default = SkipForward;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bxoUz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Skull = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '9',
                cy: '12',
                r: '1'
            }
        ],
        [
            'circle',
            {
                cx: '15',
                cy: '12',
                r: '1'
            }
        ],
        [
            'path',
            {
                d: 'M8 20v2h8v-2'
            }
        ],
        [
            'path',
            {
                d: 'M12.5 17l-.5-1-.5 1h1z'
            }
        ],
        [
            'path',
            {
                d: 'M16 20a2 2 0 001.56-3.25 8 8 0 10-11.12 0A2 2 0 008 20'
            }
        ]
    ]
];
exports.default = Skull;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7RYJm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Slack = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '13',
                y: '2',
                width: '3',
                height: '8',
                rx: '1.5'
            }
        ],
        [
            'path',
            {
                d: 'M19 8.5V10h1.5A1.5 1.5 0 1019 8.5'
            }
        ],
        [
            'rect',
            {
                x: '8',
                y: '14',
                width: '3',
                height: '8',
                rx: '1.5'
            }
        ],
        [
            'path',
            {
                d: 'M5 15.5V14H3.5A1.5 1.5 0 105 15.5'
            }
        ],
        [
            'rect',
            {
                x: '14',
                y: '13',
                width: '8',
                height: '3',
                rx: '1.5'
            }
        ],
        [
            'path',
            {
                d: 'M15.5 19H14v1.5a1.5 1.5 0 101.5-1.5'
            }
        ],
        [
            'rect',
            {
                x: '2',
                y: '8',
                width: '8',
                height: '3',
                rx: '1.5'
            }
        ],
        [
            'path',
            {
                d: 'M8.5 5H10V3.5A1.5 1.5 0 108.5 5'
            }
        ]
    ]
];
exports.default = Slack;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g4JAA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Slash = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'line',
            {
                x1: '4.93',
                y1: '4.93',
                x2: '19.07',
                y2: '19.07'
            }
        ]
    ]
];
exports.default = Slash;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lpATG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Sliders = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '4',
                y1: '21',
                x2: '4',
                y2: '14'
            }
        ],
        [
            'line',
            {
                x1: '4',
                y1: '10',
                x2: '4',
                y2: '3'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '21',
                x2: '12',
                y2: '12'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '8',
                x2: '12',
                y2: '3'
            }
        ],
        [
            'line',
            {
                x1: '20',
                y1: '21',
                x2: '20',
                y2: '16'
            }
        ],
        [
            'line',
            {
                x1: '20',
                y1: '12',
                x2: '20',
                y2: '3'
            }
        ],
        [
            'line',
            {
                x1: '1',
                y1: '14',
                x2: '7',
                y2: '14'
            }
        ],
        [
            'line',
            {
                x1: '9',
                y1: '8',
                x2: '15',
                y2: '8'
            }
        ],
        [
            'line',
            {
                x1: '17',
                y1: '16',
                x2: '23',
                y2: '16'
            }
        ]
    ]
];
exports.default = Sliders;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hGtRi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var SmartphoneCharging = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '5',
                y: '2',
                width: '14',
                height: '20',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'path',
            {
                d: 'M12.667 8L10 12h4l-2.667 4'
            }
        ]
    ]
];
exports.default = SmartphoneCharging;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6ucT4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Smartphone = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '5',
                y: '2',
                width: '14',
                height: '20',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'path',
            {
                d: 'M12 18h.01'
            }
        ]
    ]
];
exports.default = Smartphone;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2t6m8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Smile = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'path',
            {
                d: 'M8 14s1.5 2 4 2 4-2 4-2'
            }
        ],
        [
            'line',
            {
                x1: '9',
                y1: '9',
                x2: '9.01',
                y2: '9'
            }
        ],
        [
            'line',
            {
                x1: '15',
                y1: '9',
                x2: '15.01',
                y2: '9'
            }
        ]
    ]
];
exports.default = Smile;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"yu1Cm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Snowflake = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '2',
                y1: '12',
                x2: '22',
                y2: '12'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '2',
                x2: '12',
                y2: '22'
            }
        ],
        [
            'path',
            {
                d: 'M20 16l-4-4 4-4'
            }
        ],
        [
            'path',
            {
                d: 'M4 8l4 4-4 4'
            }
        ],
        [
            'path',
            {
                d: 'M16 4l-4 4-4-4'
            }
        ],
        [
            'path',
            {
                d: 'M8 20l4-4 4 4'
            }
        ]
    ]
];
exports.default = Snowflake;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cF9cu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var SortAsc = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M11 5h4'
            }
        ],
        [
            'path',
            {
                d: 'M11 9h7'
            }
        ],
        [
            'path',
            {
                d: 'M11 13h10'
            }
        ],
        [
            'path',
            {
                d: 'M3 17l3 3 3-3'
            }
        ],
        [
            'path',
            {
                d: 'M6 18V4'
            }
        ]
    ]
];
exports.default = SortAsc;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5wEqW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var SortDesc = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M11 5h10'
            }
        ],
        [
            'path',
            {
                d: 'M11 9h7'
            }
        ],
        [
            'path',
            {
                d: 'M11 13h4'
            }
        ],
        [
            'path',
            {
                d: 'M3 17l3 3 3-3'
            }
        ],
        [
            'path',
            {
                d: 'M6 18V4'
            }
        ]
    ]
];
exports.default = SortDesc;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e1PzC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Speaker = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '4',
                y: '2',
                width: '16',
                height: '20',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'circle',
            {
                cx: '12',
                cy: '14',
                r: '4'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '6',
                x2: '12.01',
                y2: '6'
            }
        ]
    ]
];
exports.default = Speaker;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"20j3m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Sprout = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M7 20h10'
            }
        ],
        [
            'path',
            {
                d: 'M10 20c5.5-2.5.8-6.4 3-10'
            }
        ],
        [
            'path',
            {
                d: 'M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z'
            }
        ],
        [
            'path',
            {
                d: 'M14.1 6a7 7 0 00-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z'
            }
        ]
    ]
];
exports.default = Sprout;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fnk25":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Square = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '3',
                y: '3',
                width: '18',
                height: '18',
                rx: '2',
                ry: '2'
            }
        ]
    ]
];
exports.default = Square;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9oZQI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var StarHalf = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M12 17.8L5.8 21 7 14.1 2 9.3l7-1L12 2'
            }
        ]
    ]
];
exports.default = StarHalf;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6HEl5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Star = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polygon',
            {
                points: '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'
            }
        ]
    ]
];
exports.default = Star;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3HcJH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var StopCircle = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'rect',
            {
                x: '9',
                y: '9',
                width: '6',
                height: '6'
            }
        ]
    ]
];
exports.default = StopCircle;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eCfjG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var StretchHorizontal = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '2',
                y: '4',
                width: '20',
                height: '6',
                rx: '2'
            }
        ],
        [
            'rect',
            {
                x: '2',
                y: '14',
                width: '20',
                height: '6',
                rx: '2'
            }
        ]
    ]
];
exports.default = StretchHorizontal;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1TJiz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var StretchVertical = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '4',
                y: '2',
                width: '6',
                height: '20',
                rx: '2'
            }
        ],
        [
            'rect',
            {
                x: '14',
                y: '2',
                width: '6',
                height: '20',
                rx: '2'
            }
        ]
    ]
];
exports.default = StretchVertical;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hqJ8A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Strikethrough = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M16 4H9a3 3 0 00-2.83 4'
            }
        ],
        [
            'path',
            {
                d: 'M14 12a4 4 0 010 8H6'
            }
        ],
        [
            'line',
            {
                x1: '4',
                y1: '12',
                x2: '20',
                y2: '12'
            }
        ]
    ]
];
exports.default = Strikethrough;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"igmm7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Subscript = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M4 5l8 8'
            }
        ],
        [
            'path',
            {
                d: 'M12 5l-8 8'
            }
        ],
        [
            'path',
            {
                d: 'M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 00-2.62-.44c-.42.24-.74.62-.9 1.07'
            }
        ]
    ]
];
exports.default = Subscript;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jdy6I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Sun = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '4'
            }
        ],
        [
            'path',
            {
                d: 'M12 2v2'
            }
        ],
        [
            'path',
            {
                d: 'M12 20v2'
            }
        ],
        [
            'path',
            {
                d: 'M5 5l1.5 1.5'
            }
        ],
        [
            'path',
            {
                d: 'M17.5 17.5L19 19'
            }
        ],
        [
            'path',
            {
                d: 'M2 12h2'
            }
        ],
        [
            'path',
            {
                d: 'M20 12h2'
            }
        ],
        [
            'path',
            {
                d: 'M5 19l1.5-1.5'
            }
        ],
        [
            'path',
            {
                d: 'M17.5 6.5L19 5'
            }
        ]
    ]
];
exports.default = Sun;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b5kCa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Sunrise = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M12 2v8'
            }
        ],
        [
            'path',
            {
                d: 'M5.2 11.2l1.4 1.4'
            }
        ],
        [
            'path',
            {
                d: 'M2 18h2'
            }
        ],
        [
            'path',
            {
                d: 'M20 18h2'
            }
        ],
        [
            'path',
            {
                d: 'M17.4 12.6l1.4-1.4'
            }
        ],
        [
            'path',
            {
                d: 'M22 22H2'
            }
        ],
        [
            'path',
            {
                d: 'M8 6l4-4 4 4'
            }
        ],
        [
            'path',
            {
                d: 'M16 18a4 4 0 00-8 0'
            }
        ]
    ]
];
exports.default = Sunrise;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eo6Q4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Sunset = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M12 10V2'
            }
        ],
        [
            'path',
            {
                d: 'M5.2 11.2l1.4 1.4'
            }
        ],
        [
            'path',
            {
                d: 'M2 18h2'
            }
        ],
        [
            'path',
            {
                d: 'M20 18h2'
            }
        ],
        [
            'path',
            {
                d: 'M17.4 12.6l1.4-1.4'
            }
        ],
        [
            'path',
            {
                d: 'M22 22H2'
            }
        ],
        [
            'path',
            {
                d: 'M16 6l-4 4-4-4'
            }
        ],
        [
            'path',
            {
                d: 'M16 18a4 4 0 00-8 0'
            }
        ]
    ]
];
exports.default = Sunset;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lgWYW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Superscript = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M4 19l8-8'
            }
        ],
        [
            'path',
            {
                d: 'M12 19l-8-8'
            }
        ],
        [
            'path',
            {
                d: 'M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 00-2.617-.436c-.42.239-.738.614-.899 1.06'
            }
        ]
    ]
];
exports.default = Superscript;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"enR4J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var SwissFranc = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M10 21V3h8'
            }
        ],
        [
            'path',
            {
                d: 'M6 16h9'
            }
        ],
        [
            'path',
            {
                d: 'M10 9.5h7'
            }
        ]
    ]
];
exports.default = SwissFranc;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"clmWk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var SwitchCamera = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M11 19H4a2 2 0 01-2-2V7a2 2 0 012-2h5'
            }
        ],
        [
            'path',
            {
                d: 'M13 5h7a2 2 0 012 2v10a2 2 0 01-2 2h-5'
            }
        ],
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '3'
            }
        ],
        [
            'path',
            {
                d: 'M18 22l-3-3 3-3'
            }
        ],
        [
            'path',
            {
                d: 'M6 2l3 3-3 3'
            }
        ]
    ]
];
exports.default = SwitchCamera;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9OEkl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Table = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '3',
                y: '3',
                width: '18',
                height: '18',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'line',
            {
                x1: '3',
                y1: '9',
                x2: '21',
                y2: '9'
            }
        ],
        [
            'line',
            {
                x1: '3',
                y1: '15',
                x2: '21',
                y2: '15'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '3',
                x2: '12',
                y2: '21'
            }
        ]
    ]
];
exports.default = Table;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ji6vc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Tablet = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '4',
                y: '2',
                width: '16',
                height: '20',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '18',
                x2: '12.01',
                y2: '18'
            }
        ]
    ]
];
exports.default = Tablet;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"io6vM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Tag = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M2 12V2h10l9.44 9.44a2 2 0 0 1 0 2.82l-7.18 7.18a2 2 0 0 1-2.82 0L2 12Z'
            }
        ],
        [
            'path',
            {
                d: 'M7 7h.01'
            }
        ]
    ]
];
exports.default = Tag;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7bm8c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Target = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '6'
            }
        ],
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '2'
            }
        ]
    ]
];
exports.default = Target;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5W3rh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Tent = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M19 20L10 4'
            }
        ],
        [
            'path',
            {
                d: 'M5 20l9-16'
            }
        ],
        [
            'path',
            {
                d: 'M3 20h18'
            }
        ],
        [
            'path',
            {
                d: 'M12 15l-3 5'
            }
        ],
        [
            'path',
            {
                d: 'M12 15l3 5'
            }
        ]
    ]
];
exports.default = Tent;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"atO1A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var TerminalSquare = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M7 11l2-2-2-2'
            }
        ],
        [
            'path',
            {
                d: 'M11 13h4'
            }
        ],
        [
            'rect',
            {
                x: '3',
                y: '3',
                width: '18',
                height: '18',
                rx: '2',
                ry: '2'
            }
        ]
    ]
];
exports.default = TerminalSquare;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5EnmJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Terminal = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '4 17 10 11 4 5'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '19',
                x2: '20',
                y2: '19'
            }
        ]
    ]
];
exports.default = Terminal;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"arWnp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var TextCursorInput = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M5.3 4h.9C7.7 4 9 5.3 9 6.7m0 0v10.5c0 1.6-1.1 2.7-2.7 2.7h-1M9 6.7v10.6a2.6 2.6 0 002.7 2.7h1M9 6.7C9 5.2 10.2 4 11.8 4h.9'
            }
        ],
        [
            'path',
            {
                d: 'M13.1 7.9h6.8c1.1 0 2.1 1 2.1 2.1v4c0 1.1-.9 2.1-2.1 2.1h-6.8'
            }
        ],
        [
            'path',
            {
                d: 'M4.8 16.1h-.7C3 16.1 2 15.1 2 14v-4c0-1.1 1-2.1 2.1-2.1h.7'
            }
        ]
    ]
];
exports.default = TextCursorInput;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k42Rf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var TextCursor = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M17 22h-1a4 4 0 01-4-4V6a4 4 0 014-4h1'
            }
        ],
        [
            'path',
            {
                d: 'M7 22h1a4 4 0 004-4v-1'
            }
        ],
        [
            'path',
            {
                d: 'M7 2h1a4 4 0 014 4v1'
            }
        ]
    ]
];
exports.default = TextCursor;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1gfMV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ThermometerSnowflake = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M2 12h10'
            }
        ],
        [
            'path',
            {
                d: 'M9 4v16'
            }
        ],
        [
            'path',
            {
                d: 'M3 9l3 3-3 3'
            }
        ],
        [
            'path',
            {
                d: 'M12 6L9 9 6 6'
            }
        ],
        [
            'path',
            {
                d: 'M6 18l3-3 1.5 1.5'
            }
        ],
        [
            'path',
            {
                d: 'M18 2a2 2 0 00-2 2v10.5a4 4 0 104 0V4a2 2 0 00-2-2z'
            }
        ]
    ]
];
exports.default = ThermometerSnowflake;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"apUEq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ThermometerSun = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M12 9a4 4 0 00-2 7.5'
            }
        ],
        [
            'path',
            {
                d: 'M12 3v2'
            }
        ],
        [
            'path',
            {
                d: 'M6.6 18.4l-1.4 1.4'
            }
        ],
        [
            'path',
            {
                d: 'M18 2a2 2 0 012 2v10.5a4 4 0 11-4 0V4c0-1.1.9-2 2-2z'
            }
        ],
        [
            'path',
            {
                d: 'M4 13H2'
            }
        ],
        [
            'path',
            {
                d: 'M6.6 7.6L5.2 6.2'
            }
        ]
    ]
];
exports.default = ThermometerSun;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3H99l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Thermometer = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M12 2a2 2 0 00-2 2v10.5a4 4 0 104 0V4a2 2 0 00-2-2z'
            }
        ]
    ]
];
exports.default = Thermometer;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"brr2y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ThumbsDown = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M10 15v4a3 3 0 003 3l4-9V2H5.72a2 2 0 00-2 1.7l-1.38 9a2 2 0 002 2.3zm7-13h2.67A2.31 2.31 0 0122 4v7a2.31 2.31 0 01-2.33 2H17'
            }
        ]
    ]
];
exports.default = ThumbsDown;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bdbAc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ThumbsUp = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3'
            }
        ]
    ]
];
exports.default = ThumbsUp;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jzJLh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Ticket = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M3 9V7a2 2 0 012-2h14a2 2 0 012 2v2M3 15v2a2 2 0 002 2h14a2 2 0 002-2v-2'
            }
        ],
        [
            'path',
            {
                d: 'M21 15a3 3 0 110-6'
            }
        ],
        [
            'path',
            {
                d: 'M3 15a3 3 0 100-6'
            }
        ],
        [
            'path',
            {
                d: 'M13 5v2'
            }
        ],
        [
            'path',
            {
                d: 'M13 17v2'
            }
        ],
        [
            'path',
            {
                d: 'M13 11v2'
            }
        ]
    ]
];
exports.default = Ticket;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i3Ttf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var TimerOff = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M10 2h4'
            }
        ],
        [
            'path',
            {
                d: 'M7.43 7.433A8 8 0 0118.566 18.57M4.582 11A8 8 0 0015 21.419'
            }
        ],
        [
            'path',
            {
                d: 'M2 2l20 20'
            }
        ],
        [
            'path',
            {
                d: 'M12 12v-2'
            }
        ]
    ]
];
exports.default = TimerOff;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fqTJ3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var TimerReset = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M10 2h4'
            }
        ],
        [
            'path',
            {
                d: 'M12 14v-4'
            }
        ],
        [
            'path',
            {
                d: 'M4 13a8 8 0 018-7 8 8 0 11-5.3 14L4 17.6'
            }
        ],
        [
            'path',
            {
                d: 'M9 17H4v5'
            }
        ]
    ]
];
exports.default = TimerReset;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gHKcO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Timer = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '10',
                x2: '14',
                y1: '2',
                y2: '2'
            }
        ],
        [
            'line',
            {
                x1: '12',
                x2: '15',
                y1: '14',
                y2: '11'
            }
        ],
        [
            'circle',
            {
                cx: '12',
                cy: '14',
                r: '8'
            }
        ]
    ]
];
exports.default = Timer;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"67hyC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ToggleLeft = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '1',
                y: '5',
                width: '22',
                height: '14',
                rx: '7',
                ry: '7'
            }
        ],
        [
            'circle',
            {
                cx: '8',
                cy: '12',
                r: '3'
            }
        ]
    ]
];
exports.default = ToggleLeft;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ckJzo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ToggleRight = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '1',
                y: '5',
                width: '22',
                height: '14',
                rx: '7',
                ry: '7'
            }
        ],
        [
            'circle',
            {
                cx: '16',
                cy: '12',
                r: '3'
            }
        ]
    ]
];
exports.default = ToggleRight;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1jzzP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Tornado = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M21 4H3'
            }
        ],
        [
            'path',
            {
                d: 'M18 8H6'
            }
        ],
        [
            'path',
            {
                d: 'M19 12H9'
            }
        ],
        [
            'path',
            {
                d: 'M16 16h-6'
            }
        ],
        [
            'path',
            {
                d: 'M11 20H9'
            }
        ]
    ]
];
exports.default = Tornado;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"htxYw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Trash2 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '3 6 5 6 21 6'
            }
        ],
        [
            'path',
            {
                d: 'M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2'
            }
        ],
        [
            'line',
            {
                x1: '10',
                y1: '11',
                x2: '10',
                y2: '17'
            }
        ],
        [
            'line',
            {
                x1: '14',
                y1: '11',
                x2: '14',
                y2: '17'
            }
        ]
    ]
];
exports.default = Trash2;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ccPkT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Trash = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '3 6 5 6 21 6'
            }
        ],
        [
            'path',
            {
                d: 'M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2'
            }
        ]
    ]
];
exports.default = Trash;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jTa8t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Trello = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '3',
                y: '3',
                width: '18',
                height: '18',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'rect',
            {
                x: '7',
                y: '7',
                width: '3',
                height: '9'
            }
        ],
        [
            'rect',
            {
                x: '14',
                y: '7',
                width: '3',
                height: '5'
            }
        ]
    ]
];
exports.default = Trello;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eh94r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var TrendingDown = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '23 18 13.5 8.5 8.5 13.5 1 6'
            }
        ],
        [
            'polyline',
            {
                points: '17 18 23 18 23 12'
            }
        ]
    ]
];
exports.default = TrendingDown;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l6HdL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var TrendingUp = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '23 6 13.5 15.5 8.5 10.5 1 18'
            }
        ],
        [
            'polyline',
            {
                points: '17 6 23 6 23 12'
            }
        ]
    ]
];
exports.default = TrendingUp;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lW04E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Triangle = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z'
            }
        ]
    ]
];
exports.default = Triangle;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3eOMC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Truck = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M10 17h4V5H2v12h3m15 0h2v-3.34a4 4 0 00-1.17-2.83L19 9h-5v8h1'
            }
        ],
        [
            'circle',
            {
                cx: '7.5',
                cy: '17.5',
                r: '2.5'
            }
        ],
        [
            'circle',
            {
                cx: '17.5',
                cy: '17.5',
                r: '2.5'
            }
        ]
    ]
];
exports.default = Truck;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ds8gK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Tv2 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M7 21h10'
            }
        ],
        [
            'rect',
            {
                x: '2',
                y: '3',
                width: '20',
                height: '14',
                rx: '2'
            }
        ]
    ]
];
exports.default = Tv2;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bbyDg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Tv = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '2',
                y: '7',
                width: '20',
                height: '15',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'polyline',
            {
                points: '17 2 12 7 7 2'
            }
        ]
    ]
];
exports.default = Tv;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"asEHZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Twitch = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7'
            }
        ]
    ]
];
exports.default = Twitch;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4a48k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Twitter = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0023 3z'
            }
        ]
    ]
];
exports.default = Twitter;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1zwpz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Type = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '4 7 4 4 20 4 20 7'
            }
        ],
        [
            'line',
            {
                x1: '9',
                y1: '20',
                x2: '15',
                y2: '20'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '4',
                x2: '12',
                y2: '20'
            }
        ]
    ]
];
exports.default = Type;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9eF8n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Umbrella = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M23 12a11.05 11.05 0 00-22 0zm-5 7a3 3 0 01-6 0v-7'
            }
        ]
    ]
];
exports.default = Umbrella;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6I0vz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Underline = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M6 4v6a6 6 0 0012 0V4'
            }
        ],
        [
            'line',
            {
                x1: '4',
                y1: '20',
                x2: '20',
                y2: '20'
            }
        ]
    ]
];
exports.default = Underline;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9ZJOG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Undo = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M3 7v6h6'
            }
        ],
        [
            'path',
            {
                d: 'M21 17a9 9 0 00-9-9 9 9 0 00-6 2.3L3 13'
            }
        ]
    ]
];
exports.default = Undo;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7CKnu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Unlink2 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M15 7h2a5 5 0 010 10h-2m-6 0H7A5 5 0 017 7h2'
            }
        ]
    ]
];
exports.default = Unlink2;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lz4qi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Unlink = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M18.84 12.25l1.72-1.71h-.02a5.004 5.004 0 00-.12-7.07 5.006 5.006 0 00-6.95 0l-1.72 1.71'
            }
        ],
        [
            'path',
            {
                d: 'M5.17 11.75l-1.71 1.71a5.004 5.004 0 00.12 7.07 5.006 5.006 0 006.95 0l1.71-1.71'
            }
        ],
        [
            'line',
            {
                x1: '8',
                y1: '2',
                x2: '8',
                y2: '5'
            }
        ],
        [
            'line',
            {
                x1: '2',
                y1: '8',
                x2: '5',
                y2: '8'
            }
        ],
        [
            'line',
            {
                x1: '16',
                y1: '19',
                x2: '16',
                y2: '22'
            }
        ],
        [
            'line',
            {
                x1: '19',
                y1: '16',
                x2: '22',
                y2: '16'
            }
        ]
    ]
];
exports.default = Unlink;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c18FV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Unlock = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '3',
                y: '11',
                width: '18',
                height: '11',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'path',
            {
                d: 'M7 11V7a5 5 0 019.9-1'
            }
        ]
    ]
];
exports.default = Unlock;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gnWQv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var UploadCloud = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M20 16.2A4.5 4.5 0 0017.5 8h-1.8A7 7 0 104 14.9'
            }
        ],
        [
            'path',
            {
                d: 'M12 12v9'
            }
        ],
        [
            'path',
            {
                d: 'M16 16l-4-4-4 4'
            }
        ]
    ]
];
exports.default = UploadCloud;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iz34q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Upload = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4'
            }
        ],
        [
            'polyline',
            {
                points: '17 8 12 3 7 8'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '3',
                x2: '12',
                y2: '15'
            }
        ]
    ]
];
exports.default = Upload;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eGcXp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var UserCheck = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2'
            }
        ],
        [
            'circle',
            {
                cx: '8.5',
                cy: '7',
                r: '4'
            }
        ],
        [
            'polyline',
            {
                points: '17 11 19 13 23 9'
            }
        ]
    ]
];
exports.default = UserCheck;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lsVOU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var UserMinus = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2'
            }
        ],
        [
            'circle',
            {
                cx: '8.5',
                cy: '7',
                r: '4'
            }
        ],
        [
            'line',
            {
                x1: '23',
                y1: '11',
                x2: '17',
                y2: '11'
            }
        ]
    ]
];
exports.default = UserMinus;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"77rGq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var UserPlus = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2'
            }
        ],
        [
            'circle',
            {
                cx: '8.5',
                cy: '7',
                r: '4'
            }
        ],
        [
            'line',
            {
                x1: '20',
                y1: '8',
                x2: '20',
                y2: '14'
            }
        ],
        [
            'line',
            {
                x1: '23',
                y1: '11',
                x2: '17',
                y2: '11'
            }
        ]
    ]
];
exports.default = UserPlus;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8SXtr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var UserX = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2'
            }
        ],
        [
            'circle',
            {
                cx: '8.5',
                cy: '7',
                r: '4'
            }
        ],
        [
            'line',
            {
                x1: '18',
                y1: '8',
                x2: '23',
                y2: '13'
            }
        ],
        [
            'line',
            {
                x1: '23',
                y1: '8',
                x2: '18',
                y2: '13'
            }
        ]
    ]
];
exports.default = UserX;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"mdXCb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var User = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'
            }
        ],
        [
            'circle',
            {
                cx: '12',
                cy: '7',
                r: '4'
            }
        ]
    ]
];
exports.default = User;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dk2UQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Users = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2'
            }
        ],
        [
            'circle',
            {
                cx: '9',
                cy: '7',
                r: '4'
            }
        ],
        [
            'path',
            {
                d: 'M23 21v-2a4 4 0 00-3-3.87'
            }
        ],
        [
            'path',
            {
                d: 'M16 3.13a4 4 0 010 7.75'
            }
        ]
    ]
];
exports.default = Users;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f1oao":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Verified = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M12 3a3.6 3.6 0 00-3.05 1.68 3.6 3.6 0 00-.9-.1 3.6 3.6 0 00-2.42 1.06 3.6 3.6 0 00-.94 3.32A3.6 3.6 0 003 12a3.6 3.6 0 001.69 3.05 3.6 3.6 0 00.95 3.32 3.6 3.6 0 003.35.96A3.6 3.6 0 0012 21a3.6 3.6 0 003.04-1.67 3.6 3.6 0 004.3-4.3A3.6 3.6 0 0021 12a3.6 3.6 0 00-1.67-3.04v0a3.6 3.6 0 00-4.3-4.3A3.6 3.6 0 0012 3z'
            }
        ],
        [
            'path',
            {
                d: 'M15 10l-4 4'
            }
        ],
        [
            'path',
            {
                d: 'M9 12l2 2'
            }
        ]
    ]
];
exports.default = Verified;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"45ezd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Vibrate = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M2 8l2 2-2 2 2 2-2 2'
            }
        ],
        [
            'path',
            {
                d: 'M22 8l-2 2 2 2-2 2 2 2'
            }
        ],
        [
            'rect',
            {
                x: '8',
                y: '5',
                width: '8',
                height: '14',
                rx: '1'
            }
        ]
    ]
];
exports.default = Vibrate;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1B8vn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var VideoOff = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M16 16v1a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2h2m5.66 0H14a2 2 0 012 2v3.34l1 1L23 7v10'
            }
        ],
        [
            'line',
            {
                x1: '1',
                y1: '1',
                x2: '23',
                y2: '23'
            }
        ]
    ]
];
exports.default = VideoOff;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cFrck":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Video = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polygon',
            {
                points: '23 7 16 12 23 17 23 7'
            }
        ],
        [
            'rect',
            {
                x: '1',
                y: '5',
                width: '15',
                height: '14',
                rx: '2',
                ry: '2'
            }
        ]
    ]
];
exports.default = Video;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eR2fC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var View = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z'
            }
        ],
        [
            'path',
            {
                d: 'M12 13a1 1 0 100-2 1 1 0 000 2z'
            }
        ],
        [
            'path',
            {
                d: 'M21 8V5a2 2 0 00-2-2H5a2 2 0 00-2 2v3m18 8v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3'
            }
        ]
    ]
];
exports.default = View;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8CS1d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Voicemail = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '5.5',
                cy: '11.5',
                r: '4.5'
            }
        ],
        [
            'circle',
            {
                cx: '18.5',
                cy: '11.5',
                r: '4.5'
            }
        ],
        [
            'line',
            {
                x1: '5.5',
                y1: '16',
                x2: '18.5',
                y2: '16'
            }
        ]
    ]
];
exports.default = Voicemail;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eDeIg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Volume1 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polygon',
            {
                points: '11 5 6 9 2 9 2 15 6 15 11 19 11 5'
            }
        ],
        [
            'path',
            {
                d: 'M15.54 8.46a5 5 0 010 7.07'
            }
        ]
    ]
];
exports.default = Volume1;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"BvLro":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Volume2 = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polygon',
            {
                points: '11 5 6 9 2 9 2 15 6 15 11 19 11 5'
            }
        ],
        [
            'path',
            {
                d: 'M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07'
            }
        ]
    ]
];
exports.default = Volume2;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2xuGw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var VolumeX = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polygon',
            {
                points: '11 5 6 9 2 9 2 15 6 15 11 19 11 5'
            }
        ],
        [
            'line',
            {
                x1: '23',
                y1: '9',
                x2: '17',
                y2: '15'
            }
        ],
        [
            'line',
            {
                x1: '17',
                y1: '9',
                x2: '23',
                y2: '15'
            }
        ]
    ]
];
exports.default = VolumeX;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8hx7Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Volume = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polygon',
            {
                points: '11 5 6 9 2 9 2 15 6 15 11 19 11 5'
            }
        ]
    ]
];
exports.default = Volume;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e2JYP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Wallet = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M20 12V8H6a2 2 0 01-2-2c0-1.1.9-2 2-2h12v4'
            }
        ],
        [
            'path',
            {
                d: 'M4 6v12c0 1.1.9 2 2 2h14v-4'
            }
        ],
        [
            'path',
            {
                d: 'M18 12a2 2 0 00-2 2c0 1.1.9 2 2 2h4v-4h-4z'
            }
        ]
    ]
];
exports.default = Wallet;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3btSq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Wand = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M15 4V2'
            }
        ],
        [
            'path',
            {
                d: 'M15 16v-2'
            }
        ],
        [
            'path',
            {
                d: 'M8 9h2'
            }
        ],
        [
            'path',
            {
                d: 'M20 9h2'
            }
        ],
        [
            'path',
            {
                d: 'M17.8 11.8L19 13'
            }
        ],
        [
            'path',
            {
                d: 'M15 9h0'
            }
        ],
        [
            'path',
            {
                d: 'M17.8 6.2L19 5'
            }
        ],
        [
            'path',
            {
                d: 'M3 21l9-9'
            }
        ],
        [
            'path',
            {
                d: 'M12.2 6.2L11 5'
            }
        ]
    ]
];
exports.default = Wand;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"khtt7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Watch = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '7'
            }
        ],
        [
            'polyline',
            {
                points: '12 9 12 12 13.5 13.5'
            }
        ],
        [
            'path',
            {
                d: 'M16.51 17.35l-.35 3.83a2 2 0 01-2 1.82H9.83a2 2 0 01-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 019.83 1h4.35a2 2 0 012 1.82l.35 3.83'
            }
        ]
    ]
];
exports.default = Watch;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kACXo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Waves = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c1.3 0 1.9.5 2.5 1'
            }
        ],
        [
            'path',
            {
                d: 'M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1'
            }
        ],
        [
            'path',
            {
                d: 'M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1'
            }
        ],
        [
            'path',
            {
                d: 'M12 6c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1'
            }
        ],
        [
            'path',
            {
                d: 'M12 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1'
            }
        ],
        [
            'path',
            {
                d: 'M12 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1'
            }
        ]
    ]
];
exports.default = Waves;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"01qSn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Webcam = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '10',
                r: '8'
            }
        ],
        [
            'circle',
            {
                cx: '12',
                cy: '10',
                r: '3'
            }
        ],
        [
            'path',
            {
                d: 'M12 22v-4m-5 4h5-5zm10 0h-5 5z'
            }
        ]
    ]
];
exports.default = Webcam;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jYDS0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var WifiOff = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '2',
                y1: '2',
                x2: '22',
                y2: '22'
            }
        ],
        [
            'path',
            {
                d: 'M8.5 16.5a5 5 0 017 0'
            }
        ],
        [
            'path',
            {
                d: 'M2 8.82a15 15 0 014.17-2.65'
            }
        ],
        [
            'path',
            {
                d: 'M10.66 5c4.01-.36 8.14.9 11.34 3.76'
            }
        ],
        [
            'path',
            {
                d: 'M16.85 11.25a10 10 0 012.22 1.68'
            }
        ],
        [
            'path',
            {
                d: 'M5 13a10 10 0 015.24-2.76'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '20',
                x2: '12.01',
                y2: '20'
            }
        ]
    ]
];
exports.default = WifiOff;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kHOSS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Wifi = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M5 13a10 10 0 0114 0'
            }
        ],
        [
            'path',
            {
                d: 'M8.5 16.5a5 5 0 017 0'
            }
        ],
        [
            'path',
            {
                d: 'M2 8.82a15 15 0 0120 0'
            }
        ],
        [
            'line',
            {
                x1: '12',
                y1: '20',
                x2: '12.01',
                y2: '20'
            }
        ]
    ]
];
exports.default = Wifi;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"UgSc1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Wind = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M17.7 7.7a2.5 2.5 0 111.8 4.3H2'
            }
        ],
        [
            'path',
            {
                d: 'M9.6 4.6A2 2 0 1111 8H2'
            }
        ],
        [
            'path',
            {
                d: 'M12.6 19.4A2 2 0 1014 16H2'
            }
        ]
    ]
];
exports.default = Wind;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9SY5b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var WrapText = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '3',
                y1: '6',
                x2: '21',
                y2: '6'
            }
        ],
        [
            'path',
            {
                d: 'M3 12h15a3 3 0 110 6h-4'
            }
        ],
        [
            'polyline',
            {
                points: '16 16 14 18 16 20'
            }
        ],
        [
            'line',
            {
                x1: '3',
                y1: '18',
                x2: '10',
                y2: '18'
            }
        ]
    ]
];
exports.default = WrapText;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g2cbT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Wrench = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z'
            }
        ]
    ]
];
exports.default = Wrench;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4z6ZS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var XCircle = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '12',
                cy: '12',
                r: '10'
            }
        ],
        [
            'line',
            {
                x1: '15',
                y1: '9',
                x2: '9',
                y2: '15'
            }
        ],
        [
            'line',
            {
                x1: '9',
                y1: '9',
                x2: '15',
                y2: '15'
            }
        ]
    ]
];
exports.default = XCircle;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"395jh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var XOctagon = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polygon',
            {
                points: '7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2'
            }
        ],
        [
            'line',
            {
                x1: '15',
                y1: '9',
                x2: '9',
                y2: '15'
            }
        ],
        [
            'line',
            {
                x1: '9',
                y1: '9',
                x2: '15',
                y2: '15'
            }
        ]
    ]
];
exports.default = XOctagon;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dLjz8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var XSquare = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'rect',
            {
                x: '3',
                y: '3',
                width: '18',
                height: '18',
                rx: '2',
                ry: '2'
            }
        ],
        [
            'line',
            {
                x1: '9',
                y1: '9',
                x2: '15',
                y2: '15'
            }
        ],
        [
            'line',
            {
                x1: '15',
                y1: '9',
                x2: '9',
                y2: '15'
            }
        ]
    ]
];
exports.default = XSquare;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eKQ4I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var X = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'line',
            {
                x1: '18',
                y1: '6',
                x2: '6',
                y2: '18'
            }
        ],
        [
            'line',
            {
                x1: '6',
                y1: '6',
                x2: '18',
                y2: '18'
            }
        ]
    ]
];
exports.default = X;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"543FQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Youtube = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'path',
            {
                d: 'M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z'
            }
        ],
        [
            'polygon',
            {
                points: '9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02'
            }
        ]
    ]
];
exports.default = Youtube;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jZGQR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ZapOff = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polyline',
            {
                points: '12.41 6.75 13 2 10.57 4.92'
            }
        ],
        [
            'polyline',
            {
                points: '18.57 12.91 21 10 15.66 10'
            }
        ],
        [
            'polyline',
            {
                points: '8 8 3 14 12 14 11 22 16 16'
            }
        ],
        [
            'line',
            {
                x1: '1',
                y1: '1',
                x2: '23',
                y2: '23'
            }
        ]
    ]
];
exports.default = ZapOff;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9XphR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var Zap = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'polygon',
            {
                points: '13 2 3 14 12 14 11 22 21 10 12 10 13 2'
            }
        ]
    ]
];
exports.default = Zap;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jTWDE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ZoomIn = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '11',
                cy: '11',
                r: '8'
            }
        ],
        [
            'line',
            {
                x1: '21',
                y1: '21',
                x2: '16.65',
                y2: '16.65'
            }
        ],
        [
            'line',
            {
                x1: '11',
                y1: '8',
                x2: '11',
                y2: '14'
            }
        ],
        [
            'line',
            {
                x1: '8',
                y1: '11',
                x2: '14',
                y2: '11'
            }
        ]
    ]
];
exports.default = ZoomIn;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aut50":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultAttributes = require("../defaultAttributes");
var _defaultAttributesDefault = parcelHelpers.interopDefault(_defaultAttributes);
var ZoomOut = [
    'svg',
    _defaultAttributesDefault.default,
    [
        [
            'circle',
            {
                cx: '11',
                cy: '11',
                r: '8'
            }
        ],
        [
            'line',
            {
                x1: '21',
                y1: '21',
                x2: '16.65',
                y2: '16.65'
            }
        ],
        [
            'line',
            {
                x1: '8',
                y1: '11',
                x2: '14',
                y2: '11'
            }
        ]
    ]
];
exports.default = ZoomOut;

},{"../defaultAttributes":"7NOpc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ipSla":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "User", ()=>User
);
class User {
    constructor(picture, firstName, lastName, age, streetNumber, streetName, postcode, city, email){
        this.picture = picture;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.streetNumber = streetNumber;
        this.streetName = streetName;
        this.postcode = postcode;
        this.city = city;
        this.email = email;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    get adressStreet() {
        return `${this.streetNumber} ${this.streetName}`;
    }
    get adressCity() {
        return `${this.postcode} ${this.city}`;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["d5kvp","igcvL"], "igcvL", "parcelRequiref734")

//# sourceMappingURL=index.5baa4167.js.map

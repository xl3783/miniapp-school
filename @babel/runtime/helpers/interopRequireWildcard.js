var e = require("./typeof.js");

function t(e) {
    if ("function" != typeof WeakMap) return null;
    var r = new WeakMap(), o = new WeakMap();
    return (t = function(e) {
        return e ? o : r;
    })(e);
}

module.exports = function(r, o) {
    if (!o && r && r.__esModule) return r;
    if (null === r || "object" !== e(r) && "function" != typeof r) return {
        default: r
    };
    var n = t(o);
    if (n && n.has(r)) return n.get(r);
    var u = {}, f = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var a in r) if ("default" !== a && Object.prototype.hasOwnProperty.call(r, a)) {
        var p = f ? Object.getOwnPropertyDescriptor(r, a) : null;
        p && (p.get || p.set) ? Object.defineProperty(u, a, p) : u[a] = r[a];
    }
    return u.default = r, n && n.set(r, u), u;
}, module.exports.__esModule = !0, module.exports.default = module.exports;
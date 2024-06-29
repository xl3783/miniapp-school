var n = {
    init: function() {
        if (void 0 === arguments) return null;
        if (arguments.length < 1) return null;
        if ("string" != typeof arguments[0]) return null;
        if ("undefined" == typeof RegExp) return null;
        for (var t = arguments[0], e = new RegExp(/(%([%]|(\-)?(\+|\x20)?(0)?(\d+)?(\.(\d)?)?([bcdfosxX])))/g), r = new Array(), a = new Array(), g = 0, i = 0, u = 0, o = 0, s = "", l = null; l = e.exec(t); ) l[9] && (g += 1), 
        i = o, u = e.lastIndex - l[0].length, a[a.length] = t.substring(i, u), o = e.lastIndex, 
        r[r.length] = {
            match: l[0],
            left: !!l[3],
            sign: l[4] || "",
            pad: l[5] || " ",
            min: l[6] || 0,
            precision: l[8],
            code: l[9] || "%",
            negative: parseInt(arguments[g]) < 0,
            argument: String(arguments[g])
        };
        if (a[a.length] = t.substring(o), 0 == r.length) return t;
        if (arguments.length - 1 < g) return null;
        l = null;
        var c = null, m = "";
        for (c = 0; c < r.length; c++) "%" == r[c].code ? m = "%" : "b" == r[c].code ? (r[c].argument = String(Math.abs(parseInt(r[c].argument)).toString(2)), 
        m = n.convert(r[c], !0)) : "c" == r[c].code ? (r[c].argument = String(String.fromCharCode(parseInt(Math.abs(parseInt(r[c].argument))))), 
        m = n.convert(r[c], !0)) : "d" == r[c].code ? (r[c].argument = String(Math.abs(parseInt(r[c].argument))), 
        m = n.convert(r[c])) : "f" == r[c].code ? (r[c].argument = String(Math.abs(parseFloat(r[c].argument)).toFixed(r[c].precision ? r[c].precision : 6)), 
        m = n.convert(r[c])) : "o" == r[c].code ? (r[c].argument = String(Math.abs(parseInt(r[c].argument)).toString(8)), 
        m = n.convert(r[c])) : "s" == r[c].code ? (r[c].argument = r[c].argument.substring(0, r[c].precision ? r[c].precision : r[c].argument.length), 
        m = n.convert(r[c], !0)) : "x" == r[c].code ? (r[c].argument = String(Math.abs(parseInt(r[c].argument)).toString(16)), 
        m = n.convert(r[c])) : "X" == r[c].code ? (r[c].argument = String(Math.abs(parseInt(r[c].argument)).toString(16)), 
        m = n.convert(r[c]).toUpperCase()) : m = r[c].match, s += a[c], s += m;
        return s += a[c];
    },
    convert: function(n, t) {
        n.sign = t ? "" : n.negative ? "-" : n.sign;
        var e = n.min - n.argument.length + 1 - n.sign.length, r = new Array(e < 0 ? 0 : e).join(n.pad);
        return n.left ? "0" == n.pad || t ? n.sign + n.argument + r.replace(/0/g, " ") : n.sign + n.argument + r : "0" == n.pad || t ? n.sign + r + n.argument : r + n.sign + n.argument;
    }
};

module.exports = {
    sprintf: n
};
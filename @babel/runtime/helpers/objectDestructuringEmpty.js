function _objectDestructuringEmpty(t) {
    if (null == t) throw new TypeError("Cannot destructure " + t);
}

module.exports = _objectDestructuringEmpty;
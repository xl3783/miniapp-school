class Formatter {
  static init(...args) {
    if (args === undefined || args.length < 1 || typeof args[0] !== 'string' || typeof RegExp === 'undefined') {
      return null;
    }

    const template = args[0];
    const regex = /(%([%]|(\-)?(\+|\x20)?(0)?(\d+)?(\.(\d)?)?([bcdfosxX])))/g;
    let matches = [];
    let parts = [];
    let index = 0;
    let lastIndex = 0;
    let match;
    let argIndex = 0;

    while ((match = regex.exec(template)) !== null) {
      if (match[9]) argIndex++;
      lastIndex = regex.lastIndex - match[0].length;
      parts.push(template.substring(index, lastIndex));
      index = regex.lastIndex;
      matches.push({
        match: match[0],
        left: !!match[3],
        sign: match[4] || "",
        pad: match[5] || " ",
        min: match[6] || 0,
        precision: match[8],
        code: match[9] || "%",
        negative: parseInt(args[argIndex]) < 0,
        argument: String(args[argIndex])
      });
    }

    parts.push(template.substring(index));

    if (matches.length === 0) {
      return template;
    }

    if (args.length - 1 < argIndex) {
      return null;
    }

    let result = '';

    matches.forEach((matchObj, i) => {
      let formattedArg;
      switch (matchObj.code) {
        case '%':
          formattedArg = '%';
          break;
        case 'b':
          matchObj.argument = String(Math.abs(parseInt(matchObj.argument)).toString(2));
          formattedArg = this.convert(matchObj, true);
          break;
        case 'c':
          matchObj.argument = String.fromCharCode(parseInt(Math.abs(parseInt(matchObj.argument))));
          formattedArg = this.convert(matchObj, true);
          break;
        case 'd':
          matchObj.argument = String(Math.abs(parseInt(matchObj.argument)));
          formattedArg = this.convert(matchObj);
          break;
        case 'f':
          matchObj.argument = String(Math.abs(parseFloat(matchObj.argument)).toFixed(matchObj.precision ? matchObj.precision : 6));
          formattedArg = this.convert(matchObj);
          break;
        case 'o':
          matchObj.argument = String(Math.abs(parseInt(matchObj.argument)).toString(8));
          formattedArg = this.convert(matchObj);
          break;
        case 's':
          matchObj.argument = matchObj.argument.substring(0, matchObj.precision ? matchObj.precision : matchObj.argument.length);
          formattedArg = this.convert(matchObj, true);
          break;
        case 'x':
          matchObj.argument = String(Math.abs(parseInt(matchObj.argument)).toString(16));
          formattedArg = this.convert(matchObj);
          break;
        case 'X':
          matchObj.argument = String(Math.abs(parseInt(matchObj.argument)).toString(16)).toUpperCase();
          formattedArg = this.convert(matchObj);
          break;
        default:
          formattedArg = matchObj.match;
      }
      result += parts[i] + formattedArg;
    });

    return result + parts[parts.length - 1];
  }

  static convert(matchObj, isString = false) {
    matchObj.sign = isString ? "" : matchObj.negative ? "-" : matchObj.sign;
    const paddingLength = matchObj.min - matchObj.argument.length + 1 - matchObj.sign.length;
    const padding = '0'.repeat(Math.max(paddingLength, 0));

    return matchObj.left ?
      matchObj.sign + matchObj.argument + padding.replace(/0/g, ' ') :
      matchObj.sign + padding + matchObj.argument;
  }
}

module.exports = {
  sprintf: Formatter
};
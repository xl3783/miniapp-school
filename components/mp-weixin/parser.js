// Utility function to create an object with keys from comma-separated string
function createObjectFromCommaString(str) {
  var obj = {};
  var items = str.split(",");
  for (var i = items.length - 1; i >= 0; i--) {
    obj[items[i]] = true;
  }
  return obj;
}

// Utility function to decode HTML entities in a string
function decodeHTMLEntities(str, entities) {
  var start = str.indexOf("&");
  while (start !== -1) {
    var end = str.indexOf(";", start + 3);
    if (end === -1) break;

    var entity = str[start + 1] === "#" ?
      parseInt(str[start + 2] === "x" ? "0" + str.substring(start + 2, end) : str.substring(start + 1, end)) :
      str.substring(start + 1, end);

    if (!isNaN(entity) && entities[entity] || entity === "amp" && entities[entity] && i) {
      str = str.substr(0, start) + (entities[entity] || "&") + str.substr(end + 1);
    }
    start = str.indexOf("&", start + 1);
  }
  return str;
}

// Class to parse HTML-like content
function HTMLParser(options) {
  this.options = options.data || {};
  this.tagStyle = Object.assign({}, a.tagStyle, this.options.tagStyle);
  this.imgList = options.imgList || [];
  this.plugins = options.plugins || [];
  this.attrs = Object.create(null);
  this.stack = [];
  this.nodes = [];
}

// Class method to parse HTML content
HTMLParser.prototype.parse = function (content) {
  for (var i = this.plugins.length - 1; i >= 0; i--) {
    if (this.plugins[i].onUpdate) {
      content = this.plugins[i].onUpdate(content, a) || content;
    }
  }
  new HTMLParserHandler(this).parse(content);
  while (this.stack.length) {
    this.popNode();
  }
  return this.nodes;
};

// Class method to handle HTML parsing
HTMLParser.prototype.expose = function () {
  for (var i = this.stack.length - 1; i >= 0; i--) {
    var node = this.stack[i];
    if (node.name === "a" || node.c) return;
    node.c = true;
  }
};

// Class method to handle parsing hooks
HTMLParser.prototype.hook = function (tag) {
  for (var i = this.plugins.length - 1; i >= 0; i--) {
    if (this.plugins[i].onParse && !this.plugins[i].onParse(tag, this)) {
      return false;
    }
  }
  return true;
};

// Class method to get URL based on domain and source
HTMLParser.prototype.getUrl = function (src) {
  var domain = this.options.domain;
  if (src[0] === "/") {
    if (src[1] === "/") {
      src = (domain ? domain.split("://")[0] : "http") + ":" + src;
    } else if (domain) {
      src = domain + src;
    }
  }
  return src;
};

// Class method to parse and apply styles from HTML attributes
HTMLParser.prototype.parseStyle = function (tag) {
  var style = tag.attrs.style || "";
  var tagStyle = (this.tagStyle[tag.name] || "").split(";").concat(style.split(";"));
  var parsedStyle = {};
  var additionalStyle = "";

  if (tag.attrs.id) {
    if (this.options.useAnchor) {
      this.expose();
    } else if (tag.name !== "img" && tag.name !== "a" && tag.name !== "video" && tag.name !== "audio") {
      tag.attrs.id = undefined;
    }
  }

  // Parse width and height attributes
  if (tag.attrs.width) {
    parsedStyle.width = parseFloat(tag.attrs.width) + (tag.attrs.width.includes("%") ? "%" : "px");
    tag.attrs.width = undefined;
  }
  if (tag.attrs.height) {
    parsedStyle.height = parseFloat(tag.attrs.height) + (tag.attrs.height.includes("%") ? "%" : "px");
    tag.attrs.height = undefined;
  }

  // Iterate through styles and apply them
  for (var i = 0; i < tagStyle.length; i++) {
    var styleItem = tagStyle[i].split(":");
    if (styleItem.length >= 2) {
      var property = styleItem.shift().trim().toLowerCase();
      var value = styleItem.join(":").trim();

      if (value[0] === "-" && value.lastIndexOf("-") > 0 || value.includes("safe")) {
        additionalStyle += ";" + property + ":" + value;
      } else {
        if (!parsedStyle[property] || value.includes("import") || !parsedStyle[property].includes("import")) {
          // Handle URL in style
          if (value.includes("url")) {
            var index = value.indexOf("(") + 1;
            if (index) {
              while (value[index] === '"' || value[index] === "'" || l[value[index]]) index++;
              value = value.substr(0, index) + this.getUrl(value.substr(index));
            }
          } else if (value.includes("rpx")) {
            value = value.replace(/[0-9.]+\s*rpx/g, function (px) {
              return parseFloat(px) * h / 750 + "px";
            });
          }
          parsedStyle[property] = value;
        }
      }
    }
  }

  tag.attrs.style = additionalStyle;
  return parsedStyle;
};

// Class method to handle parsing of tag names
HTMLParser.prototype.onTagName = function (tag) {
  this.tagName = this.xml ? tag : tag.toLowerCase();
  if (this.tagName === "svg") {
    this.xml = true;
  }
};

// Class method to handle parsing of attribute names
HTMLParser.prototype.onAttrName = function (attr) {
  attr = this.xml ? attr : attr.toLowerCase();
  if (attr.substring(0, 5) === "data-") {
    if (attr === "data-src" && !this.attrs.src) {
      if (this.tagName === "img" || this.tagName === "a") {
        this.attrName = attr;
      } else {
        this.attrName = undefined;
      }
    } else {
      this.attrName = "src";
    }
  } else {
    this.attrName = attr;
    this.attrs[attr] = "T";
  }
};

// Class method to handle parsing of attribute values
HTMLParser.prototype.onAttrVal = function (val) {
  var attr = this.attrName || "";
  if (attr === "style" || attr === "href") {
    this.attrs[attr] = decodeHTMLEntities(val, true);
  } else if (attr.includes("src")) {
    this.attrs[attr] = this.getUrl(decodeHTMLEntities(val, true));
  } else if (attr) {
    this.attrs[attr] = val;
  }
};

// Class method to handle opening tag
HTMLParser.prototype.onOpenTag = function (tag) {
  var node = Object.create(null);
  node.name = this.tagName;
  node.attrs = this.attrs;
  this.attrs = Object.create(null);
  var attrs = node.attrs;
  var parent = this.stack[this.stack.length - 1];
  var children = parent ? parent.children : this.nodes;
  var isVoidTag = this.xml ? tag : a.voidTags[node.name];

  if (n[node.name]) {
    attrs.class = n[node.name] + (attrs.class ? " " + attrs.class : "");
  }

  if (node.name === "embed") {
    var src = attrs.src || "";
    if (src.includes(".mp4") || src.includes(".3gp") || src.includes(".m3u8")) {
      node.name = "video";
    } else if (src.includes(".mp3") || src.includes(".wav") || src.includes(".aac") || src.includes(".m4a") || (attrs.type || "").includes("audio")) {
      node.name = "audio";
    }
    if (attrs.autostart) {
      attrs.autoplay = "T";
    }
    attrs.controls = "T";
  }

  // Handle exposing links and sources
  if (node.name === "video" || node.name === "audio") {
    if (node.name === "video" && !attrs.id) {
      attrs.id = "v" + c++;
    }
    if (!attrs.controls && !attrs.autoplay) {
      attrs.controls = "T";
    }
    node.src = [];
    if (attrs.src) {
      node.src.push(attrs.src);
      attrs.src = undefined;
    }
    this.expose();
  }

  // Handle void tags and parsing styles
  if (isVoidTag) {
    if (!this.hook(node) || a.ignoreTags[node.name]) return;

    var parsedStyle = this.parseStyle(node);

    if (node.name === "img") {
      if (attrs.src) {
        if (attrs.src.includes("webp")) {
          node.webp = "T";
        }
        if (attrs.src.includes("data:") && !attrs["original-src"] && !attrs.ignore) {
          attrs.ignore = "T";
        }
        if (!attrs.ignore || node.webp || attrs.src.includes("cloud://")) {
          for (var i = this.stack.length - 1; i >= 0; i--) {
            var ancestor = this.stack[i];
            if (ancestor.name === "a") {
              node.a = ancestor.attrs;
              break;
            }
            var ancestorStyle = ancestor.attrs.style || "";
            if (!ancestorStyle.includes("flex:") || ancestorStyle.includes("flex:0") || ancestorStyle.includes("flex: 0") || parsedStyle.width && parsedStyle.width.includes("%")) {
              if (ancestorStyle.includes("flex") && parsedStyle.width === "100%") {
                for (var j = i + 1; j < this.stack.length; j++) {
                  var siblingStyle = this.stack[j].attrs.style || "";
                  if (!siblingStyle.includes(";width") && !siblingStyle.includes(" width") && siblingStyle.indexOf("width") !== 0) {
                    parsedStyle.width = "";
                    break;
                  }
                }
              } else if (ancestorStyle.includes("inline-block")) {
                if (parsedStyle.width && parsedStyle.width.endsWith("%")) {
                  ancestor.attrs.style += ";max-width:" + parsedStyle.width;
                  parsedStyle.width = "";
                } else {
                  ancestor.attrs.style += ";max-width:100%";
                }
              }
            } else {
              parsedStyle.width = "100% !important";
              parsedStyle.height = "";
              for (var j = i + 1; j < this.stack.length; j++) {
                this.stack[j].attrs.style = (this.stack[j].attrs.style || "").replace("inline-", "");
              }
            }
            ancestor.c = 1;
          }
          node.i = this.imgList.length;
          var originalSrc = attrs["original-src"] || attrs.src;
          if (this.imgList.includes(originalSrc)) {
            var index = originalSrc.indexOf("://");
            if (index !== -1) {
              index += 3;
              var randomizedSrc = originalSrc.substr(0, index);
              for (; index < originalSrc.length && originalSrc[index] !== "/"; index++) {
                randomizedSrc += Math.random() > 0.5 ? originalSrc[index].toUpperCase() : originalSrc[index];
              }
              randomizedSrc += originalSrc.substr(index);
              originalSrc = randomizedSrc;
            }
          }
          this.imgList.push(originalSrc);
        }
        if (parsedStyle.display === "inline") {
          parsedStyle.display = "";
        }
        if (attrs.ignore) {
          parsedStyle["max-width"] = parsedStyle["max-width"] || "100%";
          attrs.style += ";-webkit-touch-callout:none";
        }
        if (parseInt(parsedStyle.width) > h) {
          parsedStyle.height = undefined;
        }
        if (parsedStyle.width) {
          if (parsedStyle.width.includes("auto")) {
            parsedStyle.width = "";
          } else {
            node.w = "T";
            if (parsedStyle.height && !parsedStyle.height.includes("auto")) {
              node.h = "T";
            }
          }
        }
      }
    } else if (node.name === "svg") {
      children.push(node);
      this.stack.push(node);
      this.popNode();
      return;
    }

    for (var key in parsedStyle) {
      if (parsedStyle[key]) {
        attrs.style += ";" + key + ":" + parsedStyle[key].replace(" !important", "");
      }
    }
    attrs.style = attrs.style.substr(1) || undefined;
  } else {
    if (node.name === "pre" || (attrs.style || "").includes("white-space") && attrs.style.includes("pre")) {
      this.pre = node.pre = true;
    }
    node.children = [];
    this.stack.push(node);
  }
  children.push(node);
};

// Class method to handle closing tags
HTMLParser.prototype.onCloseTag = function (tag) {
  tag = this.xml ? tag : tag.toLowerCase();
  var stackLength = this.stack.length;

  for (var i = stackLength - 1; i >= 0 && this.stack[i].name !== tag; i--);
  if (i !== -1) {
    while (this.stack.length > i) {
      this.popNode();
    }
  } else if (tag === "p" || tag === "br") {
    (this.stack.length ? this.stack[this.stack.length - 1].children : this.nodes).push({
      name: tag,
      attrs: {
        class: n[tag],
        style: this.tagStyle[tag]
      }
    });
  }
};

// Class method to handle popping nodes
HTMLParser.prototype.popNode = function () {
  var node = this.stack.pop();
  var attrs = node.attrs;
  var children = node.children;
  var parent = this.stack[this.stack.length - 1];
  var parentChildren = parent ? parent.children : this.nodes;

  if (!this.hook(node) || a.ignoreTags[node.name]) {
    if (node.name === "title" && children.length && children[0].type === "text" && this.options.setTitle) {
      wx.setNavigationBarTitle({
        title: children[0].text
      });
    }
    parentChildren.pop();
    return;
  }

  if (node.pre) {
    node.pre = this.pre = undefined;
    for (var i = this.stack.length - 1; i >= 0; i--) {
      if (this.stack[i].pre) {
        this.pre = true;
      }
    }
  }

  if (node.name === "svg") {
    var svgContent = "";
    var svgStyle = attrs.style;
    attrs.style = "";
    if (attrs.viewbox) {
      attrs.viewBox = attrs.viewbox;
    }
    attrs.xmlns = "http://www.w3.org/2000/svg";

    function processSvg(child) {
      if (child.type === "text") {
        svgContent += child.text;
      } else {
        svgContent += "<" + child.name;
        for (var attr in child.attrs) {
          var value = child.attrs[attr];
          if (value) {
            svgContent += " " + attr + '="' + value + '"';
          }
        }
        if (child.children) {
          svgContent += ">";
          for (var j = 0; j < child.children.length; j++) {
            processSvg(child.children[j]);
          }
          svgContent += "</" + child.name + ">";
        } else {
          svgContent += "/>";
        }
      }
    }

    processSvg(node);
    node.name = "img";
    node.attrs = {
      src: "data:image/svg+xml;utf8," + svgContent.replace(/#/g, "%23"),
      style: svgStyle,
      ignore: "T"
    };
    node.children = undefined;
    this.xml = false;
    return;
  }

  var parsedStyle = {};
  if (attrs.align) {
    if (node.name === "table") {
      if (attrs.align === "center") {
        parsedStyle["margin-inline-start"] = parsedStyle["margin-inline-end"] = "auto";
      } else {
        parsedStyle.float = attrs.align;
      }
    } else {
      parsedStyle["text-align"] = attrs.align;
    }
    attrs.align = undefined;
  }

  if (node.name === "font") {
    if (attrs.color) {
      parsedStyle.color = attrs.color;
      attrs.color = undefined;
    }
    if (attrs.face) {
      parsedStyle["font-family"] = attrs.face;
      attrs.face = undefined;
    }
    if (attrs.size) {
      var size = parseInt(attrs.size);
      if (!isNaN(size)) {
        size = Math.min(Math.max(size, 1), 7);
        parsedStyle["font-size"] = ["xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large"][size - 1];
      }
      attrs.size = undefined;
    }
  }

  if ((attrs.class || "").includes("align-center")) {
    parsedStyle["text-align"] = "center";
  }

  Object.assign(parsedStyle, this.parseStyle(node));
  if (parseInt(parsedStyle.width) > h) {
    parsedStyle["max-width"] = "100%";
    parsedStyle["box-sizing"] = "border-box";
  }

  if (a.blockTags[node.name]) {
    node.name = "div";
  } else if (a.trustTags[node.name] || this.xml) {
    if (node.name === "a" || node.name === "ad") {
      this.expose();
    } else if (node.name === "video" || node.name === "audio") {
      node.children = undefined;
    } else if ((node.name === "ul" || node.name === "ol") && !node.c) {
      var listStyles = {
        a: "lower-alpha",
        A: "upper-alpha",
        i: "lower-roman",
        I: "upper-roman"
      };
      if (listStyles[attrs.type]) {
        attrs.style += ";list-style-type:" + listStyles[attrs.type];
        attrs.type = undefined;
      }
      node.c = 1;
      for (var j = children.length - 1; j >= 0; j--) {
        if (children[j].name === "li") {
          children[j].c = 1;
        }
      }
    } else {
      node.name = "span";
    }
  } else {
    node.name = "span";
  }

  if ((parsedStyle.display || "").includes("flex") && !node.c) {
    for (var j = children.length - 1; j >= 0; j--) {
      var childNode = children[j];
      if (childNode.f) {
        childNode.attrs.style = (childNode.attrs.style || "") + childNode.f;
        childNode.f = undefined;
      }
    }
  }

  var isParentFlex = parent && (parent.attrs.style || "").includes("flex") && !node.c && !(parsedStyle.display || "").includes("inline");
  for (var styleKey in parsedStyle) {
    if (parsedStyle[styleKey]) {
      var styleValue = ";" + styleKey + ":" + parsedStyle[styleKey].replace(" !important", "");
      if (isParentFlex && (styleKey.includes("flex") && styleKey !== "flex-direction" || styleKey === "align-self" || styleKey === "-" || styleKey === "width" && styleValue.includes("%"))) {
        node.f += styleValue;
        if (styleKey === "width") {
          attrs.style += ";width:100%";
        }
      } else {
        attrs.style += styleValue;
      }
    }
  }
  attrs.style = attrs.style.substr(1) || undefined;
};

// Class method to handle text nodes
HTMLParser.prototype.onText = function (text) {
  if (!this.pre) {
    var cleanedText = "";
    var isWhitespace = false;
    for (var i = 0; i < text.length; i++) {
      if (l[text[i]]) {
        if (cleanedText[cleanedText.length - 1] !== " ") {
          cleanedText += " ";
        }
        if (text[i] === "\n") {
          isWhitespace = true;
        }
      } else {
        cleanedText += text[i];
      }
    }
    if (cleanedText === " " && isWhitespace) return;
    text = cleanedText;
  }

  var textNode = {
    type: "text",
    text: decodeHTMLEntities(text)
  };

  if (this.hook(textNode)) {
    if (this.options.selectable === "force" && o.includes("iOS")) {
      this.expose();
      textNode.us = "T";
    }
    (this.stack.length ? this.stack[this.stack.length - 1].children : this.nodes).push(textNode);
  }
};

// Class to handle HTML parsing process
function HTMLParserHandler(handler) {
  this.handler = handler;
}

// Parsing process methods
HTMLParserHandler.prototype.parse = function (content) {
  this.content = content || "";
  this.index = 0;
  this.start = 0;
  this.state = this.text;
  while (this.index !== -1 && this.index < this.content.length) {
    this.state();
  }
};

HTMLParserHandler.prototype.checkClose = function (callback) {
  var isSelfClosing = this.content[this.index] === "/";
  if (this.content[this.index] === ">" || isSelfClosing && this.content[this.index + 1] === ">") {
    if (callback) {
      this.handler[callback](this.content.substring(this.start, this.index));
    }
    this.index += isSelfClosing ? 2 : 1;
    this.start = this.index;
    this.handler.onOpenTag(isSelfClosing);
    if (this.handler.tagName === "script") {
      this.index = this.content.indexOf("</", this.index);
      if (this.index !== -1) {
        this.index += 2;
        this.start = this.index;
      }
      this.state = this.endTag;
    } else {
      this.state = this.text;
    }
    return true;
  }
  return false;
};

HTMLParserHandler.prototype.text = function () {
  this.index = this.content.indexOf("<", this.index);
  if (this.index !== -1) {
    var charAfterLt = this.content[this.index + 1];
    if ((charAfterLt >= "a" && charAfterLt <= "z") || (charAfterLt >= "A" && charAfterLt <= "Z")) {
      if (this.start !== this.index) {
        this.handler.onText(this.content.substring(this.start, this.index));
      }
      this.start = ++this.index;
      this.state = this.tagName;
    } else if (charAfterLt === "/" || charAfterLt === "!" || charAfterLt === "?") {
      if (this.start !== this.index) {
        this.handler.onText(this.content.substring(this.start, this.index));
      }
      var closeSequence = charAfterLt === "!" && this.content.substr(this.index + 2, 2) === "--" ? "-->" : ">";
      this.index = this.content.indexOf(closeSequence, this.index);
      if (this.index !== -1) {
        this.index += closeSequence.length;
        this.start = this.index;
      }
    } else {
      this.index++;
    }
  } else if (this.start < this.content.length) {
    this.handler.onText(this.content.substring(this.start, this.content.length));
  }
};

HTMLParserHandler.prototype.tagName = function () {
  if (l[this.content[this.index]]) {
    this.handler.onTagName(this.content.substring(this.start, this.index));
    while (l[this.content[++this.index]]);
    if (this.index < this.content.length && !this.checkClose("onTagName")) {
      this.start = this.index;
      this.state = this.attrName;
    }
  } else if (!this.checkClose("onTagName")) {
    this.index++;
  }
};

HTMLParserHandler.prototype.attrName = function () {
  var char = this.content[this.index];
  if (l[char] || char === "=") {
    this.handler.onAttrName(this.content.substring(this.start, this.index));
    var isEqualSign = char === "=";
    while (++this.index < this.content.length) {
      char = this.content[this.index];
      if (!l[char]) {
        if (this.checkClose()) return;
        if (isEqualSign) {
          this.start = this.index;
          this.state = this.attrVal;
        } else if (this.content[this.index] !== "=") {
          this.start = this.index;
          this.state = this.attrName;
        }
        isEqualSign = true;
      }
    }
  } else if (!this.checkClose("onAttrName")) {
    this.index++;
  }
};

HTMLParserHandler.prototype.attrVal = function () {
  var char = this.content[this.index];
  var length = this.content.length;
  if (char === '"' || char === "'") {
    this.start = ++this.index;
    this.index = this.content.indexOf(char, this.index);
    if (this.index === -1) return;
    this.handler.onAttrVal(this.content.substring(this.start, this.index));
  } else {
    while (this.index < length) {
      if (l[this.content[this.index]]) {
        this.handler.onAttrVal(this.content.substring(this.start, this.index));
        break;
      }
      if (this.checkClose("onAttrVal")) return;
      this.index++;
    }
  }
  while (l[this.content[++this.index]]);
  if (this.index < length && !this.checkClose()) {
    this.start = this.index;
    this.state = this.attrName;
  }
};

HTMLParserHandler.prototype.endTag = function () {
  var char = this.content[this.index];
  if (l[char] || char === ">" || char === "/") {
    this.handler.onCloseTag(this.content.substring(this.start, this.index));
    if (char !== ">") {
      this.index = this.content.indexOf(">", this.index);
      if (this.index === -1) return;
    }
    this.start = ++this.index;
    this.state = this.text;
  } else {
    this.index++;
  }
};

module.exports = HTMLParser;
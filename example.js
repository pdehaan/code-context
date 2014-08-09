[{
    type: 'comment',
    begin: 1,
    end: 6
  },
  {
    begin: 10,
    type: 'declaration',
    name: 'util',
    value: 'require(\'util\')',
    string: 'util',
    original: 'var util = require(\'util\');'
  },
  {
    begin: 11,
    type: 'declaration',
    name: 'frep',
    value: 'require(\'frep\')',
    string: 'frep',
    original: 'var frep = require(\'frep\');'
  },
  {
    begin: 12,
    type: 'declaration',
    name: '_',
    value: 'require(\'lodash\')',
    string: '_',
    original: 'var _ = require(\'lodash\');'
  },
  {
    begin: 13,
    type: 'declaration',
    name: 'utils',
    value: 'require(\'./lib/utils.js\')',
    string: 'utils',
    original: 'var utils = require(\'./lib/utils.js\');'
  },
  {
    type: 'comment',
    begin: 17,
    end: 25
  },
  {
    begin: 27,
    type: 'function',
    name: 'Strings',
    string: 'Strings()',
    original: 'function Strings(context) {'
  },
  {
    begin: 32,
    type: 'property',
    receiver: 'this',
    name: '_context',
    value: 'context || {}',
    string: 'this._context',
    original: 'this._context = context || {};'
  },
  {
    begin: 33,
    type: 'property',
    receiver: 'this',
    name: '_replacements',
    value: '{}',
    string: 'this._replacements',
    original: 'this._replacements = {};'
  },
  {
    begin: 34,
    type: 'property',
    receiver: 'this',
    name: '_propstrings',
    value: '{}',
    string: 'this._propstrings',
    original: 'this._propstrings = {};'
  },
  {
    begin: 35,
    type: 'property',
    receiver: 'this',
    name: '_templates',
    value: '{}',
    string: 'this._templates',
    original: 'this._templates = {};'
  },
  {
    begin: 36,
    type: 'property',
    receiver: 'this',
    name: '_patterns',
    value: '{}',
    string: 'this._patterns',
    original: 'this._patterns = {};'
  },
  {
    begin: 37,
    type: 'property',
    receiver: 'this',
    name: '_parsers',
    value: '{}',
    string: 'this._parsers',
    original: 'this._parsers = {};'
  },
  {
    begin: 38,
    type: 'property',
    receiver: 'this',
    name: '_groups',
    value: '{}',
    string: 'this._groups',
    original: 'this._groups = {};'
  },
  {
    type: 'comment',
    begin: 42,
    end: 57
  },
  {
    begin: 59,
    type: 'method',
    constructor: 'Strings',
    name: 'propstring',
    string: 'Strings.prototype.propstring()',
    original: 'Strings.prototype.propstring = function (name, str) {'
  },
  {
    type: 'comment',
    begin: 68,
    end: 83
  },
  {
    begin: 85,
    type: 'method',
    constructor: 'Strings',
    name: 'pattern',
    string: 'Strings.prototype.pattern()',
    original: 'Strings.prototype.pattern = function (name, pattern, flags) {'
  },
  {
    type: 'comment',
    begin: 97,
    end: 114
  },
  {
    begin: 116,
    type: 'method',
    constructor: 'Strings',
    name: 'replacement',
    string: 'Strings.prototype.replacement()',
    original: 'Strings.prototype.replacement = function (name, replacement) {'
  },
  {
    type: 'comment',
    begin: 125,
    end: 165
  },
  {
    begin: 167,
    type: 'method',
    constructor: 'Strings',
    name: 'parser',
    string: 'Strings.prototype.parser()',
    original: 'Strings.prototype.parser = function (name, arr) {'
  },
  {
    type: 'comment',
    begin: 176,
    end: 198
  },
  {
    begin: 200,
    type: 'method',
    constructor: 'Strings',
    name: 'extend',
    string: 'Strings.prototype.extend()',
    original: 'Strings.prototype.extend = function (name, arr) {'
  },
  {
    begin: 202,
    type: 'declaration',
    name: 'parser',
    value: '_.union(this._parsers[name], arr)',
    string: 'parser',
    original: 'var parser = _.union(this._parsers[name], arr);'
  },
  {
    type: 'comment',
    begin: 208,
    end: 227
  },
  {
    begin: 229,
    type: 'method',
    constructor: 'Strings',
    name: 'parsers',
    string: 'Strings.prototype.parsers()',
    original: 'Strings.prototype.parsers = function (parsers) {'
  },
  {
    begin: 238,
    type: 'declaration',
    name: '_parsers',
    value: '_.map(parsers, function (parser) {',
    string: '_parsers',
    original: 'var _parsers = _.map(parsers, function (parser) {'
  },
  {
    type: 'comment',
    begin: 255,
    end: 276
  },
  {
    begin: 278,
    type: 'method',
    constructor: 'Strings',
    name: 'template',
    string: 'Strings.prototype.template()',
    original: 'Strings.prototype.template = function (name, propstring, parsers) {'
  },
  {
    type: 'comment',
    begin: 299,
    end: 333
  },
  {
    begin: 335,
    type: 'method',
    constructor: 'Strings',
    name: 'transform',
    string: 'Strings.prototype.transform()',
    original: 'Strings.prototype.transform = function (propstring, parsers, context) {'
  },
  {
    type: 'comment',
    begin: 346,
    end: 380
  },
  {
    begin: 382,
    type: 'method',
    constructor: 'Strings',
    name: 'use',
    string: 'Strings.prototype.use()',
    original: 'Strings.prototype.use = function (template, context) {'
  },
  {
    begin: 383,
    type: 'declaration',
    name: 'tmpl',
    value: 'this.template(template)',
    string: 'tmpl',
    original: 'var tmpl = this.template(template);'
  },
  {
    type: 'comment',
    begin: 388,
    end: 410
  },
  {
    begin: 412,
    type: 'method',
    constructor: 'Strings',
    name: 'process',
    string: 'Strings.prototype.process()',
    original: 'Strings.prototype.process = function (str, arr, context) {'
  },
  {
    begin: 413,
    type: 'declaration',
    name: 'parsers',
    value: 'this.parsers(arr)',
    string: 'parsers',
    original: 'var parsers = this.parsers(arr);'
  },
  {
    begin: 414,
    type: 'declaration',
    name: 'ctx',
    value: '_.extend({}, this._context, context)',
    string: 'ctx',
    original: 'var ctx = _.extend({}, this._context, context);'
  },
  {
    type: 'comment',
    begin: 419,
    end: 442
  },
  {
    begin: 444,
    type: 'method',
    constructor: 'Strings',
    name: 'group',
    string: 'Strings.prototype.group()',
    original: 'Strings.prototype.group = function (groupName, propstring, parsers) {'
  },
  {
    type: 'comment',
    begin: 456,
    end: 477
  },
  {
    begin: 479,
    type: 'method',
    constructor: 'Strings',
    name: 'run',
    string: 'Strings.prototype.run()',
    original: 'Strings.prototype.run = function (group, context) {'
  },
  {
    begin: 480,
    type: 'declaration',
    name: 'namedGroup',
    value: 'this.group(group)',
    string: 'namedGroup',
    original: 'var namedGroup = this.group(group);'
  },
  {
    begin: 485,
    type: 'property',
    receiver: 'module',
    name: 'exports',
    value: 'Strings',
    string: 'module.exports',
    original: 'module.exports = Strings;'
  }]
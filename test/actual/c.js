[ { begin: 10,
    type: 'declaration',
    name: '_',
    value: 'require(\'lodash\')',
    string: '_',
    original: 'var _ = require(\'lodash\');' },
  { begin: 11,
    type: 'declaration',
    name: 'util',
    value: 'require(\'util\')',
    string: 'util',
    original: 'var util = require(\'util\');' },
  { begin: 12,
    type: 'declaration',
    name: 'namespaceData',
    value: 'require(\'namespace-data\')',
    string: 'namespaceData',
    original: 'var namespaceData = require(\'namespace-data\');' },
  { begin: 13,
    type: 'declaration',
    name: 'getobject',
    value: 'require(\'getobject\')',
    string: 'getobject',
    original: 'var getobject = require(\'getobject\');' },
  { begin: 14,
    type: 'declaration',
    name: 'expander',
    value: 'require(\'expander\')',
    string: 'expander',
    original: 'var expander = require(\'expander\');' },
  { begin: 15,
    type: 'declaration',
    name: 'plasma',
    value: 'require(\'plasma\')',
    string: 'plasma',
    original: 'var plasma = require(\'plasma\');' },
  { begin: 16,
    type: 'declaration',
    name: 'expand',
    value: 'expander.process',
    string: 'expand',
    original: 'var expand = expander.process;' },
  { begin: 17,
    type: 'declaration',
    name: 'Events',
    value: 'require(\'./events\')',
    string: 'Events',
    original: 'var Events = require(\'./events\');' },
  { begin: 20,
    comment: '\nInitialize a new `Cache`\n\n```js\nvar config = new Cache();\n```\n\n@class Cache\n@param {Object} `obj` Optionally pass an object to initialize `this.cache`.\n@constructor\n@api public\n',
    end: 31,
    type: 'comment' },
  { begin: 33,
    type: 'declaration',
    name: 'Cache',
    value: 'module.exports = function(obj) {',
    string: 'Cache',
    original: 'var Cache = module.exports = function(obj) {' },
  { begin: 35,
    type: 'property',
    receiver: 'this',
    name: 'cache',
    value: 'obj || {}',
    string: 'this.cache',
    original: 'this.cache = obj || {};' },
  { begin: 42,
    comment: '\n## .keys\n\nReturn the keys on `this.cache`.\n\n```js\nconfig.keys();\n```\n\n@method keys\n@return {Boolean}\n@api public\n',
    end: 54,
    type: 'comment' },
  { begin: 56,
    type: 'prototype method',
    class: 'Cache',
    name: 'keys',
    args: [],
    string: '.prototype.()',
    original: 'Cache.prototype.keys = function() {' },
  { begin: 61,
    comment: '\n## .hasOwn\n\nReturn true if `key` is an own, enumerable property\nof `this.cache` or the given `obj`.\n\n```js\nconfig.hasOwn([key]);\n```\n\n@method hasOwn\n@param  {String} `key`\n@param  {Object} `obj` Optionally pass an object to check.\n@return {Boolean}\n@api public\n',
    end: 76,
    type: 'comment' },
  { begin: 78,
    type: 'prototype method',
    class: 'Cache',
    name: 'hasOwn',
    args: [ 'key', 'obj' ],
    string: '.prototype.()',
    original: 'Cache.prototype.hasOwn = function(key, obj) {' },
  { begin: 83,
    comment: '\n## .clone\n\nClone the given `obj` or `cache`.\n\n```js\nconfig.clone();\n```\n\n@method clone\n@param  {Object} `obj` Optionally pass an object to clone.\n@return {Boolean}\n@api public\n',
    end: 96,
    type: 'comment' },
  { begin: 98,
    type: 'prototype method',
    class: 'Cache',
    name: 'clone',
    args: [ 'obj' ],
    string: '.prototype.()',
    original: 'Cache.prototype.clone = function(obj) {' },
  { begin: 103,
    comment: '\n## .each\n\nCall `fn` on each property in `this.cache`.\n\n```js\nconfig.each(fn, obj);\n```\n\n@method each\n@param  {Function} `fn`\n@param  {Object} `obj` Optionally pass an object to iterate over.\n@return {Object} Resulting object.\n@api public\n',
    end: 117,
    type: 'comment' },
  { begin: 119,
    type: 'prototype method',
    class: 'Cache',
    name: 'each',
    args: [ 'fn', 'obj' ],
    string: '.prototype.()',
    original: 'Cache.prototype.each = function(fn, obj) {' },
  { begin: 130,
    comment: '\n## .visit\n\nTraverse each _own property_ of `this.cache` or the given object,\nrecursively calling `fn` on child objects.\n\n```js\nconfig.visit(obj, fn);\n```\n\n@method visit\n@param {Object|Function} `obj` Optionally pass an object.\n@param {Function} `fn`\n@return {Object} Return the resulting object.\n@api public\n',
    end: 145,
    type: 'comment' },
  { begin: 147,
    type: 'prototype method',
    class: 'Cache',
    name: 'visit',
    args: [ 'obj', 'fn' ],
    string: '.prototype.()',
    original: 'Cache.prototype.visit = function(obj, fn) {' },
  { begin: 168,
    comment: '\n## .set\n\nAssign `value` to `key` or return the value of `key`.\n\n```js\nconfig.set(key, value);\n```\n\nIf `expand` is defined as true, the value will be set using [expander].\n\n**Examples:**\n\n```js\n// as a key-value pair\nconfig.set(\'a\', {b: \'c\'});\n\n// or as an object\nconfig.set({a: {b: \'c\'}});\n\n// chaining is possible\nconfig\n  .set({a: {b: \'c\'}})\n  .set(\'d\', \'e\');\n```\n\nExpand template strings with expander:\n\n```js\nconfig.set(\'a\', {b: \'${c}\', c: \'d\'}, true);\n```\n\nVisit the [expander] docs for more info.\n\n\n[expander]: https://github.com/tkellen/expander\n[getobject]: https://github.com/cowboy/node-getobject\n\n@method set\n@param {String} `key`\n@param {*} `value`\n@param {Boolean} `expand` Resolve template strings with [expander]\n@return {Cache} for chaining\n@api public\n',
    end: 212,
    type: 'comment' },
  { begin: 214,
    type: 'prototype method',
    class: 'Cache',
    name: 'set',
    args: [ 'key', 'value', 'expand' ],
    string: '.prototype.()',
    original: 'Cache.prototype.set = function(key, value, expand) {' },
  { begin: 233,
    comment: '\n## .get\n\nReturn the stored value of `key`. If the value\ndoes **not** exist on the cache, you may pass\n`true` as a second parameter to tell [getobject]\nto initialize the value as an empty object.\n\n```js\nconfig.set(\'foo\', \'bar\');\nconfig.get(\'foo\');\n// => "bar"\n```\n\n@method get\n@param {*} `key`\n@param {Boolean} `create`\n@return {*}\n@api public\n',
    end: 252,
    type: 'comment' },
  { begin: 254,
    type: 'prototype method',
    class: 'Cache',
    name: 'get',
    args: [ 'key', 'create' ],
    string: '.prototype.()',
    original: 'Cache.prototype.get = function(key, create) {' },
  { begin: 262,
    comment: '\n## .constant\n\nSet a constant on the cache.\n\n**Example**\n\n```js\nconfig.constant(\'site.title\', \'Foo\');\n```\n\n@method `constant`\n@param {String} `key`\n@param {*} `value`\n@chainable\n@api public\n',
    end: 278,
    type: 'comment' },
  { begin: 280,
    type: 'prototype method',
    class: 'Cache',
    name: 'constant',
    args: [ 'key', 'value', 'namespace' ],
    string: '.prototype.()',
    original: 'Cache.prototype.constant = function(key, value, namespace) {' },
  { begin: 300,
    comment: '\n## .methods (key)\n\nReturn methods on `this.cache` or the given `obj`.\n\n```js\nconfig.methods(\'foo\')\n//=> [\'set\', \'get\', \'enable\', ...]\n```\n\n@method methods\n@param {Object} `obj`\n@return {Array}\n@api public\n',
    end: 314,
    type: 'comment' },
  { begin: 316,
    type: 'prototype method',
    class: 'Cache',
    name: 'methods',
    args: [ 'obj' ],
    string: '.prototype.()',
    original: 'Cache.prototype.methods = function(obj) {' },
  { begin: 322,
    comment: '\n## .enabled (key)\n\nCheck if `key` is enabled (truthy).\n\n```js\nconfig.enabled(\'foo\')\n// => false\n\nconfig.enable(\'foo\')\nconfig.enabled(\'foo\')\n// => true\n```\n\n@method enabled\n@param {String} `key`\n@return {Boolean}\n@api public\n',
    end: 340,
    type: 'comment' },
  { begin: 342,
    type: 'prototype method',
    class: 'Cache',
    name: 'enabled',
    args: [ 'key' ],
    string: '.prototype.()',
    original: 'Cache.prototype.enabled = function(key) {' },
  { begin: 347,
    comment: '\n## .disabled (key)\n\nCheck if `key` is disabled.\n\n```js\nconfig.disabled(\'foo\')\n// => true\n\nconfig.enable(\'foo\')\nconfig.disabled(\'foo\')\n// => false\n```\n\n@method disabled\n@param {String} `key`\n@return {Boolean}\n@api public\n',
    end: 365,
    type: 'comment' },
  { begin: 367,
    type: 'prototype method',
    class: 'Cache',
    name: 'disabled',
    args: [ 'key' ],
    string: '.prototype.()',
    original: 'Cache.prototype.disabled = function(key) {' },
  { begin: 372,
    comment: '\n## .enable (key)\n\nEnable `key`.\n\n**Example**\n\n```js\nconfig.enable(\'foo\');\n```\n\n@method enable\n@param {String} `key`\n@return {Cache} for chaining\n@api public\n',
    end: 387,
    type: 'comment' },
  { begin: 389,
    type: 'prototype method',
    class: 'Cache',
    name: 'enable',
    args: [ 'key' ],
    string: '.prototype.()',
    original: 'Cache.prototype.enable = function(key) {' },
  { begin: 395,
    comment: '\n## .disable (key)\n\nDisable `key`.\n\n**Example**\n\n```js\nconfig.disable(\'foo\');\n```\n\n@method disable\n@param {String} `key`\n@return {Cache} for chaining\n@api public\n',
    end: 410,
    type: 'comment' },
  { begin: 412,
    type: 'prototype method',
    class: 'Cache',
    name: 'disable',
    args: [ 'key' ],
    string: '.prototype.()',
    original: 'Cache.prototype.disable = function(key) {' },
  { begin: 418,
    comment: '\n## .exists\n\nReturn `true` if the element exists. Dot notation\nmay be used for nested properties.\n\n**Example**\n\n```js\nconfig.exists(\'author.name\');\n//=> true\n```\n\n@method  exists\n@param   {String}  `key`\n@return  {Boolean}\n@api public\n',
    end: 435,
    type: 'comment' },
  { begin: 437,
    type: 'prototype method',
    class: 'Cache',
    name: 'exists',
    args: [ 'key' ],
    string: '.prototype.()',
    original: 'Cache.prototype.exists = function(key) {' },
  { begin: 442,
    comment: '\n## .union\n\nAdd values to an array on the `cache`. This method\nis chainable.\n\n**Example**\n\n```js\n// config.cache[\'foo\'] => [\'a.hbs\', \'b.hbs\']\nconfig\n  .union(\'foo\', [\'b.hbs\', \'c.hbs\'], [\'d.hbs\']);\n  .union(\'foo\', [\'e.hbs\', \'f.hbs\']);\n\n// config.cache[\'foo\'] => [\'a.hbs\', \'b.hbs\', \'c.hbs\', \'d.hbs\', \'e.hbs\', \'f.hbs\']\n```\n\n@chainable\n@method union\n@return {Cache} for chaining\n@api public\n',
    end: 463,
    type: 'comment' },
  { begin: 465,
    type: 'prototype method',
    class: 'Cache',
    name: 'union',
    args: [ 'key' ],
    string: '.prototype.()',
    original: 'Cache.prototype.union = function(key) {' },
  { begin: 478,
    comment: '\n## .extend\n\nExtend the `cache` with the given object.\nThis method is chainable.\n\n**Example**\n\n```js\nconfig\n  .extend({foo: \'bar\'}, {baz: \'quux\'});\n  .extend({fez: \'bang\'});\n```\n\nOr define the property to extend:\n\n```js\nconfig\n  // extend `cache.a`\n  .extend(\'a\', {foo: \'bar\'}, {baz: \'quux\'})\n  // extend `cache.b`\n  .extend(\'b\', {fez: \'bang\'})\n  // extend `cache.a.b.c`\n  .extend(\'a.b.c\', {fez: \'bang\'});\n```\n\n@chainable\n@method extend\n@return {Cache} for chaining\n@api public\n',
    end: 508,
    type: 'comment' },
  { begin: 510,
    type: 'prototype method',
    class: 'Cache',
    name: 'extend',
    args: [],
    string: '.prototype.()',
    original: 'Cache.prototype.extend = function() {' },
  { begin: 525,
    comment: '\n## .merge\n\nExtend the cache with the given object.\nThis method is chainable.\n\n**Example**\n\n```js\nconfig\n  .merge({foo: \'bar\'}, {baz: \'quux\'});\n  .merge({fez: \'bang\'});\n```\n\n@chainable\n@method merge\n@return {Cache} for chaining\n@api public\n',
    end: 543,
    type: 'comment' },
  { begin: 545,
    type: 'prototype method',
    class: 'Cache',
    name: 'merge',
    args: [],
    string: '.prototype.()',
    original: 'Cache.prototype.merge = function() {' },
  { begin: 560,
    comment: '\n# Data\n\n> Methods for reading data files, processing template strings and\nextending the `cache.data` object.\n\n## .process\n\nUse [expander] to recursively expand template strings into\ntheir resolved values.\n\n**Example**\n\n```js\nconfig.process({a: \'<%= b %>\', b: \'c\'});\n//=> {a: \'c\', b: \'c\'}\n```\n\n@method process\n@param {*} `lookup` Any value to process, usually strings with a\n                    cache template, like `<%= foo %>` or `${foo}`.\n@param {*} `opts` Options to pass to Lo-Dash `_.template`.\n@api public\n',
    end: 583,
    type: 'comment' },
  { begin: 585,
    type: 'prototype method',
    class: 'Cache',
    name: 'process',
    args: [ 'lookup', 'context' ],
    string: '.prototype.()',
    original: 'Cache.prototype.process = function(lookup, context) {' },
  { begin: 599,
    comment: '\n## .flattenData\n\nIf a `data` property is on the given `data` object\n(e.g. `data.data`, like when files named `data.json`\nor `data.yml` are used), the value of `data.data`\'s\nis flattened to the root `data` object.\n\n@method flattenData\n@param {Object} `data`\n@return {Object} Returns the flattened object.\n@api private\n',
    end: 611,
    type: 'comment' },
  { begin: 613,
    type: 'prototype method',
    class: 'Cache',
    name: 'flattenData',
    args: [ 'data', 'name' ],
    string: '.prototype.()',
    original: 'Cache.prototype.flattenData = function(data, name) {' },
  { begin: 623,
    comment: '\n## .extendData\n\nExtend the `cache.data` object with the given data. This\nmethod is chainable.\n\n**Example**\n\n```js\nconfig\n  .extendData({foo: \'bar\'}, {baz: \'quux\'});\n  .extendData({fez: \'bang\'});\n```\n\n@chainable\n@method extendData\n@return {Cache} for chaining\n@api public\n',
    end: 641,
    type: 'comment' },
  { begin: 643,
    type: 'prototype method',
    class: 'Cache',
    name: 'extendData',
    args: [],
    string: '.prototype.()',
    original: 'Cache.prototype.extendData = function() {' },
  { begin: 657,
    comment: '\n## .plasma\n\nExtend the `data` object with the value returned by [plasma].\n\n**Example:**\n\n```js\nconfig\n  .plasma({foo: \'bar\'}, {baz: \'quux\'});\n  .plasma({fez: \'bang\'});\n```\n\nSee the [plasma] documentation for all available options.\n\n@method plasma\n@param {Object|String|Array} `data` File path(s), glob pattern, or object of data.\n@param {Object} `options` Options to pass to plasma.\n@api public\n',
    end: 676,
    type: 'comment' },
  { begin: 678,
    type: 'prototype method',
    class: 'Cache',
    name: 'plasma',
    args: [],
    string: '.prototype.()',
    original: 'Cache.prototype.plasma = function() {' },
  { begin: 684,
    comment: '\n## .namespace\n\nExpects file path(s) or glob pattern(s) to any JSON or YAML files to\nbe merged onto the data object. Any data files read in by the\n`.namespace()` method will extend the `data` object with an object\nnamed after the basename of each file.\n\n**Example**\n\n```js\nconfig.namespace([\'alert.json\', \'nav*.json\']);\n```\nThe data from each file is namespaced using the name of the file:\n\n```js\n{\n  alert: {},\n  navbar: {}\n}\n```\n\nSee the [plasma] documentation for all available options.\n\n@method namespace\n@param {String|Array} `patterns` Filepaths or glob patterns.\n@return {null}\n@api public\n',
    end: 712,
    type: 'comment' },
  { begin: 714,
    type: 'prototype method',
    class: 'Cache',
    name: 'namespace',
    args: [ 'namespace', 'data', 'context' ],
    string: '.prototype.()',
    original: 'Cache.prototype.namespace = function(namespace, data, context) {' },
  { begin: 721,
    comment: '\n## .data\n\nExtend the `data` object with data from a JSON or YAML file,\nor by passing an object directly. Glob patterns may be used for\nfile paths.\n\n```js\nconfig\n  .data({a: \'b\'})\n  .data({c: \'d\'});\n\nconsole.log(config.cache);\n//=> {data: {a: \'b\', c: \'d\'}}\n```\n\n@method data\n@param {Object} `data`\n@param {Object} `options` Options to pass to [plasma].\n@return {Cache} for chaining\n@api public\n',
    end: 742,
    type: 'comment' },
  { begin: 744,
    type: 'prototype method',
    class: 'Cache',
    name: 'data',
    args: [],
    string: '.prototype.()',
    original: 'Cache.prototype.data = function() {' },
  { begin: 758,
    comment: '\n# Clearing the cache\n\n> Methods for clearing the cache, removing or reseting specific\nvalues on the cache.\n\n\n## .omit\n\nOmit properties and their from the `cache`.\n\n**Example:**\n\n```js\nconfig\n  .omit(\'foo\');\n  .omit(\'foo\', \'bar\');\n  .omit([\'foo\']);\n  .omit([\'foo\', \'bar\']);\n```\n\n@chainable\n@method omit\n@return {Cache} for chaining\n@api public\n',
    end: 783,
    type: 'comment' },
  { begin: 785,
    type: 'prototype method',
    class: 'Cache',
    name: 'omit',
    args: [],
    string: '.prototype.()',
    original: 'Cache.prototype.omit = function() {' },
  { begin: 787,
    type: 'property',
    receiver: 'this',
    name: 'cache',
    value: '_.omit.apply(_, [this.cache].concat(args))',
    string: 'this.cache',
    original: 'this.cache = _.omit.apply(_, [this.cache].concat(args));' },
  { begin: 793,
    comment: '\n## .clear\n\nRemove `key` from the cache, or if no value is\nspecified the entire config is reset.\n\n**Example:**\n\n```js\nconfig.clear();\n```\n\n@chainable\n@method clear\n@api public\n',
    end: 808,
    type: 'comment' },
  { begin: 810,
    type: 'prototype method',
    class: 'Cache',
    name: 'clear',
    args: [ 'key' ],
    string: '.prototype.()',
    original: 'Cache.prototype.clear = function(key) {' },
  { begin: 815,
    type: 'property',
    receiver: 'this',
    name: 'cache',
    value: '{}',
    string: 'this.cache',
    original: 'this.cache = {};' },
  { begin: 821,
    comment: '\n## .typeOf\n\nReturn a string indicating the type of the\ngiven value.\n\n@method `typeOf`\n@param {*} `value`\n@api private\n',
    end: 830,
    type: 'comment' },
  { begin: 832,
    type: 'function statement',
    name: 'typeOf',
    args: [ 'value' ],
    string: '()',
    original: 'function typeOf(value) {' } ]
const { readFileSync, writeFileSync} = require('fs');
const log = (...args) => console.log(`\x1B[38;2;165;165;161m[prebuild]\x1B[39m ${args}`);

const substitute = `
'use strict';

var GetIntrinsic = require('get-intrinsic');

var callBind = require('./');

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};
`;

log('Overwriting content of is-arguments/index.js to prevent conflict.');

writeFileSync(`${__dirname}/node_modules/is-arguments/bound.js`, Buffer.from(substitute));
const content = readFileSync(`${__dirname}/node_modules/is-arguments/index.js`, 'utf-8');
writeFileSync(
  `${__dirname}/node_modules/is-arguments/index.js`, 
  Buffer.from(
    content.replace(/var callBound = require\('call-bind\/callBound'\);$/gim,
      'var callBound = require(\'./bound.js\')')
  )
);

log('Overwrited and injected script to prevent conflict successfully.');

process.nextTick(() => process.exit());
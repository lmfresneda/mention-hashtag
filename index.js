'use strict';

module.exports = (text, options) => {

	if(options && typeof options === 'string'){
		options = { type: options };
	}

	options = options || {};
	options.type = options.type || '@';

	const regex = options.type === '@'
	? new RegExp(/(?:^|[^a-zA-Z0-9_＠!@#$%&*])(?:(?:@|＠)(?!\/))([a-zA-Z0-9/_]{1,15})(?:\b(?!@|＠)|$)/igm)
	: options.type === '#'
		? new RegExp(/(?:^|[^a-zA-Z0-9_]+)(?:(?:#)(?!\/))([a-zA-Z0-9/_]+)(?:\b(?!#)|$)/igm)
		: null;

	if(!regex) throw new Error(`Type ${options.type} is not valid`)

	const results = (text.match(regex) || []).map((result) => {
		result = result.replace(/ |\./g, '');
		if(options.symbol !== undefined && options.symbol === false)
			return result.replace(/^(@|#)/, '');

		return result;
	});

	return options.unique ? unique(results) : results;

}

function unique(arr){
	return arr.filter((val, i, _arr) => _arr.indexOf(val) === i);
}
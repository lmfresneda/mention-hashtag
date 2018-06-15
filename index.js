'use strict';

function _getRegexMention(){
	return new RegExp(/(?:^|[^a-zA-Z0-9_＠!@#$%&*])(?:(?:@|＠)(?!\/))([a-zA-Z0-9/_]{1,15})(?:\b(?!@|＠)|$)/igm);
}
function _getRegexHashtag(){
	return new RegExp(/(?:^|[^a-zA-Z0-9_])(?:(?:#)(?!\/))([a-zA-Z0-9/_]+)(?:\b(?!#)|$)/igm);
}
function _unique(arr){
	return arr.filter((val, i, _arr) => _arr.indexOf(val) === i);
}

function extract(text, options) {

	if(options && typeof options === 'string'){
		options = { type: options };
	}

	options = options || {};
	options.type = options.type || '@';

	const regex = options.type === '@' ? _getRegexMention() : options.type === '#'
			? _getRegexHashtag() : options.type.toLowerCase() === 'all' ? _getRegexMention() : null;

	if(!regex) throw new Error(`Type ${options.type} is not valid`);

	if(options.type.toLowerCase() === 'all'){

		const result = {
			mentions: extract(text, {
				type: '@',
				unique: options.unique,
				symbol: options.symbol
			}),
			hashtags: extract(text, {
				type: '#',
				unique: options.unique,
				symbol: options.symbol
			})
		};

		return result;

	}else{
		const results = (text.match(regex) || []).map((result) => {
			result = result.replace(/ |\./g, '');
			if(options.symbol !== undefined && options.symbol === false)
				return result.replace(/^(@|#)/, '');

			return result;
		});

		return options.unique ? _unique(results) : results;
	}
}

module.exports = extract;

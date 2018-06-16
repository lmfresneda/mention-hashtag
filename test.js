'use strict'

require('mocha');
const assert = require('assert');
const extract = require('./');
const utilTest = require('./util-test');

describe('Extract Mentions', () => {
	utilTest.mention.forEach((text) => {

		it(`'${text[0]}' text with ${text[1]} mention`, () => {
			const mentions = extract(text[0]);
			assert.equal(text[1], mentions.length, `'${text[0]}' text should have ${text[1]} mention`);
		});

	});

	it(`'text with @mention and @mention' text with 2 mention but unique is required`, () => {
		const mentions = extract('text with @mention and @mention', { unique: true });
		assert.equal(1, mentions.length, `'text with @mention and @mention' text and unique required should have 1 mention`);
	});

	it(`'text with 1 @mention' text with 1 mention but symbol is not required`, () => {
		const mentions = extract('text with 1 @mention', { symbol: false });
		assert.equal('mention', mentions[0], `'text with 1 @mention' text and symbol is not required should be without @`);
	});

});

describe('Extract Hashtags', () => {
	utilTest.hashtag.forEach((text) => {

		it(`'${text[0]}' text with ${text[1]} hashtag`, () => {
			const hashtags = extract(text[0], '#');
			assert.equal(text[1], hashtags.length, `'${text[0]}' text should have ${text[1]} hashtag`);
		});

	});

	it(`'text with #hashtag and #hashtag' text with 2 hashtag but unique is required`, () => {
		const hashtags = extract('text with #hashtag and #hashtag', { unique: true, type: '#' });
		assert.equal(1, hashtags.length, `'text with #hashtag and #hashtag' text and unique required should have 1 hashtag`);
	});

	it(`'text with 1 #hashtag' text with 1 hashtag but symbol is not required`, () => {
		const hashtags = extract('text with 1 #hashtag', { symbol: false, type: '#'  });
		assert.equal('hashtag', hashtags[0], `'text with 1 #hashtag' text and symbol is not required should be without #`);
	});

	it(`'text with hashtag! #hashtag' text with 1 hashtag including an exclamation mark before it`, () => {
		const hashtags = extract('text with hashtag! #hashtag', '#');
		assert.equal('#hashtag', hashtags[0], `'text with hashtag! #hashtag' should return proper hashtag`);
	});
});

describe('Extract Mix', () => {

	it(`'text with #hashtag and @mention' text with 1 hashtag and 1 mention`, () => {
		const result = extract('text with #hashtag and @mention', 'all');
		assert.equal(1, result.mentions.length, `'text with #hashtag and @mention' text should have 1 mention`);
		assert.equal(1, result.hashtags.length, `'text with #hashtag and @mention' text should have 1 hashtag`);
	});

	it(`'text with #hashtag and #hashtag and @mention' text with 1 hashtag and 1 mention but unique is required`, () => {
		const result = extract('text with #hashtag and @mention', {type: 'all', unique: true});
		assert.equal(1, result.mentions.length, `'text with #hashtag and #hashtag and @mention' text and unique required should have 1 mention`);
		assert.equal(1, result.hashtags.length, `'text with #hashtag and #hashtag and @mention' text and unique required should have 1 hashtag`);
	});

	it(`'text with #hashtag and @mention' text with 1 hashtag and 1 mention but symbol is not required`, () => {
		const result = extract('text with #hashtag and @mention', {type: 'all', symbol: false});
		assert.equal('mention', result.mentions[0], `'text with #hashtag and @mention' text and symbol is not required should be without @`);
		assert.equal('hashtag', result.hashtags[0], `'text with #hashtag and @mention' text and symbol is not required should be without #`);
	});

});

describe('Throw error', () => {
	it('Type error with & symbol', () => {
		assert.throws(
		  () => extract('Any text', '&'),
			/Type & is not valid/,
			'Did not throw with expected message'
		);
	});
});

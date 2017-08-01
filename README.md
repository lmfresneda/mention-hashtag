# mention-hashtag
[![npm](https://img.shields.io/npm/v/mention-hashtag.svg?style=flat-square)](https://www.npmjs.com/package/mention-hashtag) [![npm](https://img.shields.io/npm/dw/mention-hashtag.svg?style=flat-square)](https://www.npmjs.com/package/mention-hashtag) ![Love](https://img.shields.io/badge/love-max-brightgreen.svg?style=flat-square) [![Travis](https://img.shields.io/travis/lmfresneda/mention-hashtag.svg?style=flat-square)](https://travis-ci.org/lmfresneda/mention-hashtag)

Extract mentions (@mention) and/or hashtags (#hashtag) from any text

## How to use

```javascript
const extract = require('mention-hashtag')

const mentions = extract('Any text with @mention');
// mentions == ['@mention']

const hashtags = extract('Any text with #hashtag', '#');
// hashtags == ['#hashtag']

const all = extract('Any text with #hashtag and @mention and @othermention', 'all');
// all == { mentions: ['@mention', '@othermention'], hashtags: ['#hashtag'] }
```

NOTE: The extract of mentions is by default. For extract hashtags, the '#' symbol in second parameter is required.

## Options

### Exclude repeated tokens

```javascript
const mentions = extract('Any text with @mention and @mention and @othermention', { unique: true });
// mentions == ['@mention', '@othermention']

const hashtags = extract('Any text with #hashtag and #hashtag and #otherhashtag', { unique: true, type: '#' });
// hashtags == ['#hashtag', '#otherhashtag']

const all = extract('Any text with #hashtag and #hashtag and @mention and @mention', { unique: true, type: 'all' });
// all == { mentions: ['@mention'], hashtags: ['#hashtag'] }
```

NOTE: The symbol '#' is communicated in 'type' property of second parameter

### Remove '@' and '#' symbols

```javascript
const mentions = extract('Any text with @mention and @othermention', { symbol: false });
// mentions == ['mention', 'othermention']

const hashtags = extract('Any text with #hashtag and #otherhashtag', { symbol: false, type: '#' });
// hashtags == ['hashtag', 'otherhashtag']

const all = extract('Any text with #hashtag and @mention', { symbol: false, type: 'all' });
// all == { mentions: ['mention'], hashtags: ['hashtag'] }
```

## Mix

### Unique, symbol and type properties are mixables

```javascript
const mentions = extract('Any text with @mention and @mention and @othermention', { symbol: false, unique: true });
// mentions == ['mention', 'othermention']

const hashtags = extract('Any text with #hashtag and #hashtag and #otherhashtag', { symbol: false, unique: true, type: '#' });
// hashtags == ['hashtag', 'otherhashtag']

const all = extract('Any text with #hashtag and #hashtag and @mention and @mention', { symbol: false, unique: true, type: 'all' });
// all == { mentions: ['mention'], hashtags: ['hashtag'] }
```

## Run test

```
$ npm install && npm test
```

## License

MIT © [lmfresneda](https://github.com/lmfresneda)
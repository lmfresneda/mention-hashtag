# mention-hashtag
Extract menctions (@menction) or hashtags (#hashtag) from any text

## How to use

```
$ npm install --save mention-hashtag
// or
$ yarn add mention-hashtag
```

```javascript
import extract from 'mention-hashtag'
// or
const extract = require('mention-hashtag')
```

```javascript
const mentions = extract('Any text with @mention');
// mentions == ['@mention']

const hashtags = extract('Any text with #hashtag', '#');
// hashtags == ['#hashtag']
```

NOTE: The extract of mentions is by default. For extract hashtags, the '#' symbol in second parameter is required.

## Options

We can indicate that it only take **unique** tokens:

```javascript
const mentions = extract('Any text with @mention and @mention and @othermention', { unique: true });
// mentions == ['@mention', '@othermention']

const hashtags = extract('Any text with #hashtag and #hashtag and #otherhashtag', { unique: true, type: '#' });
// hashtags == ['#hashtag', '#otherhashtag']
```

NOTE: The symbol '#' is communicated in 'type' property of second parameter

We can indicate that the **symbol** is removed:

```javascript
const mentions = extract('Any text with @mention and @othermention', { symbol: false });
// mentions == ['mention', 'othermention']

const hashtags = extract('Any text with #hashtag and #otherhashtag', { symbol: false, type: '#' });
// hashtags == ['hashtag', 'otherhashtag']
```

Unique, symbol and type properties are mixables

## Run test

```
$ npm install && npm test
```

## License

MIT © [lmfresneda](https://github.com/lmfresneda)
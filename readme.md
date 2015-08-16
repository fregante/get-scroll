# get-scroll

> Micro module to get the scroll position (top or left) in the browser

## Install

Use the file `dist/get-scroll.min.js` or, if you use browserify, download it this way:

```
$ npm install --save get-scroll
```


## Usage

```js
// only if browserify: var getScroll = require('get-scroll');

var currentScrollTop = getScroll(); // or getScroll.top()
var currentScrollLeft = getScroll.left();
```

## Alternative usage in ES6

```js
import {getScrollLeft, getScrollTop} from 'get-scroll';

let currentScrollTop = getScrollTop()
let currentScrollLeft = getScrollLeft()
```

## API

### `getScroll()` _or `getScroll.top()`or `getScrollTop()`_

Returns the vertical scroll position of the document.

### `getScroll.left()` _or `getScrollLeft()`_

Returns the horizontal scroll position of the document.

## License

MIT © [Federico Brigante](http://twitter.com/bfred_it)

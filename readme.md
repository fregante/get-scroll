# get-scroll

> Micro module to get the scroll position (top or left) in the browser

## Install

```
$ npm install --save get-scroll
```

or use the content of the file `get-scroll.min.js` if you don't use `browserify`

## Usage

```js
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

### getScroll() or getScroll.top() or getScrollTop()

Returns the vertical scroll position of the document.

### getScroll.left() or getScrollLeft()

Returns the horizontal scroll position of the document.

## License

MIT © [Federico Brigante](http://twitter.com/bfred_it)

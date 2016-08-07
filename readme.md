# get-scroll [![module size](https://badge-size.herokuapp.com/bfred-it/get-scroll/master/dist/get-scroll.node.min.js) ![module gzipped size](https://badge-size.herokuapp.com/bfred-it/get-scroll/master/dist/get-scroll.node.min.js?compression=gzip)](https://github.com/bfred-it/get-scroll/blob/master/dist/get-scroll.node.min.js)

> Micro module to get the scroll position (top or left) in the browser

## Usage

### Directly in the browser

Copy the content of `dist/get-scroll.browser.js` into your JS file and then use it this way:

```js
var currentScrollTop = getScrollTop();
var currentScrollLeft = getScrollLeft();
```

### With browserify/webpack

```sh
npm install --save get-scroll
```

```js
var getScroll = require('get-scroll');

var currentScrollTop = getScroll.top(); // or just getScroll()
var currentScrollLeft = getScroll.left();
```

### In ES6

```js
import {getScrollLeft, getScrollTop} from 'get-scroll';

let currentScrollTop = getScrollTop()
let currentScrollLeft = getScrollLeft()
```

## Dependencies

No dependencies.

## License

MIT © [Federico Brigante](http://twitter.com/bfred_it)

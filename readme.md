# get-scroll

> Micro module to get the scroll position (top or left) in the browser

## Usage

```js
var currentScrollTop = getScroll.top();
var currentScrollLeft = getScroll.left();
```

## With browserify

```sh
npm install --save get-scroll
```

```js
var getScroll = require('get-scroll');
```

### Alternative usage in ES6

```js
import {getScrollLeft, getScrollTop} from 'get-scroll';

let currentScrollTop = getScrollTop()
let currentScrollLeft = getScrollLeft()
```

## API

### `getScroll.top()` _or `getScrollTop()`_

Returns the vertical scroll position of the document.

### `getScroll.left()` _or `getScrollLeft()`_

Returns the horizontal scroll position of the document.

## License

MIT © [Federico Brigante](http://twitter.com/bfred_it)

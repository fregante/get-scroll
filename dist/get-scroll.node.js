'use strict';
Object.defineProperty(exports, '__esModule', {
	value: true
});
function getScrollTop() {
	return window.pageYOffset || document.body.scrollTop;
}

function getScrollLeft() {
	return window.pageXOffset || document.body.scrollLeft;
}
exports['default'] = getScrollTop;
exports.getScrollLeft = getScrollLeft;
exports.getScrollTop = getScrollTop;
exports.left = getScrollLeft;
exports.top = getScrollTop;

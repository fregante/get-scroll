'use strict';
function getScrollTop () {
	return window.pageYOffset || document.body.scrollTop;
}

getScrollTop.getScrollTop = getScrollTop.top = module.exports = getScrollTop;
getScrollTop.getScrollLeft = getScrollTop.left = function () {
	return window.pageXOffset || document.body.scrollLeft;
}

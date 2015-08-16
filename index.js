'use strict';
function getScrollTop () {
	return window.pageYOffset || document.body.scrollTop;
}

function getScrollLeft () {
	return window.pageXOffset || document.body.scrollLeft;
}
export default getScrollTop;
export {getScrollLeft, getScrollTop, getScrollLeft as left, getScrollTop as top};

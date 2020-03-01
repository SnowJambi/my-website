function dw_getScrollOffsets() {
    var doc = document, w = window;
    var y, docEl;    
    if ( typeof w.pageYOffset === 'number' ) {
        y = w.pageYOffset;
    } else {
        docEl = (doc.compatMode && doc.compatMode === 'CSS1Compat')?
                doc.documentElement: doc.body;
        y = docEl.scrollTop;
    }
    return y;
}

function doDemoDisplay() {
    var y =  dw_getScrollOffsets();
    var nav = document.querySelector("nav");
    if (y > 300) {
        nav.classList.add("nav-in");
        nav.classList.remove("nav-out");
    }
    if (y <= 300) {
        nav.classList.add("nav-out");
        nav.classList.remove("nav-in");
    }
}

document.addEventListener('DOMContentLoaded', (event) => {doDemoDisplay});

document.addEventListener('scroll', function() {
    doDemoDisplay();
});
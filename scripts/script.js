setInterval(() => {
    var frame = document.querySelector('iframe')
frame.style.height = (0.57 * Number(frame.getClientRects()[0].width)) + 'px';
}, 500);














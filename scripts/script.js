var slide1 = document.querySelector('.slide-s')
var slide2 = document.querySelector('.slide-s2')


setInterval(() => {
    var frame = document.querySelector('iframe')
    frame.style.height = (0.57 * Number(frame.getClientRects()[0].width)) + 'px';


    if (window.innerWidth <= 1000) {
        slide2.style.display = 'none'   
        slide1.style.display = 'block'   
    }else {
        slide2.style.display = 'block'   
        slide1.style.display = 'none'   
    }
}, 500);














/* Main Slide */
var mainSlideIndex = 0;

var playMainSlideAuto;
const MainShowSlidesPlay = _ => mainSlideIndexPlus(1);
var startMainSlide;
var stopMainSlide;

const all = ele => document.querySelectorAll(ele);
const one = ele => document.querySelector(ele);

const mainSlideIndexPlus = n  => {
    mainSlideIndex += n;
    mainShowSlides();
}

const setMainSlideIndex = n => {
    mainSlideIndex = n;
    mainShowSlides();
}

const slide = _ => {
    const target = one('.main-slides');
    const len = all('.main-slide').length;

    target.style.cssText = `width:calc(100% * ${len});`;

    Array.from(target.children)
    .forEach(ele => ele.style.width = `calc(100% / ${len});`);

    mainShowSlides();
}

function mainShowSlides() {
    const slides = all('.main-slide');
    const dots = all('.main-dot');
    const target = one('.main-slides');

    if (mainSlideIndex < 0) mainSlideIndex = slides.length -1;
    mainSlideIndex = mainSlideIndex % slides.length;

    target.style.marginLeft = `${-mainSlideIndex * 100}%`;
    
    Array.from(dots)
    .forEach(ele => ele.classList.remove('main-active'));

    dots[mainSlideIndex].classList.add('main-active');
}

window.onload = function() {
    startMainSlide = _ => playMainSlideAuto = setInterval(MainShowSlidesPlay, 5000);
    stopMainSlide = _ => clearInterval(playMainSlideAuto);

    one('.main-slide-wrap').addEventListener('mouseover', function(){
        stopMainSlide();
    });
    one('.main-slide-wrap').addEventListener('mouseout', function(){
        startMainSlide();
    });

    slide();
}
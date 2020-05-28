import 'bootstrap';
import './scss/app.scss';
import './js/ui';
import './js/gifss';
import './js/trail';
import './js/rgb-shift';
// import './js/favicons';


// import selfie2 from './assets/img/laskaa.jpg';
// let selfieImg2 = document.querySelector('.selfie2');
// selfieImg2.src = selfie2;

// import selfie3 from './assets/img/antyegzekucjaa.jpg';
// let selfieImg3 = document.querySelector('.selfie3');
// selfieImg3.src = selfie3;
//
// import selfie4 from './assets/img/alterlocusIa.jpg';
// let selfieImg4 = document.querySelector('.selfie4');
// selfieImg4.src = selfie4;

//PHOTOS
import fot1 from './assets/img/elo/a.jpg';
let fotImg1 = document.querySelector('.fot1');
fotImg1.src = fot1;

import fot2 from './assets/img/elo/b.jpg';
let fotImg2 = document.querySelector('.fot2');
fotImg2.src = fot2;

import fot3 from './assets/img/elo/c.jpg';
let fotImg3 = document.querySelector('.fot3');
fotImg3.src = fot3;

import fot4 from './assets/img/elo/d.jpg';
let fotImg4 = document.querySelector('.fot4');
fotImg4.src = fot4;

import fot5 from './assets/img/elo/e.jpg';
let fotImg5 = document.querySelector('.fot5');
fotImg5.src = fot5;

//
// import svg from './assets/img/elo.svg';
// let svgImg = document.querySelector('.peace-svg');
// svgImg.src = svg;

//Gifs

import gif1 from './assets/gifs/1.gif';
let gif1Gif = document.querySelector('.gif1');
gif1Gif.setAttribute('data-image', gif1)

import gif2 from './assets/gifs/2.gif';
let gif2Gif = document.querySelector('.gif2');
gif2Gif.setAttribute('data-image', gif2)


import gif3 from './assets/gifs/3.gif';
let gif3Gif = document.querySelector('.gif3');
gif3Gif.setAttribute('data-image', gif3)


import gif4 from './assets/gifs/4.gif';
let gif4Gif = document.querySelector('.gif4');
gif4Gif.setAttribute('data-image', gif4)


import gif6 from './assets/gifs/6.gif';
let gif6Gif = document.querySelector('.gif6');
gif6Gif.setAttribute('src', gif6)


document.documentElement.className = "js";
var supportsCssVars = function () {
    var e, t = document.createElement("style");
    return t.innerHTML = "root: { --tmp-var: bold; }", document.head.appendChild(t), e = !!(window.CSS && window.CSS.supports && window.CSS.supports("font-weight", "var(--tmp-var)")), t.parentNode.removeChild(t), e
};
supportsCssVars() || alert("Please view this demo in a modern browser that supports CSS Variables.");



console.clear()
console.log('%c elo elo 3 2 0', 'text-align:center; color: #feff; font-weight: bold; padding:45px;font-size:48px; display:block; background-color: #070707; ');

const ZUG_VORNE = document.getElementById("zugVorne");
const ZUG_HINTEN = document.getElementById("zugHinten");
const DIALLO = document.getElementById("diallo");

window.addEventListener('scroll',function(){
    
    let value = window.scrollY;
    ZUG_VORNE.style.left = 10 + -value * 0.01 + '%';
//    ZUG_VORNE.style.top = 195 + value * 0.018 + 'px';
//    DIALLO.style.width = 300 + value * 0.3 + 'px';
//    DIALLO.style.left = 600 + -value * 0.3 + 'px';
    
    console.log(value)
});

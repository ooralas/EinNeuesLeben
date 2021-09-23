const ZUG_VORNE = document.getElementById("zugVorne");
const ZUG_HINTEN = document.getElementById("zugHinten");
const DIALLO = document.getElementById("diallo");

window.addEventListener('scroll',function(){
    
    let value = window.scrollY;

    if(value<800){
    ZUG_VORNE.style.left = 15  - value * 0.05  + '%';
    //ZUG_VORNE.style.top = 25 + value * 0.00297 + '%';
    ZUG_VORNE.style.width = 70 + value * 0.037 + '%';

    ZUG_HINTEN.style.left = 5  + value * 0.05  + '%';
    //ZUG_VORNE.style.top = 25 + value * 0.00297 + '%';
    //ZUG_HINTEN.style.width = 70 + value * 0.037 + '%';

    //DIALLO.style.left = 600 + -value * 0.3 + 'px';
    }
    console.log(value)
});

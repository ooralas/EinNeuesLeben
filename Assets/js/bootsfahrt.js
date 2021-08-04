const BOOT = document.getElementById("bootIMG");
const BACKGROUND = document.getElementById("backgroundIMG");


   


window.addEventListener('scroll',function(){
    
    var value = window.scrollY;
    BOOT.style.left = value * 0.3  + 'px';
    BACKGROUND.style.left = -value * 0.17 + 'px';
    
});
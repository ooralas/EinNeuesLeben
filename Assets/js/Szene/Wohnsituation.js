const FARBE = document.getElementById("farbe");
const DIALLO = document.getElementById("dialloMalt");

window.addEventListener('scroll',function(){
    
    let value = window.scrollY;

    //DIALLO.style.height = 20 + value * 0.3 + '%';
    //DIALLO.style.transform = "scale(2,2)"
    DIALLO.style.width = 60 + value * 0.011 + '%';
    DIALLO.style.left = 20 + -value * 0.011 + '%';
    
    
    console.log(value)
});
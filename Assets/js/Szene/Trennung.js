const ELTERN = document.getElementById("eltern");
const DIALLO = document.getElementById("diallo");

window.addEventListener('scroll',function(){
    
    let value = window.scrollY;

    //DIALLO.style.height = 20 + value * 0.3 + '%';
    //DIALLO.style.transform = "scale(2,2)"
    DIALLO.style.width = 60 + value * 0.011 + '%';
    DIALLO.style.left = 20 + -value * 0.011 + '%';
    
    
    console.log(value)
});
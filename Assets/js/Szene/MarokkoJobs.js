const FARBE = document.getElementById("farbe");
const DIALLO = document.getElementById("diallo");

$(document).ready(function(){
    $("#nextBtTrigger").click(function(){
        $("img").animate({
            right: 20 + "px",
            opacity: 1,
            
        },900);
    });
});

window.addEventListener('scroll',function(){
    
    let value = window.scrollY;

    DIALLO.style.left = 20 + value * 0.01 + '%';
    FARBE.style.left = -1 + value * 0.01 + '%';
    
    
    console.log(value);

    if(value > 1700){
        $("#nextBtTrigger").trigger("click");
        console.log("Hier wird gefeuert");
    }
});
const ELTERN = document.getElementById("eltern");
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

    //DIALLO.style.height = 20 + value * 0.3 + '%';
    //DIALLO.style.transform = "scale(2,2)"
    DIALLO.style.width = 60 + value * 0.011 + '%';
    DIALLO.style.left = 20 + -value * 0.011 + '%';
    
    
    console.log(value);


    if(value > 1700){
        $("#nextBtTrigger").trigger("click");
        console.log("Hier wird gefeuert");
    }
});
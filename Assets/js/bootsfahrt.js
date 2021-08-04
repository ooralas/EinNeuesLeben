const BOOT = document.getElementById("bootIMG");
const BACKGROUND = document.getElementById("backgroundIMG");


   

$(document).ready(function(){
    $("#nextBtTrigger").click(function(){
        $("img").animate({
            right: 20 + "px",
            opacity: 1,
            
        },900);
    });
});

window.addEventListener('scroll',function(){
    
    var value = window.scrollY;
    BOOT.style.left = value * 0.3  + 'px';
    BACKGROUND.style.left = -value * 0.17 + 'px';

    console.log(value)
    if(value > 3476){
        $("#nextBtTrigger").trigger("click");
        console.log("Hier wird gefeuert");
    }
});
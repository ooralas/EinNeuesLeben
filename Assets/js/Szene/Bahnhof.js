const ZUG_VORNE = document.getElementById("zugVorne");
const ZUG_HINTEN = document.getElementById("zugHinten");
const DIALLO = document.getElementById("diallo");

var sound = new Howl({
    src: ['https://www.mboxdrive.com/Frankreich_Bahnhof.mp3'],
    html5:true
});

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

    if(value<1600){
    ZUG_VORNE.style.left = 64  - value * 0.025/2.5  + '%';
    ZUG_VORNE.style.top = 40 - value * 0.0135/2.5 + '%';
    ZUG_VORNE.style.width = 15 + value * 0.0185/2.5 + '%';
    }
    if(value<1000){
    ZUG_HINTEN.style.left = -10+ value * 0.05/3  + '%';
    ZUG_HINTEN.style.top = 21 + value * 0.015/3 + '%';
    ZUG_HINTEN.style.width = 70 + -value * 0.037/3 + '%';
    }

    DIALLO.style.width = 70 + value * 0.01 + '%';
    DIALLO.style.top = 25 + -value * 0.007 + '%';
    DIALLO.style.left = 15 + -value * 0.007 + '%';
    console.log(value)

    startSound();

    if(value > 1700){
        $("#nextBtTrigger").trigger("click");
        console.log("Hier wird gefeuert");
    }
});

let startSound = () => {
    if(!sound.playing()){
        sound.fade(0, 0.4, 5000);
        sound.play();
    }else{
        console.log("Sound is: ", sound.playing());
    }
}
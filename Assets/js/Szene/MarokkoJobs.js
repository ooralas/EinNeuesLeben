const FARBE = document.getElementById("farbe");
const DIALLO = document.getElementById("diallo");

var sound = new Howl({
    src: ['https://www.mboxdrive.com/Marroko.mp3'],
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

    DIALLO.style.left = 20 + value * 0.01 + '%';
    FARBE.style.left = -1 + value * 0.01 + '%';
    
    
    console.log(value);
    startSound();

    if(value > 1000){
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
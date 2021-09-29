const ELTERN = document.getElementById("eltern");
const DIALLO = document.getElementById("diallo");

var sound = new Howl({
    src: ['https://www.mboxdrive.com/Trennung_von_der_Familie.mp3'],
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

    //DIALLO.style.height = 20 + value * 0.3 + '%';
    //DIALLO.style.transform = "scale(2,2)"
    DIALLO.style.width = 60 + value * 0.011 + '%';
    DIALLO.style.left = 20 + -value * 0.011 + '%';
    
    
    console.log(value);
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
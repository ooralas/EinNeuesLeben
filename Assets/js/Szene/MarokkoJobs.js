const FARBE = document.getElementById("farbe");
const DIALLO = document.getElementById("diallo");
const PROGRESSIVEBAR = document.getElementById("progBar");


var sound = new Howl({
    src: ['https://www.mboxdrive.com/MarrokoJobs.mp3'],
    html5:true
});

$(document).ready(function(){

    $("#nextBt").fadeIn(3000);
    $("#text").fadeIn(3000);
    $("#backBt").fadeIn(3000);
    
});

window.addEventListener('scroll',function(){
    

    $("#scrollGif").fadeOut(1500);
    let value = window.scrollY;

    DIALLO.style.left = 20 + value * 0.01 + '%';
    FARBE.style.left = -1 + value * 0.01 + '%';
    
    
    console.log(value);
    startSound();
    startTimeBar(sound.duration());

    if(value > 700){
        //$("#text").fadeIn(1000);
    }

    if(value > 1000){
        //$("#nextBtTrigger").trigger("click");
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

let startTimeBar = (soundDuration) => PROGRESSIVEBAR.style.animation = "fillTimeBar " + soundDuration + "s" + " linear forwards";
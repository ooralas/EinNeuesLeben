const ZUG_VORNE = document.getElementById("zugVorne");
const ZUG_HINTEN = document.getElementById("zugHinten");
const DIALLO = document.getElementById("diallo");
const PROGRESSIVEBAR = document.getElementById("progBar");

var sound = new Howl({
    src:['../Assets/audios/7.mp3'],
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
    if(value<1600){
    ZUG_VORNE.style.left = 64  - value * 0.025/2.5  + '%';
    ZUG_VORNE.style.top = 45 - value * 0.0135/2.5 + '%';
    ZUG_VORNE.style.width = 15 + value * 0.0185/2.5 + '%';
    }
    if(value<1000){
    ZUG_HINTEN.style.left = -10+ value * 0.05/3  + '%';
    ZUG_HINTEN.style.top = 26 + value * 0.015/3 + '%';
    ZUG_HINTEN.style.width = 70 + -value * 0.037/3 + '%';
    }

    DIALLO.style.width = 70 + value * 0.01 + '%';
    DIALLO.style.top = 30 + -value * 0.007 + '%';
    DIALLO.style.left = 15 + -value * 0.007 + '%';
    console.log(value)

    startSound();
    startTimeBar(sound.duration());
});

let startSound = () => {
    if(!sound.playing()){
        sound.fade(0, 0.4, 5000);
        sound.play();
    }
}

let startTimeBar = (soundDuration) => PROGRESSIVEBAR.style.animation = "fillTimeBar " + soundDuration + "s" + " linear forwards";
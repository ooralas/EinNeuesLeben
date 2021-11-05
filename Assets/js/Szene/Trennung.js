const ELTERN = document.getElementById("eltern");
const DIALLO = document.getElementById("diallo");
const BACKGROUND = document.getElementById("background");
const PROGRESSIVEBAR = document.getElementById("progBar");

var sound = new Howl({
    src: ['https://www.mboxdrive.com/Trennung.mp3.mp3'],
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

    DIALLO.style.width = 60 + value * 0.011 + '%';
    DIALLO.style.left = 20 -value * 0.011 + '%';

    ELTERN.style.width = 60 - value * 0.0011 + '%';
    ELTERN.style.right =  20 - value * 0.0011 + '%';

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
const FARBE = document.getElementById("farbe");
const DIALLO = document.getElementById("diallo");
const PROGRESSIVEBAR = document.getElementById("progBar");

var sound = new Howl({
    src:['../Assets/audios/4.mp3'],
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
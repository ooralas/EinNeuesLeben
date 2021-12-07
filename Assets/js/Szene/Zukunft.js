const PROGRESSIVEBAR = document.getElementById("progBar");

var sound = new Howl({
    src: ['../Assets/audios/12.mp3'],
    html5:true
  });

$(document).ready(function(){
    $("#nextBt").fadeIn(3000);
    $("#text").fadeIn(3000);
    $("#backBt").fadeIn(3000);
});

 


window.addEventListener('scroll',function(){
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


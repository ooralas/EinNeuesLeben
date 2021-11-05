const BOOT = document.getElementById("bootIMG");
const BACKGROUND = document.getElementById("backgroundIMG");
const PROGRESSIVEBAR = document.getElementById("progBar");

var sound = new Howl({
    src: ['https://www.mboxdrive.com/Bootsfahrt_szene.mp3'],
    html5:true
  }); 

$(document).ready(function(){
    $("#nextBt").fadeIn(3000);
    $("#text").fadeIn(3000);
    $("#backBt").fadeIn(3000);
});

window.addEventListener('scroll',function(){
    
    $("#scrollGif").fadeOut(1500);
    var value = window.scrollY;
    BOOT.style.left =  value * 0.0121  + '%';
    BACKGROUND.style.left = 10 -value * 0.0064 + '%';
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

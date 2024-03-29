const PROGRESSIVEBAR = document.getElementById("progBar");
let playBtn = document.getElementById("playButton");
//playBtn.style.backgroundImage = "url('play.png') no repeat";
//playBtn.style.left = 30 + "%";

var sound = new Howl({
    src:['../Assets/audios/3.mp3'],
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
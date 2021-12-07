const PROGRESSIVEBAR = document.getElementById("progBar");
let soundSrc = "";

let getSceneName = () => {
    let path = window.location.pathname;
    let page = path.split("/").pop();

    return page;
}
const soundURL = getSceneName();

switch (soundURL) {
    case "bushaltestelle":
        soundSrc = '../Assets/audios/9.mp3';
        break;
    case "fluechtlingsheim":
        soundSrc = '../Assets/audios/8.mp3';
        break;
    case "hotel":
        soundSrc = '../Assets/audios/11.mp3';
        break;
    case "kausa":
        soundSrc = '../Assets/audios/10.mp3';
        break;
}

var sound = new Howl({
    src: [soundSrc],
    html5:true
  });

$(document).ready(function(){

    $("#nextBt").fadeIn(3000);
    $("#text").fadeIn(3000);
    $("#backBt").fadeIn(3000);
});

 


window.addEventListener('scroll',function(){
    
    let value = window.scrollY;
    startSound();
    startTimeBar(sound.duration());

    console.log(value)
});

let startSound = () => {
    if(!sound.playing()){
        sound.fade(0, 0.4, 5000);
        sound.play();
    }
}

let startTimeBar = (soundDuration) => PROGRESSIVEBAR.style.animation = "fillTimeBar " + soundDuration + "s" + " linear forwards";

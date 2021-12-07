
const CROWD = document.getElementById("crowd");
const SOLDIER1 = document.getElementById("soldier1");
const SOLDIER2 = document.getElementById("soldier2");
const PROGRESSIVEBAR = document.getElementById("progBar");
var playBtn = document.getElementById("playButton");

var sound = new Howl({
    // src: ['https://www.mboxdrive.com/Demonstration.mp3'],
    src:['../Assets/audios/1.mp3'],
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
   
    SOLDIER1.style.left = value * 0.005 + 20 + '%';
    SOLDIER1.style.width = value * 0.005 + 60 + '%';
    SOLDIER1.style.top = -value * 0.005 + 20 + '%';


    SOLDIER2.style.left = -value * 0.005 + 20 + '%';
    SOLDIER2.style.width = value * 0.005 + 60 + '%';
    SOLDIER2.style.top = -value * 0.005 + 20 + '%';


    if(value<300){
        CROWD.style.left = value * 0.014 + 20 + '%';
        
    }
    if(value>300 && value<600 ){
        CROWD.style.left =  -value * 0.014 - 20 + 48.4 + '%';
        
    }
    if(value>600 && value<900){
        CROWD.style.left = value * 0.014 + 40 - 28.4 + '%';
        
    }

    if(value>900 && value<1200 ){
        CROWD.style.left =  -value * 0.014 + 36.8 + '%';
        
    }

    if(value>1200 && value<1500 ){
        CROWD.style.left =  value * 0.014 + 1.8 + '%';
        
    }
   
    if(value>1500 && value<1800 ){
        CROWD.style.left =  -value * 0.014 + 45.2 + '%';
        
    }

    if(value>1800 && value<2100 ){
        CROWD.style.left =  value * 0.014 - 5.2 + '%';
        
    }

    if(value>2100 && value<2400 ){
        CROWD.style.left =  -value * 0.014 + 53.6 + '%';
        
    }

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
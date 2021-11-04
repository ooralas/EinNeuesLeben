const PROGRESSIVEBAR = document.getElementById("progBar");


var sound = new Howl({
    src: ['https://www.mboxdrive.com/Wohnsituation.mp3'],
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

    if(value > 100){
       // $("#text").fadeIn(1000);
    }

    if(value > 400){
       // $("#nextBtTrigger").trigger("click");
        console.log("Hier wird gefeuert");
    }
    
    console.log(value);
    
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
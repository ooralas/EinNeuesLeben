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
    $("#scrollGif").delay(3000).fadeOut(2000);
});


window.addEventListener('scroll',function(){
    
    var value = window.scrollY;
    BOOT.style.left =  value * 0.0121  + '%';
    BACKGROUND.style.left = 10 -value * 0.0064 + '%';
    startSound();
    startTimeBar(sound.duration());

    console.log(value)

    if(value > 300){
        //$("#text").fadeIn(1000);
    }

    if(value > 2000){
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

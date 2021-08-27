const BOOT = document.getElementById("bootIMG");
const BACKGROUND = document.getElementById("backgroundIMG");
var sound = new Howl({
    src: ['https://www.mboxdrive.com/Bootsfahrt_szene.mp3'],
    html5:true
  }); 


   

$(document).ready(function(){
    $("#nextBtTrigger").click(function(){
        $("img").animate({
            right: 20 + "px",
            opacity: 1,
            
        },900);
    });
});

window.addEventListener('scroll',function(){
    
    var value = window.scrollY;
    BOOT.style.left = value * 0.3  + 'px';
    BACKGROUND.style.left = -value * 0.17 + 'px';
    startSound();

    console.log(value)
    if(value > 3476){
        $("#nextBtTrigger").trigger("click");
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
var sound = new Howl({
    src: ['https://www.mboxdrive.com/Fahrt_mit_Bus.mp3'],
    html5:true
  });

$(document).ready(function(){
    $("#nextBtTrigger").click(function(){
        $("#text").fadeIn(3000);
        $("img").animate({
            right: 20 + "px",
            opacity: 1,
            
        },900);
    });
});

 


window.addEventListener('scroll',function(){
    
    let value = window.scrollY;

    startSound();
    
    console.log(value)
    if(value > 200){
        $("#nextBtTrigger").trigger("click");
        console.log("Hier wird gefeuert");
    }
    
    console.log(value)
});

let startSound = () => {
    if(!sound.playing()){
        sound.fade(0, 0.4, 5000);
        sound.play();
    }else{
        console.log("Sound is: ", sound.playing());
    }
}
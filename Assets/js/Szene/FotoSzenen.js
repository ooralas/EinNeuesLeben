const PROGRESSIVEBAR = document.getElementById("progBar");
let soundSrc = "";

let getSceneName = () => {
    let path = window.location.pathname;
    let page = path.split("/").pop();

    return page;
}
const soundURL = getSceneName();



switch (soundURL) {
    case "Bushaltestelle":
        soundSrc = "https://www.mboxdrive.com/Bushaltestelle%20.mp3";
        break;
    case "Fluechtlingsheim":
        soundSrc = "https://www.mboxdrive.com/Fluechtlingsheim.mp3";
        break;
    case "Hotel":
        soundSrc = "https://www.mboxdrive.com/Hotel.mp3";
        break;
    case "Kausa":
        soundSrc = "https://www.mboxdrive.com/Kausa.mp3";
        break;
    case "Zukunft":
        soundSrc = "https://www.mboxdrive.com/Zukunft.mp3";
        break;
}

console.log("soundSrc", soundSrc);
console.log("SoundURL", soundURL);


var sound = new Howl({
    src: [soundSrc],
    html5:true
  });

  $(document).ready(function(){
    $("#nextBtTrigger").click(function(){
        $("#nextBt").animate({
            right: 20 + "px",
            opacity: 0.3,
            
        },900);
    });
    $("#backBt").fadeIn(3000);
});

 


window.addEventListener('scroll',function(){
    
    let value = window.scrollY;
    startSound();
    startTimeBar(sound.duration());
    
    console.log(value)

    if(value > 50){
        $("#text").fadeIn(1000);
    }

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

let startTimeBar = (soundDuration) => PROGRESSIVEBAR.style.animation = "fillTimeBar " + soundDuration + "s" + " linear forwards";


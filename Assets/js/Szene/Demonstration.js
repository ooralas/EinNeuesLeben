const CROWD = document.getElementById("crowd");
const SOLDIERS = document.getElementById("soldiers");

window.addEventListener('scroll',function(){
    
    let value = window.scrollY;
   
    if(value < 485){
        CROWD.style.left = value * 0.3 + 192 + 'px';
        SOLDIERS.style.left = -value * 0.17 + 384 + 'px';
    }
    if(value > 485){
        CROWD.style.left = -value * 0.3 + 483 + 'px';
        SOLDIERS.style.left = value * 0.17 + 219.1 + 'px';
    }    
    if(value > 1117){
        CROWD.style.left = value * 0.3 - 187 + 'px';
        SOLDIERS.style.left = -value * 0.17 + 599 + 'px';
    }
    
    console.log(value)
});

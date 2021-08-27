const CROWD = document.getElementById("crowd");
const SOLDIERS = document.getElementById("soldiers");

window.addEventListener('scroll',function(){
    
    let value = window.scrollY;
   
    CROWD.style.left = value * 0.3 + 192 + 'px';
    SOLDIERS.style.left = -value * 0.17 + 384 + 'px';
    
    console.log("left",parseInt(CROWD.style.left))
    console.log(value)
});
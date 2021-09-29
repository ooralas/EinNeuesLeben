
$(document).ready(function(){
    $("#nextBtTrigger").click(function(){
        $("img").animate({
            right: 20 + "px",
            opacity: 1,
            
        },900);
    });
});


window.addEventListener('scroll',function(){
    
    let value = window.scrollY;
    
    console.log(value)
    if(value > 200){
        $("#nextBtTrigger").trigger("click");
        console.log("Hier wird gefeuert");
    }
    
    console.log(value)
});
const modal = document.getElementById("modal")
const overlay = document.getElementById("overlay")
const button = document.getElementById("modal__btn")


let isPageReloaded = () => {
    if (sessionStorage.getItem('pageHasBeenLoaded')) {
        return true;
    }
    sessionStorage.setItem('pageHasBeenLoaded', 'true');
    return false;
}


if(navigator.userAgent.match(/firefox|fxios/i)){
    if(!isPageReloaded()) {
        setTimeout(() => {
                modal.classList.add("active")
                overlay.classList.add("active")
        }, 1500);
        
        button.onclick = () => {
            modal.classList.remove("active")
            overlay.classList.remove("active")
        } 
    }   
} 


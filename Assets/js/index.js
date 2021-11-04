const modal = document.getElementById("modal")
const overlay = document.getElementById("overlay")
const button = document.getElementById("modal__btn")


let isPageReloaded = () => {
    if (sessionStorage.getItem('pageHasBeenLoaded')) {
        console.log('this is a reload');

        return true;
    }
    sessionStorage.setItem('pageHasBeenLoaded', 'true');
    return false;
}


if(!isPageReloaded()) {
    window.onload = () => {
        // if(history.length < 2) {
            modal.classList.add("active")
            overlay.classList.add("active")
        // }
    }
    
    button.onclick = () => {
        modal.classList.remove("active")
        overlay.classList.remove("active")
    } 
}


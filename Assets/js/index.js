const modal = document.getElementById("modal")
const overlay = document.getElementById("overlay")
const button = document.getElementById("modal__btn")

window.onload = () => {
    if(history.length < 2) {
        modal.classList.add("active")
        overlay.classList.add("active")
    }
}

button.onclick = () => {
    modal.classList.remove("active")
    overlay.classList.remove("active")
}
function playSound(event){
    const audio= document.querySelector(`audio[data-key="${event.keyCode}"]`);
    audio.currentTime=0; 
    audio.play();

    const add= document.querySelector(`div[data-key="${event.keyCode}"]`).classList.add("enhance");
    if(!audio) return;
    
}
const keys= Array.from(document.querySelectorAll(".key"));
keys.forEach(key=> key.addEventListener("transitionend", removeTransition));

function removeTransition(event){
    event.target.classList.remove("enhance")
}

window.addEventListener('keydown', playSound);

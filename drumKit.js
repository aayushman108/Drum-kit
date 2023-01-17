function myFunction(event){
    const code= event.keycode;
    const audio= document.querySelector(`audio[data-key="${event.keycode}"]`);
    audio.currentTime=0; 
    audio.play();
}



window.addEventListener('keydown', myFunction)
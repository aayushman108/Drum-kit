function myFunction(event){
    const code= event.keycode;
    const audio= document.querySelector(`audio[data-key="code"]`);
    audio.currentTime=0; 
    audio.play();
}



document.addEventListener(keydown, myFunction)
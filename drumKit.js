function playSound(event){
    const audio= document.querySelector(`audio[data-key="${event.keyCode}"]`);
    audio.currentTime=0; 
    audio.play();

    const add= document.querySelector(`div[data-key="${event.keyCode}"]`).classList.add("enhance");
    function myFunction(){
    add.classList.remove("enhance");
    }
    setTimeout(myFunction, );
    
}
window.addEventListener('keydown', playSound);

/*function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); 
    var key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    
    audio.currentTime = 0;
    audio.play();
  }
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  keys.forEach(key);
  function key(value){
    value.addEventListener('transitionend', removeTransition);
  }
  window.addEventListener('keydown', playSound);*/
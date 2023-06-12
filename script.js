const pianoKeys = document.querySelectorAll('.piano_keys .key');
volumeSlider = document.querySelector('.volume_slider input');
keysCheckbox = document.querySelector('.keys_checkbox input');

let allKeys = [],
audio = new Audio("tunes/a.wav"); //by default audio src is "a" tune

const playTune = function(key) {
    audio.src = `tunes/${key}.wav`; //passing audio src based on key pressed
    audio.play();
    console.log(allKeys);

    const clickedKey = document.querySelector(`[data-key="${key}"]`); //getting clicked key element
    clickedKey.classList.add('active');
    setTimeout(() => {
        clickedKey.classList.remove('active');
    }, 150)
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    //calling playtune function with passing data-key values as an argument
    key.addEventListener('click', () => playTune(key.dataset.key));
})

const handleVolume = function(e){
    audio.volume = e.target.value; //passing the range slider value as an andio volume
}

const showHideKeys = function() {
    pianoKeys.forEach(key => key.classList.toggle('hide'));
}

const pressedKey = function(e) {
    //if the pressed key is in the allkeys array, only call the playTune function
    if(allKeys.includes(e.key)) {
        playTune(e.key);
    }
}

keysCheckbox.addEventListener('click', showHideKeys);
volumeSlider.addEventListener('input', handleVolume);
document.addEventListener('keydown', pressedKey);
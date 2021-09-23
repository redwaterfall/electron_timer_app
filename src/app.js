

let timeText = document.querySelector('.time')
let playButton = document.querySelector('#playButton')
let reset = document.querySelector('#reset')
let time = null;
let startPressed = 0;
let min=0;
let sec=0;
let minString="0";
let secString="0";

playButton.addEventListener('click',function(){
    
    startPressed = 1^startPressed;
    if(startPressed){
        playButton.innerHTML = "pause";
        timer()
    }
    else{
        playButton.innerHTML = "play_arrow";
        stop();
    }
})
reset.addEventListener('click',function(){
    min=0;
    sec=0;
    minString="0";
    secString="0";
    timeText.innerHTML = `00:00`;
})
function timer(){
    time = setInterval(()=>{
        sec++;
        if(sec > 59){
                min+=1;
                if(min > 59){
                    min=0;
                }
            sec=0;
        }
        if(sec < 10){
            secString = `0${sec}`;
        }
        else{
            secString = `${sec}`;
        }
        if(min < 10){
            minString = `0${min}`;
        }
        else{
            minString = `${min}`;
        }
        timeText.innerHTML = `${minString}:${secString}`;
    },1000)
}
function stop(){
    clearInterval(time);
}
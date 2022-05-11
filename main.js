
///////////DOM//
var audio = document.querySelector(".audio");
var playBtn = document.querySelector(".play");
var forwardBtn = document.querySelector(".forward");
let backwardBtn= document.querySelector(".backward");
let shuffleBtn= document.querySelector(".fa-shuffle");
let songName= document.querySelector(".song-name");
let singer= document.querySelector(".singer");
let returnBtn= document.querySelector(".return");
let itimeline = document.querySelector(".itimeline");
let startTime= document.querySelector(".start-time");
let endTime = document.querySelector (".end-time");
let songImage= document.querySelector(".song-image");
let images=["star.png","lover.jpg","man.jpg", "bili.png"]
let songs = ["star.mp3","lover.mp3","man.mp3","bili.mp3"]
let songInfoName= ["Always Remember us this way", "Lover", "The Man","No time to die"];
let songInfoSinger = ["Lady Gaga", "Taylor Swift", "Taylor swift", "Billi Eilish"];
let i = 0;
let duration;
let songImages =["star.png","lover.jpg","man.jpg","bili.png"]

///////////Functions//

function songInfo(){
    songName.textContent=songInfoName[i];
    singer.textContent=songInfoSinger[i];
}
function playSong() {
    audio.play();
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
    duration = audio.onloadedmetadata = function(){
    endTime.innerText="0"+ (audio.duration/60).toFixed(2); 
    let durationMinute = Math.floor(audio.duration/60);
    let durationSecond = Math.floor(audio.duration-durationMinute *60)
    if (durationSecond<10){
    endTime.innerText="0"+ durationMinute + ":" +"0"+ durationSecond;
    }else{
    endTime.innerText="0"+ durationMinute + ":" + durationSecond;}

    }
    songImage.setAttribute("src",songImages[i])
}
function updateProgress(){
    let currentMinute = Math.floor(audio.currentTime/60)
    let currentSecond = Math.floor(audio.currentTime-currentMinute *60)
    let percenti= Math.floor(audio.currentTime/audio.duration *100);
    itimeline.style.width= percenti + "%";
    if (currentSecond <10){
        startTime.innerText = "0"+currentMinute + ":"+"0"+currentSecond;
    }else{
    startTime.innerText = "0"+currentMinute + ":"+currentSecond;}
 }

 ///////////Event listeners//

audio.addEventListener("timeupdate", updateProgress)

playBtn.addEventListener("click", function(){
    if(playBtn.classList.contains("fa-play")){    
        playSong()
        songInfo()
        updateProgress()
    }else if(playBtn.classList.contains("fa-pause")){
        audio.pause()
        playBtn.classList.remove("fa-pause")
        playBtn.classList.add("fa-play")
        songInfo()
    }
})

forwardBtn.addEventListener("click", function(){
    if(i==songs.length-1){
        audio.setAttribute("src", songs[i]);
        playSong()
        songInfo()
    }else{
        i+=1;
        audio.setAttribute("src", songs[i]);
    playSong()
    songInfo()
    updateProgress()
}
 })

 backwardBtn.addEventListener("click", ()=>{
    if(i==0){
        audio.setAttribute("src", songs[i]);
        updateProgress()
        playSong()
        songInfo() 

    }else{
        i-=1;
        audio.setAttribute("src", songs[i]);
        playSong();
        songInfo()
        updateProgress()

}

 })
 shuffleBtn.addEventListener("click" , function(){
     i=Math.floor(Math.random()*4);
     audio.setAttribute("src", songs[i])
     audio.play();
     songInfo();
     playBtn.classList.remove("fa-play")
     playBtn.classList.add("fa-pause")
     updateProgress()

 }) 
 returnBtn.addEventListener("click", ()=>{
     audio.setAttribute("src", songs[i])
     audio.replay();
     updateProgress()
 })



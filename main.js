var audio = document.querySelector(".audio");
var playBtn = document.querySelector(".play");
var forwardBtn = document.querySelector(".forward");
let backwardBtn= document.querySelector(".backward");
let shuffleBtn= document.querySelector(".fa-shuffle")
let songs = ["lord.mp3","lover.mp3","man.mp3","bili.mp3"]
let i = 0;


playBtn.addEventListener("click", function(){
    if(playBtn.classList.contains("fa-play")){
        audio.play();
        playBtn.classList.remove("fa-play")
        playBtn.classList.add("fa-pause")

    }else if(playBtn.classList.contains("fa-pause")){
        audio.pause()
        playBtn.classList.remove("fa-pause")
        playBtn.classList.add("fa-play")

    }
})

forwardBtn.addEventListener("click", function(){
    if(i==songs.length-1){
        audio.setAttribute("src", songs[songs.length-1])
        audio.play()
    }else{
    i+=1;
    audio.setAttribute("src", songs[i])
    audio.play()
    console.log(i)}
 })

 backwardBtn.addEventListener("click", ()=>{
    if(i==0){
        audio.setAttribute("src", songs[0])
        audio.play()
        

    }else{
    i-=1;
    audio.setAttribute("src", songs[i])
    audio.play()
    console.log(i)}

 })
 shuffleBtn.addEventListener("click" , ()=>{
     audio.setAttribute("src", songs[Math.floor(Math.random()*4)])
     audio.play();
 }) 
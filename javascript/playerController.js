console.log("Welcome!!");

let song = new Audio("/Songs/1.mp3");
let Playbtn = document.getElementById("playbtn");
let progressline = document.getElementById("seekred");
let seekCont = document.getElementById("seekCont");

let durationText = document.getElementById("duration");
let currentTimeText = document.getElementById("currenttime");
let Min = 0;
let Sec = 0;
let dur;

function Player() {
  if (song.paused || song.currentTime <= 0) {
    Playbtn.innerHTML = `pause`;
    song.play();
  } else {
    song.pause();
    Playbtn.innerHTML = `play_arrow`;
  }
}

song.addEventListener("timeupdate", () => {
  let Dtime = parseInt(song.currentTime);
  let minF = (Dtime/60).toFixed(3);
  progressPre = (song.currentTime / song.duration) * 100;
  progressline.style.width = `${progressPre}%`;

  if (song.duration == song.currentTime) {
    Playbtn.innerHTML = `play_arrow`;
  }

   console.log(minF)
    Min = parseInt(minF);
    Sec = Math.round(minF*60);
    if(Sec>59){
        while (Sec>59){
        Sec = Sec - 60;
        }
    }
    currentTimeText.innerHTML = `${Min}:${Sec}`;
});



seekCont.addEventListener("click", (e) => {
  let clickX = e.offsetX;
  let fullwidth = seekCont.offsetWidth;

  let clickDuration = (clickX / fullwidth) * 100;
  song.currentTime = (clickDuration * song.duration) / 100;

  console.log(clickX);
  console.log(fullwidth);
});

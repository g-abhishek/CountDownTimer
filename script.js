var minutes = 1
var seconds = 30

let btn = document.getElementById("btn")

function startTimer(){
  setInterval(() => {
    if(minutes === 0 && seconds === 1){
      document.getElementById("timer").innerHTML = "00:00"
    }else{
      seconds = seconds - 1
      if(seconds === 0){
        minutes = minutes - 1
        seconds = 60
      }

      let minString = minutes
      let secString = seconds
      if(minutes.toString().length == 1){
        minString = "0"+minutes
      }
      if(seconds.toString().length == 1){
        secString = "0"+seconds
      }

      document.getElementById("timer").innerHTML = `${minString}:${secString}`
    }
  }, 1000)
}


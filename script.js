var minutes = 1
var seconds = 30
var flag = false
var interval;

let btn = document.getElementById("btn")

function start(){
  flag = true
  TimerStart()
}

function resetTimer(){
  flag = false
  clearInterval(interval)
  minutes = 1
  seconds = 30
  document.getElementById("timer").innerHTML = "00:00"
}

function TimerStart(){
  if(flag === true){
    interval = setInterval(() => {
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
}


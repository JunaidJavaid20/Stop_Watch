var msec = document.getElementById("msec")
var sec = document.getElementById("sec")
var min = document.getElementById("min")

var milisec = 0
var second = 0
var minute = 0
var interval;
function started(){
        interval = setInterval(function(){
        milisec++
        msec.innerHTML = milisec
        if(milisec >= 100){
            second++
            sec.innerHTML = second
            milisec = 0
        }
        else if(second >=60){
            minute++
            min.innerHTML = minute
            second = 0
        }
    },10) 
    document.getElementById("btn").disabled = true
}

function stoped(){
    clearInterval(interval)
    document.getElementById("btn").disabled = false
}

function reset(){
    document.getElementById("btn").disabled = false
    clearInterval(interval)
    milisec = 0
    second = 0
    minute = 0
    min.innerHTML = minute
    sec.innerHTML = second
    msec.innerHTML = milisec
}
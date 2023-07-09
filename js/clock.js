const clock = document.querySelector("h1#clock");


function getClock(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0")
    const minute =String(date.getMinutes()).padStart(2, "0")
    const second = String(date.getSeconds()).padStart(2, "0")
    clock.innerText = `${hour}:${minute}:${second}`;
}
/*
function getClock(){
    clock.innerText = new Date().toTimeString();
}
*/
getClock();
setInterval(getClock, 1000);
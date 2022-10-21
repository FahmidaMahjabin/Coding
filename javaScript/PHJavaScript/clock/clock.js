function showTime(){
    const time = new Date();
    console.log(time)
    document.getElementById("hour").innerText = time.getHours();
    document.getElementById("minute").innerText = time.getMinutes();
    document.getElementById("second").innerText = time.getSeconds();
}
setInterval(showTime, 1000);

clearInterval(showTime, 10000)

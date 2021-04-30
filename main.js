var mouseEvent = "empty";
var lastposofx, lastposofy;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
ctx.arc(200,200,40,0,2*Math.PI);
color = "Black";
widthoflien = 1;
canvas.addEventListener("mousedown", mymousedown );
function mymousedown(e) {
    mouseEvent = "mousedown";
}
canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e) {
    currentposofmousex = e.clientX-canvas.offsetLeft;   
    currentposofmousey = e.clientY-canvas.offsetTop;
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
          ctx.arc(currentposofmousex, currentposofmousey,40, 0, 2*Math.PI);
      console.log("Last position of x and y are");
        console.log(lastposofx, lastposofy);
        ctx.moveTo(lastposofx, lastposofy);
        console.log("Current Position");
        console.log(currentposofmousex, currentposofmousey);
        ctx.lineTo(currentposofmousex, currentposofmousey);
        ctx.stroke();
    }
  lastposofx = currentposofmousex;
    lastposofy = currentposofmousey;
} 
canvas.addEventListener("mouseup", myMouseUp());
function myMouseUp(e) {
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave", myMouseLeave()) ;
function myMouseLeave(e) {
    mouseEvent="mouseleave";
}
function cleararea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
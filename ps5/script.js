let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect (0,0,180,180);

ctx.fillStyle = "red";
ctx.fillRect(320,240,200,300);

ctx.fillStyle = "rgba(0, 0, 255, 0.24)";
ctx.fillRect(320,240,100,100);

ctx.fillStyle ="rgba(35, 255, 149, 0.34)"
ctx.beginPath();
ctx.moveTo(75, 50);
ctx.lineTo(100, 75);
ctx.lineTo(100, 25);
ctx.fill();

console.log("canvas");
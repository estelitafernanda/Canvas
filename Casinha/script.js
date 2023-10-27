let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
context.fillStyle = "red";
context.fillRect(120, 170, 250, 200);

context.fillStyle = "blue";
context.fillRect(140, 180, 70, 70);

context.fillStyle = "brown";
context.fillRect(210, 280, 70, 90);

context.fillStyle = "green";
context.beginPath();
context.moveTo(250, 70);
context.lineTo(370, 170);
context.lineTo(120, 170);
context.fill();
context.closePath();

context.beginPath();
context.strokeStyle = "white";
context.moveTo(174, 250);
context.lineTo(174, 180);
context.closePath();
context.stroke(); 

context.beginPath();
context.strokeStyle = "white";
context.moveTo(140, 218);
context.lineTo(210, 218);
context.closePath();
context.stroke(); 

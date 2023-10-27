let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
context.fillStyle = "red";
context.fillRect(5, 5, 300, 185);

context.beginPath();
context.fillStyle = "white";
context.fillRect(130, 45, 35, 110);

context.beginPath();
context.fillStyle = "white";
context.fillRect(85, 85, 125, 30);
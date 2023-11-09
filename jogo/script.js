let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let imagem = new Image(); 
imagem.src ="bonequinha.png"; 

let x = 0, intervalo = 120;

function bonequinha(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    if(x===0){
        context.drawImage(imagem, 15, -30, 100, 100, 5, 0, 160, 160);
    }
    else if(x===1){
        context.drawImage(imagem, 110, -30, 90, 100, 30, 0, 180, 160);
    }
    else if(x===2){
        context.drawImage(imagem, 175, -30, 90, 100, 30, 0, 180, 160);
    }
    else if(x===3){
        context.drawImage(imagem, 240, -30, 90, 100, 30, 0, 180, 160);
    }
   else if(x===4){
    context.drawImage(imagem, 20, 69, 85, 60, -25, 50, 180, 100);
   }
   else if(x===5){
    context.drawImage(imagem, 95, 70, 75, 65, -20, 57, 180, 100);
   }
   else if(x===6){
    context.drawImage(imagem, 162, 70, 75, 65, -20, 57, 180, 100);
   } 
   else if(x===7){
    context.drawImage(imagem, 228, 70, 75, 65, -20, 57, 180, 100);
   } 
   else if(x===8){
    context.drawImage(imagem, 228, 70, 75, 65, -20, 57, 180, 100);
   }
   else if(x===9){ 
    context.drawImage(imagem, 20, 135, 90, 60, -25, 50, 193, 104);
   }
   else if(x===10){ 
    context.drawImage(imagem, 89, 133, 85, 63, -25, 50, 193, 100);
   }
   else if(x===11){
    context.drawImage(imagem, 155, 133, 85, 63, -25, 49, 193, 102);
   } 
   else if(x===12){
    context.drawImage(imagem, 221, 133, 85, 63, -25, 49, 193, 102);
   }
   else if(x===13){
    context.drawImage(imagem, 24, 199, 85, 63, -25, 49, 197, 104);
   } 
   else if(x===14){ 
    context.drawImage(imagem, 94, 199, 85, 63, -25, 49, 197, 104);
   }
   else if(x===15){
    context.drawImage(imagem, 158, 199, 85, 63, -25, 49, 197, 104);
   }
   else if(x===16){
    context.drawImage(imagem, 224, 199, 85, 63, -25, 49, 197, 104);
   } 
   x = (x + 1) % 70;
   setTimeout (bonequinha, intervalo);

}

imagem.onload = bonequinha;
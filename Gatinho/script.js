let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let imagem = new Image ();
imagem.src="gatinho.png";

let x = 0, intervalo = 100; 

function gatinho(){
    context.clearRect(0, 0, canvas.width, canvas.height); 
    
    if (x===0){
        context.drawImage(imagem, 3, -33, 200, 190, 0, 0, 140, 160); 
    }else if (x===1){
        context.drawImage(imagem, 223, -33, 210, 190, 0, 0, 140, 160); 
    }else if (x===2){
        context.drawImage(imagem, 443, -37, 210, 190, 0, 0, 140, 160);
    }else if (x===3){
        context.drawImage(imagem, 663, -33, 210, 190, 0, 0, 140, 160); 
    }else if (x===4){
        context.drawImage(imagem, 883, -33, 210, 190, 0, 0, 140, 160); 
    }else if (x===5){
        context.drawImage(imagem, 0, 150, 215, 190, 0, 0, 140, 160); 
    }else if (x===6){
        context.drawImage(imagem, 223, 160, 220, 190, 0, 0, 140, 160); 
    }else if (x===7){
        context.drawImage(imagem, 443, 160, 210, 190, 0, 0, 140, 160);
    }
    x = (x + 1) % 6; 
    setTimeout (gatinho, intervalo); 
}
imagem.onload = gatinho; 
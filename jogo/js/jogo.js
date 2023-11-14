let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

let imagem = new Image();

imagem.src = "bonequinha.png";

/*let x = 0, intervalo = 120, y = 0, movi = 0;
let pulando = false;
let alturaInicialDoSalto = 0;
let alturaMaximaDoSalto = 100;
let velocidadeDoSalto = 5;
let gravidade = 5;

let teclasPressionadas = {};*/
let prevTime = 0

animate(); 
function animate(){
    window.requestAnimationFrame(animate)
    
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height)

    bonequinha.update(); 
    let delta = (performance.now() - prevTime) / 100; 
    let fps = 1 / delta; 

    prevTime = performance.now();
    console.log('FPS: ${fps}'); 
      
} 


/*document.addEventListener('keydown', function (event) {
    var key = event.key.toLowerCase();
    teclasPressionadas[key] = true;

    if (key === 's') {
        y += 10;
        baixo();
    } else if (key === 'a') {
        x -= 10;
        esquerda();
    } else if (key === 'w' && !pulando) {
        pulando = true;
        alturaInicialDoSalto = y;
        animar(); 
    } else if (key === 'd') {
        x += 10;
        direita();
    }

});
document.addEventListener('keyup', function (event) {
    var key = event.key.toLowerCase();
    teclasPressionadas[key] = false;
});

function baixo() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (movi === 0) {
        context.drawImage(imagem, 44, -30, 90, 100, x, y, 160, 160);
    }
    else if (movi === 1) {
        context.drawImage(imagem, 110, -30, 90, 100, x, y, 160, 160);
    }
    else if (movi === 2) {
        context.drawImage(imagem, 176, -30, 90, 100, x, y, 160, 160);
    }
    else if (movi === 3) {
        context.drawImage(imagem, 242, -30, 90, 100, x, y, 160, 160);
    }
    movi = (movi + 1) % 4;
}
function esquerda() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (movi === 0) {
        context.drawImage(imagem, 45, 64, 90, 70, x + 3, y + 40, 157, 120);
    }
    else if (movi === 1) {
        context.drawImage(imagem, 110, 64, 90, 70, x + 1, y + 43, 157, 120);
    }
    else if (movi === 2) {
        context.drawImage(imagem, 175, 65, 90, 70, x, y + 42, 157, 120);
    }
    else if (movi === 3) {
        context.drawImage(imagem, 241, 65, 90, 70, x, y + 45, 157, 120);
    }
    movi = (movi + 1) % 4;
}


function direita() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (movi === 0) {
        context.drawImage(imagem, 40, 130, 90, 70, x, y + 41, 146, 120);
    }
    else if (movi === 1) {
        context.drawImage(imagem, 106, 131, 90, 70, x, y + 46, 146, 120);
    }
    else if (movi === 2) {
        context.drawImage(imagem, 170, 131, 90, 70, x -3, y + 43, 146, 120);
    }
    else if (movi === 3) {
        context.drawImage(imagem, 236, 131, 90, 70, x -3, y + 47, 146, 120);
    }
    movi = (movi + 1) % 4;
}

function animar() {
    if (pulando) {
        // Atualize a posição vertical durante o pulo
        y -= velocidadeDoSalto;

        // Verifique se atingiu a altura máxima do pulo
        if (y <= alturaInicialDoSalto - alturaMaximaDoSalto) {
            pulando = false;
            // Resetar a posição ao atingir a altura máxima do pulo
            y = canvas.height - 160;
        } else {
            requestAnimationFrame(animar);
        }
        
    } else {
        // Aplica a gravidade para simular a queda
        if (y < canvas.height - 160) { // Ajuste conforme necessário
            y += gravidade;
        }

        // Volta para o ponto inicial se a tecla 'w' não estiver pressionada
        if (!teclasPressionadas['w'] && y < canvas.height - 160) {
            y += gravidade;
        }

        requestAnimationFrame(animar);
    }
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(imagem, 44, -30, 90, 100, x, y, 160, 160);
}*/

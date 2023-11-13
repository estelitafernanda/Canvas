let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let imagem = new Image();
imagem.src = "bonequinha.png";

let x = 0, intervalo = 120, y = 0, movi = 0;

document.addEventListener('keydown', function (event) {
    var key = event.key.toLowerCase();

    if (key === 's') {
        y += 10;
        baixo();
    } else if (key === 'a') {
        x -= 10;
        esquerda();
    } else if (key === 'w') {
        y -= 10;
        cima();
    } else if (key === 'd') {
        x += 10;
        direita();
    }
});

function baixo() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (x === 0) {
        context.drawImage(imagem, 15, -30, 100, 100, x, y, 160, 160);
    }
    else if (x === 1) {
        context.drawImage(imagem, 110, -30, 90, 100, x + 30, y, 160, 160);
    }
    else if (x === 2) {
        context.drawImage(imagem, 175, -30, 90, 100, x + 40, y, 160, 160);
    }
    else if (x === 3) {
        context.drawImage(imagem, 240, -30, 90, 100, x + 50, y, 160, 160);
    }
    movi = (movi + 1) % 4;
}
imagem.onload = baixo;

function esquerda() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (x === 0) {
        context.drawImage(imagem, 20, 69, 85, 60, x, y + 49, 160, 100);
    }
    else if (x === 1) {
        context.drawImage(imagem, 95, 70, 75, 65, x + 10, y + 49, 160, 100);
    }
    else if (x === 2) {
        context.drawImage(imagem, 162, 70, 75, 65, x + 20, y + 49, 160, 100);
    }
    else if (x === 3) {
        context.drawImage(imagem, 228, 70, 75, 65, x + 30, y + 49, 160, 100);
    }
    movi = (movi + 1) % 4;
}

imagem.onload = esquerda;

function direita() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (y === 0) {
        context.drawImage(imagem, 228, 70, 75, 65, x, y + 49, 160, 100);
    }
    else if (y === 1) {
        context.drawImage(imagem, 20, 135, 90, 60, x + 10, y + 49, 160, 104);
    }
    else if (y === 2) {
        context.drawImage(imagem, 89, 133, 85, 63, x + 20, y + 49, 160, 100);
    }
    else if (y === 3) {
        context.drawImage(imagem, 155, 133, 85, 63, x + 30, y + 49, 160, 102);
    }
    movi = (movi + 1) % 4;
}

imagem.onload = direita;
function cima() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (x === 0) {
        context.drawImage(imagem, 24, 199, 85, 63, x, y + 49, 197, 104);
    }
    else if (x === 1) {
        context.drawImage(imagem, 94, 199, 85, 63, x, y + 49, 197, 104);
    }
    else if (x === 2) {
        context.drawImage(imagem, 158, 199, 85, 63, x, y + 49, 197, 104);
    }
    else if (x === 3) {
        context.drawImage(imagem, 224, 199, 85, 63, x, y + 49, 197, 104);
    }
    movi = (movi + 1) % 4;
}

imagem.onload = cima;

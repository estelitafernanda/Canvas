let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let imagem = new Image();
imagem.src = "bonequinha.png";

let x = 0, intervalo = 120, y = 0, movi = 0;

/*document.addEventListener('keydown', function (event) {
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
});*/

function baixo() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        //if (x === 0) {
            context.drawImage(imagem, 44, -30, 90, 100, 0, 0, 160, 160);
        //}
        //else if (x === 1) {
            context.drawImage(imagem, 110, -30, 90, 100, 0, 0, 160, 160);
    // }
        //else if (x === 2) {
            context.drawImage(imagem, 176, -30, 90, 100, 0, 0, 160, 160);
        //}
        //else if (x === 3) {
            context.drawImage(imagem, 242, -30, 90, 100, 0, 0, 160, 160);
        //}
        //movi = (x + 1) % 4;
    //}
    //imagem.onload = baixo;

    /*function esquerda() {
        context.clearRect(0, 0, canvas.width, canvas.height);*/
        //if (x === 0) {
            context.drawImage(imagem, 45, 64, 90, 70, 3, 40, 157, 120);
        //}
        //else if (x === 1) {
            context.drawImage(imagem, 110, 64, 90, 70, 1, 43, 157, 120);
        //}
        //else if (x === 2) {
            context.drawImage(imagem, 175, 65, 90, 70, 0, 42, 157, 120);
        //}
        //else if (x === 3) {
            context.drawImage(imagem, 241, 65, 90, 70, 0, 45, 157, 120);
    /*  }
        movi = (movi + 1) % 4;
    }*/

    //imagem.onload = esquerda;

    /*function direita() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        if (y === 0) {*/
            context.drawImage(imagem, 40, 130, 90, 70, 0, 41, 146, 120);
    /* }
        else if (y === 1) {*/
            context.drawImage(imagem, 106, 131, 90, 70, 0, 46, 146, 120);
        /*}
        else if (y === 2) {*/
            context.drawImage(imagem, 170, 131, 90, 70, -3, 43, 146, 120);
        /*}
        else if (y === 3) {*/
            context.drawImage(imagem, 236, 131, 90, 70, -3, 47, 146, 120);
    /* }
        movi = (movi + 1) % 4;*/
    //}

    //imagem.onload = direita;
    /*function cima() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        if (x === 0) {*/
            context.drawImage(imagem, 36, 200, 90, 70, -6, 57, 146, 110);
        /*}
        else if (x === 1) {*/
            context.drawImage(imagem, 101, 200, 90, 70, -6, 59, 146, 110);
        /*}
        else if (x === 2) {*/
            context.drawImage(imagem, 168, 200, 90, 70, -5, 58, 146, 110);
        /*}
        else if (x === 3) {*/
            context.drawImage(imagem, 235, 200, 90, 70, -5, 59, 146, 110);
        /*
        movi = (movi + 1) % 4;*/
}

imagem.onload = baixo;


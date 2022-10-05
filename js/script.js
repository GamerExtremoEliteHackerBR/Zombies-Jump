
const player = document.querySelector('.player');//passando a class player
const pipe = document.querySelector('.pipe');//passando a class pipe

/**Salto */
const jump = () => {
    console.log('Saltou');
    player.classList.add('jump');

    setTimeout(() => {
        player.classList.remove('jump');
        console.log('Voltou pro chão');
    }, 500);
}

const loop = setInterval(() => {
    //console.log('intervalo');
    const pipePosition = pipe.offsetLeft;
    const playerPosition = +window.getComputedStyle(player).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && playerPosition < 60) {
        console.log('colidiu');

        pipe.style.animation = 'none';//Para a amovimentação do zumbi 
        pipe.style.left = `${pipePosition}px`;//atualiza a posição do zumbi ao colidir

        player.style.animation = 'none';//Para a amovimentação do player 
        player.style.bottom = `${playerPosition}px`;//atualiza a posição do player ao colidir

        /**Game over*/
        player.src = './images/game_over.png';//caminho da imagem
        player.style.width = '65px'; // largura da imagem 
        player.style.marginLeft = '50px'; //afasta da margin esquerda
        
        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);



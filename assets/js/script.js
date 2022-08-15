


const jump = () => {

  


    document.querySelector('.mario').classList.add('jump')

    setTimeout(() => {
        document.querySelector('.mario').classList.remove('jump')
    }, 500)  
}

const loop = setInterval(() => {

    console.log('lup')
    
    const pipePosition = document.querySelector('.pipe').offsetLeft;
    const marioPosition = +window.getComputedStyle(document.querySelector('.mario')).bottom.replace('px', '');

   

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        document.querySelector('.pipe').style.animation = 'none'
        document.querySelector('.pipe').style.left = `${pipePosition}px`;

        document.querySelector('.mario').style.animation = 'none'
        document.querySelector('.mario').style.bottom = `${marioPosition}px`;

        document.querySelector('.mario').src = './assets/images/game-over.png';
        document.querySelector('.mario').style.width = '75px';
        document.querySelector('.mario').style.marginLeft = '50px';

    }
}, 10)

document.addEventListener('keydown', jump);
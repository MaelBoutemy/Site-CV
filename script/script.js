'use strict';

window.addEventListener('load', event=>{


    function btn() {
    let button = document.querySelector('#button');

    let btnC = button.getContext('2d');

    btnC.beginPath()
    btnC.moveTo(0,0)
    btnC.lineTo(70,75)
    btnC.lineTo(0,75)
    btnC.lineTo(150,75)
    btnC.fillStyle = "#ffdb42";
    btnC.fill()

    btnC.beginPath()
    btnC.moveTo(150,75)
    btnC.lineTo(70,75)
    btnC.lineTo(0,150)
    btnC.lineTo(150,75)
    btnC.fillStyle = "#ff936a";
    btnC.fill()
    }

    setTimeout(btn, 4000)

    function transition() {

        let me = document.querySelector('.me')
        let xp = document.querySelector('.xp')

        me.style.display = "none"
        xp.style.width = "100%"

    }

    button.addEventListener('click', transition)
    
})
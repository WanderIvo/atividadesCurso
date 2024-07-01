const title = document.getElementById("titulo")
title.innerText = ("Tripo Games")

var a = document.getElementById('botao')
        a.addEventListener('click', clicar)
        a.addEventListener('mouseout', sair)
        
        function clicar(){
            a.style.backgroundColor = "blueviolet"
            a.style.color = "white"
        }
        function sair(){
            a.style.backgroundColor = 'white'
            a.style.color = "blueviolet"
        }    

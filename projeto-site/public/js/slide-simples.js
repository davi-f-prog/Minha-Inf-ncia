var intervalo = 3000; 

function slide1(){
 
             document.getElementById('banner').src = 'imagens/home/slide1.png';
             txt_slide1.innerHTML = `Bem Vindo<br> A <br> <span style="color: blue;"> Minha Infância</span>`;
             txt_slide2.innerHTML = '';
             txt_slide3.innerHTML = '';
             gif_sonic.src = '';
             gif_yoshi.src = '';
             setTimeout("slide2()", intervalo);
}
function slide2(){
 
    document.getElementById('banner').src = 'imagens/home/slide2.png';
    txt_slide1.innerHTML = '';
    txt_slide2.innerHTML =`Welcome Wold<br> Confira os games dos anos 90<br><a href="./gamer.html">Start Game</a>`;
    txt_slide3.innerHTML = '';
    gif_sonic.src = 'imagens/gamer/sonic2.gif';
    gif_yoshi.src = 'imagens/gamer/yoshi.gif';
    setTimeout("slide3()", intervalo);
}
function slide3(){
    
    document.getElementById('banner').src = 'imagens/home/slide3.png';
    txt_slide1.innerHTML ='';
    txt_slide2.innerHTML = '';
    txt_slide3.innerHTML = `O universo dos Animes<br>Anos 90<br><br><a href="./anime.html">Confira</a> `;
    gif_sonic.src = 'imagens/anime/charmander.gif';
    gif_yoshi.src = 'imagens/anime/pikashu.gif';
    setTimeout("slide1()", intervalo);
}

var intervalo = 20000; 

function slide1(){
 
             document.getElementById('banner').src = 'imagens/home/fundo1.png';
             txt_banner.innerHTML = `Bem Vindo<br> A <br> Minha Infância`;
             gif_sonic.src = '';
             gif_yoshi.src = '';
             setTimeout("slide2()", intervalo);
}
function slide2(){
 
    document.getElementById('banner').src = 'imagens/home/slide2.png';
    txt_banner.innerHTML ='';
    gif_sonic.src = 'imagens/gamer/sonic2.gif';
    gif_yoshi.src = 'imagens/gamer/yoshi.gif';
    setTimeout("slide3()", intervalo);
}
function slide3(){
    
    document.getElementById('banner').src = 'imagens/anime/cenario1.jpg';
    txt_banner.innerHTML ='';
    gif_sonic.src = '';
    gif_yoshi.src = '';
    setTimeout("slide1()", intervalo);
}

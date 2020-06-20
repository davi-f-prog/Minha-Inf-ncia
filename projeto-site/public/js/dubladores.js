function dublador1_pergunta1(){
    if(personagem1.value == "naruto" || personagem1.value == "goku" || personagem1.value == "yusuke"){
     resposta1_dublador1.innerHTML = `<span style="color: white;">Como ousa errar o cavaleiro de pegasus? Rsrsrsr
        pelo visto me parece que você não sabe tão bem assim o personagem PEGASUS<br></span>`;

        img_resposta1_dublador1.src = 'imagens/home/meu-avatar-bravo.png';
        
    }
    else{
     resposta1_dublador1.innerHTML=`<span style="color: white;">Seria Surpreedente se errasse! Mas meus parabéns,
     você realmente conhece o Seya de Pegasus<br></span>`

     img_resposta1_dublador1.src = 'imagens/home/meu-avatar-alegre.png';
    }
}
function dublador1_pergunta2(){
    if(dublador1.value=="wendel" || dublador1.value=="marco" || dublador1.value== "ursula"){
     resposta2_dublador1.innerHTML = `<span style="color: white;">Errouuuuuuu!!(imagine o faustão falando),
     Pois bem, já imaginava isso, você não é tão fã quanto eu.<br></span>`;

     img_resposta2_dublador1.src = 'imagens/home/meu-avatar-gato.png';
    }
    else{
     resposta2_dublador1.innerHTML = `<span style="color: white;">Ai  que legal! Você realmente sabe, meus parabéns<br></span>`;

     img_resposta2_dublador1.src = 'imagens/home/meu-avatar-alegre.png';
    }
} 

function revelar_dublador1(){
 historia_dublador1.style.display = 'block';
 dublador1_question.style.display = 'none';
}  


// Segundo Dublador -----------------------------------------------------------------------------------------

function dublador2_pergunta1(){
    if(personagem2.value == "naruto" || personagem2.value == "goku" || personagem2.value == "seya"){
     resposta1_dublador2.innerHTML = `<span style="color: white;">Pelo que me parece você não é tão velho!
         pois só os mais experientes conseguem saber!<br></span>`;

        img_resposta1_dublador2.src = 'imagens/home/meu-avatar-tedio.png';
        
    }
    else{
     resposta1_dublador2.innerHTML =`<span style="color: white;">Oh My God! Você acertou não acredito! Namore comigo?<br></span>`

     img_resposta1_dublador2.src = 'imagens/home/meu-avatar-flores.png';
    }
}
function dublador2_pergunta2(){
    if(dublador2.value=="wendel" || dublador2.value=="hermes" || dublador2.value== "ursula"){
     resposta2_dublador2.innerHTML = `<span style="color: white;">Você nem chegou perto! Não fique chateado, só um em 
         um milhão conseguiria!<br></span>`;

     img_resposta2_dublador2.src = 'imagens/home/meu-avatar-gato.png';
    }
    else{
     resposta2_dublador2.innerHTML = `<span style="color: white;">Você é incrivel! Quer casar Comigo? Eu você e o nosso cachorro.<br></span>`;

     img_resposta2_dublador2.src = 'imagens/home/meu-avatar-dog.png';
    }
} 

function revelar_dublador2(){
 historia_dublador2.style.display = 'block';
 dublador2_question.style.display = 'none';
}

//--------------------------------------- Terceira Função Dublador ---------------------------------------

function dublador3_pergunta1(){
    if(personagem3.value == "hancock" || personagem3.value == "sakura"){
     resposta1_dublador3.innerHTML = `<span style="color: white;">Você acaba de errar a melhor girl power 
         dos animes<br></span>`;

        img_resposta1_dublador3.src = 'imagens/home/meu-avatar-sailor1.png';
        
    }
    else if(personagem3.value=="usagi"){
     resposta1_dublador3.innerHTML = `<span style="color: white;">Olha acho que você não reparou que a foto é da
         Usagi Tsukino assumindo seu alter-ego Sailor Moon<br></span>`;

         img_resposta1_dublador3.src = 'imagens/home/meu-avatar-sailor3.png';
    }
    else{
     resposta1_dublador3.innerHTML =`<span style="color: white;">Uhuuuuuuuu!! Vamos se tornar super-heroínas
          cósmicas com o objetivo de guardar a Terra.<br></span>`

          img_resposta1_dublador3.src = 'imagens/home/meu-avatar-sailor4.png';
    }
}
function dublador3_pergunta2(){
    if(dublador3.value=="wendel" || dublador3.value=="hermes" || dublador3.value== "ursula"){
     resposta2_dublador3.innerHTML = `<span style="color: white;">Tudo bem, tudo bem. è normal errar isso!("como ele conseguiu erra isso")
         <br></span>`;

     img_resposta2_dublador3.src = 'imagens/home/meu-avatar-sailor6.png';
    }
    else{
     resposta2_dublador3.innerHTML = `<span style="color: white;">Ai que fofo! Você realmente é sabe muito!! Valeu a pena
         vestir essa roupa e ficar horas fazendo chapinha!.<br></span>`;

     img_resposta2_dublador3.src = 'imagens/home/meu-avatar-sailor5.png';
    }
} 

function revelar_dublador3(){
 historia_dublador3.style.display = 'block';
 dublador3_question.style.display = 'none';
}

//--------------------------------------------Quarta Função Dublador----------------------------------------------------------

function dublador4_pergunta1(){
    if(personagem4.value == "madara" || personagem4.value == "neji" || personagem4.value == "ikki"){
     resposta1_dublador4.innerHTML = `<span style="color: white;">Como você pode ter errado o goku? Você
                                      ouviu o audio? Estou chorando agora!<br></span>`;

        img_resposta1_dublador4.src = 'imagens/home/meu-avatar-chorando.png';
        
    }
    else{
     resposta1_dublador4.innerHTML=`<span style="color: white;">Olha não fiquei surpreso, a resposta estava na cara! 
                                       Mas parabéns!!!<br></span>`

     img_resposta1_dublador4.src = 'imagens/home/meu-avatar-luta2.png';
    }
}
function dublador4_pergunta2(){
    if(dublador4.value=="hermes" || dublador4.value=="marco" || dublador4.value== "ursula"){
     resposta2_dublador4.innerHTML = `<span style="color: white;">Errouuuuuuu!!(imagine o faustão falando),
     Pois bem, já imaginava isso, você não é tão fã quanto eu.<br></span>`;

     img_resposta2_dublador4.src = 'imagens/home/meu-avatar-tedio.png';
    }
    else{
     resposta2_dublador4.innerHTML = `<span style="color: white;">Olocooooooo!! Você é um mito!!<br></span>`;

     img_resposta2_dublador4.src = 'imagens/home/meu-avatar-luta3.png';
    }
} 

function revelar_dublador4(){
 historia_dublador4.style.display = 'block';
 dublador4_question.style.display = 'none';
} 

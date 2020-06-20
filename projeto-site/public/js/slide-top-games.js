var contador = 1;
function proximo(){
   contador++
   if(contador > 11){
      contador = 1
  }
  if(contador == 1){
   slide_img.style.backgroundImage = "url('imagens/gamer/fundosonic.png')";
   txt_slide.style.backgroundColor = '#2100a5';
     img_anime.src = 'imagens/gamer/sonic-hedgehog.gif';
     txt1.style.display = 'block';
     txt2.style.display = 'none';
     txt3.style.display = 'none';
     txt4.style.display = 'none';
     txt5.style.display = 'none';
     txt6.style.display = 'none';
     txt7.style.display = 'none';
     txt8.style.display = 'none';
     txt9.style.display = 'none';
     txt10.style.display = 'none';
     txt11.style.display = 'none';
   }
   else if(contador == 2){
     slide_img.style.backgroundImage = "url('imagens/gamer/fundostreet-of-rage.png')";
     txt_slide.style.backgroundColor = '#000021';
     txt1.style.display = 'none';
     img_anime.src = 'imagens/gamer/streets-of-rage.gif';
     txt2.style.display = 'block';
     txt3.style.display = 'none';
     txt4.style.display = 'none';
     txt5.style.display = 'none';
     txt6.style.display = 'none';
     txt7.style.display = 'none';
     txt8.style.display = 'none';
     txt9.style.display = 'none';
     txt10.style.display = 'none';
     txt11.style.display = 'none';
   }
   else if(contador == 3){
     img_anime.src = 'imagens/gamer/super-mario-world.gif';
     slide_img.style.backgroundImage = "url('imagens/gamer/fundo-mario-world.jpg')";
     txt_slide.style.backgroundColor = '#023e62';
     txt1.style.display = 'none';
     txt2.style.display = 'none';
     txt3.style.display = 'block';
     txt4.style.display = 'none';
     txt5.style.display = 'none';
     txt6.style.display = 'none';
     txt7.style.display = 'none';
     txt8.style.display = 'none';
     txt9.style.display = 'none';
     txt10.style.display = 'none';
     txt11.style.display = 'none';
   }
   else if(contador == 4){
     img_anime.src = 'imagens/gamer/zelda-gif.gif';
     slide_img.style.backgroundImage = "url('imagens/gamer/fundo-zelda.png')";
     txt_slide.style.backgroundColor = '#4b9a49';
     txt1.style.display = 'none';
     txt2.style.display = 'none';
     txt3.style.display = 'none';
     txt4.style.display = 'block';
     txt5.style.display = 'none';
     txt6.style.display = 'none';
     txt7.style.display = 'none';
     txt8.style.display = 'none';
     txt9.style.display = 'none';
     txt10.style.display = 'none';
     txt11.style.display = 'none';
   }
   else if(contador == 5){
     slide_img.style.backgroundImage = "url('imagens/gamer/fundo-golden-axe.png')";
     txt_slide.style.backgroundColor = '#2a5252';
     img_anime.src = 'imagens/gamer/golden-axe.gif';
     txt1.style.display = 'none';
     txt2.style.display = 'none';
     txt3.style.display = 'none';
     txt4.style.display = 'none';
     txt5.style.display = 'block';
     txt6.style.display = 'none';
     txt7.style.display = 'none';
     txt8.style.display = 'none';
     txt9.style.display = 'none';
     txt10.style.display = 'none';
     txt11.style.display = 'none';
   }
   else if(contador == 6){
     slide_img.style.backgroundImage = "url('imagens/gamer/fundo-mortal-kombat.jpg')";
     txt_slide.style.backgroundColor = '#1b1b1b';
     img_anime.src = 'imagens/gamer/mortal-kombat.gif';
     txt1.style.display = 'none';
     txt2.style.display = 'none';
     txt3.style.display = 'none';
     txt4.style.display = 'none';
     txt5.style.display = 'none';
     txt6.style.display = 'block';
     txt7.style.display = 'none';
     txt8.style.display = 'none';
     txt9.style.display = 'none';
     txt10.style.display = 'none';
     txt11.style.display = 'none';
   }
   else if(contador == 7){
     slide_img.style.backgroundImage = "url('imagens/gamer/fundo-mega-man.png')";
     txt_slide.style.backgroundColor = '#875973';
     img_anime.src = 'imagens/gamer/mega-man.gif';
     txt1.style.display = 'none';
     txt2.style.display = 'none';
     txt3.style.display = 'none';
     txt4.style.display = 'none';
     txt5.style.display = 'none';
     txt6.style.display = 'none';
     txt7.style.display = 'block';
     txt8.style.display = 'none';
     txt9.style.display = 'none';
     txt10.style.display = 'none';
     txt11.style.display = 'none';
   }
   else if(contador == 8){
     slide_img.style.backgroundImage = "url('imagens/gamer/fundo-bonanza-bros.png')";
     txt_slide.style.backgroundColor = '#220021';
     img_anime.src = 'imagens/gamer/bonanza-brother.gif';
     txt1.style.display = 'none';
     txt2.style.display = 'none';
     txt3.style.display = 'none';
     txt4.style.display = 'none';
     txt5.style.display = 'none';
     txt6.style.display = 'none';
     txt7.style.display = 'none';
     txt8.style.display = 'block';
     txt9.style.display = 'none';
     txt10.style.display = 'none';
     txt11.style.display = 'none';
   }
   else if(contador == 9){
     slide_img.style.backgroundImage = "url('imagens/gamer/fundo-residente-evil3.jpg')";
     txt_slide.style.backgroundColor = '#413d34';
     img_anime.src = 'imagens/gamer/resident-evil.gif';
     txt1.style.display = 'none';
     txt2.style.display = 'none';
     txt3.style.display = 'none';
     txt4.style.display = 'none';
     txt5.style.display = 'none';
     txt6.style.display = 'none';
     txt7.style.display = 'none';
     txt8.style.display = 'none';
     txt9.style.display = 'block';
     txt10.style.display = 'none';
     txt11.style.display = 'none';
   }
   else if(contador == 10){
     slide_img.style.backgroundImage = "url('imagens/gamer/fundo-macaco.png')";
     txt_slide.style.backgroundColor = '#075204';
     img_anime.src = 'imagens/gamer/donkey-kong.gif';
     txt1.style.display = 'none';
     txt2.style.display = 'none';
     txt3.style.display = 'none';
     txt4.style.display = 'none';
     txt5.style.display = 'none';
     txt6.style.display = 'none';
     txt7.style.display = 'none';
     txt8.style.display = 'none';
     txt9.style.display = 'none';
     txt10.style.display = 'block';
     txt11.style.display = 'none';

   }
   else if(contador == 11){
    slide_img.style.backgroundImage = "url('imagens/gamer/fundo-street-fighter.jpg')";
    txt_slide.style.backgroundColor = '#856445';
    img_anime.src = 'imagens/gamer/street-fighter.gif';
    txt1.style.display = 'none';
    txt2.style.display = 'none';
    txt3.style.display = 'none';
    txt4.style.display = 'none';
    txt5.style.display = 'none';
    txt6.style.display = 'none';
    txt7.style.display = 'none';
    txt8.style.display = 'none';
    txt9.style.display = 'none';
    txt10.style.display = 'none';
    txt11.style.display = 'block';
   }
   msg.innerHTML = contador;
    
}
function anterior(){
  
  contador--
  if(contador < 1){
      contador = 11
  }
  if(contador == 1){
    slide_img.style.backgroundImage = "url('imagens/anime/constelação.jpg')";
    txt_slide.style.backgroundColor = 'rgb(5, 11, 63)';
      img_anime.src = 'imagens/anime/cvz.gif';
      txt1.style.display = 'block';
      txt2.style.display = 'none';
      txt3.style.display = 'none';
      txt4.style.display = 'none';
      txt5.style.display = 'none';
      txt6.style.display = 'none';
      txt7.style.display = 'none';
      txt8.style.display = 'none';
      txt9.style.display = 'none';
      txt10.style.display = 'none';
      txt11.style.display = 'none';
    }
    else if(contador == 2){
      slide_img.style.backgroundImage = "url('imagens/anime/cenario1.jpg')";
      txt_slide.style.backgroundColor = 'rgb(0, 133, 67)';
      txt1.style.display = 'none';
      img_anime.src = 'imagens/anime/dbz.gif';
      txt2.style.display = 'block';
      txt3.style.display = 'none';
      txt4.style.display = 'none';
      txt5.style.display = 'none';
      txt6.style.display = 'none';
      txt7.style.display = 'none';
      txt8.style.display = 'none';
      txt9.style.display = 'none';
      txt10.style.display = 'none';
      txt11.style.display = 'none';
    }
    else if(contador == 3){
      img_anime.src = 'imagens/anime/pokemon.gif';
      slide_img.style.backgroundImage = "url('imagens/anime/fundopokemon.jpg')";
      txt_slide.style.backgroundColor = 'rgb(202, 45, 45)';
      txt1.style.display = 'none';
      txt2.style.display = 'none';
      txt3.style.display = 'block';
      txt4.style.display = 'none';
      txt5.style.display = 'none';
      txt6.style.display = 'none';
      txt7.style.display = 'none';
      txt8.style.display = 'none';
      txt9.style.display = 'none';
      txt10.style.display = 'none';
      txt11.style.display = 'none';
    }
    else if(contador == 4){
      img_anime.src = 'imagens/anime/sailor.gif';
      slide_img.style.backgroundImage = "url('imagens/anime/fundosailor.jpg')";
      txt_slide.style.backgroundColor = 'rgb(202, 51, 152)';
      txt1.style.display = 'none';
      txt2.style.display = 'none';
      txt3.style.display = 'none';
      txt4.style.display = 'block';
      txt5.style.display = 'none';
      txt6.style.display = 'none';
      txt7.style.display = 'none';
      txt8.style.display = 'none';
      txt9.style.display = 'none';
      txt10.style.display = 'none';
      txt11.style.display = 'none';
    }
    else if(contador == 5){
      slide_img.style.backgroundImage = "url('imagens/anime/fundosamurai.jpg')";
      txt_slide.style.backgroundColor = 'rgb(128, 47, 0)';
      img_anime.src = 'imagens/anime/samuraix2.gif';
      txt1.style.display = 'none';
      txt2.style.display = 'none';
      txt3.style.display = 'none';
      txt4.style.display = 'none';
      txt5.style.display = 'block';
      txt6.style.display = 'none';
      txt7.style.display = 'none';
      txt8.style.display = 'none';
      txt9.style.display = 'none';
      txt10.style.display = 'none';
      txt11.style.display = 'none';
    }
    else if(contador == 6){
      slide_img.style.backgroundImage = "url('imagens/anime/fundoyugioh.png')";
      txt_slide.style.backgroundColor = '#05094d';
      img_anime.src = 'imagens/anime/yugioh.gif';
      txt1.style.display = 'none';
      txt2.style.display = 'none';
      txt3.style.display = 'none';
      txt4.style.display = 'none';
      txt5.style.display = 'none';
      txt6.style.display = 'block';
      txt7.style.display = 'none';
      txt8.style.display = 'none';
      txt9.style.display = 'none';
      txt10.style.display = 'none';
      txt11.style.display = 'none';
    }
    else if(contador == 7){
      slide_img.style.backgroundImage = "url('imagens/anime/fundoinuyasha.jpg')";
      txt_slide.style.backgroundColor = 'rgb(134, 128, 128)';
      img_anime.src = 'imagens/anime/inuyasha.gif';
      txt1.style.display = 'none';
      txt2.style.display = 'none';
      txt3.style.display = 'none';
      txt4.style.display = 'none';
      txt5.style.display = 'none';
      txt6.style.display = 'none';
      txt7.style.display = 'block';
      txt8.style.display = 'none';
      txt9.style.display = 'none';
      txt10.style.display = 'none';
      txt11.style.display = 'none';
    }
    else if(contador == 8){
      slide_img.style.backgroundImage = "url('imagens/anime/fundohunter.png')";
      txt_slide.style.backgroundColor = '#2b4b4c';
      img_anime.src = 'imagens/anime/hunter.gif';
      txt1.style.display = 'none';
      txt2.style.display = 'none';
      txt3.style.display = 'none';
      txt4.style.display = 'none';
      txt5.style.display = 'none';
      txt6.style.display = 'none';
      txt7.style.display = 'none';
      txt8.style.display = 'block';
      txt9.style.display = 'none';
      txt10.style.display = 'none';
      txt11.style.display = 'none';
    }
    else if(contador == 9){
      slide_img.style.backgroundImage = "url('imagens/anime/fundohakusho.jpg')";
      txt_slide.style.backgroundColor = '#393567';
      img_anime.src = 'imagens/anime/yuyuhakusho2.gif';
      txt1.style.display = 'none';
      txt2.style.display = 'none';
      txt3.style.display = 'none';
      txt4.style.display = 'none';
      txt5.style.display = 'none';
      txt6.style.display = 'none';
      txt7.style.display = 'none';
      txt8.style.display = 'none';
      txt9.style.display = 'block';
      txt10.style.display = 'none';
      txt11.style.display = 'none';
    }
    else if(contador == 10){
      slide_img.style.backgroundImage = "url('imagens/anime/fundodigimon.jpg')";
      txt_slide.style.backgroundColor = '#4f97d1';
      img_anime.src = 'imagens/anime/digimon.gif';
      txt1.style.display = 'none';
      txt2.style.display = 'none';
      txt3.style.display = 'none';
      txt4.style.display = 'none';
      txt5.style.display = 'none';
      txt6.style.display = 'none';
      txt7.style.display = 'none';
      txt8.style.display = 'none';
      txt9.style.display = 'none';
      txt10.style.display = 'block';
      txt11.style.display = 'none';
 
    }
    else if(contador == 11){
     slide_img.style.backgroundImage = "url('imagens/anime/floresta-anime.png')";
     txt_slide.style.backgroundColor = 'rgb(6, 158, 39)';
     img_anime.src = 'imagens/anime/one-piece.gif';
     txt1.style.display = 'none';
     txt2.style.display = 'none';
     txt3.style.display = 'none';
     txt4.style.display = 'none';
     txt5.style.display = 'none';
     txt6.style.display = 'none';
     txt7.style.display = 'none';
     txt8.style.display = 'none';
     txt9.style.display = 'none';
     txt10.style.display = 'none';
     txt11.style.display = 'block';
    }
    msg.innerHTML = contador;
     
 }
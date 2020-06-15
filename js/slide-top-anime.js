var contador = 1;
function proximo(){
   contador++
   if(contador > 11){
      contador = 1
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
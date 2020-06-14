var contador = 1;
function proximo(){
   contador++
   if(contador > 10){
      contador = 1
  }
  if(contador == 1){
   slide_img.style.backgroundImage = "url('imagens/constelação.jpg')";
   txt_slide.style.backgroundColor = 'rgb(5, 11, 63)';
     img_anime.src = 'imagens/cvz.gif';
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
   }
   else if(contador == 2){
     slide_img.style.backgroundImage = "url('imagens/cenario1.jpg')";
     txt_slide.style.backgroundColor = 'rgb(0, 133, 67)';
     txt1.style.display = 'none';
     img_anime.src = 'imagens/dbz.gif';
     txt2.style.display = 'block';
     txt3.style.display = 'none';
     txt4.style.display = 'none';
     txt5.style.display = 'none';
     txt6.style.display = 'none';
     txt7.style.display = 'none';
     txt8.style.display = 'none';
     txt9.style.display = 'none';
     txt10.style.display = 'none';
   }
   else if(contador == 3){
     img_anime.src = 'imagens/pokemon.gif';
     slide_img.style.backgroundImage = "url('imagens/fundopokemon.jpg')";
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
   }
   else if(contador == 4){
     img_anime.src = 'imagens/sailor.gif';
     slide_img.style.backgroundImage = "url('imagens/fundosailor.jpg')";
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
   }
   else if(contador == 5){
     slide_img.style.backgroundImage = "url('imagens/fundosamurai.jpg')";
     txt_slide.style.backgroundColor = 'rgb(128, 47, 0)';
     img_anime.src = 'imagens/samuraix2.gif';
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
   }
   else if(contador == 6){
     slide_img.style.backgroundImage = "url('imagens/fundoyugioh.png')";
     txt_slide.style.backgroundColor = '#05094d';
     img_anime.src = 'imagens/yugiho.gif';
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
   }
   else if(contador == 7){
     slide_img.style.backgroundImage = "url('imagens/fundoinuyasha.jpg')";
     txt_slide.style.backgroundColor = 'rgb(134, 128, 128)';
     img_anime.src = 'imagens/inuyasha.gif';
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
   }
   else if(contador == 8){
     slide_img.style.backgroundImage = "url('imagens/fundohunter.png')";
     txt_slide.style.backgroundColor = '#2b4b4c';
     img_anime.src = 'imagens/hunter.gif';
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
   }
   else if(contador == 9){
     slide_img.style.backgroundImage = "url('imagens/fundohakusho.jpg')";
     txt_slide.style.backgroundColor = '#393567';
     img_anime.src = 'imagens/yuyuhakusho2.gif';
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
   }
   else if(contador == 10){
     slide_img.style.backgroundImage = "url('imagens/fundodigimon.jpg')";
     txt_slide.style.backgroundColor = '#4f97d1';
     img_anime.src = 'imagens/digimon.gif';
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
   }
   msg.innerHTML = contador;
    
}
function anterior(){
  
  contador--
  if(contador < 1){
      contador = 10
  }
  if(contador == 1){
   slide_img.style.backgroundImage = "url('imagens/constelação.jpg')";
   txt_slide.style.backgroundColor = 'rgb(5, 11, 63)';
     img_anime.src = 'imagens/cvz.gif';
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
   }
   else if(contador == 2){
     slide_img.style.backgroundImage = "url('imagens/cenario1.jpg')";
     txt_slide.style.backgroundColor = 'rgb(0, 133, 67)';
     txt1.style.display = 'none';
     img_anime.src = 'imagens/dbz.gif';
     txt2.style.display = 'block';
     txt3.style.display = 'none';
     txt4.style.display = 'none';
     txt5.style.display = 'none';
     txt6.style.display = 'none';
     txt7.style.display = 'none';
     txt8.style.display = 'none';
     txt9.style.display = 'none';
     txt10.style.display = 'none';
   }
   else if(contador == 3){
     img_anime.src = 'imagens/pokemon.gif';
     slide_img.style.backgroundImage = "url('imagens/fundopokemon.jpg')";
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
   }
   else if(contador == 4){
     img_anime.src = 'imagens/sailor.gif';
     slide_img.style.backgroundImage = "url('imagens/fundosailor.jpg')";
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
   }
   else if(contador == 5){
     slide_img.style.backgroundImage = "url('imagens/fundosamurai.jpg')";
     txt_slide.style.backgroundColor = 'rgb(128, 47, 0)';
     img_anime.src = 'imagens/samuraix2.gif';
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
   }
   else if(contador == 6){
     slide_img.style.backgroundImage = "url('imagens/fundoyugioh.png')";
     txt_slide.style.backgroundColor = '#05094d';
     img_anime.src = 'imagens/yugiho.gif';
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
   }
   else if(contador == 7){
     slide_img.style.backgroundImage = "url('imagens/fundoinuyasha.jpg')";
     txt_slide.style.backgroundColor = 'rgb(134, 128, 128)';
     img_anime.src = 'imagens/inuyasha.gif';
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
   }
   else if(contador == 8){
     slide_img.style.backgroundImage = "url('imagens/fundohunter.png')";
     txt_slide.style.backgroundColor = '#2b4b4c';
     img_anime.src = 'imagens/hunter.gif';
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
   }
   else if(contador == 9){
     slide_img.style.backgroundImage = "url('imagens/fundohakusho.jpg')";
     txt_slide.style.backgroundColor = '#393567';
     img_anime.src = 'imagens/yuyuhakusho2.gif';
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
   }
   else if(contador == 10){
     slide_img.style.backgroundImage = "url('imagens/fundodigimon.jpg')";
     txt_slide.style.backgroundColor = '#4f97d1';
     img_anime.src = 'imagens/digimon.gif';
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
   }
   msg.innerHTML = contador;

}
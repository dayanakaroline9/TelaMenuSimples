//função para descer a borda
function descerBorda(){
  
  //borda esta no botão 1
  if(bordaY==botY1){
    bordaY=botY2; //vai para o Botão 2
  }
  
  //borda esta no botão 2
  else if(bordaY==botY2){
    bordaY=botY3; //vai para o Botão 3
  }
  
  //borda esta no botão 3
  else if(bordaY==botY3){
    bordaY=botY1; //vai para o Botão 1
  }
}

//função para subir a borda
function subirBorda(){
  
  //borda esta no botão 1
  if(bordaY==botY1){
    bordaY=botY3; //vai para o Botão 3
  }
  
  //borda esta no botão 2
  else if(bordaY==botY2){
    bordaY=botY1; //vai para o Botão 1
  }
  
  //borda esta no botão 3
  else if(bordaY==botY3){
    bordaY=botY2; //vai para o Botão 2
  }
}

function trocaTela(){
  
  //borda esta no botão 1
  if(bordaY==botY1){
    tela=1; //abre tela 1
  }
  
  //borda esta no botão 2
  else if(bordaY==botY2){
    tela=2; //abre tela 2
  }
  
  //borda esta no botão 3
  else if(bordaY==botY3){
    tela=3; //abre tela 3
  }
}

function keyPressed(){
  //controle tema de menu
  if(tela==0){
    
    //tecla de seta para baixo
    if(keyCode==DOWN_ARROW){
      descerBorda();
    }
    
    //tecla de seta para cima
    else if(keyCode==UP_ARROW){
      subirBorda();
    }
    
    //tecla de enter
    else if(keyCode==ENTER){
      trocaTela();
    }
       
    
  }
  
  //Tecla ESC
  if(tela!=0 && keyCode==ESCAPE){
    tela=0; //abre tela de menu
  }
}
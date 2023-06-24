function mouseClicked() {
  
  //controle tela de menu
  if(tela==0){
    //Botão tela 1
    if(mouseX>=botX && mouseX<=(botX+botL) && mouseY>=botY1 && mouseY<=(botY1+botH)){
      tela=1; //abre tela 1
    }
    //Botão tela 2
    else if(mouseX>=botX && mouseX<=(botX+botL) && mouseY>=botY2 && mouseY<=(botY2+botH)){
      tela=2; //abre tela 2
    }
    //Botão tela 3
    else if(mouseX>=botX && mouseX<=(botX+botL) && mouseY>=botY3 && mouseY<=(botY3+botH)){
      tela=3; //abre tela 3
    }
  }
  
  //Controle das outras telas
  else if(tela!=0){
    //botão de voltar
    if(mouseX>=botX && mouseX<=(botX+botL) && mouseY>=botVY && mouseY<=(botVY+botH)){
      tela=0; //abre tela de menu
    }
  }
  
  
}
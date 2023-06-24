function menu(){
  //Cor de fundo do canvas
  background(123,253,145);
  
  //botões
  push();
    //cor dos botões
    fill("white");
    //tela 1
    rect(botX,botY1,botL,botH);
    //tela 2
    rect(botX,botY2,botL,botH);
    //tela 3
    rect(botX,botY3,botL,botH);
  pop();
  
  //textos
  push();
    //tamanho da fonte
    textSize(20);
    //cor do texto
    fill("black"); 
    //botão 1
    text("Tela 1",botX+20,botY1+20); 
    //botão 2
    text("Tela 2",botX+20,botY2+20); 
    //botão 3
    text("Tela 3",botX+20,botY3+20); 
  pop();
  
  //borda de controle
  push();
    //sem preenchimento
    noFill();
    //espessura da borda
    strokeWeight(3);
    //cor da borda
    stroke("yellow");
    //borda retangular
    rect(botX,bordaY,botL,botH); 
  pop();
  
}
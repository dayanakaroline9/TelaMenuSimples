# Tela de Menu Simples

Este é um exemplo de tela de menu com 3 botões que levam a 3 subtelas, controladas pelo mouse e teclado.

Para construir esse exemplo, usei a linguagem Javascript acomapanha de HTML e Css basico, usando a biblioteca P5.js que possibitita mais criatividade no desenvolvimento WEB.

As funcões principais são: 
* **setup()** - Esta função é uma função da biblioteca p5.js, nesse exemplo ela é responsavel por criar as configurações iniciais da area de desenho, nela definimos tamanho da tela com o comando **createCanvas()**
  ```javascript
    function setup() {
      createCanvas(400, 400);
    }
  ```
      
* **draw()** -  Esta função é uma função da biblioteca p5.js, nesse exemplo ela é responsavel por projetar os desing de telas que foram criados nas outras funções e são todos chamados por essa função.
  ```javascript
    function draw() {
      if(tela==0){
        menu(); 
      }
      else if(tela==1){
        tela1();
      }
      else if(tela==2){
        tela2();
      }
      else if(tela==3){
        tela3(); 
      }
    }
  ```
* **menu()** - Função da tela de menu foi desenvolvida para mostra a tela desenvolvida com todos os desing que a biblioteca P5.js nos possibilita criar.
  ```javascript
      function menu(){
        background(123,253,145);
        push();
          fill("white");
          rect(botX,botY1,botL,botH);
          rect(botX,botY2,botL,botH);
          rect(botX,botY3,botL,botH);
        pop();
        
        push();
          textSize(20);
          fill("black");
          text("Tela 1",botX+20,botY1+20);
          text("Tela 2",botX+20,botY2+20); 
          text("Tela 3",botX+20,botY3+20); 
        pop();
        
        push();
          noFill();
          strokeWeight(3);
          stroke("yellow");
          rect(botX,bordaY,botL,botH); 
        pop();
      }
  ```
* **mouseClicked()** -  Esta função é uma função da biblioteca p5.js, nesse exemplo, ela que identifica o evento de click do mouse, assim possibilita que possamos prevê onde esse click ocorre para poder dizer ao nosso programa o que faze. Nesta função verificamos todos os eventos importantes que podem ocorrer atraves do click do mouse, que são os enventos de mudança de telas.
  ```javascript
  function mouseClicked() {
    if(tela==0){
      if(mouseX>=botX && mouseX<=(botX+botL) && mouseY>=botY1 && mouseY<=(botY1+botH)){
        tela=1; 
      }
      else if(mouseX>=botX && mouseX<=(botX+botL) && mouseY>=botY2 && mouseY<=(botY2+botH)){
        tela=2;
      }
      else if(mouseX>=botX && mouseX<=(botX+botL) && mouseY>=botY3 && mouseY<=(botY3+botH)){
        tela=3; 
      }
    }
    else if(tela!=0){
      if(mouseX>=botX && mouseX<=(botX+botL) && mouseY>=botVY && mouseY<=(botVY+botH)){
        tela=0; 
      }
    }
  }
  ```
* **keyPressed()** -  Esta função é uma função da biblioteca p5.js, nesse exemplo ela identifica o evento de que uma tecla do teclado foi pressionada, assim podemos identificar qual tecla foi pressionada e realizar a mudança de tela usando o teclado.

  ```javascript
  function keyPressed(){
    if(tela==0){
      if(keyCode==DOWN_ARROW){
        descerBorda();
      }
      else if(keyCode==UP_ARROW){
        subirBorda();
      }
      else if(keyCode==ENTER){
        trocaTela();
      }
    }
    else if(tela!=0 && keyCode==ESCAPE){
      tela=0;
    }
  }
  ```

  As funções **descerBorda()** ,**subirBorda()** e **trocaTela()** foram desenvolvidas para realizar o movimento da borda de controle com o teclado e para trocar as telas de acordo com a posição da borda de controle.

  
  ```javascript
  function descerBorda(){
    if(bordaY==botY1){
      bordaY=botY2;
    }
    else if(bordaY==botY2){
      bordaY=botY3;
    }
    else if(bordaY==botY3){
      bordaY=botY1;
    }
  }
  
  function subirBorda(){
    if(bordaY==botY1){
      bordaY=botY3;
    }
    else if(bordaY==botY2){
      bordaY=botY1;
    }
    else if(bordaY==botY3){
      bordaY=botY2;
    }
  }
  
  function trocaTela(){
    if(bordaY==botY1){
      tela=1;
    }
    else if(bordaY==botY2){
      tela=2;
    }
    else if(bordaY==botY3){
      tela=3;
    }
  }
  ```

As subtelas desenvolvidas são bem simples pois o intuito é mostrar o uso da biblioteca P5.js para criar e controlar telas com mouse e teclado.

  ```javascript
  function tela1(){
    background(123,125,145);
    
    textSize(20)
    text("Estamos na tela 1",100,100);
    
    rect(botX,botVY,botL,botH);
    text("voltar",botX+20,botVY+20);
  }

  function tela2(){
    background(123,125,145);
    
    textSize(20);
    text("Estamos na tela 2",100,100);
    
    rect(botX,botVY,botL,botH);
    text("voltar",botX+20,botVY+20);
  }

  function tela3(){
    background(123,125,145); 
    
    textSize(20);
    text("Estamos na tela 3",100,100);
    
    rect(botX,botVY,botL,botH);
    text("voltar",botX+20,botVY+20);
  }
  ```
  



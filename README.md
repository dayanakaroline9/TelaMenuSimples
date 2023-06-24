# Tela de Menu Simples

Este é um exemplo de uma tela de menu com três botões que conduzem a três subtelas, controladas pelo mouse e teclado.

Para construir esse exemplo, foi utilizada a linguagem Javascript em conjunto com HTML e CSS básico, utilizando a biblioteca P5.js, que permite maior criatividade no desenvolvimento web.

As principais funções incluídas são:

## setup()

Essa função é parte da biblioteca p5.js e, neste exemplo, ela é responsável por criar as configurações iniciais da área de desenho.

  ```javascript
    function setup() {
      createCanvas(400, 400);
    }
  ```
      
## draw()

Essa função é parte da biblioteca p5.js e, neste exemplo, ela é responsável por projetar os designs das telas que foram criados nas outras funções, sendo todas chamadas por essa função.

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
## menu() 

A função da tela de menu foi desenvolvida para exibir a tela criada com todos os designs que a biblioteca P5.js nos permite criar.

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
## mouseClicked()

Essa função é parte da biblioteca p5.js, neste exemplo, ela é responsável por identificar o evento de clique do mouse, permitindo prever onde esse clique ocorre para informar ao programa o que deve ser feito. Nessa função, verificamos todos os eventos relevantes que podem ocorrer através do clique do mouse, como as mudanças de telas.

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

## keyPressed()

Essa função é parte da biblioteca p5.js e, neste exemplo, ela identifica o evento de pressionamento de tecla do teclado. Isso nos permite identificar qual tecla foi pressionada e realizar a mudança de tela utilizando o teclado.

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
## Outras funções e variaveis utilizadas

 
  ```javascript
  //Variaveis
  var tela=0;
  var botX = 150;
  var botY1 = 100;
  var botY2 = 150;
  var botY3 = 200;
  var botL = 100;
  var botH = 30;
  var botVY = 300;
  var bordaY = 100;
  
  //Funções
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
  



//variaveis

var tela=0;

var botX = 150;
var botY1 = 100;
var botY2 = 150;
var botY3 = 200;
var botL = 100;
var botH = 30;

var botVY = 300;

var bordaY = 100;


//Configurações iniciais do canva
function setup() {
  createCanvas(400, 400);
}

//função de desenho
function draw() {
  
  //Tela de menu
  if(tela==0){
    menu(); //chama função da tela de menu
  }
  //Tela 1
  else if(tela==1){
    tela1(); //chama função da tela de menu
  }
  //Tela 2
  else if(tela==2){
    tela2(); //chama função da tela 2
  }
  //Tela 3
  else if(tela==3){
    tela3(); //chama função da tela 3
  }
  
}
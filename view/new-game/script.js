var questao;
var random;
var rodada = [];
var qdtQuestoesExistentes;
var qdtQuestoesParaRodada = 5;

var questoes = [
    ["Our parents protected us ____ the danger.","from","of",1],
    ["I learned _____ the horses.","by","about",2],
    ["Was she invited _____ the party?","of","to",2],
    ["She impressed it _____ silk screen.","on","at",1],
    ["This Avenue was named _____ my grandmother.","from","after",1],
    ["They are going to meet me _____ Saturday","on","in",1],
    ["Julia went to Paris _____ September.","on","in",2]
]

qdtQuestoesExistentes = questoes.length;

function getRandomIntInclusive() {
    min = 0;
    max = qdtQuestoesExistentes-1;
    random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random
}

 
  var i = 0;
  while( i < qdtQuestoesParaRodada){
    random = getRandomIntInclusive()
    for(var j = 0; j <= rodada.length ;j++){
        if(random == rodada[j]){
            break;
        }
        if(j == rodada.length){
            rodada.push(random); 
            i++;
            break;
        }
    }   
  }

for(var i = 0; i < rodada.length ;i++){
  console.log(rodada[i]);
}

var respRodada = [];
var intRodada = 0;

function salvaRodada(intRodada, intResp){
  console.log("aqui 0");
  respRodada.push(intResp);
  intRodada++;
  clearTimeout(settimer);
  atualizaRodada(intRodada);
}

function reenderizaQuestao(num,intRodada){
  console.log("aqui 1");
  var pergunta = questoes[num][0];
  var resposta1 = questoes[num][1];
  var resposta2 = questoes[num][2];

  questao = "<p>"+ pergunta +"</p>"
  + '<buttom class="botao" onclick="salvaRodada('+intRodada+',1)">'+ resposta1 +"</buttom>"
  + '<buttom class="botao" onclick="salvaRodada('+intRodada+',2)">'+ resposta2 +"</buttom>";

  counter = 10;

  document.getElementById("contQuestao").innerHTML = intRodada+1;
  
  document.getElementById("questoes").innerHTML = questao;

  myTimer(intRodada);
 
}

function atualizaRodada(intRodada){
  console.log("aqui 2");
  if(intRodada < rodada.length){
    var num = rodada[intRodada];
    reenderizaQuestao(num,intRodada);
  }else{
    alert("Fim de jogo");
    alert("Você acertou "+ verificarResp()+ " questões.");
  }
}

atualizaRodada(intRodada);

for(var i = 0; i < respRodada.length ;i++){
  console.log(respRodada[i]);
}

var counter = 10;
var settimer;
function myTimer(intRodada) {
    settimer = setTimeout( function() {
    document.getElementById("timer").innerHTML = counter--;
    console.log( counter );
    if( counter >= 0 ) {
      myTimer(intRodada);
    }
    else{
      salvaRodada(intRodada, 0);
      alert("O tempo esgotou.");
    }
  }, 1000 );
}

function verificarResp(){
  var pontos = 0;

  for(var i = 0; i< respRodada.length; i++){
    var num = rodada[i];
    if(respRodada[i] == questoes[num][3]){
      pontos++;
    }
  }
  return pontos;
}


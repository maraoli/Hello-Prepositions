var questao;
var random;
var rodada = [];
var qdtQuestoesExistentes;
var qdtQuestoesParaRodada = 5;

var questoes = [
    ["Questão1","resp1","resp2",1],
    ["Questão2","resp1","resp2",2],
    ["Questão3","resp1","resp2",2],
    ["Questão4","resp1","resp2",1],
    ["Questão5","resp1","resp2",2],
    ["Questão6","resp1","resp2",1],
    ["Questão7","resp1","resp2",1]
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
  intRodada++
  atualizaRodada(intRodada);
}

function reenderizaQuestao(num,intRodada){
  console.log("aqui 1");
  var pergunta = questoes[num][0];
  var resposta1 = questoes[num][1];
  var resposta2 = questoes[num][2];

  questao = "<p>"+ pergunta +"</p>"
  + '<buttom onclick="salvaRodada('+intRodada+',1)">'+ resposta1 +"</buttom>"
  + '<buttom onclick="salvaRodada('+intRodada+',2)">'+ resposta2 +"</buttom>";

  document.getElementById("questoes").innerHTML = questao;
}

function atualizaRodada(intRodada){
  console.log("aqui 2");
  if(intRodada < rodada.length){
    var num = rodada[intRodada];
    reenderizaQuestao(num,intRodada);
  }else{
    alert("Fim de jogo");
  }
}

atualizaRodada(intRodada);

for(var i = 0; i < respRodada.length ;i++){
  console.log(respRodada[i]);
}
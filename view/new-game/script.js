var questao;
var random;
var rodada = [];
var qdtQuestoesProntas;
var qdtQuestoesRodada = 5;

var questoes = [
    ["Questão1","resp1","resp2"],
    ["Questão2","resp1","resp2"],
    ["Questão3","resp1","resp2"],
    ["Questão4","resp1","resp2"],
    ["Questão5","resp1","resp2"],
    ["Questão6","resp1","resp2"],
    ["Questão7","resp1","resp2"]
]

qdtQuestoesProntas = questoes.length;

function getRandomIntInclusive() {
    min = 0;
    max = qdtQuestoesProntas-1;
    random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random
  }

 
  var i = 0;
  while( i < qdtQuestoesRodada){
    random = getRandomIntInclusive()
    console.log("hI");
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
  
var pergunta = questoes[random][0];
var resposta1 = questoes[random][1];
var resposta2 = questoes[random][2];

questao = "<p>"+ pergunta +"</p>"
+ "<div>"+ resposta1 +"</div>"
+ "<div>"+ resposta2 +"</div>";

document.getElementById("questoes").innerHTML = questao;
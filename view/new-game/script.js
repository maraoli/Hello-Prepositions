var questao;
var random = 2;

var questoes = [
    ["Questão1","resp1","resp2"],
    ["Questão2","resp1","resp2"],
    ["Questão3","resp1","resp2"],
    ["Questão4","resp1","resp2"]
]
    
var pergunta = questoes[random][0];
var resposta1 = questoes[random][1];
var resposta2 = questoes[random][2];

questao = "<p>"+ pergunta +"</p>"
+ "<div>"+ resposta1 +"</div>"
+ "<div>"+ resposta2 +"</div>";

document.getElementById("questoes").innerHTML = questao;
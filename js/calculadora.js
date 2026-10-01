document.getElementById("btnComecar").onclick = function () {

    document.querySelector(".calculadora").style.display = "none";

    document.getElementById("quiz").style.display = "flex";

};
const perguntas = [

{
titulo:"Quantas horas por semana você gasta limpando a casa?",
respostas:[
{texto:"Menos de 1 hora", valor:0.5, servico:"Limpeza residencial"},
{texto:"1 a 3 horas", valor:2, servico:"Limpeza residencial"},
{texto:"4 a 6 horas", valor:5, servico:"Limpeza residencial"},
{texto:"Mais de 6 horas", valor:7, servico:"Limpeza residencial"}
]
},

{
titulo:"Quanto tempo você dedica à lavagem de roupas?",
respostas:[
{texto:"Menos de 1 hora", valor:0.5, servico:"Lavagem e passadoria"},
{texto:"1 a 2 horas", valor:1.5, servico:"Lavagem e passadoria"},
{texto:"3 a 5 horas", valor:4, servico:"Lavagem e passadoria"},
{texto:"Mais de 5 horas", valor:6, servico:"Lavagem e passadoria"}
]
},

{
titulo:"Quanto tempo você gasta cozinhando durante a semana?",
respostas:[
{texto:"Até 3 horas", valor:3, servico:"Preparação de refeições"},
{texto:"4 a 7 horas", valor:5.5, servico:"Preparação de refeições"},
{texto:"8 a 12 horas", valor:10, servico:"Preparação de refeições"},
{texto:"Mais de 12 horas", valor:14, servico:"Preparação de refeições"}
]
},

{
titulo:"Quanto tempo você gasta passando roupas durante a semana?",
respostas:[
{texto:"Não passo roupas", valor:0, servico:"Lavagem e passadoria"},
{texto:"Até 1 hora", valor:1, servico:"Lavagem e passadoria"},
{texto:"2 a 4 horas", valor:3, servico:"Lavagem e passadoria"},
{texto:"Mais de 4 horas", valor:5, servico:"Lavagem e passadoria"}
]
},

{
titulo:"Quanto tempo você gasta indo ao supermercado e organizando as compras?",
respostas:[
{texto:"Menos de 1 hora", valor:0.5, servico:"Compras de supermercado"},
{texto:"1 a 2 horas", valor:1.5, servico:"Compras de supermercado"},
{texto:"3 a 5 horas", valor:4, servico:"Compras de supermercado"},
{texto:"Mais de 5 horas", valor:6, servico:"Compras de supermercado"}
]
},

{
titulo:"Quanto tempo você perde resolvendo tarefas administrativas?",
respostas:[
{texto:"Quase nada", valor:0.25, servico:"Assistente pessoal"},
{texto:"1 hora", valor:1, servico:"Assistente pessoal"},
{texto:"2 a 4 horas", valor:3, servico:"Assistente pessoal"},
{texto:"Mais de 4 horas", valor:5, servico:"Assistente pessoal"}
]
},

{
titulo:"Quanto tempo você gasta levando filhos ou familiares para compromissos durante a semana?",
respostas:[
{texto:"Não se aplica", valor:0, servico:"Motorista particular"},
{texto:"Até 2 horas", valor:2, servico:"Motorista particular"},
{texto:"3 a 5 horas", valor:4, servico:"Motorista particular"},
{texto:"Mais de 5 horas", valor:7, servico:"Motorista particular"}
]
},

{
titulo:"Quanto tempo você dedica aos cuidados com animais de estimação?",
respostas:[
{texto:"Não tenho animais", valor:0, servico:"Cuidados com pets"},
{texto:"Até 1 hora", valor:1, servico:"Cuidados com pets"},
{texto:"2 a 3 horas", valor:2.5, servico:"Cuidados com pets"},
{texto:"Mais de 3 horas", valor:5, servico:"Cuidados com pets"}
]
},

{
titulo:"Quanto tempo você gasta fazendo compras de supermercado?",
respostas:[
{texto:"Até 30 minutos", valor:0.5, servico:"Compras de supermercado"},
{texto:"1 a 2 horas", valor:2, servico:"Compras de supermercado"},
{texto:"2 a 4 horas", valor:4, servico:"Compras de supermercado"},
{texto:"Mais de 4 horas", valor:6, servico:"Compras de supermercado"}
]
},

{
titulo:"Quanto tempo você dedica aos cuidados com idosos da família?",
respostas:[
{texto:"Não se aplica", valor:0, servico:"Cuidador de idosos"},
{texto:"Até 2 horas", valor:2, servico:"Cuidador de idosos"},
{texto:"3 a 6 horas", valor:5, servico:"Cuidador de idosos"},
{texto:"Mais de 6 horas", valor:8, servico:"Cuidador de idosos"}
]
},

{
titulo:"Quanto tempo você perde aguardando entregas ou prestadores de serviço?",
respostas:[
{texto:"Quase nunca", valor:0.25, servico:"Assistente pessoal"},
{texto:"Até 1 hora", valor:1, servico:"Assistente pessoal"},
{texto:"2 a 3 horas", valor:3, servico:"Assistente pessoal"},
{texto:"Mais de 3 horas", valor:5, servico:"Assistente pessoal"}
]
},

{
titulo:"Se pudesse delegar apenas uma atividade hoje, qual seria sua prioridade?",
respostas:[
{texto:"Limpeza da casa", valor:2, servico:"Limpeza residencial"},
{texto:"Preparação de refeições", valor:2, servico:"Preparação de refeições"},
{texto:"Cuidados pessoais ou familiares", valor:2, servico:"Cuidados pessoais"},
{texto:"Resolver tarefas do dia a dia", valor:2, servico:"Assistente pessoal"}
]
},

];
let perguntaAtual = 0;
let respostasUsuario = [];
let rankingServicos = {};
const tituloPergunta = document.getElementById("pergunta");
const botoes = document.querySelectorAll(".respostas button");
const contador = document.getElementById("contador");
const barra = document.querySelector(".barra");
const listaServicos = document.getElementById("listaServicos");
function carregarPergunta(){

    const pergunta = perguntas[perguntaAtual];

    tituloPergunta.innerText = pergunta.titulo;

    contador.innerText =
        "Pergunta " + (perguntaAtual + 1) + " de " + perguntas.length;

    pergunta.respostas.forEach(function(resposta, indice){

    botoes[indice].innerText = resposta.texto;

});

    barra.style.width = ((perguntaAtual + 1) / perguntas.length * 100) + "%";

}

carregarPergunta();
botoes.forEach(function(botao, indice){

    botao.addEventListener("click", function(){

       respostasUsuario.push(
    perguntas[perguntaAtual].respostas[indice].valor
);
let servico =
perguntas[perguntaAtual].respostas[indice].servico;

let valor =
perguntas[perguntaAtual].respostas[indice].valor;

if(rankingServicos[servico]){

    rankingServicos[servico] += valor;

}else{

    rankingServicos[servico] = valor;

}
        perguntaAtual++;

        if(perguntaAtual < perguntas.length){

            carregarPergunta();

        }else{

          let totalHoras = 0;

respostasUsuario.forEach(function(valor){

    totalHoras += valor;

});

document.getElementById("quiz").style.display = "none";

document.getElementById("resultado").style.display = "flex";

document.getElementById("tempoFinal").innerText =
    totalHoras.toFixed(1) + " horas por semana";

document.getElementById("tempoAno").innerText =
    "Isso representa aproximadamente " + (totalHoras * 52).toFixed(0) + " horas por ano.";
let lista = document.getElementById("listaServicos");

lista.innerHTML = "";

let ranking = Object.entries(rankingServicos);

ranking.sort(function(a, b){

    return b[1] - a[1];

});

ranking.slice(0,3).forEach(function(item){

    lista.innerHTML +=
    "<li>🏆 <strong>" + item[0] + "</strong></li>";

});
        }

    });

});
document.getElementById("comprarTempo").onclick = function(){

    window.location.href = "comprar-tempo.html";

};
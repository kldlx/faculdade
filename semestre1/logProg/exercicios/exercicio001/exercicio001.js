alert("Seja bem vindo, digite o numero da questão abaixo");
let questao = parseInt(prompt("Digite o número da questão: "));

switch (questao){

case 1:{let nome = "Kaua";
    alert("Seja bem vindo ao curso de JavaScript "+ nome +"!");
    break;
}

case 2: 
    let nomeEvento = "Campeonato de Robótica";
    let data = "12 a 15 de março";
    let local = "CICB - Centro Internacional de Convenções do Brasil";

    alert(" Evento: " + nomeEvento + "\n Data: " + data + "\n Local: " + local + "\n");
    break;


case 3: 
    let nome = "Kauã";
    let idade = "17 anos";
    let profissao = "Aspirante a Dev Junior / Ex Feirante";

    alert("| Nome: " + nome + "\n| Idade: " + idade + "\n| Profissão: " + profissao);
    break;


case 4: 
    
   break;

case 5: 
    alert("========================= \n         SISTEMA DE CADASTRO \n ========================= \n");
    break;

case 6: 
    let temp = 24;
    if(temp >= 25){
        alert(" Temperatura: " + temp + "°C\n Clima: Quente ");
    } else {
        alert(" Temperatura: " + temp + "°C\n Clima: Frio ");
    } break;

case 7: 
    let horas = 12;
    let minutos = 34;
    let segundos = 12;

    alert("Hora atual: " + horas + ":" + minutos + ":" + segundos);
    break;

case 8: 
    for(let i = 5; i >= 1; i--){
        alert("Iniciando em: \n"+ i );
    } break;


case 9: 
    let primeiro = "Kauã";
    let segundo = "Alexandre";
    let terceiro = "Ryan"; 

    alert("Ranking: \n 1° - " + primeiro + "\n 2° - " + segundo + "\n 3° - " + terceiro );
    break;


case 10:{
    let frases = ["A vida é uma canção infantil" , "Nunca é tarde para recomeçar!" , "Vai Corinthians!"];

    let fraseEscolhida = frases[Math.floor(Math.random() * frases.length)];

    alert("Frase do dia: " + fraseEscolhida);
    } break;


case 11:
    let dia1 = "Segunda-Feira";
    let dia2 = "Terça-Feira";
    let dia3 = "Quarta-Feira";
    let dia4 = "Quinta-Feira";
    let dia5 = "Sexta-Feira";
    
    alert(dia1 + " | " + dia2 + " | "+ dia3 + " | " + dia4 + " | "+ dia5 );
    break;

case 12:
    let p1 = "Hambúrguer";
    let p2 = "Pizza";
    let p3 = "Suco";

    alert("Cardápio: \n1. "+ p1 + " - R$15,00\n2. "+ p2 + " - R$25,00\n3. "+ p3 + " - R$5,00");
    break;

case 13: {
    let n1 = 7.5, n2 = 8.4, n3 = 7.8;
    let resultado;

    resultado = (n1 + n2 + n3) / 3;
    alert("Nota 1: " + n1 +"\nNota 2: "+ n2 + "\nNota 3: "+ n3 + "\nMédia Final:  " + resultado .toFixed(1));
    break;

}

case 14: 
    let fraseMotivacional = "O sucesso é a soma de pequenos esforços repetidos dia após dia";

    alert(fraseMotivacional);
    break;

case 15:
    let numeroAleatorio =  Math.floor(Math.random() * 100) + 1;
    alert("Numero Aleatório: " + numeroAleatorio);
    break;

case 16:
    for(let i = 1 ; i <= 10; i++){
    console.log(5 +" X " + i + " = " + 5 * i);
    } break;

case 17:
    let salario = 20000;
    let aumento = 20/100 ;
    let novoSalario = salario + (salario * aumento);

    alert("Salário atual: " + salario + "\nAumento: " + aumento + "\nNovo Salário: "+ novoSalario);
    break;

case 18: 
    alert("------------------------------");
    break;

case 19:{
    let idade = 17;

    if(idade >= 16){
        alert("Parabéns, você já tem idade para votar :)");
    } else{
        alert("Você ainda não tem idade pra votar :(");
    } break;
}
case 20:{
    let produtos = 100;
    let compras = 20;
    let estoque = produtos - compras;

    alert("Estoque inicial: " + produtos + "\nNúmero de compras: " + compras + "\nEstoque atualizado: " + estoque);
}
}


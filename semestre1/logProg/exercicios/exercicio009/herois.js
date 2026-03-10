const prompt = require ('prompt-sync')();

let herois = ['Homem de Ferro', 'Capitao America', 'Hulk', 'Homem Aranha', 'Thor']// Array com os heróis

const sorteado = Math.floor(Math.random() * herois.length);//Variavel para sortear um heroi do array, math floor serve para arredondar o numero enquanto o math random vai sortear um número do indice de acordo com o tamanho o array, por isso o * herois.length
const secreto = herois[sorteado].toLowerCase();// Secreto vai pegar os herois do array e transformar a resposta do usuario em minusculo, facilitando a resposividade, por isso o toLowerCase

let tentativas = 0;// Variável de tentativas, começando do zero, no decorrer de tentativas do usuário ela vai aumentando
let acertou = false;// Variável acertou, começando como boolean false, no decorrer do código, se o usuário acertar, ela se tona true e o programa se encerra

console.log("Jogo de advinhação de Heróis\n");
console.log("Tente adivinhar qual herói\n");
console.log("Heróis possíveis: " + herois.join(" | ")) //.join serve pra transformar um array em string, seguido do caracter que ira realizar a separação dos itens .join(", - ")

while(!acertou){// While, pois enquanto a variavel acertou não for diferente de false, o programa continuará rodando até o herói for acertado
    let chute = prompt("Advinhe o herói sorteado: ").toLowerCase();// Variável para armazernar o chute do usuário e tranforma-lo em minusculas
    tentativas++; // Comando utilizado para contar a quantidade de tentativas realizadas pelo usuário funciona como se fosse um atalho para tentativas = tentativas + 1

    if(chute === secreto){ // Se o chute for igual o herói sorteado pelo sistema, o programa imprime uma mensagem de acerto, com o nome do herói que foi sorteado em letra maiúcula pra dar ênfase, e o valor da variável chute, se altera pra true, assim encerrando o programa
        console.log(`Parabéns, você acertou, o herói era ${secreto.toUpperCase()}`);
        acertou = true;
    } else{// Se o chute não for igual ao nome do herói sorteado, o programa continua rodando desde o inicio do loop while, que não altera o valor da variável chute, que continua sendo FALSE
        console.log("Você errou, tente novamente!");
    }
}

console.log(`Você precisou de ${tentativas} tentativa(s) para acertar o herói`);;//Aqui acessamos a variavel tentativas para mostrar ao usuário o número de tentativas que por ele foram realizadas


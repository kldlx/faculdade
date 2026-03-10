let  idade, altura, peso;

idade = 17;
altura = 1.86;
peso = 100;

const nome = "Kauã";
const time = "Corinthians";

console.log("Seja bem vindo ", nome);

if(idade >=18){
    console.log("Você tem ", idade, "anos de idade, parabéns, você é maior de idade!");
} else {
    console.log("Você tem ", idade, "anos de idade, infelizmente você não é maior de idade!");
} 

if(altura >= 1.80){
    console.log("Você mede ", altura, "metros de altura, você é alto em!");
} else{
    console.log("Você mede ", altura, "metros de altura, você é baixinho!");
}

if(peso >= 90){
    console.log("Você pesa ", peso, "KG, você está gordinho!");
} else {
    "Você pesa ", peso, "KG, você está magrinho!";
};

console.log("E por final, você torce pro ", time, "o melhor time do mundo!\n\n");

console.log("Agora vamos criar um programa que calcule o dobro de um número!");

let numero = 3;
let resultado = numero * 2;

console.log("O dobro de", numero, "é igual a: ", resultado,"\n\n");

console.log("Agora vamos criar um programa pra verificar se um número é par ou ímpar!");

let num = 10;
let result;

if(num % 2 === 0){
    console.log(num, "é par!");
} else {
    console.log(num, "é ímpar!");
}
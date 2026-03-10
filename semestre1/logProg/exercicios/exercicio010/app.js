import promptSync from 'prompt-sync';
const prompt =  promptSync();
import{dobrar, quadrado, parImpar} from './matematica.js';
import{cont} from './textoUtil.js';
import produto from './product.js';
import funcionario from './funcionario.js';
import aluno from './aluno.js';

//Importações das outras partes do código

let values = [8]; //Definindo o valor que nós vamos utilizar para exemplo na função 8 = a + códigos das funções matematica.js

console.log('\nFunções básicas: Dobrar, Quadrado, Par ou Ímpar\n');

values.forEach(a =>{
    console.log(`Número: ${a}`);
    console.log(`Dobrar: ${dobrar(a)}`);
    console.log(`Quadrado: ${quadrado(a)}`);
    console.log(`Par ou Ímpar: ${parImpar(a)}`);
});

console.log('\nContador de palavras e letras em uma frase\n');

let frase = prompt("Digite uma frase: "); //Prompt pra frase do usuário
cont(frase); //Função pra contar as letras e palavras da frase

console.log('\nCálculo do desconto de produtos\n');

const produto1 = new produto('Coca Cola', 10.00);
const produto2 = new produto('Red Bull', 12.00);
const produto3 = new produto('Pinga 51', 5.00);
//Criação de produtos e definição de atributos

console.log(`\nPreço da ${produto1.nome} com 10% de desconto: ${produto1.desconto(10).toFixed(2)}`);
console.log(`Preço do ${produto2.nome} com 15% de desconto: ${produto2.desconto(15).toFixed(2)}`);
console.log(`Preço da ${produto3.nome} com 5% de desconto: ${produto3.desconto(5).toFixed(2)}`);
//Saída no console dizendo o preço definido de cada produto e mostrando o valor final com desconto.toFixed(2);

console.log('\nCálculo do aumento de salário\n');

const funcionario1 = new funcionario ('Anoca', 'Gerente', 10000);
const funcionario2 = new funcionario ('Kauã', 'Supervisor', 5000);
const funcionario3 = new funcionario ('Rafael', 'Operador', 2500);
const funcionario4 = new funcionario ('Arthur', 'Estagiário', 1000);
//Criação de novos objetos funcionarios e definição de seus respectivos atributos

console.log(`O novo salário do(a) ${funcionario1.nome} é de: R$ ${funcionario1.calculoAumento()} e teve um aumento de 15%`);
console.log(`O novo salário do(a) ${funcionario2.nome} é de: R$ ${funcionario2.calculoAumento()} e teve um aumento de 10%`);
console.log(`O novo salário do(a) ${funcionario3.nome} é de: R$ ${funcionario3.calculoAumento()} e teve um aumento de 5%`);
console.log(`O novo salário do(a) ${funcionario4.nome} é de: R$ ${funcionario4.calculoAumento()} e teve um aumento de 0%`);
//Saída no console, nome do funcionario e cálculo do novo salário com o aumento e o valor em % do aumento

console.log('\nCalculo da nota média e da aprovação de alunos\n');

const aluno1 = new aluno ('Ana Julia', 10, 9);
const aluno2 = new aluno ('Ana Clara', 8, 8);
const aluno3 = new aluno ('Kauã', 9, 7);
const aluno4 = new aluno ('Arthur', 5, 6);
//Criação de objetos alunos e a definição de seus respectivos atributos

console.log(`Nome: ${aluno1.nome} | Média: ${aluno1.media()} - ${aluno1.aprovado()}`);
console.log(`Nome: ${aluno2.nome} | Média: ${aluno2.media()} - ${aluno2.aprovado()}`);
console.log(`Nome: ${aluno3.nome} | Média: ${aluno3.media()} - ${aluno3.aprovado()}`);
console.log(`Nome: ${aluno4.nome} | Média: ${aluno4.media()} - ${aluno4.aprovado()}`);
//Saída no console, nome do aluno, sua respectiva média, e seu resultado final
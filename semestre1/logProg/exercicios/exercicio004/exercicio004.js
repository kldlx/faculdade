const prompt = require("prompt-sync")();

let questao = parseInt(prompt("Digite o número de uma questão: "));

switch (questao) {
  case 1:
    {
      console.log(
        "Neste exercício, vamos receber um número, e verificar se ele é positivo, negativo, ou nulo."
      );

      let num = parseFloat(prompt("Digite um número: "));
      if (num == 0) {
        console.log(num + " é nulo!");
      } else if (num > 0) {
        console.log(num + " é positivo!");
      } else if (num < 0) {
        console.log(num + " é negativo!");
      }
    }
    break;

  case 2:
    {
      console.log("Neste exercício, vamos imprimir o Olá, Mundo! 5 vezes!");

      for (let i = 1; i <= 5; i++) {
        console.log(i + ". Olá, mundo!");
      }
    }
    break;

  case 3:
    {
      console.log(
        "Neste exercício, vamos solicitar a idade do usuário e exibir uma mensagem informando se ele pode votar ou não"
      );

      let idade = parseInt(prompt("Digite sua idade: "));
      if (idade >= 16) {
        console.log("Parabéns, você já tem o direito de votar!");
      } else {
        console.log("Infelizmente você ainda não pode votar :(");
      }
    }
    break;

  case 4:
    {
      console.log(
        "Neste exercício, vamos receber uma nota de 0 à 10 de uma prova, e avaliar se ela foi execelente, boa, regular ou ruim"
      );

      let nota = parseFloat(prompt("Digite a nota: "));

      if (nota > 10) {
        console.log("Nota inválida!");
      } else if (nota >= 9) {
        console.log(
          "Parabéns, você tirou " + nota + ", sua nota foi excelente!"
        );
      } else if (nota >= 7 && nota < 9) {
        console.log("Parabéns, você tirou " + nota + ", sua nota foi boa!");
      } else if (nota >= 5 && nota < 7) {
        console.log("Você tirou " + nota + ", sua nota foi regular!");
      } else if (nota < 5) {
        console.log("Reprovou, você tirou " + nota + ", sua nota foi ruim!");
      }
    }
    break;

  case 5:
    {
      console.log(
        "Neste exercício, vamos solicitar um número ao usuário e apresentar a tabuada do mesmo!"
      );

      let num = parseFloat(prompt("Digite um número: "));

      for (let i = 1; i <= 10; i++) {
        console.log(num + " X " + i + " = " + num * i);
      }
    }
    break;

  case 6:
    {
      console.log(
        "Neste exercício, vamos solicitar a idade do usuário, ver se ele é de maior e se possui CNH"
      );

      let idade = parseInt(prompt("Digite a sua idade: "));
      let cnh = parseInt(prompt("Você possui CNH?\n 1. Sim\n 2. Não\n\n"));

      if (idade >= 18 && cnh == 1) {
        console.log("Você é maior de idade e possui CNH, você já pode dirigir");
      } else if (idade >= 18 && cnh == 2) {
        console.log(
          "Você é maior de idade, porém ainda não tirou a CNH, você não pode dirigir"
        );
      } else if (idade < 18) {
        console.log(
          "Você não é maior de idade, logo, não possui CNH, logo, não pode dirigir"
        );
      }
    }
    break;

  case 7:
    {
      console.log(
        "Neste exercício, vamos solicitar ao usuário dois números e fazer a soma deles."
      );

      let num1, num2, resultado;

      num1 = parseFloat(prompt("Digite um número: "));
      num2 = parseFloat(prompt("Digite outro número: "));
      resultado = num1 + num2;

      console.log("A soma dos números é: " + resultado);
    }
    break;

  case 8:
    {
      console.log(
        "Neste exercício, vamos criar uma função pra calcular a média de 3 números."
      );

      let num1, num2, num3;

      num1 = parseFloat(prompt("Digite um número: "));
      num2 = parseFloat(prompt("Digite outro número: "));
      num3 = parseFloat(prompt("Digite outro número: "));

      function calcularMedia(media) {
        return ((num1 + num2 + num3) / 3).toFixed(1);
      }

      console.log(calcularMedia("Resultado: "));
    }
    break;

  case 9:
    {
      console.log(
        "Neste exercício, vamos criar uma função que determina true para par e false para ímpar"
      );

      let num = parseInt(prompt("Digite um número: "));

      function ehPar(numero) {
        return num % 2 === 0;
      }
      console.log(ehPar(num));
    }
    break;

  case 10:
    {
      console.log(
        "Neste exercício, vamos armazenar 5 nomes dentro de um array e exibilos no console com o loop for"
      );

      let nomes = ["Kauã", "Alexandre", "Ryan", "Carlos", "Matheus"];

      for (let i = 0; i <= 4; i++) {
        console.log(nomes[i]);
      }
    }
    break;

  case 11:
    {
      console.log("Neste exercício, vamos manipular arrays");

      //Principais comandos: push (adiciona no final), unshift(adiciona no início), pop(remove do final), shift(remove do início)

      let numeros = [1, 2, 3, 4, 5];

      console.log(numeros);

      numeros.push(6);
      numeros.shift();

      console.log(numeros);
    }
    break;

  case 12:
    {
      console.log("Neste exercício, vamos criar um objeto");

      let carro = {
        marca: "Honda",
        modelo: "Civic G10",
        ano: "2022",
        velocidadeMaxima: "300KM/H",
      };

      console.log(
        carro.marca +
          "\n" +
          carro.modelo +
          "\n" +
          carro.ano +
          "\n" +
          carro.velocidadeMaxima
      );
    }
    break;

  case 13:
    {
      console.log("Neste exercício, vamos interagir com arrays");

      let numeros = [10, 20, 30, 40, 50];

      numeros.forEach(function (num) {
        console.log(num * 2);
      });
    }
    break;

  case 14:
    {
      console.log("Neste exercício, vamos interagir com um array complexo");

      let aluno = {
        nome: "Kauã",
        idade: 17,
        curso: "ANÁLISE E DESENVOLVIMENTO DE SISTEMAS",
      };

      for (let propriedade in aluno) {
        console.log(propriedade + ": " + aluno[propriedade]);
      }
    }
    break;

  case 15:
    {
      console.log("Neste exercício, vamos fazer um programa completo.");

      let nome, idade, n1, n2, n3;

      nome = prompt("Digite seu nome: ");
      idade = parseInt(prompt("Digite sua idade: "));
      n1 = parseFloat(prompt("Digite a nota 1: "));
      n2 = parseFloat(prompt("Digite a nota 2: "));
      n3 = parseFloat(prompt("Digite a nota 3: "));

      function mediaTotal(media) {
        return (n1 + n2 + n3) / 3;
      }

      let media = mediaTotal(n1, n2, n3);

      if (media >= 7) {
        console.log(
          "Parabéns " +
            nome +
            " você obteve uma média de " +
            media.toFixed(1) +
            " pontos e foi aprovado!"
        );
      } else {
        console.log(nome + ", você obteve uma média de " + media.toFixed(1) + " pontos e foi reprovado");
      }
    }
    break;

  default:
    console.log("Operação inválida");
}

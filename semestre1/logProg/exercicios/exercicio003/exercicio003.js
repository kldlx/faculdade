alert("Exercício 03");
let questao = parseInt(prompt("Digite o número da questão: "));

switch (questao) {
  case 1: {
    alert(
      "Neste exercício vamos armazenar o nome do usuário e imprimir uma mensagem dependendo do período do dia!"
    );
    let nome = prompt("Digite seu nome: ");
    let periodo = parseInt(
      prompt("Selecione um período: \n 1 - Manhã \n 2 - Tarde\n 3 - Noite")
    );

    switch (periodo) {
      case 1:
        alert("Bom dia " + nome + "! você está no período da manhã!");
        break;

      case 2:
        alert("Boa tarde " + nome + "! você está no período da tarde!");
        break;

      case 3:
        alert("Boa noite " + nome + "! você está no período da noite!");
        break;
    }
    break;
  }

  case 2: {
    alert(
      "Neste exercício, vamos armazenar 2 números e realizar a soma deles."
    );
    let num1, num2, resultado;

    num1 = parseInt(prompt("Digite um número: "));
    num2 = parseInt(prompt("Digite outro número: "));
    resultado = num1 + num2;

    alert("Resultado: " + resultado);
    break;
  }

  case 3: {
    alert("Neste exercício vamos fazer um cálculo da média de 3 notas.");

    let n1, n2, n3, resultado;
    n1 = parseFloat(prompt("Digite a nota da primeira prova: "));
    n2 = parseFloat(prompt("Digite a nota da segunda prova: "));
    n3 = parseFloat(prompt("Digite a nota da terceira prova: "));
    resultado = (n1 + n2 + n3) / 3;
    alert("Média: " + resultado.toFixed(1));
    break;
  }

  case 4: {
    alert(
      "Neste exercício, vamos armazenar a idade do usuário, e converte-lá ao número de dias vividos na Terra."
    );

    let idade, dias;
    idade = parseInt(prompt("Digite sua idade: "));
    dias = idade * 365;
    alert(
      "Você possui " +
        idade +
        " anos de idade, até o seu último aniversário, você viveu exatamente " +
        dias +
        " dias no planeta Terra."
    );

    break;
  }

  case 5:
    {
      alert(
        "Neste exercício, vamos armazenar o valor da base e da altura de um retângulo e calcular a área da forma geométrica."
      );

      let base, altura, area;
      base = parseInt(prompt("Digite o valor da base: "));
      altura = parseInt(prompt("Digite o valor da altura: "));

      if (base == altura) {
        alert(
          "As medidas selecionados pelo usuário são de um quadrado, por favor, altere os valores!"
        );
      } else {
        area = base * altura;
        alert("Área: " + area);
      }
    }
    break;

  case 6:
    {
      alert(
        "Neste exércício vamos calcular o valor do desconto de um produto."
      );
      let preço, desconto, preçoFinal;

      preço = parseFloat(prompt("Digite o valor do produto: "));
      desconto = parseInt(
        prompt("Digite o valor percentual que deseja de desconto: ")
      );

      if (desconto >= 30) {
        alert("Ai não dá né amigão, eu também tenho que ter meu lucro");
      } else {
        alert("Desconto: " + desconto + "%");
      }

      preçoFinal = (desconto / 100) * preço;
      preçoFinal = preço - preçoFinal;
      alert("Valor final: " + preçoFinal);
    }
    break;

  case 7:
    {
      alert("Neste exercício vamos converter graus C° para F°.");

      let celsius, fahrenheit;
      graus = parseInt(prompt("Digite a temperatura à ser convertida: "));
      fahrenheit = graus * 1.8 + 32;

      alert(celsius + "graus C° em Fahrenheit é igual à: " + fahrenheit);
    }
    break;

  case 8:
    {
      alert("Neste exercício, vamos converter minutos em horas.");

      let minutos, horas;
      minutos = parseInt(prompt("Digite os minutos: "));
      horas = minutos / 60;

      alert(
        "Se possuímos " +
          minutos +
          " minutos, logo, temos um período de " +
          horas.toFixed(2) +
          " horas"
      );
    }
    break;

  case 9:
    {
      alert(
        "Neste exercício, vamos receber um valor de um produto e aplicar um aumento percentual."
      );

      let valor, acrescimo;
      valor = parseInt(prompt("Digite o valor do produto: "));
      acrescimo = (10 / 100) * valor + valor;
      alert(
        "O frete custa 10% do valor do produto, o valor final é igual à: " +
          acrescimo +
          "R$"
      );
    }
    break;

  case 10: {
    alert("Neste exercício, vamos calcular o valor do troco de uma compra");

    let valor, pagamento, troco;
    pagamento = parseFloat(prompt("Digite qual o valor pago: "));
    valor = parseFloat(prompt("Digite o valor do produto: "));
    if (pagamento < valor) {
      alert("Me paga o resto do valor!");
    } else {
      troco = pagamento - valor;
      alert("Seu troco é de: " + troco + "R$");
    }
    break;
  }

  case 11:
    {
      alert("Neste exercício vamos verificar se um número é par ou ímpar.");
      let num = parseInt(prompt("Digite um número: "));

      if (num % 2 == 0) {
        alert("Este número é par!");
      } else {
        alert("Este número é ímpar!");
      }
    }
    break;

  case 12:
    {
      alert("Neste exercício, vamos verificar qual número é maior.");
      let num1, num2;
      num1 = parseInt(prompt("Digite um número: "));
      num2 = parseInt(prompt("Digite outro número: "));

      if (num1 > num2) {
        alert("O número " + num1 + " é maior que o número " + num2);
      } else {
        alert("O número " + num1 + " é menor que o número " + num2);
      }
    }
    break;

  case 13:
    {
      alert(
        "Neste exercício, vamos comparar 3 números e ver qual o maior entre eles"
      );

      let num1, num2, num3;
      num1 = parseInt(prompt("Digite um número: "));
      num2 = parseInt(prompt("Digite outro número: "));
      num3 = parseInt(prompt("Digite outro número: "));

      if (num1 > num2 && num1 > num3) {
        alert(num1 + " é maior que " + num2 + " e " + num3);
      } else if (num2 > num1 && num2 > num3) {
        alert(num2 + " é maior que " + num1 + " e " + num3);
      } else if (num3 > num1 && num3 > num2) {
        alert(num3 + " é maior que " + num1 + " e " + num2);
      } else {
        alert("Os números são iguais ou há valores repetidos.");
      }
    }
    break;

  case 14:
    {
      alert(
        "Neste exercício, vamos pedir a idade do usuário e informar se ele é uma criança, adolescente, ou adulto."
      );

      let idade = parseInt(prompt("Digite sua idade: "));

      if (idade >= 18) {
        alert("Você possui " + idade + " anos de idade, você já é um adulto!");
      } else if (idade <= 12) {
        alert(
          "Você possui " + idade + " anos de idade, você ainda é uma criança!"
        );
      } else if (idade > 12 < 18) {
        alert(
          "Você possui " + idade + " anos de idade, você já é um adolescente!"
        );
      } else {
        alert("Expressão inválida!");
      }
    }
    break;

  case 15:
    {
      alert(
        "Neste exercício vamos calcular a nota média de um aluno e saber se ele foi aprovado ou reprovado."
      );

      let n1, n2, resultado;

      n1 = parseFloat(prompt("Digite a nota da primeira prova: "));
      n2 = parseFloat(prompt("Digite a nota da segunda prova: "));
      resultado = (n1 + n2) / 2;

      if (resultado >= 7) {
        alert(
          "Parabéns, você obteve média de " +
            resultado +
            " pontos e foi aprovado!"
        );
      } else {
        alert(
          "Infelizmente, você obteve a média de " +
            resultado +
            " pontos e foi reprovado!"
        );
      }
    }
    break;

  case 16: {
    alert("");
  }

  case 17:
    {
      alert(
        "Neste exercício, vamos verificar se a senha do usuário é a correta!"
      );

      let senha = 1234;
      let login = prompt("Confirme a senha: ");

      if (senha == login) {
        alert("Você acertou a senha!");
      } else {
        alert("Senha incorreta!");
      }
    }
    break;

  case 18:
    {
      alert(
        "Neste exercício, vamos determinar se um triângulo é equilátero, isósceles ou escaleno"
      );
    }
    let l1, l2, l3;
    l1 = parseInt(prompt("Digite o valor da base do triângulo: "));
    l2 = parseInt(prompt("Digite o valor de um lado do triângulo: "));
    l3 = parseInt(prompt("Digite o valor do outro lado do triângulo: "));

    if (l1 == l2 && l2 == l3) {
      alert("Este triângulo é equilátero, e possui três lados iguais");
    } else if (l1 != l2 && l2 != l3) {
      alert("Este triângulo é escaleno e possui três lados diferentes");
    } else if (l2 == l3) {
      alert("Este triângulo é isósceles, possui dois lados com a mesma medida");
    }
    break;

  case 19:
    {
      alert(
        "Neste exercício, vamos determinar se o voto de um usuário é obrigatório, facultativo, ou proibido, de acordo com sua idade"
      );

      let idade = parseInt(prompt("Digite a sua idade: "));

      if (idade >= 18) {
        alert(
          "Você possui " + idade + " anos de idade, seu voto é obrigatório."
        );
      } else if (idade <= 15) {
        alert("Você possui " + idade + " anos de idade, seu voto é proibido.");
      } else {
        alert(
          "Você possui " + idade + " anos de idade, seu voto é facultativo."
        );
      }
    }
    break;

  case 20:
    {
      alert(
        "Neste exercício, vamos aplicar um valor de frete grátis em compras acima de 100R$"
      );

      let preco, frete;

      preco = parseFloat(prompt("Digite o valor de um produto: "));
      frete = (10 / 100) * preco + preco;

      if (preco >= 100) {
        alert(
          "Você recebeu o frete grátis, o valor final da compra é de: " +
            preco +
            "R$"
        );
      } else {
        alert(
          "O valor final da compra é de: " +
            frete +
            "R$, o frete custa 10% do valor da compra!"
        );
      }
    }
    break;

  case 21:
    {
      alert("Neste exercício, vamos fazer uma contagem de 1 à 10");

      for (let i = 1; i <= 10; i++) {
        alert(i);
      }
    }
    break;

  case 22:
    {
      alert("Neste exercício, vamos fazer uma contagem regressiva de 10 à 1");

      for (let i = 10; i >= 1; i--) {
        alert(i);
      }
    }
    break;

  case 23:
    {
      alert("Neste exercício, vamos fazer somar os números pares de 1 a 100.");
        let pares = "Números pares de 1 a 100 \n"
      for (let i = 2; i <= 100; i+= 2) {
        pares += i + " \n"
      } alert(pares);
    }
    break;

  case 24:
    {
      alert(
        "Neste exercício, vamos exibir uma tabuada de um determinado número: "
      );
      let num = parseFloat(prompt("Digite um número: "));

      let tabuada = "Tabuada do " + num + ":\n";

      for (let i = 1; i <= 10; i++) {
        tabuada += num + " X " + i + " = " + num * i + "\n";
      }
      alert(tabuada);
    }
    break;

  case 25: {
    alert("Neste exercício, vamos exibir números impares de 1 á 50");
    let impares = "Números ímpares de 1 á 25\n"
    for (let i = 1; i <= 25; i += 2) {
       impares += i + " \n"
    } alert(impares);
    break;
  }

  case 26:{
    alert("Neste exercício, vamos exibir os múltiplos de 5 até 100\n");
    let tabuada = "Múltiplos de 5";
    for(let i = 1; i <=20; i++){
        tabuada += 5 + " X " + i + " = " + 5*i + "\n";
    } alert(tabuada);
  } break;

  case 27: {
    alert("Neste exercício, vamos calcular o fatorial de um número fornecido pelo usuário")
    let num = parseInt(prompt("Digite um número: "))
    let fatorial = num + "!\n"

    for(let i = num; i >= 1; i--){
        fatorial += num + " X " + i + " = " + num*i + "\n";
    } alert(fatorial)
  } break;
  default:
    alert("Operação inválida!");
}

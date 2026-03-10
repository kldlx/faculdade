const prompt = require ('prompt-sync')();

let questao = parseInt(prompt("Digite o número da questão: "));

switch(questao){
    case 1:{

         // 1. Lista de compras com forEach 

        const produtos = ["Arroz", "Feijão", "Ovo", "Carne", "Frango"];

        produtos.forEach(function(produtos){
            console.log(produtos);
        });  
    } break;

    case 2:{

        // 2. Nomes de Funcionários em maiúsculas com map 

        const nomes = ["Kauã", "João", "Alexandre", "Ryan", "Eduardo"];

        const maiusculas = nomes.map(nomes => nomes.toUpperCase());
              maiusculas.forEach(function(maiusculas){
              console.log(maiusculas);
    });
    } break;

    case 3:{

        // 3. Filtrando alunos aprovados com filter

        const notas = [5, 6, 7, 8, 9, 10, 5, 3];

        const aprovados = notas.filter(notas => notas >= 7);
        aprovados.forEach(function(aprovados){
            console.log("Parabéns, você tirou " + aprovados + " e foi aprovado!");
        });
    } break;

    case 4:{
        const vendas = [100, 200, 150, 350, 699.90];
        let totalVendas = 0;
        let totalComissao = 0;
        

        
        vendas.forEach(function(valor){
            totalVendas += valor;
            
           });
           console.log("O valor total das vendas foi de: ", totalVendas);

        vendas.forEach(function(valor){
            totalComissao += valor * 0.1
        });
            console.log("O valor da comissão foi de: ", totalComissao);

            let total = totalVendas + totalComissao
            
            console.log("O valor das vendas, mais a comissão de 10% é de: ", total)
        
      
       

    } break;

    case 5: {
        const produtos = [ 
        {nome: "Celular", preço: 1000, emPromocao: true},
        {nome: "Microondas", preço: 600, emPromocao: false},
        {nome: "Geladeira", preço: 4000, emPromocao: true},
        {nome: "Notebook", preço: 2000, emPromocao: false}
    ]

    const emPromocao = produtos.filter(produtos => produtos.emPromocao);
    produtos.forEach(produtos => produtos.emPromocao)
        console.log(emPromocao);
    } break;

    default: console.log("Operação inválida")
  }
